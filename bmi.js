const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const remark = document.querySelector('#remark');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      remark.innerHTML = `<h1>Underweight</h1>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      remark.innerHTML = 'Normal weight';
    } else if (bmi > 24.9) {
      remark.innerHTML = 'Overweight';
    } 
  }
});
