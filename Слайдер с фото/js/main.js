const image = [
    {
        url: "./images/png/img-1.png",
        title: "ROSTOV-ON-DON, ADMIRAL",
        citi: "Rostov-on-Don<br> LCD admiral",
        area: "81 m2",
        time: "3.5 months"
    }, {
        url: "./images/png/img-2.png",
        title: "SOCHI THIEVES",
        citi: "Sochi<br> Thieves",
        area: "105 m2",
        time: "4 months"
    }, {
        url: "./images/png/img-3.png",
        title: "ROSTOV-ON-DON PATRIOTIC",
        citi: "Rostov-on-Don<br> Patriotic",
        area: "93 m2",
        time: "3 months"
    }
];


const sliderImages = document.querySelector(".slider__img");
const sliderArrows = document.querySelectorAll(".arrow");
const sliderDots = document.querySelector(".dots");
const sliderMenu = document.querySelector(".slider__menu");
const infoSiti = document.querySelector(".info-city");
const infoArea = document.querySelector(".info-area");
const infoTime = document.querySelector(".info-time");

initImages();
initArrows();
initDots();
initMenu();
initSiti();
initArea();
initTime();

function initImages() {
    image.forEach((Image, index) => {
        const imageDiv = `<div class = "image n${index} ${index === 0? "active" : ""}" 
        style="background-image:url(${image[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
    });
}     

function initArrows() {
    sliderArrows.forEach(arrow => {
        arrow.addEventListener("click", function() {
            const curNumber = +document.querySelector(".image.active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("arrowLeft")) {
                nextNumber = curNumber === 0? image.length -1 : curNumber -1;
            } else {
                nextNumber = curNumber === image.length -1? 0 : curNumber +1;
            }
            moveSlider(nextNumber);
        });
    }); 
}

 function initDots() {
    image.forEach((image, index) => {
        const dot = `<div class="dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
             moveSlider (this.dataset.index);
        })
    })
}   

function initMenu() {
    image.forEach((image, index) => {
        const menuItem = `<div class="menu__item  n${index} ${index === 0? "active" : ""}" data-index="${index}"><h3>${image.title}</h3></div>`;
        sliderMenu.innerHTML += menuItem;
    });
    sliderMenu.querySelectorAll(".menu__item").forEach(menuItem => {
        menuItem.addEventListener("click", function() {
            moveSlider (this.dataset.index);    
        })
    })
}

function initSiti() {
    image.forEach((image, index) => {
        const siti = `<div class="siti-text n${index} ${index === 0? "active" : ""}" data-index="${index}"><h4>${image.citi}</h4></div>`;
        infoSiti.innerHTML += siti;
    }); 
}

function initArea() {
    image.forEach((image, index) => {
        const area = `<div class="area-text n${index} ${index === 0? "active" : ""}" data-index="${index}"><h4>${image.area}</h4></div>`;
        infoArea.innerHTML += area;
    }); 
}

function initTime() {
    image.forEach((image, index) => {
        const time = `<div class="time-text n${index} ${index === 0? "active" : ""}" data-index="${index}"><h4>${image.time}</h4></div>`;
        infoTime.innerHTML += time;
    }); 
}


function moveSlider(num) {
    document.querySelector(".image.active").classList.remove("active");
    document.querySelector(".image.n" + num).classList.add("active");

    document.querySelector(".dots-item.active").classList.remove("active");
    document.querySelector(`.dots-item[data-index="${num}"]`).classList.add("active");

    document.querySelector(".menu__item.active").classList.remove("active");
    document.querySelector(`.menu__item[data-index="${num}"]`).classList.add("active");

    document.querySelector(".siti-text.active").classList.remove("active");
    document.querySelector(`.siti-text[data-index="${num}"]`).classList.add("active");

    document.querySelector(".area-text.active").classList.remove("active");
    document.querySelector(`.area-text[data-index="${num}"]`).classList.add("active");

    document.querySelector(".time-text.active").classList.remove("active");
    document.querySelector(`.time-text[data-index="${num}"]`).classList.add("active");
}