const sn = document.getElementById("second");
const dk = document.getElementById("minute");
const ms = document.getElementById("millisecond");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

start.addEventListener("click", () => {
  start.disabled = true;
  let dakikaTime = setInterval(dakika, 60000);
  let saniyeTime = setInterval(saniye, 1000);
  let saliseTime = setInterval(salise, 10);

  pause.addEventListener("click", () => {
    start.disabled = false;
    clearInterval(saliseTime);
    clearInterval(saniyeTime);
    clearInterval(dakikaTime);
  });

  reset.addEventListener("click", () => {
    sn.innerHTML = "00";
    ms.innerHTML = "00";
    dk.innerHTML = "00"
    count1 = 0;
    count2 = 0;
    count3 = 0;
    start.disabled = false;
    clearInterval(saliseTime);
    clearInterval(saniyeTime);
    clearInterval(dakikaTime);
  });
});

let count1 = 0;
function dakika() {
  count1 += 1;
  dk.innerHTML = "0" + count1;
  if (count1 >= 10) {
    dk.innerHTML = count1;
  }
}

let count2 = 0;
function saniye() {
  count2 += 1;
  sn.innerHTML = "0" + count2;
  if (count2 >= 10) {
    sn.innerHTML = count2;
    if (count2 == 60) {
      sn.innerHTML = "00";
      count2 = 0;
    }
  }
}

let count3 = 0;
function salise() {
  count3 += 1;
  ms.innerHTML = "0" + count3;
  if (count3 >= 10) {
    ms.innerHTML = count3;
    if (count3 == 100) {
      ms.innerHTML = "00";
      count3 = 0;
    }
  }
}
