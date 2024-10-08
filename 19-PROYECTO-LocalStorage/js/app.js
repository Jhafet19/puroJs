//variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];
//
formulario.addEventListener("submit", agregarTweet);

document.addEventListener("DOMContentLoaded", () => {
  tweets = JSON.parse(localStorage.getItem("tweets") || []);
  console.log(tweets);
  crearHtml();
});

function agregarTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector("#tweet").value;
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vacio");
    return;
  }
  const tweetObj = {
    id: Date.now(),
    tweet,
  };
  tweets = [...tweets, tweetObj];
  crearHtml();
  formulario.reset();
}

function crearHtml() {
  limpiarHtml();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "X";

      //Eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      }

      const li = document.createElement("li");
      li.innerText = tweet.tweet;
      li.appendChild(btnEliminar)

      listaTweets.appendChild(li);
    });
  }
  sincronizarStorage();
}

function borrarTweet(id) {
tweets=tweets.filter(tweet=>tweet.id!=id) ;
console.log(tweets);
crearHtml()
}

function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));

}

function limpiarHtml() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}

function mostrarError(err) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = err;
  mensajeError.classList.add("error");
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);
  setTimeout(() => {
    mensajeError.remove("error");
  }, 3000);
}
