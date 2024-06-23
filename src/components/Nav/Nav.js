import { AlertNotFound } from "../AlertNotFound/AlertNotFound";
import { CreateCards } from "../Card/Card";
import { CardSet } from "../CardSet/CardSet";
import { Search } from "../Search/Search";
import "./Nav.css";

const menuOptions = (array) => {
    const ul = document.createElement("ul");
    ul.classList.add("MenuOption");
    ul.classList.add("display-flex");

    for (const element of array) {
        const li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    }
    return(ul)
};

export const Nav = (parent) => {
    const header = document.createElement("header");
    header.id = "header";
    header.classList.add("display-flex");

    const logo = document.createElement("img");
    logo.src = "./src/img/Pinterest Logo/logopinterest.svg";
    logo.alt = "Business Logo";

    const options = ["Inicio", "Explorar", "Crear"];

    const DivInput = document.createElement("div");
    const SearchImg = document.createElement("img");
    const input = document.createElement("input");
    DivInput.classList.add("display-flex");
    DivInput.id = "SearchBox";
    SearchImg.src = "./src/img/NAV/SearchIcon.png";
    SearchImg.alt = "Search Icon";
    input.placeholder = "Buscar";
    DivInput.append(SearchImg);
    DivInput.append(input);

    const divSecondaryMenu = document.createElement("div");
    divSecondaryMenu.id = "SecondaryMenu";
    const Alert = document.createElement("img");
    const Message = document.createElement("img");
    const UserProfile = document.createElement("img");
    divSecondaryMenu.classList.add("display-flex");
    Alert.src = "./src/img/NAV/AlertIcon.svg";
    Message.src = "./src/img/NAV/ChatIcon.svg";
    UserProfile.src = "./src/img/NAV/userIcon.svg";    
    divSecondaryMenu.appendChild(Alert);
    divSecondaryMenu.appendChild(Message);
    divSecondaryMenu.appendChild(UserProfile);
    
    header.appendChild(logo);
    header.appendChild(menuOptions(options));
    header.appendChild(DivInput);
    header.appendChild(divSecondaryMenu);    
    parent.appendChild(header);


    input.addEventListener("change", (e) => {
        Search(e.target.value,parent);
        e.target.value = "";
    })
    logo.addEventListener("click", (e) => {
        if (document.querySelector("#alert")) {
            document.querySelector("#alert").parentNode.removeChild(document.querySelector("#alert"));
        }
        if (document.querySelector("#Cards")) {
            document.querySelector("#Cards").parentNode.removeChild(document.querySelector("#Cards"));
        }
        CardSet(parent);
    })
};

