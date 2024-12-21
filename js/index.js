let counterValue = 0;
let timer = 10;
let timerInterval;

const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const timerElement = document.getElementById("timer");


function updateCounter() {
    counterElement.innerText = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = "green";
    } else if (counterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

// التحديث على التوقيت
function updateTimer() {
    timerElement.innerText = ` 00:00:${timer < 10 ? "0" + timer : timer};
`
    if (timer === 0) {
        clearInterval(timerInterval); // إيقاف التوقيت عند الوصول للصفر
    }
}

// الأحداث:
increaseButton.addEventListener("click", function() {
    counterValue++; // زيادة العداد
    updateCounter();
    resetTimer();
});

decreaseButton.addEventListener("click", function() {
    counterValue--; // نقصان العداد
    updateCounter();
    resetTimer();
});

resetButton.addEventListener("click", function() {
    counterValue = 0; // إعادة تعيين العداد
    timer = 10; // إعادة التوقيت
    updateCounter();
    updateTimer();
    clearInterval(timerInterval); // إيقاف التوقيت
    startTimer(); // بدء التوقيت مجددًا
});

// بدء التوقيت
function startTimer() {
    timerInterval = setInterval(function() {
        if (timer > 0) {
            timer--; // تقليل الوقت
            updateTimer();
        }
    }, 1000);
}

// إعادة بدء التوقيت
function resetTimer() {
    clearInterval(timerInterval);
    timer = 10; // إعادة التوقيت
    updateTimer();
    startTimer(); // بدء التوقيت
}

// بدء التوقيت عند تحميل الصفحة
startTimer();