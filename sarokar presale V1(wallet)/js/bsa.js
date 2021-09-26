//input changes
const input = document.getElementById('from-input');
const output = document.getElementById('to-input');
const connectbutton = document.getElementById('connect-button');

input.addEventListener('input', updateValueInput);
output.addEventListener('input', updateValueOutput);

function updateValueInput(e) {
  input.value = input.value.replace(/,/g, '.')
  output.value = Math.round(input.value * 15000)
}

function updateValueOutput(e) {
  output.value = output.value.replace(/,/g, '.')
  input.value = output.value / 15000
}
