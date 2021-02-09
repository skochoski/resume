document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementsByTagName("body")[0].classList.add("loaded");
});

const hobbyIcons = document.querySelectorAll(".fa-3x");

const largeMQ = window.matchMedia("(min-width: 901px)");
const mediumMQ = window.matchMedia("(min-width: 371px) and (max-width: 900px)");
const smallMQ = window.matchMedia("(max-width: 370px)");

function largeDevices(e) {
  if (e.matches) {
    hobbyIcons.forEach((icon) => {
      icon.classList.remove("fa-lg", "fa-2x");
      icon.classList.add("fa-3x");
    });
  }
}

largeMQ.addListener(largeDevices);
largeDevices(largeMQ);

function mediumDevices(e) {
  if (e.matches) {
    hobbyIcons.forEach((icon) => {
      icon.classList.remove("fa-lg", "fa-3x");
      icon.classList.add("fa-2x");
    });
  }
}

mediumMQ.addListener(mediumDevices);
mediumDevices(mediumMQ);

function smallDevices(e) {
  if (e.matches) {
    hobbyIcons.forEach((icon) => {
      icon.classList.remove("fa-2x", "fa-3x");
      icon.classList.add("fa-lg");
    });
  }
}

smallMQ.addListener(smallDevices);
smallDevices(smallMQ);
