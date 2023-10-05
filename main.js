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

            cont tecl = listtaDeteclas{contador};
            cont instrumento = tecla.classlist[1];
            cont idAudio = '#som_${instrumento'; //template tring 
    }
