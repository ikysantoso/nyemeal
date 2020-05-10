class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .brand {
                font-size: 20px;
            }

            nav a {
                font-size: 15px;
                font-weight: 400;
                text-decoration: none;
                color: white;
            }
            
            nav {
                background-color: #23180d;
                padding: 5px;
                position: fixed;
                width: 100%;
            }
            
            nav a:hover {
                font-weight: bold;
            }
            
            nav li {
                display: inline-block;
                list-style-type: none;
                margin-left: 20px;
            }
        </style>
        
        <nav id="navbar">
            <ul>
                <li><a href="#" style="font-weight: bold; margin: 10px;" class="brand">Nyemeal</a></li>
                <li><a href="#veg-title">Vegetarian</a></li>
                <li><a href="#meat-title">Meat Lovers!</a></li>
            </ul>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);