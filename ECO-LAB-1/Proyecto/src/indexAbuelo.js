import { getDataFetch1, getDataFetch2, getDataFetch3 } from "../src/services/fetch.js";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    async render(){
        if(this.shadowRoot){

            const title = document.createElement("h1");
            title.innerText = "Mis Llamadas de API's";
            this.shadowRoot.appendChild(title);

            const section = document.createElement("section");
            this.shadowRoot.appendChild(section);

            const buttonApi1 = document.createElement("button");
            buttonApi1.innerText = "FETCH API 1";
            buttonApi1.addEventListener("click", getDataFetch1());
            section.appendChild(buttonApi1);

            const buttonApi2 = document.createElement("button");
            buttonApi2.innerText = "FETCH API 2";
            buttonApi2.addEventListener("click", getDataFetch2());
            section.appendChild(buttonApi2);

            const buttonApi3 = document.createElement("button");
            buttonApi3.innerText = "FETCH API 3";
            buttonApi3.addEventListener("click", getDataFetch3());
            section.appendChild(buttonApi3);
        }
    }
};

customElements.define("app-container", AppContainer);
export default AppContainer;
