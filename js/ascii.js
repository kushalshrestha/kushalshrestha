window.onload = function () {
  'use strict';
  // put all of your code here
  var animationsFrameArray = [];
  var animationArea = document.getElementById('text-area');
  var animationSizeField = document.getElementById('fontsize');
  var currentFrame = 0;
  var numberOfFrames;
  var currentSelectedAnimation;
  var turboEnabled = false;
  var turboSpeed = 250;

  document.getElementById('animation').onchange = () => {
    currentSelectedAnimation = document.getElementById('animation').value;
    animationsFrameArray =
      ANIMATIONS[currentSelectedAnimation].split('=====\n');
  };

  document.getElementById('fontsize').onchange = () => {
    clearInterval(interval);
    animationArea.style.fontSize = animationSizeField.value;
  };

  document.getElementById('start').onclick = () => {
    document.getElementById('start').disabled = true;
    document.getElementById('animation').disabled = true;
    document.getElementById('stop').disabled = false;
    if (animationsFrameArray.length > 0) {
      animationArea.value = animationsFrameArray[currentFrame];
      numberOfFrames = animationsFrameArray.length;
      animate();
    }
  };
  document.getElementById('stop').onclick = () => {
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
    document.getElementById('animation').disabled = false;
    clearInterval(interval);
  };

  document.getElementById('lbl-speed').onchange = () => {
    clearInterval(interval);
    turboEnabled = document.getElementById('turbo').checked;
    animate();
  };

  function displayFrame() {
    if (currentSelectedAnimation != undefined) {
      currentFrame = currentFrame < numberOfFrames - 1 ? currentFrame + 1 : 0;
      animationArea.value = animationsFrameArray[currentFrame];
    }
  }

  let interval = setInterval(displayFrame, turboSpeed);

  function animate() {
    turboSpeed = turboEnabled ? 50 : 250;
    // clearInterval(interval);
    interval = setInterval(displayFrame, turboSpeed);
  }
};
