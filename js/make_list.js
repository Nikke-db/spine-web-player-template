"use strict";

const create_list = async () => {
    const response = await fetch('animation_list.json');
    const json = await response.json()
    
    json.forEach((animation) => {
        const liste_item = document.createElement("li");

        liste_item.innerHTML = animation.name;

        liste_item.setAttribute('id', animation.id)

        liste_item.classList.add("charDiv")

        liste_item.addEventListener("click", ()=>{
            change_spine(animation.id)
        })

        document.getElementById("visualiserMain").appendChild(liste_item)
    })
}

create_list();