//=========================================
// HEADER SCROLL
//=========================================


const header = document.querySelector(".header");


if(header){

    window.addEventListener("scroll",()=>{


        if(window.scrollY > 50){


            header.style.background =
            "rgba(255,255,255,.9)";


            header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";


        }else{


            header.style.background =
            "rgba(255,255,255,.45)";


            header.style.boxShadow =
            "none";


        }


    });

}






//=========================================
// FADE IN ANIMATION
//=========================================


const fadeElements =
document.querySelectorAll(".fade");



const fadeObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},{
    threshold:.15
});



fadeElements.forEach(element=>{


    fadeObserver.observe(element);


});







//=========================================
// SMOOTH SCROLL
//=========================================


document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{


    anchor.addEventListener(
    "click",
    (e)=>{


        const target =
        document.querySelector(
        anchor.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







//=========================================
// IMAGE HOVER EFFECT
//=========================================


const photos =
document.querySelectorAll(
".mainPhoto,.subPhoto"
);



photos.forEach(photo=>{


    photo.addEventListener(
    "mouseenter",
    ()=>{


        photo.style.transform =
        "scale(1.03)";


    });


    photo.addEventListener(
    "mouseleave",
    ()=>{


        photo.style.transform =
        "scale(1)";


    });


});







//=========================================
// HERO FLOAT EFFECT
//=========================================


const heroImage =
document.querySelector(
".seaHeroImage img,.hero img"
);



if(heroImage){


    window.addEventListener(
    "mousemove",
    (e)=>{


        const x =
        (e.clientX -
        window.innerWidth/2)
        /80;



        const y =
        (e.clientY -
        window.innerHeight/2)
        /80;



        heroImage.style.transform =
        `translate(${x}px,${y}px)`;


    });


}







//=========================================
// ACTIVE MENU
//=========================================


const currentPage =
location.pathname.split("/")
.pop();



document.querySelectorAll(
".nav a"
).forEach(link=>{


    const href =
    link.getAttribute("href");


    if(href === currentPage){


        link.classList.add("active");


    }


});







//=========================================
// PAGE LOADING
//=========================================


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
    "loaded"
    );


});