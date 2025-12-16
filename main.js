const endpoint = "http://192.168.1.9";

function getDapurLed() {
  fetch(endpoint + "/dapur", {method: "GET"}
  ).then(response => response.text()).then(result => {
      if(result == "ON") {
          LedDapur.style.backgroundColor="blue";
          ledDapurImage.src="./led-off.png";
      } else {
          LedDapur.style.backgroundColor="lightblue";
          ledDapurImage.src="./led-on.png";
      }
  });
}

function setDapurLed() {
  fetch(endpoint + "/dapur", {
    method: "POST"
  }).then(response => response.text()).then(() => location.reload());
}

function getKamarLed (){
  fetch(endpoint + "/kamar", {method: "GET"}
  ).then(response => response.text()).then(result => {
      if(result == "ON") {
          LedKamar.style.backgroundColo ="blue";
          ledKamarImage.src="./led-off.png";
      } else {
          LedKamar.style.backgroundColor="lightblue";
          ledKamarImage.src="./led-on.png";
      }
  });
}

function setKamarLed() {
  fetch(endpoint + "/kamar", {
    method: "POST"
  }).then(response => response.text()).then(() => location.reload());
}

function getTamuLed() {
  fetch(endpoint + "/tamu", {method: "GET"}
  ).then(response => response.text()).then(result => {
      if(result == "ON") {
          LedTamu.style.backgroundColor="blue";
          ledTamuImage.src="./led-off.png";
      } else {
          LedTamu.style.backgroundColor="lightblue";
          ledTamuImage.src="./led-on.png";
      }
  });
}

function setTamuLed() {
  fetch(endpoint + "/tamu", {
    method: "POST"
  }).then(response => response.text()).then(() => location.reload());
}

function getToiletLed() {
  fetch(endpoint + "/toilet", {method: "GET"}
  ).then(response => response.text()).then(result => {
      if(result == "ON") {
          LedToilet.style.backgroundColor="blue";
          ledToiletImage.src="./led-off.png";
      } else {
          LedToilet.style.backgroundColor="lightblue";
          ledToiletImage.src="./led-on.png";
      }
  });
}

function setToiletLed() {
  fetch(endpoint + "/toilet", {
    method: "POST"
  }).then(response => response.text()).then(() => location.reload());
}

getDapurLed();
getKamarLed();
getTamuLed();
getToiletLed();