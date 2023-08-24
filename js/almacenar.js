document.addEventListener("DOMContentLoaded", function () {
    const item = document.getElementById("item");
    const BotonAgregar = document.getElementById("agregar");
    const BotonBorrar = document.getElementById("limpiar");
    const contenedor = document.getElementById("contenedor");

    const localsItem = JSON.parse(localStorage.getItem("items")) || [];
    contenedor.innerHTML = "";
    localsItem.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = item;
        contenedor.appendChild(li);
    });

    BotonAgregar.addEventListener("click", function () {
        const newItem = item.value.trim();
        if (newItem !== "") {
            localsItem.push(newItem);
            localStorage.setItem("items", JSON.stringify(localsItem));

            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = newItem;
            contenedor.appendChild(li);

            item.value = "";
        }
    });


    BotonBorrar.addEventListener("click", function () {
        localStorage.removeItem("items");
        contenedor.innerHTML = "";
    });
});
