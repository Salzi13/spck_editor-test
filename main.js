const endpoint = "http://192.168.1.8";

function setDapurLed() {
  LedDapur.style.backgroundColor="red";
  ledDapurImage.src="./led-on.png";
}

function setKamarLed() {
  fetch(endpoint + "/dapur", {
    method: "POST"
  }).then(response => resonse.text()).then(result => console.log(result))
  
  LedKamar.style.backgroundColor="red";
  ledKamarImage.src="./led-on.png";
}

function setTamuLed() {
  LedTamu.style.backgroundColor="red";
  ledTamuImage.src="./led-on.png";
}

function setToiletLed() {
  LedToilet.style.backgroundColor="red";
  ledToiletImage.src="./led-on.png";
}