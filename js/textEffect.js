// Fonction pour envelopper chaque lettre dans un span
function wrapLettersInSpan(element) {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }

  // Sélectionnez tous les éléments h2 dans le document
  var spanElements = document.querySelectorAll('span');

  // Appliquer la fonction à chaque élément h2
  spanElements.forEach(function(spanElement) {
    wrapLettersInSpan(spanElement);
  });

  // Anime.js Timeline pour l'animation
  anime.timeline({loop: true})
    .add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i+1)
    }).add({
      targets: '.ml9',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1500
    });


