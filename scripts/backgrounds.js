// backgrounds.js
let currentBackgroundIndex = 0; // 0 = solid color background
let backgroundImg = null;
let backgroundColor = '#ffffff'; // default color

document.getElementById('prevBackground').addEventListener('click', () => {
  changeBackground(-1);
});

document.getElementById('nextBackground').addEventListener('click', () => {
  changeBackground(1);
});

document.getElementById('backgroundColorPicker').addEventListener('input', (e) => {
  backgroundColor = e.target.value;
  drawAvatar();
});

function changeBackground(direction) {
  const newIndex = currentBackgroundIndex + direction;
  loadBackground(newIndex, direction);
}

function loadBackground(index, direction) {
  if (index < 0) {
    findLastBackground().then(last => {
      currentBackgroundIndex = last;
      setBackgroundImage(last);
    });
    return;
  }

  if (index === 0) {
    currentBackgroundIndex = 0;
    backgroundImg = null;
    drawAvatar();
    return;
  }

  const testImg = new Image();
  testImg.src = `assets/backgrounds/${index}.jpg`;

  testImg.onload = () => {
    currentBackgroundIndex = index;
    backgroundImg = testImg;
    drawAvatar();
  };

  testImg.onerror = () => {
    if (direction > 0) {
      currentBackgroundIndex = 0;
      backgroundImg = null;
      drawAvatar();
    } else {
      findLastBackground().then(last => {
        currentBackgroundIndex = last;
        setBackgroundImage(last);
      });
    }
  };
}

function setBackgroundImage(index) {
  backgroundImg = new Image();
  backgroundImg.src = `assets/backgrounds/${index}.jpg`;
  backgroundImg.onload = drawAvatar;
}

function findLastBackground() {
  return new Promise(resolve => {
    let i = 1;
    function check() {
      const img = new Image();
      img.src = `assets/backgrounds/${i}.jpg`;
      img.onload = () => { i++; check(); };
      img.onerror = () => resolve(i - 1);
    }
    check();
  });
}

window.getBackgroundImage = function () {
  return backgroundImg;
};

window.getBackgroundColor = function () {
  return backgroundColor;
};

window.isBackgroundColorMode = function () {
  return currentBackgroundIndex === 0;
};
