
$(document).ready(function(){

    $('#btnSend').click(function(){
  
        var errores = '';
  
        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
           $('#names').css("border-bottom-color", "#08d9d6")
        } else{
            $('#names').css("border-bottom-color", "#F14B4B")
        }
  
        // Validado Correo ==============================
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        //if( $('#email').val() == '' )//
            errores += '<p>Ingrese un correo válido</p>';
           $('#email').css("border-bottom-color", "#08d9d6")
        } else{
            $('#email').css("border-bottom-color", "#F14B4B")
        }
  
        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#08d9d6")
        } else{
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        }
  
        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
  
            $('body').append(mensajeModal);
        }
  
        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });
  
  });
  