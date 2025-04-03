
div.appendChild(p);
p.textContent = "Le texte a été modifié";
p.style.backgroundColor = "lightblue";



div.addEventListener("click", function() {
    p.textContent = "Un clic a été détecté";
});



