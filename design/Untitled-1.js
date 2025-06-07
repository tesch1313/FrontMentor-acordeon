const icon = document.querySelector(".icon");
const padreModal = document.querySelectorAll(".card");
const texto = document.querySelectorAll(".card_p_context");
// alert("Fnciona");




padreModal.forEach(modal => {
  modal.addEventListener("click", function(e) {
    if (e.target.matches(".icon") ) {
      e.preventDefault();

      const icon = e.target;
      const parent = icon.parentElement;
      const hermano = parent.nextElementSibling;

      // Si el contenido está visible
      if (hermano.style.display === "block") { // la condicon no se cumplia porque los estilo en csss no lo detaecta style
        hermano.style.display = "none";
        icon.src = "assets/images/icon-plus.svg";
      } else {
        hermano.style.display = "block";
        icon.src = "assets/images/icon-minus.svg";
      }
    }
  });
});


padreModal.forEach(modal => {
  modal.addEventListener("click", function(e) {
    if (e.target.matches(".articuleparrafo")) {
      e.preventDefault();

      const icon = e.target;
       const iconOrinal= icon.nextElementSibling;
   //   console.log(iconOrinal); 
      const target =  e.target;
      const parent = target.parentElement;
      const hermano = parent.nextElementSibling;
     // console.log(hermano);

      // Si el contenido está visible
      if (hermano.style.display === "block") { // la condicon no se cumplia porque los estilo en csss no lo detaecta style
        hermano.style.display = "none";
        iconOrinal.src = "assets/images/icon-plus.svg";
      } else {
        hermano.style.display = "block";
        iconOrinal.src = "assets/images/icon-minus.svg";
      }
    }
  });
});
