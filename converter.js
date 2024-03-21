const inputField = document.getElementById("input-temp");
const fromUnitField = document.getElementById("input-unit");
const toUnitField = document.getElementById("output-unit");
const outputField = document.getElementById("output-temp");
const converterForm = document.getElementById("converter");

function convertTemp(value, fromUnit, toUnit) {
  console.log("convertingg hehe");
  if (value == 3000) {
    return "LF motor 3k, kuhaon dayon, (respect post)";
  }

  if (fromUnit === "c" && toUnit === "f") {
    return (value * 9) / 5 + 32;
  } else if (fromUnit === "c" && toUnit === "k") {
    return value + 273.15;
  } else if (fromUnit === "f" && toUnit === "c") {
    return ((value - 32) * 5) / 9;
  } else if (fromUnit === "f" && toUnit === "k") {
    return ((value + 459.67) * 5) / 9;
  } else if (fromUnit === "k" && toUnit === "c") {
    return value - 273.15;
  } else if (fromUnit === "k" && toUnit === "f") {
    return (value * 9) / 5 - 459.67;
  } else {
    throw new Error("Invalid conversion");
  }
}

converterForm.addEventListener("input", () => {
  const inputValue = parseFloat(inputField.value);
  const fromUnitValue = fromUnitField.value;
  const toUnitValue = toUnitField.value;

  const getTemp = convertTemp(inputValue, fromUnitValue, toUnitValue);

  if (typeof getTemp == "number") {
    outputField.value = Math.round(getTemp * 100) / 100;
  } else {
    outputField.value = getTemp;
  }
});
