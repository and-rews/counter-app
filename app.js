const count = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");

inc.addEventListener("click", () => {
  count.innerHTML++;
  appColor();
});

dec.addEventListener("click", () => {
  count.innerHTML--;
  appColor();
});

res.addEventListener("click", () => {
  count.innerHTML = 0;
  appColor();
});

function appColor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }
}
