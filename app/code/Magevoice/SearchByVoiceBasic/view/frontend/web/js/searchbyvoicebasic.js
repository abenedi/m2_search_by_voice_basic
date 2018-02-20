define([
        'jquery'
    ], function($) {
		
		'use strict';
		
		console.log("SearchByVoiceBasic: Script is loaded!");
		
		var protocol = location.protocol === 'https:' ? 'https' : 'http';
		
		if(iOS() == false)
		{
			console.log("SearchByVoiceBasic: iOS NOT detected!");
			
			if(protocol == 'https')
			{
				console.log("SearchByVoiceBasic: HTTPS Enabled!!");
				
				if($("#"+window.searchbyvoice_search_id).length)
				{
					console.log("SearchByVoiceBasic: Search input found!");
					
					$("#"+window.searchbyvoice_search_id).show();
					
					$(".searchbyvoice-trigger").on('click touch', function () {
						$(".searchbyvoice-trigger").removeClass('searchbyvoice_mic').addClass('searchbyvoice_mic_on');
						$("#"+window.searchbyvoice_search_id).val('');
						$("#"+window.searchbyvoice_search_id).attr("placeholder", "Listening...");
						startDictation();
					});
					
				}
				else
				{
					console.log("SearchByVoiceBasic: Search input NOT found!");
				}
			}
			else
			{
				console.log("SearchByVoiceBasic: HTTPS NOT detected. SearchByVoiceBasic requires HTTPS!!");
			}
		}
		else
		{
			console.log("SearchByVoiceBasic: iOS detected, SearchByVoiceBasic does NOT work in iOS!!");
		}
		

		//--> Functions Segment:
		
		/**
		 * Function which detects and active the searching by voice.
		 * @return none
		 */
		function startDictation()
		{
			if (window.hasOwnProperty('webkitSpeechRecognition')) 
			{
				var recognition = new webkitSpeechRecognition();

				recognition.continuous = true;
				recognition.interimResults = false;

				recognition.lang = window.searchbyvoice_voice_language;
				recognition.start();

				recognition.onresult = function(e) 
				{
					document.getElementById(window.searchbyvoice_search_id).value = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');//e.results[0][0].transcript;
					recognition.stop();
					document.getElementById('search_mini_form').submit();
				};

				recognition.onerror = function(e) {
					recognition.stop();
				}

			}
			else
			{
				console.log('SearchByVoiceBasic: Speech Recognition is not supported in your browser or it has been disabled.');
			}
		}
		
		/**
		 * Detects if the user-device is mobile.
		 * @return bool
		 */
		function isMobileDevice()
		{
			var testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
		  
			if (testExp.test(navigator.userAgent))
				return true;
			else
				return false;
		}
		
		/**
		 * Detects if the user-device is iOS.
		 * @return bool
		 */		
		function iOS() 
		{
			var iDevices = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'];
			var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
			
			if (!!navigator.platform) 
			{
				while (iDevices.length) 
				{
					if (navigator.platform === iDevices.pop())
					{ 
						return true; 
					}
				}
			}

			if(isSafari)
			{
				return true;
			}
			
			return false;
		}		
	
    }(jQuery)
);