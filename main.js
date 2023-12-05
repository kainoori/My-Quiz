// My Quiz

document.getElementById("btn").addEventListener("click", btnClicked);

// Function
function btnClicked() {
  let numCorrect = 0;

  let correctEl = document.getElementById("correct-out");
  let percentageEl = document.getElementById("percentage-out");

  let answer1 = document.getElementById("question1-in").value.toLowerCase();
  let answer2 = document.getElementById("question2-in").value.toLowerCase();
  let answer3 = document.getElementById("question3-in").value.toLowerCase();
  let answer4 = document.getElementById("question4-in").value.toLowerCase();

  // Question 1
  if (answer1 === "14" || answer1 === "fourteen" || answer1 === "XIV") {
    document.getElementById(
      "key"
    ).innerHTML = `<p class = "result1"> Correct </p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key"
    ).innerHTML = `<p class = "result1"> Incorrect </p>`;
  }
  // Question 2
  if (
    answer2 === "laliga" ||
    answer2 === "laliga Santander" ||
    answer2 === "laliga santander" ||
    answer2 === "la liga"
  ) {
    document.getElementById(
      "key2"
    ).innerHTML = `<p class = "result2" > Correct </p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key2"
    ).innerHTML = `<p class = "result2"> Incorrect </p>`;
  }
  // Question 3
  if (
    answer3 === "Zidane" ||
    answer3 === "zidane" ||
    answer3 === "Ronaldo" ||
    answer3 === "Sergio Ramos"
  ) {
    document.getElementById(
      "key3"
    ).innerHTML = `<p class = "result3" > Correct </p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key3"
    ).innerHTML = `<p class = "result3"> Incorrect </p>`;
  }
  // Question 4
  if (answer4 === "manchester united" || answer4 === "Manchester United") {
    document.getElementById(
      "key4"
    ).innerHTML = `<p class = "result4" > Correct </p>`;
    numCorrect++;
  } else {
    document.getElementById(
      "key4"
    ).innerHTML = `<p class = "result4"> Incorrect </p>`;
  }

  let percentage = (numCorrect / 4) * 100;
  correctEl.innerHTML = numCorrect;
  percentageEl.innerHTML = percentage;

  if (numCorrect <= 2) {
    document.getElementById(
      "feedback"
    ).innerHTML = `<p class = "message"> Better Luck Next Time!</p>`;
  } else {
    document.getElementById(
      "feedback"
    ).innerHTML = `<p class = "message"> Keep up the Great Work`;
  }
}
