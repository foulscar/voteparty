const mainNavBarWrapper = document.getElementById("content-nav-wrapper");
const mainCollectionNavBtns = mainNavBarWrapper.children;

function setNavBtnActive(clickedNavBtn, collectionNavBtns) {
  for (let i = 0; i < collectionNavBtns.length; i++) {
    collectionNavBtns[i].classList.remove("active");
  }
  clickedNavBtn.classList.add("active");
}

for (let i = 0; i < mainCollectionNavBtns.length; i++) {
  const navBtn = mainCollectionNavBtns[i];
  navBtn.addEventListener("click", function() {
    setNavBtnActive(navBtn, mainCollectionNavBtns);
  })
}
