
/* ========================================
   CAR DATA
======================================== */

const cars = {

    suv: {
        image: "anim-porshe.PNG",

        name: "Porsche 911 GT3",

        description:
            "Идеальное сочетание мощности, динамики и спортивного характера.",

        number: "01",

        power: "510",
        seats: "2",
        drive: "RWD"
    },


    sedan: {
        image: "anim-maybach.png",

        name: "Mercedes-Maybach S 680",

        description:
            "Изысканная роскошь, исключительный комфорт и плавность каждой поездки.",

        number: "02",

        power: "612",
        seats: "5",
        drive: "AWD"
    },


    sport: {
        image: "anim-TRX.PNG",

        name: "Dodge RAM TRX",

        description:
            "Брутальная мощь, выдающаяся проходимость и незабываемые впечатления.",

        number: "03",

        power: "702",
        seats: "5",
        drive: "4WD"
    },


    electric: {
        image: "anim-cyber.PNG",

        name: "Tesla Cybertruck",

        description:
            "Инновационный дизайн, мгновенное ускорение и технологии нового поколения.",

        number: "04",

        power: "845",
        seats: "5",
        drive: "AWD"
    }

};


/* ========================================
   ELEMENTS
======================================== */

const carImage =
    document.getElementById("carImage");

const carName =
    document.getElementById("carName");

const carDescription =
    document.getElementById("carDescription");

const carNumber =
    document.getElementById("carNumber");

const carPower =
    document.getElementById("carPower");

const carSeats =
    document.getElementById("carSeats");

const carDrive =
    document.getElementById("carDrive");

const buttons =
    document.querySelectorAll(".car-type");




/* ========================================
   CURRENT CAR
======================================== */

let currentCar = "suv";

let isAnimating = false;


/* ========================================
   CHANGE CAR
======================================== */

function changeCar(type) {

    if (type === currentCar) {
        return;
    }

    if (isAnimating) {
        return;
    }

    isAnimating = true;

    const newCar = cars[type];

    /* =====================================
       BUTTON
    ===================================== */

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    const selectedButton = document.querySelector(
        `[data-car="${type}"]`
    );

    selectedButton.classList.add("active");


    /* =====================================
       ELEMENTS
    ===================================== */

    const heroText = document.querySelector(".hero-text");
    const carInfo = document.querySelector(".car-info");


    /* =====================================
       OLD CAR + OLD TEXT LEAVE
    ===================================== */

    carImage.classList.remove("active");
    carImage.classList.add("exit");

    heroText?.classList.remove("text-enter");
    carInfo?.classList.remove("text-enter");

    heroText?.classList.add("text-exit");
    carInfo?.classList.add("text-exit");


    /* =====================================
       WAIT
    ===================================== */

    setTimeout(() => {

        /* =================================
           CHANGE IMAGE
        ================================= */

        carImage.src = newCar.image;
        carImage.alt = newCar.name;


        /* =================================
           CHANGE INFORMATION
        ================================= */

        carName.textContent = newCar.name;
        carDescription.textContent = newCar.description;
        carNumber.textContent = newCar.number;
        carPower.textContent = newCar.power;
        carSeats.textContent = newCar.seats;
        carDrive.textContent = newCar.drive;


        /* =================================
           NEW CAR ENTER
        ================================= */

        carImage.classList.remove("exit");
        carImage.classList.add("enter");


        /* =================================
           NEW TEXT PREPARE
        ================================= */

        heroText?.classList.remove("text-exit");
        carInfo?.classList.remove("text-exit");

        heroText?.classList.add("text-enter");
        carInfo?.classList.add("text-enter");


        /* =================================
           START ANIMATION
        ================================= */

        // Принудительная перерисовка для Safari iOS
        heroText?.offsetHeight;
        carInfo?.offsetHeight;

        requestAnimationFrame(() => {

            carImage.classList.remove("enter");
            carImage.classList.add("active");

            heroText?.classList.remove("text-enter");
            carInfo?.classList.remove("text-enter");

            currentCar = type;

            setTimeout(() => {
                isAnimating = false;
            }, 700);

        });

    }, 450);
}


/* ========================================
   BUTTON EVENTS
======================================== */

buttons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const type =
                button.dataset.car;

            changeCar(type);

        }
    );

});


/* ========================================
   BOOK BUTTON
======================================== */


