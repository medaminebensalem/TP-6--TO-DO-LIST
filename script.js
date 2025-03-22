        let input = document.getElementById("ajouter");
        let ajoutertache = document.getElementById("ajoutertache");
        let list = document.getElementById("list");
        let annulerlaliste = document.getElementById("annulerlaliste");

       
        ajoutertache.addEventListener("click", function() {
            if (input.value.trim() !== "") {
                let li = document.createElement("li");
                li.textContent = input.value;
                
               
                li.addEventListener("click", function() {
                    li.remove();
                });

                list.appendChild(li);
                input.value = ""; 
            }
        });

      
        annulerlaliste.addEventListener("click", function() {
            list.innerHTML = "";
        });

       
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                ajoutertache.click();
            }
        });