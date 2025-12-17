const endpoint = "https://salzielectro14-default-rtdb.asia-southeast1.firebasedatabase.app/";

function dapurON() {
  fetch("https://salzielectro14-default-rtdb.asia-southeast1.firebasedatabase.app/dapur.json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify("ON")
  });
}

function dapurOFF() {
  fetch("https://salzielectro14-default-rtdb.asia-southeast1.firebasedatabase.app/dapur.json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify("OFF")
  });
}

function getKamarLed (){
  fetch(endpoint + "/kamar", {method: "GET"}
  ).then(response => response.text()).then(result => {
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

function getTamuLed() {
  fetch(endpoint + "/tamu", {method: "GET"}
  ).then(response => response.text()).then(result => {
      if(result == "ON") {
          LedTamu.style.backgroundColor="blue";
          ledTamuImage.src="./led-on.png";
      } else {
          LedTamu.style.backgroundColor="lightblue";
          ledTamuImage.src="./led-off.png";
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
          ledToiletImage.src="./led-on.png";
      } else {
          LedToilet.style.backgroundColor="lightblue";
          ledToiletImage.src="./led-off.png";
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