import "./Card.css"

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

export const CreateCards = (array,parent) => {
    parent.innerHTML = "";
    for (const image of array) {
        const div = document.createElement("div");
        div.classList.add("card")

        const img = document.createElement("img");

        img.src = image.urls.full;
        img.alt = image.alt_description;

        const profile = document.createElement("div");
        const profileImg = document.createElement("img");
        profile.id = "profile";
        profileImg.src = image.user.profile_image.large;
        profile.appendChild(profileImg);
        profileImg.style.borderColor = colorArray[Math.floor(Math.random()*colorArray.length)];
        
        const divlikes = document.createElement("div");
        const hearth = document.createElement("img");
        const numberlikes = document.createElement("p");
        divlikes.id = "likes";
        hearth.src = "./src/img/CARDS/hearth.svg"
        numberlikes.textContent = image.likes;
        divlikes.appendChild(hearth);
        divlikes.appendChild(numberlikes);

        const visitButton = document.createElement("a")
        visitButton.id = "Visit";
        visitButton.href = image.links.html;
        visitButton.target = "_blank";
        visitButton.textContent = "Visitar";

        const name = document.createElement("h3");
        name.textContent = image.user.name;

        const date = document.createElement("p");
        date.textContent = image.created_at.substring(0,10);

        div.appendChild(img);
        div.appendChild(profile);
        div.appendChild(divlikes);
        div.appendChild(visitButton);
        div.appendChild(name);
        div.appendChild(date);
        parent.appendChild(div);

    }
}