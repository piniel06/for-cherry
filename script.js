document.getElementById("gift-btn").addEventListener("click", function() {
  document.getElementById("p1").classList.add("hidden");
  document.getElementById("p2").classList.remove("hidden");
});

document.getElementById("flower-btn").addEventListener("click", function() {
  document.getElementById("p2").classList.add("hidden");
  document.getElementById("p3").classList.remove("hidden");
});

document.getElementById("back_btn1").addEventListener("click", function() {
  document.getElementById("p3").classList.add("hidden");
  document.getElementById("p2").classList.remove("hidden");
});

document.getElementById("letter-btn").addEventListener("click", function() {
  document.getElementById("p2").classList.add("hidden");
  document.getElementById("p4").classList.remove("hidden");
});

document.getElementById("back_btn2").addEventListener("click", function() {
  document.getElementById("p4").classList.add("hidden");
  document.getElementById("p2").classList.remove("hidden");
});