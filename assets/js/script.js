var celebrityInputEl = document.querySelector("#celebrity-input");
var submitNameEl = document.querySelector("#submit-name-button");
var celebrityNameEl = document.querySelector("#celebrity-name");
var ageEl = document.querySelector("#age");
var birthdayEl = document.querySelector("#birthday");
var nationalityEl = document.querySelector("#nationality");
var occupationEl = document.querySelector("#occupation");
var networthEl = document.querySelector("#networth");
var celebrityImageEl = document.querySelector("#celebrity-image");

var time = dayjs();
var name;
var APIKey = "oEDDv6v6z7pbtqFgBK1DQQ==U8mDL9ZgMIL4xrIy";

$("#presentDay").text(time.format("dddd, MMM D, YYYY"));

function celebrityAPI() {
  var name = celebrityInputEl.value;
  console.log(name);

  var celebrityURL = `https://api.api-ninjas.com/v1/celebrity?name=${name}`;
  var options = {
    method: "GET",
    headers: { "X-Api-Key": APIKey },
    contentType: "application/json",
  };

  var imageURL = `https://bing-image-search1.p.rapidapi.com/images/search?q=${name}&count=1`;

  var options1 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "efe0cfc5fbmsh69b68adaa19d16ep1ae208jsnc53687b13ad7",
      "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
    },
  };

  fetch(celebrityURL, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Have to access data array and use index numbers to access object. Helps access specific data.
      $("#celebrity-details").removeClass("is-invisible");
      celebrityNameEl.textContent = data[0].name;
      ageEl.textContent = "Age: " + data[0].age;
      birthdayEl.textContent = "Birthday: " + data[0].birthday;
      nationalityEl.textContent = "Nationality: " + data[0].nationality;
      occupationEl.textContent = "Occupation: " + data[0].occupation[1];
      networthEl.textContent = "Networth: " + data[0].net_worth;
      console.log(data[0].age);
      console.log(data[0].birthday);
    });
  //Must create a different fetch method when using multiple query URLs when fetching different APIs.
  fetch(imageURL, options1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //celebrityImageEl.src = data.value[0].thumbnailUrl;
      celebrityImageEl.style.backgroundImage =
      `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(\"${data.value[0].thumbnailUrl}\")`;
    });
}

submitNameEl.addEventListener("click", celebrityAPI);
