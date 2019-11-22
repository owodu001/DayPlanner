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
    { string: "9am", input: document.querySelector("#nine"), value: 9 },
    { string: "10am", input: document.querySelector("#ten"), value: 10 },
    { string: "11am", input: document.querySelector("#eleven"), value: 11 },
    { string: "12pm", input: document.querySelector("#twelve"), value: 12 },
    { string: "1pm", input: document.querySelector("#one"), value: 13 },
    { string: "2pm", input: document.querySelector("#two"), value: 14 },
    { string: "3pm", input: document.querySelector("#three"), value: 15 },
    { string: "4pm", input: document.querySelector("#four"), value: 16 },
    { string: "5pm", input: document.querySelector("#five"), value: 17 }
]

console.log(new Date().getHours())
console.log(time[0].input)



for (let i = 0; i < time.length; i++) {
    console.log(currentTime)
    if (time[i].value < currentTime) {
        time[i].input.setAttribute("class", "form-control past");
    }
    if (time[i].value === currentTime) {
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