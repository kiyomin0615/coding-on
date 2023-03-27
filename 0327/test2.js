function red() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("red");
    }, 1000);
  })
}

function orange() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("orange");
    }, 1000);
  })
}

function yellow() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("yellow");
    }, 1000);
  })
}

function green() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("green");
    }, 1000);
  })
}

function blue() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("blue");
    }, 1000);
  })
}


red()
  .then(function(result) {
    document.body.style.backgroundColor = result;
    return orange();
  })
  .then(function(result) {
    document.body.style.backgroundColor = result;
    return yellow();
  })
  .then(function(result) {
    document.body.style.backgroundColor = result;
    return green();
  })
  .then(function(result) {
    document.body.style.backgroundColor = result;
    return blue();
  });