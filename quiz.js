const questions = [

    {
        question:
            "You receive this message from someone claiming to be your bank. What is the biggest warning sign?",

        scenario: `
            <div class="fake-message">

                <strong>⚠️ BANK SECURITY ALERT</strong>

                <p>
                    Your account will be suspended today.
                    Verify immediately to avoid losing access.
                </p>

                <span class="fake-url">
                    https://secure-bank-verification.example
                </span>

            </div>
        `,

        answers: [
            "The message creates urgency and uses an unfamiliar domain",
            "Banks sometimes send messages",
            "The message contains the word security",
            "There is a website link"
        ],

        correct: 0,

        explanation:
            "Correct. Urgency combined with an unfamiliar domain is a strong warning sign. Verify banking alerts through the official app or website."
    },


    {
        question:
            "A person claiming to be your friend asks for the OTP sent to your phone. What should you do?",

        scenario: `
            <div class="fake-message">

                <strong>Rahul:</strong>

                <p>
                    Bro, I accidentally used your number.
                    Send me the OTP you just received.
                </p>

            </div>
        `,

        answers: [
            "Send the OTP because it is your friend",
            "Ask what the OTP says",
            "Do not share it and verify the request separately",
            "Forward the message to another person"
        ],

        correct: 2,

        explanation:
            "Correct. Verification codes should not be shared with other people. Contact the person separately if you need to verify the situation."
    },


    {
        question:
            "You receive an APK update link through a messaging app. Which action is safer?",

        scenario: `
            <div class="fake-message">

                <strong>URGENT APP UPDATE</strong>

                <p>
                    Install the latest security update immediately.
                </p>

                <span class="fake-url">
                    download-update.example/app-update.apk
                </span>

            </div>
        `,

        answers: [
            "Install it immediately",
            "Send it to friends",
            "Get the update through the official app store",
            "Disable security warnings first"
        ],

        correct: 2,

        explanation:
            "Correct. Applications and updates should normally be obtained from trusted official distribution channels."
    },


    {
        question:
            "A Telegram group promises that ₹10,000 can become ₹50,000 with guaranteed returns. What should you notice?",

        scenario: `
            <div class="fake-message">

                <strong>🔥 VIP INVESTMENT SIGNAL</strong>

                <p>
                    Guaranteed 5X return.
                    Limited slots available today!
                </p>

            </div>
        `,

        answers: [
            "Guaranteed high returns and urgency",
            "The group has many members",
            "The message uses emojis",
            "The administrator is online"
        ],

        correct: 0,

        explanation:
            "Correct. Guaranteed returns, extreme profit claims and pressure to act quickly are important warning signs."
    },


    {
        question:
            "You are told that you won a smartphone giveaway that you never entered. What should you do?",

        scenario: `
            <div class="fake-message">

                <strong>🎉 CONGRATULATIONS!</strong>

                <p>
                    You have won our premium smartphone.
                    Claim within 10 minutes.
                </p>

                <span class="fake-url">
                    prize-claim.example
                </span>

            </div>
        `,

        answers: [
            "Click immediately",
            "Verify the promotion through the official organizer",
            "Send your ID immediately",
            "Pay the delivery fee first"
        ],

        correct: 1,

        explanation:
            "Correct. Unexpected prizes should be independently verified through the organization's official channels."
    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


function loadQuestion() {

    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("question").textContent =
        q.question;

    document.getElementById("scenarioContent").innerHTML =
        q.scenario;

    document.querySelector(".question-type").textContent =
        `SCENARIO ${String(currentQuestion + 1).padStart(2, "0")}`;

    document.getElementById("progress").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-button";

        button.textContent =
            answer;

        button.onclick = () =>
            selectAnswer(index);

        answers.appendChild(button);

    });

    const feedback =
        document.getElementById("feedback");

    feedback.className =
        "feedback hidden";

    feedback.innerHTML = "";

    document.getElementById("nextButton")
        .classList.add("hidden");
}


function selectAnswer(selected) {

    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === q.correct) {

            button.classList.add("correct");

        }

        if (index === selected &&
            index !== q.correct) {

            button.classList.add("wrong");

        }

    });


    const feedback =
        document.getElementById("feedback");

    if (selected === q.correct) {

        score++;

        document.getElementById("score")
            .textContent = score;

        feedback.className =
            "feedback correct";

        feedback.innerHTML =
            `<strong>✓ Correct</strong><br>${q.explanation}`;

    } else {

        feedback.className =
            "feedback wrong";

        feedback.innerHTML =
            `<strong>⚠ Not quite</strong><br>${q.explanation}`;
    }


    document.getElementById("nextButton")
        .classList.remove("hidden");
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

        return;
    }

    loadQuestion();
}


function showResult() {

    document.getElementById("quizCard")
        .classList.add("hidden");

    document.querySelector(".quiz-intro")
        .classList.add("hidden");

    document.getElementById("resultCard")
        .classList.remove("hidden");

    document.getElementById("finalScore")
        .textContent = score;


    const resultMessage =
        document.getElementById("resultMessage");


    if (score === 5) {

        resultMessage.textContent =
            "Excellent awareness. You identified the key warning signs across all scenarios.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "Good awareness. You identified several important warning signs, but there are still a few areas to review.";

    } else {

        resultMessage.textContent =
            "This is exactly why awareness training matters. Review the scenarios and look carefully for urgency, unusual requests, suspicious links and impersonation.";

    }

}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("score")
        .textContent = "0";

    document.getElementById("resultCard")
        .classList.add("hidden");

    document.querySelector(".quiz-intro")
        .classList.remove("hidden");

    document.getElementById("quizCard")
        .classList.remove("hidden");

    loadQuestion();
}


loadQuestion();
showAwareness('sms')
showAwareness('sms-safe')
showAwareness('sms-danger')
toggleFlags()
resetFlags()
openDemoPage('index.html')