import { AlertNotFound } from "../AlertNotFound/AlertNotFound";
import { CreateCards } from "../Card/Card";

export const Search = (search,parent) => {
    fetch(`https://api.unsplash.com/search/photos?client_id=GH4mV5mUZ6HeQZ1tQf9SnsHusz0fkbQrwah2f1JuwG8&per_page=30&query="${search}"`)
        .then((res) => res.json())
        .then((res) => {
            if(res.results.length > 0){
                if (document.querySelector("#alert")) {
                    document.querySelector("#alert").parentNode.removeChild(document.querySelector("#alert"));
                }
                const div = document.querySelector("#Cards");
                CreateCards(res.results,div);
                parent.appendChild(div);
            } else {
                fetch(`https://api.unsplash.com/search/photos?client_id=GH4mV5mUZ6HeQZ1tQf9SnsHusz0fkbQrwah2f1JuwG8&per_page=30&query=cats`)
                .then((res) => res.json())
                .then((res) => {
                    if (document.querySelector("#alert")) {
                        document.querySelector("#alert").parentNode.removeChild(document.querySelector("#alert"));
                    }
                    const div = document.querySelector("#Cards");
                    AlertNotFound(parent)
                    CreateCards(res.results,div);
                    parent.appendChild(div);
                })
            }
            
        })
        .catch((error) => console.log(error))
}
