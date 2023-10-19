    function tocaSom (seletorAUDIO) {
        const elemento = document.querySELECTOR(seletorAUDIO)

        if (elemento && elemento.localNAMe === 'audio') {
            elemento.play();
        }
        else{
             //alert('elemento não encontrado');
             console.log('elemento não encontrado ou eletor inválido')
        }
        
    }

    const listaDeteclas = document.querySelectorAll('.tecla');

    //para
    for(let contador< listaDeteclas.length; contador++){

            const tecl = listtaDeteclas{contador};
            const instrumento = tecla.classlist[1];
            const idAudio = '#som_${instrumento'; //template tring 

            tecla.onclick = function () {
                tocaSom(idAudio);
            }

            tecla.onkeydown = function (evento) {

                if (evento.code === 'Space' || evento.code === 'enter'){
                    tecla.classlist.add('ativa');
                }

            }

            tecla.onkeyup = function () {
                tecla.classlist.remove('ativa')
            }
            
    }
