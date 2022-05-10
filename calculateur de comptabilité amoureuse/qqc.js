const premier = document.getElementById("premier");
const deuxieme = document.getElementById("deuxieme");
const button = document.getElementById("calculer-button");
const resultat = document.getElementById("resultat")

document.addEventListener("keyup",function(){
     if(premier.value.length >0 && deuxieme.value.length > 0){   
         button.disabled = false;    
     } else {
         button.disabled = true;
     }
});

button.addEventListener("click",function($event) {
    const compatibilite = Math.floor(Math.random() * 100);

resultat.textContent = compatibilite +"%";

resultat.classList.remove("hidden");
});