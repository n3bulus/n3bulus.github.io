// main.js
const canvas = document.getElementById('avatarCanvas');
const ctx = canvas.getContext('2d');

const base = new Image();
base.src = 'assets/base/clippy_body.png';

// Accessory position offsets
const ACC_X = 100;
const ACC_Y = 200;
const ACC_W = 800;
const ACC_H = 250;

// Mouth position offsets
let mouthX = 135; // adjust until centered
let mouthY = 220; // adjust until correct
let mouthWidth = 130;
let mouthHeight = 75;

// Eyebrow position offsets
let eyebrowX = 105; // adjust until centered
let eyebrowY = 60; // adjust until correct
let eyebrowWidth = 200;
let eyebrowHeight = 80;

base.onload = () => drawAvatar();

function drawAvatar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background first
  if (isBackgroundColorMode()) {
    ctx.fillStyle = getBackgroundColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    const bg = getBackgroundImage();
    if (bg && bg.complete && bg.naturalWidth > 0) {
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    }
  }
  
  // Draw base Clippy body
  const baseMaxSize = 400;
  const scaleFactor = Math.min(baseMaxSize / base.width, baseMaxSize / base.height);
  const baseWidth = base.width * scaleFactor;
  const baseHeight = base.height * scaleFactor;
  const baseX = (canvas.width - baseWidth) / 2;
  const baseY = (canvas.height - baseHeight) / 2;
  ctx.drawImage(base, baseX, baseY, baseWidth, baseHeight);

  // Eeybrow
  const eyebrow = getEyebrowImage();
  if (eyebrow && eyebrow.complete && eyebrow.naturalWidth > 0) {
    ctx.drawImage(eyebrow, eyebrowX, eyebrowY, eyebrowWidth, eyebrowHeight);
  }


  // Mouth
  const mouth = getMouthImage();
  if (mouth && mouth.complete && mouth.naturalWidth > 0) {
    ctx.drawImage(mouth, mouthX, mouthY, mouthWidth, mouthHeight);
  }


  // Draw accessory
  const accImg = getAccessoryImage();
  if (accImg && accImg.complete && accImg.naturalWidth > 0) {
    const accX = baseX + ACC_X * scaleFactor;
    const accY = baseY + ACC_Y * scaleFactor;
    ctx.drawImage(accImg, accX, accY, ACC_W * scaleFactor, ACC_H * scaleFactor);
  }
}
