function showModal() {
    var modal = document.getElementById("modal");
    modal.classList.add("modal--shown");
}

function hideModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("modal--shown");
}

function addClickHandler(elements) {
  for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", showModal, false);
  }
}

addClickHandler(document.getElementsByClassName("featured-product__order"));
addClickHandler(document.getElementsByClassName("catalog-product__add-to-cart"));
