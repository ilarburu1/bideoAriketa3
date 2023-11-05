let bideoa = document.getElementById("bideoa");
let jo = document.getElementById("jo");
let eten = document.getElementById("eten");
let oihal1 = document.getElementById("oihala1");
const buffer = oihal1.getContext("2d");
let oihal2 = document.getElementById("oihala2");
let txuribeltza = oihal2.getContext("2d");

let intervalID;

jo.onclick = function () {
  bideoa.play();
};

eten.onclick = function () {
  bideoa.pause();
};

bideoa.addEventListener("play", function () {
  kapturakHasi();
});

bideoa.addEventListener("pause", function () {
  clearInterval(intervalID);
});

function kapturakHasi() {
  intervalID = setInterval(function () {
    buffer.drawImage(bideoa, 0, 0, 160, 120);

    var frame = buffer.getImageData(0, 0, 160, 120);
    var length = frame.data.length / 4;

    for (let i = 0; i < length; i++) {
      let r = frame.data[i * 4 + 0];
      let g = frame.data[i * 4 + 1];
      let b = frame.data[i * 4 + 2];
      zuriBeltz(i, r, g, b, frame.data);
    }

    txuribeltza.putImageData(frame, 0, 0);
  }, 0); // Captura cada segundo (ajusta según tus necesidades)
}

function zuriBeltz(pos, r, g, b, data) {
  var grisa = (r + g + b) / 3;
  data[pos * 4 + 0] = grisa;
  data[pos * 4 + 1] = grisa;
  data[pos * 4 + 2] = grisa;
}
