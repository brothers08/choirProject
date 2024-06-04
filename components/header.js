class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-lg text-white gradient-bg navbar-dark">

                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html" aria-label="home page">Dillard University Concert Choir</a>

                        <button class="navbar-toggler" type="button" title="menu-bar" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <div class="navbar-nav ms-auto">
                                <a class="nav-item nav-link link-color" href="index.html">Home</a>
                                <a class="nav-item nav-link link-color" href="history.html">Brief History</a>
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle link-color" href="#" role="button" data-bs-toggle="dropdown">Timeline</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="30s.html">1930s</a>
                                        <a class="dropdown-item" href="40s.html">1940s</a>
                                        <a class="dropdown-item" href="50s.html">1950s</a>
                                        <a class="dropdown-item" href="60s.html">1960s</a>
                                        <a class="dropdown-item" href="70s.html">1970s</a>
                                        <a class="dropdown-item" href="80s.html">1980s</a>
                                        <a class="dropdown-item" href="90s.html">1990s</a>
                                        <a class="dropdown-item" href="00s.html">2000s</a>
                                        <a class="dropdown-item" href="10s.html">2010s</a>
                                        <a class="dropdown-item" href="20s.html">2020s</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('nav-header', Header);