document.querySelectorAll('.img-container img').forEach(img => {
    img.addEventListener('click', () => {
        document.querySelector('.popup').style.display ='block';
        document.querySelector('.popup img').src = img.getAttribute('src');
    });
});

document.querySelector('.popup span').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
});




document.addEventListener("DOMContentLoaded",()=>{

    let fullImg = document.querySelector('.full-img');
    let miniImages = document.querySelectorAll('.mini-img');
    let currentIndex = 0;


    miniImages.forEach((photo, index) => {
        photo.addEventListener('click', ()=>{
            fullImg.src = photo.src;
            currentIndex = index;
        })
    
    }); 

    setInterval(showPhoto,1500)

    function showPhoto(){
        fullImg.src = miniImages[currentIndex].src;
        currentIndex+=1;
        if (currentIndex>=miniImages.length){
            currentIndex= 0;
        }
    }   

})


function remove() {
    document.querySelector('.img-container').style.display ='none';
}
function applyFilter() {
    let addfilter = document.querySelector('.img-container');
    addfilter.style.filter = "grayscale(100%)";
}
function animateElement(){
    let animElement = document.querySelector('.img-container');
    animElement.style.animation = "myAnimation 4s ease-in-out forwards";
}
function rotateElement(){
    let animElement = document.querySelector('.img-container');
    animElement.style.animation = "rotateAnimation 2s linear forwards";
}


