button = document.querySelector("button");
rps_img = document.querySelectorAll(".rps");
let user_rps_choice;
let gameResultComp = 0;
let gameResultUser = 0;
let gamePlayed = 0;

function findChoiceInImageUser(choice_In_Num) {
  const users_div = document.querySelector(".users");
  if (document.querySelector(".users_choice_img") !== null)
    users_div.removeChild(document.querySelector(".users_choice_img"));
  const img_user = document.createElement("img");
  img_user.classList = "users_choice_img";

  if (choice_In_Num == "paper") {
    img_user.setAttribute("src", "./images/p.png");
  } else if (choice_In_Num == "scissors") {
    img_user.setAttribute("src", "./images/s.png");
  } else if (choice_In_Num == "rock") {
    img_user.setAttribute("src", "./images/r.png");
  } else {
    img_user.setAttribute("src", "ERROR");
  }

  users_div.appendChild(img_user);
}

function findChoiceInImageComputer(choice_In_Num) {
  const computer_div = document.querySelector(".computer");
  if (document.querySelector(".computer_choice_img") !== null)
    computer_div.removeChild(document.querySelector(".computer_choice_img"));
  const img_computer = document.createElement("img");
  img_computer.classList = "computer_choice_img";

  if (choice_In_Num == "paper") {
    img_computer.setAttribute("src", "./images/p.png");
  } else if (choice_In_Num == "scissors") {
    img_computer.setAttribute("src", "./images/s.png");
  } else if (choice_In_Num == "rock") {
    img_computer.setAttribute("src", "./images/r.png");
  } else {
    img_computer.setAttribute("src", "./images/rps.png");
  }
  computer_div.appendChild(img_computer);
}

function findChoiceInText(choice_In_Num) {
  const r_choice_txt =
    choice_In_Num == 1
      ? "rock"
      : choice_In_Num == 2
      ? "paper"
      : choice_In_Num == 3
      ? "scissors"
      : "ERROR";
  return r_choice_txt;
}
function getComputerChoice() {
  const r_choice_num = Math.floor(Math.random() * 3) + 1;
  const r_choice_txt = findChoiceInText(r_choice_num);

  console.log("Computer choice: " + r_choice_txt);
  findChoiceInImageComputer(r_choice_txt);
  return r_choice_txt;
}

function createUserChoiceMenu() {
  const menu = document.querySelector(".menu");
  const button = document.querySelector("button");
  const rps_post = document.querySelector("#rps-post");
  const user = document.querySelector(".users");
  const result = document.querySelector(".result");
  const computer = document.querySelector(".computer");

  user.setAttribute("style", "display:flex");
  computer.setAttribute("style", "display:flex");
  result.setAttribute("style", "display:flex");
  menu.setAttribute("style", "display:flex");
  button.setAttribute("style", "display:none");
  rps_post.setAttribute("style", "display:none");
}

function reset() {
  gameResultUser = 0;
  gameResultComp = 0;
  const user = document.querySelector(".users");
  const computer = document.querySelector(".computer");
  const user_score = document.querySelector(".user_score");
  const computer_score = document.querySelector(".computer_score");
  const computer_choice_img = document.querySelector(".computer_choice_img");
  const users_choice_img = document.querySelector(".users_choice_img");
  user_score.textContent = gameResultUser;
  computer_score.textContent = gameResultComp;
  const menu = document.querySelector(".menu");
  const button = document.querySelector("button");
  const rps_post = document.querySelector("#rps-post");
  computer_choice_img.setAttribute("style", "display:none;");
  users_choice_img.setAttribute("style", "display:none;");
  user.classList.remove("highlight");
  computer.classList.remove("same");
  computer.classList.remove("highlight");
  user.classList.remove("same");

  const result = document.querySelector(".result");

  if (document.querySelector(".result_para") !== null)
    result.removeChild(document.querySelector(".result_para"));
  user.setAttribute("style", "display:none");
  computer.setAttribute("style", "display:none");
  // result.setAttribute("style", "display:none");
  menu.setAttribute("style", "display:none");
  button.setAttribute("style", "display:flex");
  rps_post.setAttribute("style", "display:flex");

  // if (document.querySelector(".users_choice_img") !== null)
  //   users_div.removeChild(document.querySelector(".users_choice_img"));
  // if (document.querySelector(".computer_choice_img") !== null)
  //   computer_div.removeChild(document.querySelector(".computer_choice_img"));
}
function getUsersChoice() {
  let gameResult = 0;
  // let r_user_choice_In_Num = user_rps_choice;
  const r_user_choice = user_rps_choice;
  findChoiceInImageUser(r_user_choice);

  gameResult = play(r_user_choice, getComputerChoice());

  return gameResult;
}
function play(r_user_choice, r_computer_choice) {
  console.log("Users choice: " + r_user_choice);
  const users = document.querySelector(".users");
  const computer = document.querySelector(".computer");

  let result = "";
  if (r_computer_choice === "rock" && r_user_choice === "scissors") {
    result = `You Lose! ${r_computer_choice} beats ${r_user_choice}`;
  } else if (r_computer_choice === "paper" && r_user_choice === "rock") {
    result = `You Lose! ${r_computer_choice} beats ${r_user_choice}`;
  } else if (r_computer_choice === "scissors" && r_user_choice === "paper") {
    result = `You Lose! ${r_computer_choice} beats ${r_user_choice}`;
  } else if (r_computer_choice === r_user_choice) {
    result = `It is a tie! ${r_computer_choice} equals ${r_user_choice}`;
  } else {
    result = `You Won! ${r_user_choice} beats ${r_computer_choice}`;
  }
  console.log(result);

  if (result.includes("Won")) {
    users.classList.toggle("highlight");
  } else if (result.includes("tie")) {
    users.classList.toggle("same");
    computer.classList.toggle("same");
  } else {
    computer.classList.toggle("highlight");
  }
  return result.includes("Won") ? 1 : result.includes("tie") ? "t" : 0;
}

function game() {
  const users = document.querySelector(".users");
  const user_score = document.querySelector(".user_score");
  const computer_score = document.querySelector(".computer_score");
  const computer = document.querySelector(".computer");
  users.classList.remove("highlight");
  users.classList.remove("same");
  computer.classList.remove("highlight");
  computer.classList.remove("same");
  const div = document.querySelector(".result");
  if (document.querySelector(".result_para") !== null)
    div.removeChild(document.querySelector(".result_para"));
  gamePlayed++;
  let result = getUsersChoice();
  if (result === 1) {
    gameResultUser++;
  } else if (result == 0) {
    gameResultComp++;
  }
  user_score.textContent = gameResultUser;
  computer_score.textContent = gameResultComp;
  if (gamePlayed >= 5) {
    calResult();
    gameResultUser = 0;
    gameResultComp = 0;
    gamePlayed = 0;
  }
}

function calResult() {
  const div = document.querySelector(".result");
  if (document.querySelector(".result_para") !== null)
    div.removeChild(document.querySelector(".result_para"));
  const p = document.createElement("p");
  p.setAttribute(
    "style",
    "color:cyne;font-size:20px;align-text:center;font-family: 'Pacifico', cursive;"
  );
  p.classList = "result_para";
  gameResultUser > gameResultComp
    ? p.appendChild(
        document.createTextNode(
          `You WON: your result is ${gameResultUser} and the computer got ${gameResultComp}`
        )
      )
    : gameResultUser === gameResultComp
    ? p.appendChild(
        document.createTextNode(
          `It is a tie: your result is ${gameResultUser} and the computer got ${gameResultComp}`
        )
      )
    : p.appendChild(
        document.createTextNode(
          `You Lose: your result is ${gameResultUser} and the computer got ${gameResultComp}`
        )
      );
  div.appendChild(p);
}

button.addEventListener("click", createUserChoiceMenu);
rps_img.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case "rock":
        user_rps_choice = "rock";
        game();
        break;
      case "paper":
        user_rps_choice = "paper";
        game();
        break;
      case "scissors":
        user_rps_choice = "scissors";
        game();
        break;
      case "close":
        reset();
    }
  });
});
reset();
