// For Slider-1  
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    
    let currentSlide = 0; 

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentSlide++; 
        if (currentSlide >= slides.length) {
            currentSlide = 0; 
        }
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide--; 
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    });

// Cards waala slider

const achTrack = document.querySelector('.slider-ach-track');
const achNext = document.querySelector('.next-ach'); 
const achPrev = document.querySelector('.prev-ach');
const achDots = document.querySelectorAll('.dot');

let achIndex = 0;

function updateAchSlider(index) {
    achTrack.style.transform = `translateX(-${index * 100}%)`;
    
    achDots.forEach(dot => dot.classList.remove('active'));
    achDots[index].classList.add('active');
    
    achIndex = index;
}

achNext.addEventListener('click', () => {
    if (achIndex < 1) { 
        updateAchSlider(achIndex + 1);
    } else {
        updateAchSlider(0);
    }
});

achPrev.addEventListener('click', () => {
    if (achIndex > 0) {
        updateAchSlider(achIndex - 1);
    } else {
        updateAchSlider(1);
    }
});

achDots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateAchSlider(i));
});

// Events gallery slider
const galSlides = document.querySelectorAll('.gal-slide');
const galDots = document.querySelectorAll('.g-dot');
const galItems = document.querySelectorAll('.event-item');
const galNext = document.querySelector('.gal-next');
const galPrev = document.querySelector('.gal-prev');

let galIndex = 3;

function updateGallery(index) {
    
    galSlides.forEach(s => s.classList.remove('active'));
    galSlides[index].classList.add('active');

    galDots.forEach(d => d.classList.remove('active'));
    galDots[index].classList.add('active');

    galItems.forEach(item => item.classList.remove('active'));
    galItems[index].classList.add('active');

    galIndex = index;
}

galNext.addEventListener('click', () => {
    let next = (galIndex + 1) % galSlides.length;
    updateGallery(next);
});

galPrev.addEventListener('click', () => {
    let prev = (galIndex - 1 + galSlides.length) % galSlides.length;
    updateGallery(prev);
});

galItems.forEach((item, i) => {
    item.addEventListener('click', () => updateGallery(i));
});

galDots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateGallery(i));
});

// Year timeline waala slider

const milestoneSlides = document.querySelectorAll('.m-slide');
const yearItems = document.querySelectorAll('.year-item');
const mNext = document.querySelector('.m-next');
const mPrev = document.querySelector('.m-prev');

let mIndex = 5;

function updateMilestone(index) {

    milestoneSlides.forEach(s => s.classList.remove('active'));
   
    if(milestoneSlides[index]) milestoneSlides[index].classList.add('active');

    yearItems.forEach(y => y.classList.remove('active'));
    yearItems[index].classList.add('active');

    mIndex = index;
}

mNext.addEventListener('click', () => {
    let next = (mIndex + 1) % yearItems.length;
    updateMilestone(next);
});

mPrev.addEventListener('click', () => {
    let prev = (mIndex - 1 + yearItems.length) % yearItems.length;
    updateMilestone(prev);
});

yearItems.forEach((year, i) => {
    year.addEventListener('click', () => updateMilestone(i));
});