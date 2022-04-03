function AskUser() {
  let userName = prompt("What is your name?");
  return userName;
}
console.log(AskUser());

const AskUser = function () {
  let userName = prompt("What is your name?");
  return userName;
};
console.log(AskUser());

const AskUser = () => {
  let userName = prompt("What is your name?");
  return userName;
};
