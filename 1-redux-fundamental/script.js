// select dom elemet
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//initial state

let count = 0;

incrementEl.addEventListener("click", () => {
  count++;
  console.log(count);
  counterEl.innerText=count
});

decrementEl.addEventListener("click", () => {
  count--;
  console.log(count);
  counterEl.innerText=count
});
