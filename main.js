const endpoint = "http://192.168.1.8";

function setDapurLed() {
  LedDapur.style.backgroundColor="red";
  ledDapurImage.src="./led-on.png";
}

function getKamarLed (){
    fetch(endpoint + "/kamar", {
    method: "GET"
  }).then(response => response.text()).then(result => {
      if(result == "ON") {
          LedKamar.style.backgroundColo ="blue";
          ledKamarImage.src="./led-on.png";
      } else {
          LedKamar.style.backgroundColor="lightblue";
          ledKamarImage.src="./led-off.png";
      }
  });
  
}

function setKamarLed() {
  fetch(endpoint + "/kamar", {
    method: "POST"
  }).then(response => response.text()).then(() => location.reload());
}

function setTamuLed() {
  LedTamu.style.backgroundColor="red";
  ledTamuImage.src="./led-on.png";
}

function setToiletLed() {
  LedToilet.style.backgroundColor="red";
  ledToiletImage.src="./led-on.png";
}

getKamarLed();