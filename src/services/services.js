const contactElem = document.querySelector(".contact");
const toggleElem = document.querySelector(".toggle-container");
//Almaceno en un "Set" todos los elementos que cambiaran de color
/*
const elemSet = new Set([
    document.querySelector("body"), document.querySelector("main"), document.querySelector(".toggle-container"),
    document.querySelector(".toggle"), document.querySelector(".navbar-container"), document.querySelector(".container"), 
    document.querySelectorAll(".project-name"), document.querySelectorAll(".contact img"), document.querySelectorAll("span"), 
    document.querySelectorAll("p"), document.querySelectorAll("a"), document.querySelector("#socketio")
]);
*/
export const services = {
    /*
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
    */
    contactRedirection: function() {
        const contactGroup = new Map([
            ["email", "azamefranco@gmail.com"],
            ["linkedin", "https://www.linkedin.com/in/franco-azame"],
            ["github", "https://github.com/JSuggu"]
        ]);
        
        contactElem.addEventListener("click", e => { 
            const choice = contactGroup.get(e.target.id);

            if(choice.includes("@gmail")){
                showEmail();
                return;
            }
            
            if(typeof choice == "string"){
                window.open(choice);
                return true;
            }
            
            return null;
        });
    },
}

function showEmail() {
    const emailContainerElem = document.querySelector(".email-container");
    const emailAddressElem = document.querySelector(".email-address");
    const email = "azamefranco@gmail.com"

    emailContainerElem.style.display = "flex";
    emailAddressElem.innerHTML = email;
        
    emailContainerElem.addEventListener("click", e => {
        e.stopImmediatePropagation();
        if(e.target.className == "email-container" || e.target.className.includes("close-email")){
            emailAddressElem.innerHTML = "";
            emailContainerElem.style.display = "none";
            return true;
        }
    });
    return true;
        /*
    emailButton.addEventListener("click", e => {
        emailContainerElem.style.display = "flex";
        emailAddressElem.innerHTML = email;
        
        emailContainerElem.addEventListener("click", e => {
            e.stopImmediatePropagation();
            if(e.target.className == "email-container" || e.target.className.includes("close-email")){
                emailAddressElem.innerHTML = "";
                emailContainerElem.style.display = "none";
                return true;
            }
        });
        return true;
    });
    */
}