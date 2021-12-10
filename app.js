const API_KEY = "87650e5ec24bdb9ded86b76556de8268";

const button = document.querySelector(".button");
button.addEventListener("click", setQuery);

fetch(
  "{api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}}"
).then((response) => console.log(response));

// function setQuery(evt) {
//   if (evt.keycode == 13) {
//     getResults(button.value);
//     console.log(button.value);
//   }
// }

// function generateEndpoint(city) {
//     const n
// }

function getResults(query) {
  fetch(
    "api.openweathermap.org/data/2.5/weather?q={birmingham}&appid={87650e5ec24bdb9ded86b76556de8268}"
  )
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

// // //start of other code - ignore for now//
// var button = documents.querySelector(".button");
// var inputValue = document.querySelector(".inputValue");
// var name = document.querySelector(".name");
// var desc = document.querySelector(".desc");
// var temp = document.querySelector(".temp");

// button.addEventListener("click", function () {
//     fetch(
//         'api.openweathermap.org/data/2.5/weather?q='+
//           inputValue.value+
//           '&appid=87650e5ec24bdb9ded86b76556de8268')
//           .then((response) => response.json())
//   .then((data) => {
//     var nameValue = data["name"];
//     var tempValue = data["main"]["temp"];
//     var descValue = data["weather"][0]["description"];

//     name.innerHTML = nameValue;
//     temp.innerHTML = tempValue;
//     desc.innerHTML = descValue;
// });

//   .then((response) => response.json())
//   .then((data) => {
//     var nameValue = data["name"];
//     var tempValue = data["main"]["temp"];
//     var descValue = data["weather"][0]["description"];

//     name.innerHTML = nameValue;
//     temp.innerHTML = tempValue;
//     desc.innerHTML = descValue;
//   });
