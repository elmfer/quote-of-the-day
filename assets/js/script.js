var celebrityInputEl = document.querySelector("#celebrity-input");
var submitNameEl = document.querySelector("#submit-name-button");
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
      console.log(data[0].age);
    });
}

submitNameEl.addEventListener("click", celebrityAPI);
