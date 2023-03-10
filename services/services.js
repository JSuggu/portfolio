const contactElem = document.querySelector(".contact");
const toggleElem = document.querySelector(".toggle-container");
//Almaceno en un "Set" todos los elementos que cambiaran de color
const elemSet = new Set([
    document.querySelector("body"), document.querySelector("main"), document.querySelector(".toggle-container"),
    document.querySelector(".toggle"), document.querySelector(".navbar-container"), document.querySelector(".container"), 
    document.querySelectorAll(".project-name"), document.querySelectorAll(".contact img"), document.querySelectorAll("span"), 
    document.querySelectorAll("p"), document.querySelectorAll("a")
]);

export const services = {
    changeTheme: function () {
        //Evento para intercambiar de color entre "oscuro" y "claro";
        toggleElem.addEventListener("click", e => {
            if(toggleElem.className.includes("light-mode")){
                elemSet.forEach( topElem =>{
                    if(topElem.length != undefined){
                        topElem.forEach( bottomElem =>{
                            bottomElem.className = bottomElem.className.split(" ")[0];
                        })
                    }
                        
                    topElem.className = topElem.className.split(" ")[0];
                });
                
                return true;
            }

            elemSet.forEach( topElem =>{
                if(topElem.length != undefined){
                    topElem.forEach( bottomElem =>{
                        bottomElem.className = `${bottomElem.className} light-mode`;
                    });
                }

                topElem.className = `${topElem.className} light-mode`;
            });

            return false;
        });
    },

    contactRedirection: function() {
        const contactGroup = new Map([
            ["email", "azamefranco@gmail.com"],
            ["linkedin", "https://www.linkedin.com/in/franco-benjamin-azame-32893b213/"],
            ["github", "https://github.com/JSuggu"],
            ["instagram", "https://www.instagram.com/azame_franco/"]
        ]);
    
        contactElem.addEventListener("click", e => {
            const choice = contactGroup.get(e.target.id);
            if(choice.includes("@gmail")){
                return true;
            }
    
            if(typeof choice == "string"){
                window.open(choice);
                return true;
            }
            
            return null;
        });
    },

    sendEmail: function() {
        const emailButton = document.querySelector("#email");
        const formElem = document.querySelector(".form-container");

        emailButton.addEventListener("click", e => {
            formElem.style.display = "flex";
            formElem.addEventListener("click", e => {
                e.stopImmediatePropagation();
                if(e.target.className == "form-container" || e.target.className.includes("close-form")){
                    formElem.style.display = "none";
                    return true;
                }
            });
            return true;
        });
    }
}