#!/bin/bash

#libs/composer/vendor/phpunit/phpunit/phpunit --bootstrap ./libs/composer/vendor/autoload.php --configuration ./Services/PHPUnit/config/PhpUnitConfig.xml --exclude-group needsInstalledILIAS --verbose $@ | tee /tmp/phpunit
#collect data
RESULT=`tail -n1 < /tmp/phpunit`
SPLIT_RESULT=(`echo $RESULT | tr ':' ' '`)
PHP_VERSION=`php -r "echo PHP_MAJOR_VERSION . '_' . PHP_MINOR_VERSION;"`
ILIAS_VERSION=`php -r "require_once 'include/inc.ilias_version.php'; echo ILIAS_VERSION_NUMERIC;"`
JOB_ID=`echo $TRAVIS_JOB_NUMBER`
JOB_URL=`echo $TRAVIS_JOB_WEB_URL`
FAILURE=false
declare -A RESULTS=([Tests]=0 [Assertions]=0 [Errors]=0 [Warnings]=0 [Skipped]=0 [Incomplete]=0);

for TYPE in "${!RESULTS[@]}"; 
	do 
		for PHP_UNIT_RESULT in "${!SPLIT_RESULT[@]}"; 
			do 
				if [ "$TYPE" == "${SPLIT_RESULT[$PHP_UNIT_RESULT]}" ]
					then
						CLEANED=(`echo ${SPLIT_RESULT[$PHP_UNIT_RESULT + 1]} | tr ',.' ' '`)
						RESULTS[$TYPE]=$CLEANED;
				fi
			done 
	done

if [ ${RESULTS[Errors]} > 0 ]
	then
		FAILURE=true
fi

# remove line
#awk -F, '{ if (! ($4=="php_$PHP_VERSION" && $3=="$ILIAS_VERSION")) print $0 }'  phpunit_latest.csv
#write line
echo "$JOB_URL,$JOB_ID,$ILIAS_VERSION,php_$PHP_VERSION,PHP $PHP_VERSION,${RESULTS[Warnings]},${RESULTS[Skipped]},${RESULTS[Incomplete]},${RESULTS[Tests]},${RESULTS[Errors]},$FAILURE";
