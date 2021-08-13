export const rgbToHex = (color) => {
  let hexList = [];
  color.forEach((element) => {
    let first = Math.floor(element / 16);
    let second = element % 16;

    hexList.push(first, second);
  });

  const transform = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  let hex = '#';

  for (let i of hexList) {
    hex += transform[i];
  }

  return hex;
};
