const nameForm = document.querySelector(".login-form");
const input = nameForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const greetingText = greeting.querySelector("span");

const div = document.createElement("div");
const btn = document.createElement("button");
btn.innerText = "Change nickname";
greeting.appendChild(div);
greeting.appendChild(btn);

btn.hidden = true;

const USERNAME_KEY = "username";
const greetingMsg = [
  "Hello",
  "How are you doing",
  "Hi",
  "Nice to see you",
  "Great to see you",
  "Hey",
  "lovely to see you",
  "Hiya",
  "Howdy",
];

const dayNNight = ["Morning", "Evening", "Goodnight"];

todoForm.hidden = true;

// console.log(input);

function handleSubmit(event) {
  event.preventDefault();
  const userName = input.value;
  localStorage.setItem(USERNAME_KEY, userName);
  input.value = "";
  nameForm.hidden = true;
  todoForm.hidden = false;
  helloName(userName);
}

function helloName(username) {
  //   console.log("in");
  const today = new Date();
  const hr = today.getHours();
  const msgSelected = Math.floor(Math.random() * greetingMsg.length);

  if (hr >= 0 && hr < 6) {
    greetingText.innerText = `${dayNNight[2]}, ${username} :)`;
  } else if (hr >= 6 && hr < 10) {
    greetingText.innerText = `${dayNNight[0]}, ${username} :)`;
  } else if (hr >= 18 && hr < 22) {
    greetingText.innerText = `${dayNNight[1]}, ${username} :)`;
  } else {
    greetingText.innerText = `${greetingMsg[msgSelected]}, ${username} :)`;
  }
  greetingText.hidden = false;
}

function handleBtnClick() {
  //   console.log("click");
  btn.hidden = true;
  nameForm.hidden = false;
  greetingText.hidden = true;
  nameForm.addEventListener("submit", handleSubmit);
}

function handleMouseover() {
  const btn = greeting.querySelector("button");
  btn.hidden = false;
  btn.addEventListener("click", handleBtnClick);
}

function handleMouseleave() {
  const btn = greeting.querySelector("button");
  btn.hidden = true;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  nameForm.addEventListener("submit", handleSubmit);
  greeting.addEventListener("mouseenter", handleMouseover);
  greeting.addEventListener("mouseleave", handleMouseleave);
} else {
  nameForm.hidden = true;
  todoForm.hidden = false;
  helloName(savedUsername);
  greeting.addEventListener("mouseenter", handleMouseover);
  greeting.addEventListener("mouseleave", handleMouseleave);
}
