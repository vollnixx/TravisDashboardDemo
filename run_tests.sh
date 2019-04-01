#!/bin/bash

#libs/composer/vendor/phpunit/phpunit/phpunit --bootstrap ./libs/composer/vendor/autoload.php --configuration ./Services/PHPUnit/config/PhpUnitConfig.xml --exclude-group needsInstalledILIAS --verbose $@ | tee /tmp/phpunit
STRING=`tail -n1 < /tmp/phpunit`
SPLIT_STRING=(`echo $STRING | tr ':' ' '`)
PHP_VERSION=`php -r "echo PHP_MAJOR_VERSION . '_' . PHP_MINOR_VERSION;"`
ILIAS_VERSION=`php -r "require_once 'include/inc.ilias_version.php'; echo ILIAS_VERSION_NUMERIC;"`
JOB_ID=`echo TRAVIS_JOB_NUMBER`
JOB_URL=`echo TRAVIS_JOB_WEB_URL`
FAILURE=false
declare -A RESULTS=([Tests]=0, [Assertions]=0, [Errors]=0, [Warnings]=0, [Skipped]=0, [Incomplete]=0);

for TYPE in "${!RESULTS[@]}"; 
	do 
		for PHP_UNIT_RESULT in "${!SPLIT_STRING[@]}"; 
			do 
				if [ "$TYPE" == "${SPLIT_STRING[$PHP_UNIT_RESULT]}" ]
					then
						CLEANED=(`echo ${SPLIT_STRING[$PHP_UNIT_RESULT + 1]} | tr ',.' ' '`)
						RESULTS[$TYPE]=$CLEANED;
				fi
			done 
	done

	for TYPE in "${!RESULTS[@]}"; 
	do 
		echo $TYPE: ${RESULTS[$TYPE]};
	done
echo $JOB_ID
echo $ILIAS_VERSION
echo "php_$PHP_VERSION"
echo "PHP $PHP_VERSION"
echo "${RESULTS[Warnings]}"
echo "${RESULTS[Skipped]}"
echo "${RESULTS[Incomplete]}"
echo "${RESULTS[Tests]}"
echo "${RESULTS[Errors]}"
if [ ${RESULTS[Errors]} > 0 ]
then
	FAILURE=true
fi
echo $FAILURE;
# remove line
#awk -F, '{ if (! ($4=="php_$PHP_VERSION" && $3=="$ILIAS_VERSION")) print $0 }'  phpunit_latest.csv