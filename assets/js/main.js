const menu = document.getElementById("nav-list");
const main = document.getElementById("main");
const upBtn = document.getElementById('up-btn');
const eduBtn = document.getElementById("educ-btn");
const workBtn = document.getElementById("work-btn");
const webBtn = document.getElementById("web-btn");
const appBtn = document.getElementById("app-btn");
const eduContainer = document.getElementById("educ-container");
const workContainer = document.getElementById("work-container");
const aboutContainer = document.getElementById("about");
const skillsContainer = document.getElementById("skills");
const frontEndContainer = document.getElementById("front-end");
const backEndContainer = document.getElementById("back-end");
const AppDevContainer = document.getElementById("app-dev");
const devOpsContainer = document.getElementById("dev-ops");
const projectGrid = document.getElementById("project-grid");
const skillsImages = document.getElementById("skills-images");
const webdevContainer = document.getElementById("web-dev-projects");
const appdevContainer = document.getElementById("app-dev-projects");

function log(params) {
    console.log(params);
}
function kPrettyPrint(params) {
    console.log(JSON.stringify(params, null, 4));
}

function menuBtnFunction() {
    if (document.getElementsByTagName('html')[0].offsetWidth < 992) {
        document.getElementsByClassName('menu-btn-1')[0].classList.toggle("active");
        menu.classList.toggle("tog-h");
        main.classList.toggle("d-none");
    }
}

var showupBtn = true

const upBtnListener = document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= 200) {
        if (upBtn.classList.contains('d-none')) {
            upBtn.classList.remove('d-none');
        }
    } else {
        if (upBtn.classList.contains('d-none') === false) {
            upBtn.classList.toggle('d-none');
        }
    }
}
);

upBtn.onclick = () => {
    document.documentElement.scrollTop = 0;
}

function scrollToFunc(id) {
    document.documentElement.scrollTop = document.getElementById(id).offsetTop
}

function toggleQual() {
    eduBtn.classList.toggle("active");
    workBtn.classList.toggle("active");
    eduContainer.classList.toggle("d-none");
    workContainer.classList.toggle("d-none");
}


var animateProgress = true;
var animateSkills = true;

const progressAnimationListener = document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= (skillsContainer.offsetTop - 300)) {
        if (animateProgress) {
            animateProgressF();
            animateProgress = false;
            clearInterval(progressAnimationListener);
        }
    }
});

const aboutAnimationListener = document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= (aboutContainer.offsetTop - 300)) {
        if (animateSkills) {
            animateSkillsF();
            animateSkills = false;
            clearInterval(aboutAnimationListener);
        }
    }
});

function animateProgressF() {
    const progress = document.getElementById('skills').querySelectorAll('progress');

    progress.forEach((progress) => {

        const _PRG = document.getElementById(progress.id), _OUT = document.querySelector(`[for=${progress.id}]`), K = 2, TMAX = K * _PRG.getAttribute('data-value');
        function load(t = 0) {
            if (t <= TMAX) {
                if (t % K === 0) {
                    _OUT.innerHTML = `${t / K}%`;
                    _PRG.value = t / K;
                }
                requestAnimationFrame(load.bind(this, t + 1));
            }
        }
        load();
    })
}
function animateSkillsF() {
    const elements = document.getElementById('about').querySelectorAll('.blockHero');
    elements.forEach((obj) => {
        counterAnim(obj, 0, parseInt(obj.getAttribute('data-value')), obj.getAttribute('data-duration') ?? 1000);
    })
}

const counterAnim = (element, start = 0, end, duration = 1000) => {
    const target = element;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

function toggleProject() {
    webBtn.classList.toggle("my-active");
    appBtn.classList.toggle("my-active");
    webdevContainer.classList.toggle("d-none");
    appdevContainer.classList.toggle("d-none");
}
var swiper = new Swiper(".portfolio-swiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    disableOnInteraction: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




var typingOptions = {
    strings: ['Full Stack Developer', 'App Developer', 'UI/UX Designer', 'Freelancer', 'Open Source Contributor',],
    typeSpeed: 80,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 700,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    showCursor: false,
    autoInsertCss: true,
};

var typed = new Typed('#whatido', typingOptions);


// MESSAGE FORM JAVASCRIPT
const fields = ['f-name', 'f-email', 'f-subject', 'f-message'];

function emptyValue(id) {
    document.getElementById(id).value = "";
}

function handleFormSubmit() {
    fields.forEach(id => emptyValue(id));
    Swal.fire(
        'Message Sent!',
        'Please wait for a while, I will get back to you soon.',
        'success'
    );
}
