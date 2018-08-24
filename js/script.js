function calculate() {
  let fahrenheit = document.getElementById("userInput").value;
  let celsius = (fahrenheit - 32) / (9/5);
  let kelvin = celsius + 273;

  celsius = Math.floor(celsius);
  kelvin = Math.floor(kelvin);

  document.getElementById("celsius").innerHTML = celsius;
  document.getElementById("kelvin").innerHTML = kelvin;
}

document.getElementById("calculate").addEventListener('click',calculate);
