"use strict";

(function () {
    //Variablen
    var counter = 0,
        timeout,
        timerDelay = 1000,
        plusCounter = document.querySelector("#plusBtn"),
        minusCounter = document.querySelector("#minusBtn"),
        counterResult = document.querySelector("#result"),
        startCounter = document.querySelector("#startBtn"),
        stoppCounter = document.querySelector("#stopBtn"),
        clearCounter = document.querySelector("#clearBtn"),
        slider = document.querySelector("#customRange1"),
        outputDelay = document.querySelector("#customRangeOutput");

    // slider = docuemnt.querySelector("#customRange1");

    //Update counter value
    function updateCounter(value) {
        counterResult.innerHTML = value;
    }

    //adds one to the counter
    function addNumber() {
        counter++;
        updateCounter(counter);
    }

    //Subtract one from the counter
    function fewerNumber() {
        updateCounter(counter--);
    }

    //Automatische Counter Zählung
    function automateNumber() {
        stopNumber();
        //timeout setzt das Interval und nimmt addNumber als Zählung und timerDelay setzt an, wie oft das Interval ausgeführt wird.
        timeout = setInterval(addNumber, timerDelay);
    }

    //Zählung wird gestoppt durch clearTimeout --> Variable timout muss aufgerufen werden, da diese die methode setTimeout
    function stopNumber() {
        clearInterval(timeout);
        console.log(timeout);
    }

    //Zuerst wird Zählung gestoppt durch Funktion stopNumber();
    //Dann counter auf 0 gesetzt;
    //Dann wird der Wert vom counter durch Funktionaufruf updateCounter(counter) ersetzt;

    function clearNumber() {
        stopNumber();
        counter = " " + 0;
        clearDelay();
        updateCounter(counter);
    }

    function clearDelay() {
        slider.value = 1000;
        outputDelay.innerHTML = 1000;
    }

    //Aktualisert die Zahl des Delay-Sliders
    function updateTimerDelayOutput() {
        outputDelay.innerHTML = timerDelay;
    }

    plusCounter.addEventListener("click", addNumber);
    minusCounter.addEventListener("click", fewerNumber);
    startCounter.addEventListener("click", automateNumber);
    stoppCounter.addEventListener("click", stopNumber);
    clearCounter.addEventListener("click", clearNumber);

    //Change = beim loslassen ; input = sofort aktualisert
    slider.addEventListener("input", function () {
        timerDelay = slider.value;
        automateNumber();
        updateTimerDelayOutput();
        console.log(this.value);
    });
})();
