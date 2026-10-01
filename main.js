function startDemo() {

    window.location.href = "bank.html";

}


function scrollToScenarios() {

    const section =
        document.getElementById("scenarios");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}