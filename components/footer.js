class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="d-flex align-items-center justify-content-center gradient-bg text-center text-white">
            <h5>
                Dillard University </br />
                2601 Gentilly Boulevard <br />
                New Orleans, LA 70122 <br />
                Created by: Ciara Brothers, Class of 2023
            </h5>
        </footer>
        `;
    }
}

customElements.define('page-footer', Footer);