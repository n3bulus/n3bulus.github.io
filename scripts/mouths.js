// mouths.js
let currentMouthIndex = 1;
let MouthImg = new Image();
MouthImg.src = `assets/mouths/${currentMouthIndex}.png`;

document.getElementById('prevMouth').addEventListener('click', () => {
  changeMouth(-1);
});

document.getElementById('nextMouth').addEventListener('click', () => {
  changeMouth(1);
});

function changeMouth(direction) {
  const newIndex = currentMouthIndex + direction;
  loadMouth(newIndex, direction);
}

function loadMouth(index, direction) {
  if (index < 1) {
    findLastMouth().then(last => {
      currentMouthIndex = last;
      MouthImg.src = `assets/mouths/${last}.png`;
      MouthImg.onload = drawAvatar;
    });
    return;
  }

  const testImg = new Image();
  testImg.src = `assets/mouths/${index}.png`;

  testImg.onload = () => {
    currentMouthIndex = index;
    MouthImg = testImg;
    drawAvatar();
  };

  testImg.onerror = () => {
    if (direction > 0) {
      currentMouthIndex = 1;
      MouthImg.src = `assets/mouths/1.png`;
    } else {
      findLastMouth().then(last => {
        currentMouthIndex = last;
        MouthImg.src = `assets/mouths/${last}.png`;
      });
    }
    MouthImg.onload = drawAvatar;
  };
}

function findLastMouth() {
  return new Promise(resolve => {
    let i = 1;
    function check() {
      const img = new Image();
      img.src = `assets/mouths/${i}.png`;
      img.onload = () => { i++; check(); };
      img.onerror = () => resolve(i - 1);
    }
    check();
  });
}

function getMouthImage() {
  return MouthImg;
}
