/* =========================================================
   CYBERSECURITY AWARENESS LAB
   main.js
========================================================= */


/* =========================================================
   OPEN DEMO PAGE
========================================================= */

function openDemoPage(page) {

    if (page) {
        window.location.href = page;
    }

}


/* =========================================================
   START DEMO
========================================================= */

function startDemo() {

    window.location.href = "bank.html";

}


/* =========================================================
   SCROLL TO SCENARIOS
========================================================= */

function scrollToScenarios() {

    const section =
        document.getElementById("scenarios");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   SHOW / HIDE RED FLAGS
========================================================= */

function toggleFlags() {

    const flags =
        document.getElementById("redFlags");

    if (flags) {

        flags.classList.toggle("show");

    }

}


/* =========================================================
   RESET RED FLAGS
========================================================= */

function resetFlags() {

    const flags =
        document.getElementById("redFlags");

    if (flags) {

        flags.classList.remove("show");

    }

}
