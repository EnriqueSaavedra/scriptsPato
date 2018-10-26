(function(window){
	window.app = {
			
		data: {
			login: {
				username: 'abc',
				password: '123'
			},
			consultarBeneficio: {
				run: '18.234.567-9'
			}
		},

		validateLogin: function(){
			if (!$('#aceptarTerminos').prop('checked')){
				$('#errorMsgText').html('Debe aceptar los términos y condiciones.');
				$('#errorMsg').show();
				return false;
			} else if ($('#usuario').val() !== this.data.login.username || $('[name="password"]').val() !== this.data.login.password){
				$('#errorMsgText').html('Su nombre de usuario o contraseña no es válido.');
				$('#errorMsg').show();
				return false;
			} 
			
			return true;			
		},
		
		consultarBeneficio: function(){
			if ($('#runPersona').val() === this.data.consultarBeneficio.run){
				$('#consultado').html('Perez Castro, Manuel Ignacio | RUT: 18.234.567-9 | Fecha de Nacimiento: 25/11/1980');
				$('#errorMsg').hide();
		        $("#consulta").addClass("hide");
		        $("#consultado").removeClass("hide");
		        $("#clearall").removeClass("hide");
			} else {
				$('#errorMsg').show();
			}
		}
	
	};
})(window);