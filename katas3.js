const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function kata1() {
  let counter = [];
  for (i = 1; i <= 25; i++) {
    counter.push(i);
  }
  return counter;
}
console.log(kata1());

function kata2() {
  let counter = [];
  for (i = 25; i > 0; i--) {
    counter.push(i);
  }
  return counter;
}
console.log(kata2());
function kata3() {
  let counter = [];
  for (i = -1; i >= -25; i--) {
    counter.push(i);
  }
  return counter;
}
console.log(kata3());
function kata4() {
  let counter = [];
  for (i = -25; i < 0; i++) {
    counter.push(i);
  }
  return counter;
}
console.log(kata4());

function kata5() {
  let counter = [];
  for (i = 25; i >= -25; i--) {
    if (i % 2 !== 0) {
      counter.push(i);
    }
  }
  return counter;
}
console.log(kata5());

function kata6() {
  let counter = [];
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      counter.push(i);
    }
  }
  return counter;
}
console.log(kata6());

function kata7() {
  let counter = [];
  for (i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
      counter.push(i);
    }
  }
  return counter;
}
console.log(kata7());

function kata8() {
  let counter = [];
  for (i = 100; i > 0; i--) {
    if (i % 3 == 0 || i % 7 == 0) {
      counter.push(i);
    }
  }
  return counter;
}
console.log(kata8());

function kata9() {
  let counter = [];
  for (i = 1; i <= 100; i++) {
    if (i % 2 !== 0 && i % 5 == 0) {
      counter.push(i);
    }
  }
  return counter;
}
console.log(kata9());

function kata10() {
  let counter = [];
  for (i = 0; i < sampleArray.length; i++) {
    counter.push(sampleArray[i]);
  }
  return counter;
}
console.log(kata10());

function kata11() {
  let counter = [];
  for (i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 == 0) {
      counter.push(sampleArray[i]);
    }
  }
  return counter;
}
console.log(kata11());

function kata12() {
  let counter = [];
  for (i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 !== 0) {
      counter.push(sampleArray[i]);
    }
  }
  return counter;
}
console.log(kata12());

function kata13() {
  let counter = [];
  for (i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 8 == 0) {
      counter.push(sampleArray[i]);
    }
  }
  return counter;
}
console.log(kata13());

function kata14() {
  let counter = [];
  for (i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > 0) {
      let arraySquare = sampleArray[i] * sampleArray[i];
      counter.push(arraySquare);
    }
  }
  return counter;
}
console.log(kata14());

function kata15() {
  let sum = 0;
  for (i = 1; i <= 20; i++) {
    sum = i + sum;
  }
  return sum;
}
console.log(kata15());

function kata16() {
  let sum = 0;
  for (i = 0; i < sampleArray.length; i++) {
    sum = sampleArray[i] + sum;
  }
  return sum;
}
console.log(kata16());
function kata17() {
  let minor = 0;
  for (i = 0; i < sampleArray.length; i++) {
    if (i == 0) {
      minor = sampleArray[i];
    }
    if (sampleArray[i] < minor) {
      minor = sampleArray[i];
    }
  }
  return minor;
}
console.log(kata17());

function kata18() {
  let major = 0;
  for (i = 0; i < sampleArray.length; i++) {
    if (i == 0) {
      major = sampleArray[i];
    }
    if (sampleArray[i] > major) {
      major = sampleArray[i];
    }
  }
  return major;
}
console.log(kata18());

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
  // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
  // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
  // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
  // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
  // implemente o código do kata bonus 5 aqui
}
