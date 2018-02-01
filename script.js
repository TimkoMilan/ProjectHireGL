$(document).ready(function(){
	$("#button").click(function(){
		var userName =$ ("#userNameInput").val();
		var password =$ ("#inputPassword").val();
		var urllink = '';

		if (userName < 1 || password < 4) {
				$("#error").css('visibility', 'visible');
				$("#error").css('color', 'red');
			}
		else{
				$("#error").css('visibility', 'hidden');


		}




	});

});