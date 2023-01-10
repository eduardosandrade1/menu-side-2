const menuItems = document.querySelectorAll('.item__menu__side')
let activeItem = document.querySelector(".active");

console.log(menuItems)

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

function clickItem(item, index) {

    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    
    activeItem = item;
    
}
