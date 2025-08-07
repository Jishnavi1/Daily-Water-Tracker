let count = 0;
const maxGlasses = 8;

function addGlass() {
  if (count < maxGlasses) {
    count++;
    updateProgress();
    displayGlass();
  } else {
    alert("You've reached your daily goal of 8 glasses!");
  }
}

function updateProgress() {
  const percent = (count / maxGlasses) * 100;
  const bar = document.getElementById('progress-bar');
  bar.style.width = percent + '%';
  bar.textContent = `${count} / ${maxGlasses} Glasses`;
}

function displayGlass() {
  const container = document.getElementById('glasses-container');
  const glass = document.createElement('div');
  glass.classList.add('glass');
  glass.textContent = '🥛';
  container.appendChild(glass);
}
