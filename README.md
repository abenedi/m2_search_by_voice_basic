# Short Description

Magevoice_SearchByVoiceBasic is a Magento 2 module for searching by voice.

It is a very basic implementation of HTML5 Web Speech API: https://w3c.github.io/speech-api/speechapi.html

iOS does not support this API for now. But there's a "Global Browser Usage" of 61% and a 73% in Spain (source: https://caniuse.com/#feat=speech-recognition )

# Version

	Beta 1.0

# Install

Download the repository and upload the folder&files to yout Magento-Installation root path.

	Resgiter the Module, Upgrade and Compile.
	
		php bin/magento module:enable Magevoice_SearchByVoiceBasic
		
		php bin/magento setup:upgrade
		
		php bin/magento setup:di:compile
    
	Clean Cache and Deploy the statics.
	
		php bin/magento setup:static-content:deploy
		
		php bin/magento cache:clean
		
		php bin/magento cache:flush
		
[Software Requeriments]

	*Magento 2.1.x, 2.2.x
	*SSL installed in Server is mandatory
