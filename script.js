const checkButton = document.querySelector("#checkButton");
const statusValue = document.querySelector("#statusValue");
const logOutput = document.querySelector("#logOutput");
const timestampValue = document.querySelector("#timestampValue");

function updateClock() {
  const now = new Date();
  timestampValue.textContent = now.toLocaleTimeString();
}

function runHealthCheck() {
  updateClock();

  const now = new Date();
  const readable = now.toLocaleString();

  statusValue.textContent = "Healthy";
  logOutput.textContent =
    `[${readable}] Launchpad preview is responding correctly. ` +
    "This sample app is ready for imports, builds, and preview checks.";
}

updateClock();
setInterval(updateClock, 1000);
checkButton?.addEventListener("click", runHealthCheck);
