class CommonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <div class="container-fluid">
        <nav class="navbar navbar-expand-sm bg-info navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="Math.html">Math</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="CS.html">Computer Science</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Languages
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="English.html">English</a></li>
                            <li><a class="dropdown-item" href="#">Chinese</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Others</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Music.html">Music</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Health
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="Nutrition.html">Nutrition</a></li>
                            <li><a class="dropdown-item" href="Recipe.html">Recipe</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Others</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Reference.html">Reference</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>`
    }
}

customElements.define('common-header', CommonHeader);