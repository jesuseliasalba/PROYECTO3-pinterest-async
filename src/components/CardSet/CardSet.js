import { CreateCards } from '../Card/Card'
import './CardSet.css'

export const CardSet = (parent) => {
    fetch('https://api.unsplash.com/photos?client_id=GH4mV5mUZ6HeQZ1tQf9SnsHusz0fkbQrwah2f1JuwG8&per_page=30')
    .then((res) => res.json())
    .then((res) => {
        const div = document.createElement("div")
        div.id = "Cards";
        div.classList.add("display-flex")
        CreateCards(res,div);
        parent.appendChild(div);
    })
    .catch((error) => console.log(error))
}