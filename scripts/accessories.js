// accessories.js
let currentAccessoryIndex = 1;
let accessoryImg = new Image();
accessoryImg.src = `assets/accessories/${currentAccessoryIndex}.png`;

document.getElementById('prevAccessory').addEventListener('click', () => {
  changeAccessory(-1);
});

document.getElementById('nextAccessory').addEventListener('click', () => {
  changeAccessory(1);
});

function changeAccessory(direction) {
  const newIndex = currentAccessoryIndex + direction;
  loadAccessory(newIndex, direction);
}

function loadAccessory(index, direction) {
  if (index < 1) {
    findLastAccessory().then(last => {
      currentAccessoryIndex = last;
      accessoryImg.src = `assets/accessories/${last}.png`;
      accessoryImg.onload = drawAvatar;
    });
    return;
  }

  const testImg = new Image();
  testImg.src = `assets/accessories/${index}.png`;

  testImg.onload = () => {
    currentAccessoryIndex = index;
    accessoryImg = testImg;
    drawAvatar();
  };

  testImg.onerror = () => {
    if (direction > 0) {
      currentAccessoryIndex = 1;
      accessoryImg.src = `assets/accessories/1.png`;
    } else {
      findLastAccessory().then(last => {
        currentAccessoryIndex = last;
        accessoryImg.src = `assets/accessories/${last}.png`;
      });
    }
    accessoryImg.onload = drawAvatar;
  };
}

function findLastAccessory() {
  return new Promise(resolve => {
    let i = 1;
    function check() {
      const img = new Image();
      img.src = `assets/accessories/${i}.png`;
      img.onload = () => { i++; check(); };
      img.onerror = () => resolve(i - 1);
    }
    check();
  });
}

function getAccessoryImage() {
  return accessoryImg;
}
