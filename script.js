// Fonction de gestion du burger-menu
function toggleMenu() {
  var menu = document.querySelector('.burger-menu .menu');
  menu.classList.toggle('active');
}

// Fonction pour fermer le menu lorsque l'utilisateur clique en dehors de celui-ci
document.addEventListener('click', function(event) {
  var menu = document.querySelector('.burger-menu .menu');
  var burgerMenu = document.querySelector('.burger-menu');
  var target = event.target;

  // Vérifier si l'élément cliqué est à l'intérieur du menu burger ou non
  if (!menu.contains(target) && !burgerMenu.contains(target)) {
      menu.classList.remove('active'); // Fermer le menu
  }
});