let width = document.querySelector("#width");
let height = document.querySelector("#height");

width.innerHTML = this.innerWidth;
height.innerHTML = this.innerHeight;

this.addEventListener("resize", (event) => {
  console.log(event.target.innerHeight, event.target.innerWidth);

  width.innerHTML = event.target.innerWidth;
  height.innerHTML = event.target.innerHeight;
});
