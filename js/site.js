console.log("js works");

//setinterval will call a function every N milliseconds
const slideShowImage = document.getElementById("slideShowImage");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");


let count = 0;

nextButton.addEventListener("click", () => {
    updateImage("next");

})
prevButton.addEventListener("click", () => {
    updateImage("prev");
})
setInterval(printCountAndIncrement, 3000)
let currentImage = 0;
let imageUrls = [
    "./images/bossy-man.jpg",
    "./images/freddy.jpg",
    "./images/if I roll.png",
    "./images/arizona.gif",
    "https://media1.tenor.com/m/BkCycl807pwAAAAd/turkey-butter.gif"
]

function printCountAndIncrement(){
    count++;
    console.log(count);
}

function updateImage(direction){
    if(direction == "next"){
        currentImage++;
    } else if (direction == "prev"){
        currentImage--;
    } else {
        currentImage++;
    }

    if(currentImage >= imageUrls.length){
        currentImage = 0;
    }
    if(currentImage < 0){
        currentImage = imageUrls.length - 1;
    }

    slideShowImage.src = imageUrls[currentImage];
}

setInterval(updateImage, 3000);