const frases = [
  { texto: "2 segundos de hojas crujiendo", duracion: 2000, audioId: "audio0" },
  { texto: "3 segundos de golpe de mesa", duracion: 3000, audioId: "audio1" },
  {
    texto: "5 segundos de ramas contra corteza",
    duracion: 5000,
    audioId: "audio2",
  },
  { texto: "11 segundos de txalaparta", duracion: 11000, audioId: "audio3" },
  {
    texto: "12 segundos de falso tañido de campanas",
    duracion: 12000,
    audioId: "audio4",
  },
  {
    texto: "25 segundos de corriente de agua",
    duracion: 25000,
    audioId: "audio5",
  },
  {
    texto: "5 segundos de clara y puri andando",
    duracion: 5000,
    audioId: "audio6",
  },
  { texto: "7 segundos de piedra rascada", duracion: 7000, audioId: "audio7" },
  {
    texto: "7 segundos de mano acariciando el agua",
    duracion: 7000,
    audioId: "audio8",
  },
  { texto: "10 segundos de cascada", duracion: 10000, audioId: "audio9" },
  {
    texto: "7 segundos de pisadas por escalera",
    duracion: 7000,
    audioId: "audio10",
  },
  {
    texto: "8 segundos de desnudar a un árbol",
    duracion: 8000,
    audioId: "audio11",
  },
  {
    texto: "31 segundos de coches en la carretera",
    duracion: 31000,
    audioId: "audio12",
  },
  {
    texto: "3 segundos de manosear la piedra",
    duracion: 3000,
    audioId: "audio13",
  },
  {
    texto: "4 segundos de silbidos y cascada",
    duracion: 4000,
    audioId: "audio14",
  },
  {
    texto: "6 segundos de golpes a neumático",
    duracion: 6000,
    audioId: "audio15",
  },
  {
    texto: "10 segundos de manosear un árbol pinchudo - ¡ay!",
    duracion: 10000,
    audioId: "audio16",
  },
  {
    texto: "13 segundos de piedra contra piedra",
    duracion: 13000,
    audioId: "audio17",
  },
  {
    texto: "13 segundos de tamborileo contra un cristal",
    duracion: 13000,
    audioId: "audio18",
  },
  { texto: "3 segundos de cristal", duracion: 3000, audioId: "audio19" },
  {
    texto:
      "9 segundos de puri jugando como cuando era pequeña a hacer comiditas",
    duracion: 9000,
    audioId: "audio20",
  },
  {
    texto: "4 segundos de abrazo entre botellas",
    duracion: 4000,
    audioId: "audio21",
  },
  {
    texto: "7 segundos de plástico, corteza y telarañas",
    duracion: 7000,
    audioId: "audio22",
  },
];

const poemContainer = document.getElementById("poem");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
let selectedPhrases = [];
let isPaused = false;
let currentIndex = 0;
let currentTimeout;

function createButtons() {
  const buttonList = document.getElementById("buttonList");
  frases.forEach((frase, index) => {
    const button = document.createElement("button");
    button.textContent = frase.texto;
    button.onclick = () => addToPoem(frase);
    buttonList.appendChild(button);
  });
}

function addToPoem(frase) {
  selectedPhrases.push(frase);
  const phraseElement = document.createElement("div");
  phraseElement.textContent = frase.texto;
  poemContainer.appendChild(phraseElement);
}

async function playPoem() {
  isPaused = false;
  for (let i = currentIndex; i < selectedPhrases.length; i++) {
    if (isPaused) break;
    const frase = selectedPhrases[i];
    const audioElement = document.getElementById(frase.audioId);
    audioElement.currentTime = 0;
    audioElement.play();

    currentTimeout = setTimeout(() => {
      audioElement.pause();
      currentIndex = i + 1;
      if (i === selectedPhrases.length - 1) {
        currentIndex = 0;
      }
    }, frase.duracion);

    await new Promise(
      (resolve) => (currentTimeout = setTimeout(resolve, frase.duracion))
    );
  }
}

function pausePoem() {
  isPaused = true;
  clearTimeout(currentTimeout);
  const frase = selectedPhrases[currentIndex];
  if (frase) {
    const audioElement = document.getElementById(frase.audioId);
    audioElement.pause();
  }
}

playButton.onclick = playPoem;
pauseButton.onclick = pausePoem;

createButtons();
