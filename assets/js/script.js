var celebrityInputEl = document.querySelector("#celebrity-input");
var submitNameEl = document.querySelector("#submit-name-button");
var time = dayjs();

$("#presentDay").text(time.format("dddd, MMM D, YYYY"));

function celebrityAPI() {
  var name = celebrityInputEl.value;
  console.log(name);
}

submitNameEl.addEventListener("click", celebrityAPI);
