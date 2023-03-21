class CommonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container-fluid" >
                        <nav class="navbar navbar-expand-sm bg-info navbar-dark">
                            <div class="container-fluid">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Math</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Computer Science</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">English</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Chinese</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Music</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Health</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
            </div>`
    }
}

customElements.define('common-header', CommonHeader);