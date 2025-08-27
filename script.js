const heartBlock = document.getElementById("heart-count");
let heartBlockValue = parseInt(heartBlock.textContent);
// console.log(`this is: ${heartBlockValue}`);

const coinBlock = document.getElementById("coin-count");
let coinBlockValue = parseInt(coinBlock.textContent);
// console.log(`coin left" ${coinBlockValue}`);
// console.log(typeof coinBlockValue);

const copyBlock = document.getElementById("copy-count");
const newHistory = document.getElementById("new-history");
const callButtons = document.querySelectorAll(".call-btn");
let count = 0;

document.querySelectorAll(".heart").forEach((heart) => {
  heart.addEventListener("click", () => {
    // console.log("hello there");
    count++;
    // console.log(count);

    heartBlock.innerText = count;
  });
});
// console.log(hearts);

for (const button of callButtons) {
  button.addEventListener("click", () => {
    if (coinBlockValue < 20) {
      alert("You don't have enough coins! minimum 20 coins needed for a call");
      return;
    }
    alert(
      `calling ${
        button.closest(".cards").querySelector(".service-name").innerText
      }: ${button.closest(".cards").querySelector(".service-number").innerText}`
    );
    coinBlockValue = coinBlockValue - 20;
    coinBlock.innerText = coinBlockValue;

    // creating new history
    const newHist = document.createElement("div");
    newHist.setAttribute("class", "new-history");

    // creating h3 for history heading
    const heading = document.createElement("h3");
    heading.style.fontWeight = "bold";
    // getting the service name as heading
    const serviceHeading = button
      .closest(".cards")
      .querySelector(".service-name").innerText;
    heading.innerText = serviceHeading;

    // creating a p tag to hold service number
    const NumberBlock = document.createElement("p");
    const serviceNumber = button
      .closest(".cards")
      .querySelector(".service-number").innerText;
    NumberBlock.innerText = serviceNumber;

    // appending the service name and number into infoBlock
    const infoBlock = document.createElement("div");

    infoBlock.appendChild(heading);
    infoBlock.appendChild(NumberBlock);

    // creating timeBlock

    const timeBlock = document.createElement("div");
    const timeStamp = new Date().toLocaleTimeString();
    timeBlock.innerText = timeStamp;

    newHist.appendChild(infoBlock);
    newHist.appendChild(timeBlock);
    newHistory.appendChild(newHist);
  });
}

let copyCount = 0;
document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const copiedNumber = button
      .closest(".cards")
      .querySelector(".service-number").innerText;
    // console.log(copiedNumber);
    navigator.clipboard.writeText(copiedNumber);
    copyCount++;
    copyBlock.innerText = copyCount;
    button.closest(".cards").querySelector(".copy-btn").innerText = "Copied!";
  });
});

document.getElementById("clear-history-btn").addEventListener("click", () => {
  newHistory.innerHTML = "";
});
