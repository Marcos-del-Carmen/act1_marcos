var list = document.querySelectorAll(".list");

function setActiveClass() {
    list.forEach((item) => item.classList.remove('active'));  
    this.classList.add('active');
}

Array.from(list).forEach((item) => {
    item.addEventListener('mouseover', setActiveClass);
});