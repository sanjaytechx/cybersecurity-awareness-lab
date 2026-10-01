/* =========================================================
   CYBERSECURITY AWARENESS LAB
   scenarios.js

   Safe awareness simulations only.

   No credentials, OTPs, payment data, or files are
   collected, stored, or transmitted.
========================================================= */


/* =========================================================
   GENERAL AWARENESS RESPONSE
========================================================= */

function showAwareness(type) {

    const result = document.getElementById("awarenessResult");

    if (!result) return;


    const messages = {


        /* =================================================
           BANKING PHISHING
        ================================================== */

        bank: {
            title: "🛑 Phishing Website Detected",
            text:
                "This is a simulated banking phishing page. The suspicious domain, urgent verification request, and unexpected login prompt are important warning signs. In a real situation, open your bank's official app or manually enter its known website instead of following the message link."
        },


        /* =================================================
           PHISHING EMAIL
        ================================================== */

        email: {
            title: "⚠️ Suspicious Email",
            text:
                "The message uses urgency and asks you to verify your account through a link. Check the sender address, destination domain, wording, and whether you actually expected the message before taking action."
        },


        /* =================================================
           SMS / SMISHING
        ================================================== */

        sms: {
            title: "⚠️ Suspicious SMS Detected",
            text:
                "This simulated SMS uses urgency, an unexpected account alert, and an unfamiliar link to encourage immediate action. Instead of clicking the link, verify the alert through the organization's official app or manually enter its known website."
        },


        "sms-safe": {
            title: "✓ Good Decision",
            text:
                "Verifying an unexpected SMS through an official app or known website is a safer approach. Avoid using links provided in suspicious messages."
        },


        "sms-danger": {
            title: "🛑 Risky Action",
            text:
                "Clicking an unexpected link can take you to a suspicious website or unwanted destination. Stop and verify the message independently before taking action."
        },


        /* =================================================
           WHATSAPP REWARD
        ================================================== */

        whatsapp: {
            title: "🎁 Suspicious Reward Message",
            text:
                "Unexpected rewards are commonly used as bait. Before clicking anything, verify the promotion through the organization's official website or app. Do not trust a reward simply because the message uses familiar branding."
        },


        /* =================================================
           OTP
        ================================================== */

        "otp-safe": {
            title: "✓ Good Decision",
            text:
                "Never share a verification code just because someone asks for it. Contact the person through another trusted method and verify the situation first."
        },


        "otp-danger": {
            title: "🛑 Stop",
            text:
                "A verification code is intended to confirm an action on an account or service. Sharing it with another person can allow an attacker to complete an account takeover attempt."
        },


        otp: {
            title: "🛑 OTP Request Detected",
            text:
                "An unexpected request for your OTP is a major warning sign. Verification codes should remain private. If someone claims they need your code, verify the situation independently."
        },


        /* =================================================
           QR SCAM
        ================================================== */

        qr: {
            title: "⚠️ QR Code Does Not Mean Trust",
            text:
                "A QR code can direct you to a website, payment flow, or other destination. Before scanning, consider who provided it, why you received it, and where it is supposed to lead."
        },


        /* =================================================
           APK
        ================================================== */

        apk: {
            title: "🛑 Unknown APK Detected",
            text:
                "This is a simulated APK update scenario. In a real situation, avoid installing applications received through unexpected messages or unknown websites. Use trusted official application stores and verify the publisher."
        },


        /* =================================================
           SOCIAL MEDIA
        ================================================== */

        social: {
            title: "🔍 Verify the Account",
            text:
                "Impersonation accounts may copy usernames, profile pictures, descriptions, and branding. Check the exact username, account history, official links, and other independent signals before trusting the account."
        },


        instagram: {
            title: "🔍 Possible Impersonation",
            text:
                "A social media account can look convincing while still being fake. Compare the username and profile information with the organization's or creator's official channels."
        },


        /* =================================================
           TELEGRAM INVESTMENT
        ================================================== */

        investment: {
            title: "⚠️ Investment Scam Warning Signs",
            text:
                "Guaranteed returns, unusually high profits, limited-time pressure, and unknown administrators are important warning signs. Investment opportunities should be independently verified before any money is sent."
        },


        telegram: {
            title: "⚠️ Suspicious Investment Promotion",
            text:
                "A large group or many members do not prove that an investment opportunity is legitimate. Verify the organization, regulatory information, risks, and claims through independent sources."
        },


        /* =================================================
           GIVEAWAY
        ================================================== */

        giveaway: {
            title: "🎁 Stop and Verify",
            text:
                "If you never entered a giveaway, an unexpected winning message deserves extra scrutiny. Verify the promotion through the organizer's official channels and never pay unexpected fees simply to claim a prize."
        },


        /* =================================================
           GENERIC LINK
        ================================================== */

        link: {
            title: "🔗 Inspect the Link First",
            text:
                "Before opening an unexpected link, inspect the domain carefully. Look for misspellings, unusual subdomains, unfamiliar domains, shortened links, and requests for sensitive information."
        },


        /* =================================================
           URGENCY
        ================================================== */

        urgency: {
            title: "⏱️ Urgency Is a Warning Sign",
            text:
                "Scammers often create pressure by claiming that an account will be blocked, a reward will expire, or an opportunity is available for only a short time. Pause and verify instead of reacting immediately."
        }

    };


    const data = messages[type];


    /* =====================================================
       FALLBACK
    ====================================================== */

    if (!data) {

        result.innerHTML = `
            <div class="awareness-result">

                <h3>⚠️ Awareness Check</h3>

                <p>
                    This action is part of a cybersecurity
                    awareness simulation. Always stop and
                    verify unexpected requests before acting.
                </p>

                <button onclick="closeAwareness()">
                    Continue Learning
                </button>

            </div>
        `;

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;
    }


    /* =====================================================
       DISPLAY RESULT
    ====================================================== */

    result.innerHTML = `
        <div class="awareness-result">

            <h3>${data.title}</h3>

            <p>${data.text}</p>

            <button onclick="closeAwareness()">
                Continue Learning
            </button>

        </div>
    `;


    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   CLOSE AWARENESS MESSAGE
========================================================= */

function closeAwareness() {

    const result = document.getElementById("awarenessResult");

    if (!result) return;

    result.innerHTML = "";

}


/* =========================================================
   RED FLAGS
========================================================= */

function toggleFlags() {

    const flags = document.getElementById("redFlags");

    if (!flags) return;


    if (
        flags.style.display === "none" ||
        flags.style.display === ""
    ) {

        flags.style.display = "block";

    } else {

        flags.style.display = "none";

    }

}


/* =========================================================
   RESET RED FLAGS
========================================================= */

function resetFlags() {

    const flags = document.getElementById("redFlags");

    if (!flags) return;

    flags.style.display = "none";

}


/* =========================================================
   SHOW DEMO ALERT
========================================================= */

function showDemoAlert(message) {

    const defaultMessage =
        "This is a cybersecurity awareness simulation. No real information has been submitted.";

    alert(message || defaultMessage);

}


/* =========================================================
   SAFE DEMO FORM HANDLER
========================================================= */

function handleDemoSubmit(event) {

    if (event) {

        event.preventDefault();

    }


    showAwareness("bank");

    return false;

}


/* =========================================================
   SAFE LOGIN SIMULATION
========================================================= */

function simulateLogin() {

    showDemoAlert(
        "Simulation only.\n\n" +
        "No username or password has been collected, " +
        "stored, or transmitted.\n\n" +
        "The purpose of this page is to demonstrate " +
        "how a suspicious login page may look."
    );

}


/* =========================================================
   SAFE OTP SIMULATION
========================================================= */

function simulateOTP() {

    showDemoAlert(
        "Simulation only.\n\n" +
        "Never share an OTP with another person.\n\n" +
        "This demonstration does not collect or verify " +
        "any real OTP."
    );

}


/* =========================================================
   SAFE QR SIMULATION
========================================================= */

function simulateQR() {

    showAwareness("qr");

}


/* =========================================================
   SAFE APK SIMULATION
========================================================= */

function simulateAPK() {

    showDemoAlert(
        "Simulation only.\n\n" +
        "No APK has been downloaded or installed.\n\n" +
        "In a real situation, obtain applications and " +
        "updates from trusted official sources."
    );

}


/* =========================================================
   SAFE LINK SIMULATION
========================================================= */

function simulateLink() {

    showAwareness("link");

}


/* =========================================================
   SAFE REWARD SIMULATION
========================================================= */

function simulateReward() {

    showAwareness("whatsapp");

}


/* =========================================================
   SAFE GIVEAWAY SIMULATION
========================================================= */

function simulateGiveaway() {

    showAwareness("giveaway");

}


/* =========================================================
   SAFE INVESTMENT SIMULATION
========================================================= */

function simulateInvestment() {

    showAwareness("investment");

}


/* =========================================================
   SAFE SOCIAL MEDIA SIMULATION
========================================================= */

function simulateSocialAccount() {

    showAwareness("social");

}


/* =========================================================
   HIGHLIGHT RED FLAGS
========================================================= */

function highlightRedFlag(element) {

    if (!element) return;

    element.classList.toggle("flag-highlight");

}


/* =========================================================
   RESET HIGHLIGHTED RED FLAGS
========================================================= */

function clearRedFlagHighlights() {

    const highlighted =
        document.querySelectorAll(".flag-highlight");


    highlighted.forEach(element => {

        element.classList.remove("flag-highlight");

    });

}


/* =========================================================
   SAFE DEMO NAVIGATION
========================================================= */

function openDemoPage(url) {

    /*
        Only allow local HTML pages.

        This prevents the awareness lab from accidentally
        becoming a redirect mechanism to external websites.
    */

    if (!url) return;


    const allowedPages = [

        "index.html",
        "bank.html",
        "email.html",
        "sms.html",
        "whatsapp.html",
        "otp.html",
        "qr.html",
        "apk.html",
        "instagram.html",
        "telegram.html",
        "giveaway.html",
        "quiz.html"

    ];


    if (allowedPages.includes(url)) {

        window.location.href = url;

    } else {

        showDemoAlert(
            "Navigation blocked.\n\n" +
            "This awareness lab only allows its own local demonstration pages."
        );

    }

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
        Automatically hide red flags when a scenario loads.
    */

    const flags =
        document.getElementById("redFlags");


    if (flags) {

        flags.style.display = "none";

    }

});