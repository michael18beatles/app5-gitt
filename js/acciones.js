// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		}); // cierre del tap de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000); //va a vibrar 2 segundos cuando le dé tap a mi screen
		}); //cierre del tap de vibrar
		}, false); //cierre del EventListener
	}); //cierre de la función principal