let bgLoading = document.getElementById("bgLoading")
let bgLoadingCont = document.querySelector("#bgLoading .loading-container")
window.onload = () => {
    setTimeout(function() {
        bgLoadingCont.style.opacity = "0";
        bgLoading.style.pointerEvents = "none";
        bgLoading.style.backdropFilter = "blur(0px)";
        setTimeout(function() {
            bgLoadingCont.style.display = "none";
            bgLoading.style.display = "none";
        }, 600)
    }, 800)
}

const sr = ScrollReveal (
    {
        distance: '40px',
        duration: 1500,
        delay: 200,
        reset: true
    }
);

sr.reveal('.settings-box',{origin: 'top'});
sr.reveal('.genral-box',{origin: 'top'});
sr.reveal('.security',{origin: 'top'});
sr.reveal('.backup-box',{origin: 'top'});
sr.reveal('.welcome',{origin: 'top'});
sr.reveal('.quick-draft',{origin: 'top'});
sr.reveal('.targets',{origin: 'top'});
sr.reveal('.tickets',{origin: 'top'});
sr.reveal('.news',{origin: 'top'});
sr.reveal('.tasks',{origin: 'top'});
sr.reveal('.top-search',{origin: 'top'});
sr.reveal('.uploads',{origin: 'top'});
sr.reveal('.project',{origin: 'top'});
sr.reveal('.reminders',{origin: 'top'});
sr.reveal('.post',{origin: 'top'});
sr.reveal('.social',{origin: 'top'});
sr.reveal('.project-table',{origin: 'top'});