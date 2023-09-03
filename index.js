window.addEventListener("DOMContentLoaded", () => {
    
    const entities = [
        {
            city: "Rostov-on-Don LCD admiral",
            area: "81 m2",
            time: "3.5 months",
            img: "./img/slider-first.png"
        },
        {
            city: "Sochi Thieves",
            area: "105 m2",
            time: "4 months",
            img: "./img/slider-second.png"
        },
        {
            city: "Rostov-on-Don Patriotic",
            area: "93 m2",
            time: "3 months",
            img: "./img/slider-third.png"
        }
    ]

    const dots = document.querySelectorAll(".slider_dot");
    const imageTitles = document.querySelectorAll(".slider_image_title");
    const prev = document.querySelector(".slider_prev");
    const next = document.querySelector(".slider_next");
    let slideIndex = 0;

    const changeContent = (data) => {
        document.querySelector("#city").innerHTML = `${data.city}`;
        document.querySelector("#area").innerHTML = `${data.area}`;
        document.querySelector("#time").innerHTML = `${data.time}`;
        document.querySelector("#img").src = `${data.img}`;
    }

    const changeDot = () => {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    const changeActiveTitle = () => {
        imageTitles.forEach(title => title.classList.remove("active"));
        imageTitles[slideIndex].classList.add("active");
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            changeContent(entities[index]);
            slideIndex = index;
            changeDot();
            changeActiveTitle();
        });
    });

    const onNextSlider = () => {
        if (slideIndex === entities.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        changeContent(entities[slideIndex]);
        changeDot();
        changeActiveTitle();
    }

    const onPrevSlider = () => {
        if (slideIndex === 0) {
            slideIndex = entities.length - 1;
        } else {
            slideIndex--;
        }
        changeContent(entities[slideIndex]);
        changeDot();
        changeActiveTitle();
    }

    next.addEventListener("click", onNextSlider);
    prev.addEventListener("click", onPrevSlider);
});