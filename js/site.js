// collect the inputs
function getNumbers(e) {
  // collect start and stop from user's input
  let start = parseInt(document.querySelector('#startValue').value);
  let stop = parseInt(document.querySelector('#stopValue').value);

  // guard from non-integer inputs
  if (!Number.isInteger(start) || !Number.isInteger(stop) || start >= stop) {
    Swal.fire({
      backdrop: false,
      title: 'Oh no!',
      text: 'You can only use numbers and our start value must be lower than end value.',
    });

    // exit function if we have bad input
    return;
  }

  let numbers = generateNumbers(start, stop);

  e.target.id == 'btn-submit' ? displayValues(numbers) : displayValues(numbers.reverse());
}

// create an array of the numbers
function generateNumbers(start, stop) {
  let numbers = [];

  for (let i = start; i <= stop; i++) {
    numbers.push(i);
  }

  return numbers;
}

//display the list of numbers
function displayValues(numbers) {
  resultDiv = document.getElementById('results');
  resultDiv.innerHTML = '';

  numbers.forEach((number) => {
    let element = document.createElement('div');
    element.classList.add('col');
    element.innerText = number;

    // style even or odd
    number % 2 === 0
      ? element.classList.add('even')
      : element.classList.add('odd');

    resultDiv.appendChild(element);
  });
}