// collect the inputs - CONTROLLER
function getNumbers() {
  let start = parseInt(document.querySelector('#startValue').value);
  let stop = parseInt(document.querySelector('#stopValue').value);

  // guard from non-integer inputs
  if (!Number.isInteger(start) || !Number.isInteger(stop)) {
    Swal.fire({
      backdrop: false,
      title: 'Oh no!',
      text: 'You can only use numbers',
    });

    // exit function if we have bad input
    return;
  }

  let numbers = generateNumbers(start, stop);
  displayValues(numbers);
}

// business logic - MODEL
function generateNumbers(start, stop) {
  let numbers = [];

  for (let i = start; i <= stop; i++) {
    numbers.push(i);
  }

  return numbers;
}

//display the list of numbers - VIEW
// - bold the even numbers
function displayValues(numbers) {
  resultDiv = document.getElementById('results');

  numbers.forEach((number, index) => {
    let element = document.createElement('div');
    element.classList.add('col');
    element.innerText = number;

    // bold the evens with bootstrap
    if (index % 2 === 0) {
      element.classList.add('fw-bold');
    }

    resultDiv.appendChild(element);
  });
}
