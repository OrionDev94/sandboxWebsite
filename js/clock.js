"use strict";

(function () {
    var setHours = document.querySelector("#clockHours"),
        setMinutes = document.querySelector("#clockMinutes"),
        setSeconds = document.querySelector("#clockSeconds"),
        setMilliseconds = document.querySelector("#clockMilliseconds"),
        standardBtn = document.querySelector("#standardBtn"),
        utcBtn = document.querySelector("#utcBtn"),
        europeBtn = document.querySelector("#europeBtn"),
        cetBtn = document.querySelector("#cetBtn"),
        ptBtn = document.querySelector("#ptBtn"),
        jstBtn = document.querySelector("#jstBtn"),
        setAmPm = document.querySelector("#amPm"),
        h = 0,
        m = 0,
        s = 0,
        ms = 0,
        checkHours = "",
        current_h = -1,
        current_m = -1,
        current_s = -1,
        current_checkHours = " ",
        myInterval,
        date = null,
        timeDifference = 0,
        amPm = false;


    //Central function to add date and intervall
    function getTime() {
        var now = new Date();
        date = now;

        stopInterval(myInterval);
        myInterval = setInterval(getTime, 1);
        updateClock();
    }
    window.getTime = getTime;
    getTime.xy = 5;

        //Stops clock interval
    function stopInterval(interval) {
        clearInterval(interval);
    }

    //Values for clock set in HTML
    function updateClock() {
        //getHours method take the value of "var date" which is "new.Date"
        //and get the current time
        h = date.getUTCHours();
        m = date.getUTCMinutes();
        s = date.getUTCSeconds();
        ms = date.getUTCMilliseconds();

        //Check if "h" bigger then 12 and adds "pm" or "am"
        //Adds global var "timeDifference" to "h" to get the right hours for selected timezone
        h = h + timeDifference;
        checkHours = amPm ? ((h >= 12)  ? "pm" : "am") : "";

        //Checks if the class is active in HTML element
        //If true then adds am or pm

        if (amPm) {
            h = (h == 0) ? 12 : (h % 12);
        }

        // (if) ? setze "0" (else) : setze ""
        if (h != current_h) {
            setHours.innerHTML = String((h < 10) ? "0" : "").concat(h);
            current_h = h;
        }
        if (m != current_m) {
            setMinutes.innerHTML = String((m < 10) ? "0" : "").concat(m);
            current_m = m;
        }

        if (s != current_s) {
            setSeconds.innerHTML = String((s < 10) ? "0" : "").concat(s);
            current_s = s;
        }

        if (checkHours != current_checkHours) {
            setAmPm.innerHTML = checkHours;
            current_checkHours = checkHours;
        }
        setMilliseconds.innerHTML = String((ms < 100) ? "0" : "").concat(String((ms < 10) ? "0" : "").concat(ms));
    }

    //Remove class "active" from buttons
    function resetTimeZoneBtns(i) {
        var buttons = document.querySelectorAll(".time-zone");

        for (i = 0; i < buttons.length; ++i) {
            buttons[i].classList.remove("active");
        }
    }

    //The buttons change the time format from 12h to 24h (standard to military/europe)
    europeBtn.addEventListener("click", function () {
        this.classList.add("active");
        standardBtn.classList.remove("active");
        amPm = false;
    });

    standardBtn.addEventListener("click", function () {
        this.classList.add("active");
        europeBtn.classList.remove("active");
        amPm = true;
    });

    //When you click the button, the value is increased by "value" and added to the clock
    cetBtn.addEventListener("click", function () {
        timeDifference = 2;
        resetTimeZoneBtns();
        this.classList.add("active");
    });

    utcBtn.addEventListener("click", function () {
        timeDifference = null;
        resetTimeZoneBtns();
        this.classList.add("active");
    });

    ptBtn.addEventListener("click", function () {
        timeDifference = -6;
        resetTimeZoneBtns();
        this.classList.add("active");
    });

    jstBtn.addEventListener("click", function () {
        timeDifference = 9;
        resetTimeZoneBtns();
        this.classList.add("active");
    });

    getTime();
    resetTimeZoneBtns();
})();
