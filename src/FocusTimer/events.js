import * as elements from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() { // exporta por padrão um objeto 
    elements.controls.addEventListener("click", (event) => { // adiciona uma função ao evento de click 
        const action = event.target.dataset.action; // pega o valor do atributo data-action do elemento clicado 
        if (typeof actions[action] != "function") { // verifica se a ação é uma função 
            return; // retorna se a ação não for uma função 
        }

        actions[action](); // chama a função correspondente a ação clicada 
    })
    
    elements.soundsControls.addEventListener("click", (event) => { // adiciona uma função ao clique 
        const action = event.target.dataset.action; // pega o valor do atributo data-action do elemento clicado 
        if (typeof actions[action] != "function") { // verifica se a ação é uma função 
            return; // retorna se a ação não for uma função 
        }
    
        actions[action](); // chama a função correspondente a ação clicada
    })
}

//export function registerSounds() { // exporta por padrão um objeto 
//}