// menu modals
const closeBtn = document.querySelectorAll('.close-button');
const dishes = document.querySelector('#dishes');
const drinks = document.querySelector('#drinks');
const desserts = document.querySelector('#desserts');
const overlay = document.getElementsByClassName('bg-menu-modal');
const dishMod = document.getElementById('dishes-modal');
const drinkMod = document.getElementById('drinks-modal');
const desMod = document.getElementById('desserts-modal');
const body = document.getElementsByTagName('body');
const modals = document.getElementsByClassName('menu-modal');
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const marker = document.querySelector("#marker");
const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in');
// -----------------------------------------------------
// nav tracker

const options = {
    threshold: 0.4
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const idName = entry.target.id;
        const activeAnchor = document.querySelector(`[data-page='${idName}']`);
        if(!entry.isIntersecting) {
            activeAnchor.classList.remove('active-link');
        }else {
            activeAnchor.classList.add('active-link');
        }
        // console.log(idName);
    })
}

observer.observe(header);

sections.forEach(section => {
    observer.observe(section);
});



// -----------------------------------------------------
// glass fade-in animation
const appearOptions = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            entry.target.classList.remove('appear');
            // return;
        }else {
            entry.target.classList.add('appear');
            // appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// -----------------------------------------------------
// slide-in animation

const slideAppearOptions = {
    threshold: 0.2
};

const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            entry.target.classList.remove('to-position');
            // return;
        }else {
            entry.target.classList.add('to-position');
            // appearOnScroll.unobserve(entry.target);
        }
    })
}, slideAppearOptions);

sliders.forEach(slider => {
    slideOnScroll.observe(slider);
})


// -----------------------------------------------------
//opening and closing menu modals

function open(m) {
    overlay[0].style.display = "flex";
    overlay[0].style.pointerEvents = "all";
    modals[m].style.display = "block";
}
function close(){
    overlay[0].style.display = "none";
    overlay[0].style.pointerEvents = "none";
    for (var i = 0; i<modals.length; i++) {
		modals[i].style.display ="none";
	}
}

    dishes.addEventListener("click", function(){
        open(0);
    });
    drinks.addEventListener("click", function(){
        open(1);
    });
    desserts.addEventListener("click", function(){
        open(2);
    });

    $(overlay[0]).click(close);
    $(modals).click(function(event){
        event.stopPropagation();
    });

    closeBtn.forEach(button =>{
        button.addEventListener("click", close);
    });  
    
// -----------------------------------------------------
// menu tilt effect
VanillaTilt.init(document.querySelectorAll(".glass"), {
    max: 25,
    speed: 400,
    // glare: true,
    // "max-glare": 0.5,
    scale: 1.1
});

// -----------------------------------------------------
//animations when scrolling


const activePage = window.location.hash;
console.log(activePage);
