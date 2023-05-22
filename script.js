var rotationSpeed = 0.065; // Начальная скорость вращения

function decreaseSpeed() {
  if (rotationSpeed > 0.001) {
    rotationSpeed -= 0.001; // Уменьшаем скорость на 1
    updateRotationSpeed();
  }
}

function increaseSpeed() {
  rotationSpeed += 0.001; // Увеличиваем скорость на 1
  updateRotationSpeed();
}

function updateRotationSpeed() {
  var rotateImage = document.getElementById("rotate-image");
  rotateImage.style.animationDuration = rotationSpeed + "s";

  var speedDisplay = document.getElementById("current-speed");
  speedDisplay.textContent = "Текущая скорость: " + rotationSpeed + "s";
}