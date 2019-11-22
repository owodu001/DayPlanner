// function startPlanning()
// const saveButtonEls = document.querySelectorAll(".save");

// saveButtonEls.addEventListener("click", function() {
//     console.log(saveButtonEls.value)
// });
// startPlanning()

function startPlanning() {

    const currentDate = document.getElementById("current-date");

    const hourBlocks = document.querySelectorAll(".hour");
    // const calendarTime = moment().startOf('day').fromNow() to moment().endOf('day').fromNow();


    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let currentTime = moment().format();
    // 6:42:00 PM
    let currentDay = moment().format('L');
    //  11/21/2019
    currentDate.innerHTML = date;

    let time = [
        { string: "9am", input: document.getElementById("nine"), value: 9 },
        { string: "10am", input: document.getElementById("ten"), value: 10 },
        { string: "11am", input: document.getElementById("eleven"), value: 11 },
        { string: "12pm", input: document.getElementById("twelve"), value: 12 },
        { string: "1pm", input: document.getElementById("one"), value: 13 },
        { string: "2pm", input: document.getElementById("two"), value: 14 },
        { string: "3pm", input: document.getElementById("three"), value: 15 },
        { string: "4pm", input: document.getElementById("four"), value: 16 },
        { string: "5pm", input: document.getElementById("five"), value: 17 }
    ]


    for (let i = 0; i < time.length; i++) {
        console.log(currentTime)
        if (time[i].value < currentTime) {
            time[i].setAttribute("class", "form-control past")
        }
    }

    const saveButtonEls = document.querySelectorAll(".save");

    saveButtonEls.forEach(function(saveButtons) {
        saveButtons.addEventListener("click", function() {
            localStorage.setItem('calendarUpdates', saveButtonEls)


            let calendarUpdates = localStorage.getItem('calendarUpdates');

            // console.log(inputBoxes[0].value);

        });
    });
}
startPlanning()