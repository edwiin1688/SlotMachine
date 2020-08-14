
let count = 0;

const casino1 = document.querySelector("#casino1");
const mCasino1 = new SlotMachine(casino1, {
  active: 0,
  delay: 500,
});

const casino2 = document.querySelector("#casino2");
const mCasino2 = new SlotMachine(casino2, {
  active: 1,
  delay: 500,
});

const casino3 = document.querySelector("#casino3");
const mCasino3 = new SlotMachine(casino3, {
  active: 2,
  delay: 500,
});

const btnShuffle = document.querySelector("#casinoShuffle");
btnShuffle.addEventListener("click", () => {
  count = 3;
  mCasino1.shuffle(9999);
  mCasino2.shuffle(9999);
  mCasino3.shuffle(9999);
});

const btnStop = document.querySelector("#casinoStop");
btnStop.addEventListener("click", () => {
  switch (count) {
    case 3:
      mCasino1.stop();
      break;
    case 2:
      mCasino2.stop();
      break;
    case 1:
      mCasino3.stop();
      break;
  }
  count--;
});
