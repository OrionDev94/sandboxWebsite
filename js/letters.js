"use-strict";

(function () {
    var inputText = document.querySelector("#inputField"),
        outputText = document.querySelector("#outputField"),
        countingBtn = document.querySelector("#countingBtn"),
        words = [],
        fieldValue,
        numbersOfLetters;

    //Remove all elements with class "letters" to set the list to null
    function clearLi() {
        document.querySelectorAll('.letters').forEach((e) => e.remove());
    }

    //Click on button to set value of inputField in seperate span elements
    countingBtn.addEventListener('click', function () {
        clearLi();
        //.replace (...) are Regular expressions to cut out special characters
        fieldValue = inputText.value.replace(/[^A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF\s]/g, "");
        words = fieldValue.split(" ");

        for (var i = 0; i < words.length; i++) {
            numbersOfLetters = document.createElement('span');

            //numbersOfLetters is set in HTMl
            numbersOfLetters.innerHTML =
                words[i] + ": " +
                words[i].length + " Buchstaben" +
                "<br/>";

            //Set a span child for each word with class "letters"
            outputText.appendChild(numbersOfLetters).classList.add('letters');
        }
    });
})();
