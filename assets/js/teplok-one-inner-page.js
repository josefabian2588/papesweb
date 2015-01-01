
$(document).ready(function() {
	
	/** TOOLTIP **/
	$('.tooltips').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	})
	
	/** SMOOTH SCROLL SELECTOR **/
	$('ul.scroll-nav a').smoothScroll({
		easing: 'swing',
		speed: 500
	});
	$('#back-top a').smoothScroll({
		easing: 'swing',
		speed: 500
	});
	

	/** BACK TO TOP **/
	$("#back-top").hide();
	
	/** BACk TO TOP FADE IN **/
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
	});
	
	
	/** CONTACT FORM SELECTOR **/
	$('#CommentForm').bootstrapValidator({
		message: 'This value is not valid',
		fields: {
			YourName: {
				validators: {
					notEmpty: {
						message: 'Se requiere su nombre y no puede estar vacío'
					}
				}
			},
			YourEmail: {
				validators: {
					notEmpty: {
						message: 'Se requiere que la dirección de correo electrónico y no puede estar vacío'
					},
					emailAddress: {
						message: 'No digito una dirección válida de correo electrónico'
					}
				}
			},
			YourWebsite: {
				validators: {
					uri: {
						message: 'No digito un dirección valida '
					}
				}
			},
			YourComment: {
				validators: {
					notEmpty: {
						message: 'Se requiere comentario y no puede estar vacío'
					}
				}
			}
		}
	});
	
	
});
