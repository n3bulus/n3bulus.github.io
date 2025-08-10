// eyebrows.js
let currentEyebrowIndex = 1;
let EyebrowImg = new Image();
EyebrowImg.src = `assets/eyebrows/${currentEyebrowIndex}.png`;

document.getElementById('prevEyebrow').addEventListener('click', () => {
  changeEyebrow(-1);
});

document.getElementById('nextEyebrow').addEventListener('click', () => {
  changeEyebrow(1);
});

function changeEyebrow(direction) {
  const newIndex = currentEyebrowIndex + direction;
  loadEyebrow(newIndex, direction);
}

function loadEyebrow(index, direction) {
  if (index < 1) {
    findLastEyebrow().then(last => {
      currentEyebrowIndex = last;
      EyebrowImg.src = `assets/eyebrows/${last}.png`;
      EyebrowImg.onload = drawAvatar;
    });
    return;
  }

  const testImg = new Image();
  testImg.src = `assets/eyebrows/${index}.png`;

  testImg.onload = () => {
    currentEyebrowIndex = index;
    EyebrowImg = testImg;
    drawAvatar();
  };

  testImg.onerror = () => {
    if (direction > 0) {
      currentEyebrowIndex = 1;
      EyebrowImg.src = `assets/eyebrows/1.png`;
    } else {
      findLastEyebrow().then(last => {
        currentEyebrowIndex = last;
        EyebrowImg.src = `assets/eyebrows/${last}.png`;
      });
    }
    EyebrowImg.onload = drawAvatar;
  };
}

function findLastEyebrow() {
  return new Promise(resolve => {
    let i = 1;
    function check() {
      const img = new Image();
      img.src = `assets/eyebrows/${i}.png`;
      img.onload = () => { i++; check(); };
      img.onerror = () => resolve(i - 1);
    }
    check();
  });
}

function getEyebrowImage() {
  return EyebrowImg;
}
