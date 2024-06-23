import "./AlertNotFound.css";

export const AlertNotFound = (parent) => {
    const div = document.createElement("div");
    div.id = "alert";
    const p = document.createElement("p");
    p.textContent = "No se han encontrado resultados";
    const p2 = document.createElement("p");
    p2.textContent = "Podrías probar con palabras como:";
    const p3 = document.createElement("p");
    p3.textContent = "hombres, gatos, perros, comida china, etc...";
    const p4 = document.createElement("p");
    p4.textContent = "Mientras, te dejo unos gatitos :3";
    

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    console.log(parent.parentElement);
    parent.appendChild(div);
}