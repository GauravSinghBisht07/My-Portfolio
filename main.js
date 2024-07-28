const images = document.querySelector(".projects-data");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let count = 0;
const imageWidth = images.offsetWidth; // Width of one image
const totalImages = images.children.length; // Number of images

leftButton.addEventListener("click", () => {
    if (count > 0) {
        count -= 1;
        images.style.transform = `translateX(${count * -imageWidth}px)`;
    }
});

rightButton.addEventListener("click", () => {
    if (count < totalImages - 1) {
        count += 1;
        images.style.transform = `translateX(${count * -imageWidth}px)`;
    }
});




const menubtn = document.getElementById("menubtn");
const crossbtn = document.getElementById("crossbtn");
const menubar = document.querySelector(".menubar");

menubtn.addEventListener("click",()=>{
    menubar.style.right = "0";
})

crossbtn.addEventListener("click",()=>{
    menubar.style.right = "-100%";
})