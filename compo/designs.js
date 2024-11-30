var designsCard = [
    {
        img: "./assets/design-img/1.png",
        price: "350",
    },
    {
        img: "./assets/design-img/2.png",
        price: "250",
    },
    {
        img: "./assets/design-img/3.png",
        price: "350",
    },
    {
        img: "./assets/design-img/4.png",
        price: "350",
    },
    {
        img: "./assets/design-img/5.png",
        price: "350",
    },
    {
        img: "./assets/design-img/6.png",
        price: "300",
    },
]



var designs = document.querySelector('.design-card-container');

function designsSection() {
    var clutter = '';

    designsCard.forEach((elem, index) => {

        clutter += `<div class="design-card" id=${index}>
                        <div class="design-img">
                            <img src="${elem.img}" alt="">
                        </div>
                        <div class="price-sec">
                            <h2 class="price"><i class="fa-solid fa-indian-rupee-sign"></i> ${elem.price}</h3>
                                <h3>More Details <i class="fa-solid fa-arrow-right"></i></h3>
                        </div>
                    </div>`;
    
        designs.innerHTML = clutter;            
    });
};

designsSection();