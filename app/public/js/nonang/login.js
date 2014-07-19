$(document).ready(function() {
	$('[data-action="login"]').click(function() {
		console.log($('[data-form-username]').val())

		var payload = JSON.stringify({
				username: $('[data-form-username]').val(),
				password: $('[data-form-password]').val()
			});

		console.log(payload);

		var loginPromise = $.ajax({
			type: 'POST',
			url: '/login',
			dataType: 'json', 
			contentType: 'application/json',
			data: payload
		});

		loginPromise.promise().then(function(data) {
			console.log(data);
		});
	});
});