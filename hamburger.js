const menuBtn = document.querySelector('.menu-btn');
const tabMu = document.getElementById("tab-Menu");
let menuOpen = false;
var checkHam = 0;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    checkHam = 1;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    checkHam = 0;
  }
  if(checkHam == 1){
    tabMu.classList.add('open');
    tabMu.classList.remove('close');
    document.getElementById("tab-Menu").style.display = "flex";
  } 
  if(checkHam == 0) {
    tabMu.classList.remove('open');
    tabMu.classList.add('close');
    document.getElementById("tab-Menu").style.display = "none";
    checkHam = 0;
  }
  console.log(checkHam)
});