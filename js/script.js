// function startPlanning()
// const saveButtonEls = document.querySelectorAll(".save");

// saveButtonEls.addEventListener("click", function() {
//     console.log(saveButtonEls.value)
// });
// startPlanning()

function startPlanning() {

    const currentDate = document.getElementById("current-date");
    let userInput = document.querySelectorAll(".form-control");


    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    currentDate.innerHTML = date;

    const saveButtonEls = document.querySelectorAll(".save");

    saveButtonEls.forEach(function(saveButtons) {
        saveButtons.addEventListener("click", function() {
            localStorage.setItem('calendarUpdates', userInput);

            let calendarUpdates = localStorage.getItem('calendarUpdates');

            console.log(saveButtonEls.value);

        });
    });
}
startPlanning()