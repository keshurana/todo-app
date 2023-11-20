
const inputData = document.querySelector('#input');
const btn = document.querySelector('#btn');
const outputValue = document.querySelector('#list');

btn.addEventListener("click", () => {
    showList();
})

function showList() {
    if(inputData.value === "") {
        alert("Please Enter Your To-Do")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputData.value;
        outputValue.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        li.appendChild(span);
    }
    inputData.value = "";
    saveItem();
}

outputValue.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveItem();
    } else if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
        saveItem();
    }
}, false);

function saveItem() {
    localStorage.setItem("todoItem", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("todoItem");
}
showData();