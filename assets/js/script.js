var celebrityInputEl = document.querySelector("#celebrity-input");
var submitNameEl = document.querySelector("#submit-name-button");
var celebrityNameEl = document.querySelector("#celebrity-name");
var ageEl = document.querySelector("#age");
var birthdayEl = document.querySelector("#birthday");
var nationalityEl = document.querySelector("#nationality");
var occupationEl = document.querySelector("#occupation");
var networthEl = document.querySelector("#networth");

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
      occupationEl.textContent = "Occupation: " + data[0].occupation;
      networthEl.textContent = "Networth: " + data[0].networth;
      console.log(data[0].age);
      console.log(data[0].birthday);
    });
}

submitNameEl.addEventListener("click", celebrityAPI);
