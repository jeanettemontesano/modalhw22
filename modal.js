var modalOpen = document.getElementById('modal');

modalOpen.style.display = "none";

setTimeout(delay, 3000);

function delay() {
  modalOpen.style.display = "block";
};


// close modal
var closeBtn = document.getElementById('closeBtn');

closeBtn.onclick = function() {
  modalOpen.style.display = "none";
}