// let users = [
//     {id: 1, name: "John", age: 25, phone: "85823456"},
//     {id: 2, name: "Bob", age: 27, phone: "65121356"},
//     {id: 3, name: "Erika", age: 29, phone: "09080787"},
//     {id: 4, name: "Sem", age: 31, phone: "12368652"},
//     {id: 5, name: "Deen", age: 33, phone: "31232131"},
//     {id: 6, name: "Bobby", age: 35, phone: "34543543"},
//     {id: 7, name: "Jo", age: 37, phone: "99222867"},
//     {id: 8, name: "Kas", age: 39, phone: "22228678"}
// ];

let users = [];

async function getUsers() {
    const response = await fetch("http://127.0.0.1:8000/getusers");
    users = await response.json();

    console.log(users)
};
getUsers();

const input = document.getElementById("search");
const list = document.getElementById("list");

document.getElementById("search").addEventListener("input", setInput);

function setInput() {
    if (this.value != "") {
        list.textContent = "";
        for (const user of users){
            if (user.name.toLowerCase().includes(this.value.toLowerCase())) {
                const userEl = document.createElement("div");
                const userId = document.createElement("div");
                const userName = document.createElement("div");
                const userAge = document.createElement("div");
                const userPhone = document.createElement("div");

                userEl.className = "user";
                userId.className = "userId";
                userName.className = "userName";
                userAge.className = "userAge";
                userPhone.className = "userPhone";

                userId.textContent = user.id;
                userName.textContent = user.name;
                userAge.textContent = user.age;
                userPhone.textContent = user.phone;

                userEl.appendChild(userId);
                userEl.appendChild(userName);
                userEl.appendChild(userAge);
                userEl.appendChild(userPhone);
                list.appendChild(userEl);
            }
        }
    } else {
        list.textContent = "";
    }
};