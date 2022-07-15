function getNumbers() {
  let start = parseInt(document.querySelector("#startValue").value);
  let stop = parseInt(document.querySelector("#stopValue").value);
  let result = "";

  if (Number.isInteger(start) && Number.isInteger(stop)) {
    for (let i = start; i <= stop; i++) {
      result += `${i} `;
    }
  } else {
    result = "Please enter numbers only.";
  }

  document.querySelector("#results").innerHTML = result;
}