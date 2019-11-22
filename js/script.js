// function startPlanning()
// const saveButtonEls = document.querySelectorAll(".save");

// saveButtonEls.addEventListener("click", function() {
//     console.log(saveButtonEls.value)
// });
// startPlanning()



const currentDate = document.getElementById("current-date");

const hourBlocks = document.querySelectorAll(".hour");



let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let currentTime = new Date().getHours();
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

console.log(new Date().getHours())
let i = 0
    // let time[i].input = colorChange

for (let i = 0; i < time.length; i++) {
    console.log(currentTime)
    if (time[i].value < currentTime) {
        time[i].input.setAttribute("class", "form-control past");
    }
    if (time[i].value = currentTime) {
        time[i].input.setAttribute("class", "form-control present")
    }
    if (time[i].value > currentTime) {
        time[i].input.setAttribute("class", "form-control future")
    }
}

const saveButtonEls = document.querySelectorAll(".save");

saveButtonEls.forEach(function(saveButtons) {
    saveButtons.addEventListener("click", function() {
        const dataStr = localStorage.getItem('calendarUpdates');
        localStorage.setItem('calendarUpdates', saveButtonEls)






    });
});