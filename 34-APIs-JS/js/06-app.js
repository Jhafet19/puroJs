const salida = document.querySelector('#salida');
const micro = document.querySelector('#microfono');
micro.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const reconigtion = new SpeechRecognition();

    reconigtion.start();

    reconigtion.onstart = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando'
    }

    reconigtion.onspeechend = function () {
        salida.textContent = 'Se dejo de grabar'
        reconigtion.stop();
    }

    reconigtion.onresult = function(e){
        console.log("🚀 ~ ejecutarSpeechAPI ~ e:", e.results)
        
    }
}