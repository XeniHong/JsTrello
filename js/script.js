const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");

btnCreateList.addEventListener("click", function(){
    let list = document.createElement("div");
    let listName = document.getElementById("list-name").value;
    list.innerHTML = listName;
    const menu = document.querySelector(".menu");
    menu.append(list);
});



const blocks = document.querySelectorAll(".block");
for (let elem of blocks){
    console.log(elem);
    elem.classList.toggle("bg-red");
}
const b1 = document.getElementById("block1");
b1.innerHTML = `<div class='new'>
                    <b>новый</b> текст
                </div>`;

const a1 = document.querySelector(".menu li:last-child a");
console.log(a1.getAttribute("href"));
a1.setAttribute("href", "https://portal.midis.info/")
a1.setAttribute("class", "bg-red");

/*----------------Создание нового элемента-------------------------------------*/
let newP = document.createElement("p");
newP.textContent="Новый параграф";
newP.classList.add("big-font");
const menu = document.querySelector(".menu");
menu.append(newP);

/*--------------Клонирование элементов------------------------------------------ */
const ul = document.querySelector(".menu ul");
let newUl = ul.cloneNode(true);
menu.append(newUl);

/*------------Удаление элементов------------------------------------------------- */
b1.remove();

/*--------------Предки и потомки---------------------------------------------------- */
console.log(menu.querySelector("ul"));


/*------------------------------------------------------------------------------*/
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    btn.classList.toggle("bg-red");
    let pred = btn.closest("div");
    pred.classList.toggle("block-border");
} );




