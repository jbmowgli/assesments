function encodeResistorColors(ohmsString) {
  let ohmsValue = parseFloat(ohmsString.split(' ')[0]);
  if (ohmsString.indexOf('k') !== -1) {
    ohmsValue *= 1000;
  } else if (ohmsString.indexOf('M') !== -1) {
    ohmsValue *= 1000000;
  }
  const exponential = getExponential(ohmsValue);
  const colorOne = numberToColor(ohmsValue.toString()[0]);
  const colorTwo = numberToColor(ohmsValue.toString()[1]);
  const colorThree = numberToColor(exponential);
  return `${colorOne} ${colorTwo} ${colorThree} gold`;
}

function getExponential(number) {
  scientificNotation = number.toExponential(1);
  return parseInt(scientificNotation.split('+')[1]) - 1;
}

function numberToColor(number) {
  switch (parseInt(number)) {
    case 0:
      return 'black';
    case 1:
      return 'brown';
    case 2:
      return 'red';
    case 3:
      return 'orange';
    case 4:
      return 'yellow';
    case 5:
      return 'green';
    case 6:
      return 'blue';
    case 7:
      return 'violet';
    case 8:
      return 'gray';
    case 9:
      return 'white';
    default:
      return '';
  }
}
var test = encodeResistorColors('132M ohms');
console.log(test);
