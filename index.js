var score = 0;
var intervalSpeed = 600; // 600 is default, for future increased difficulty

var snakePreviousTailPosition;
var snakeNextTailPosition;
var snakeNextHeadPosition;
var randomFruitPosition;

var sensHead = "right";
var sensTail = "right";
var previousSens;

var turnPositions = [];
var snakeArray = [];

const $divdiv = document.querySelectorAll("div div");
const $score = document.querySelector("h2");

function random300() {
  var n = Math.floor(Math.random() * 301);
  return n;
}

function createAndRenderFruit() {

  /* TODO */

}

function renderSnakeNextTurn() {
  /* TODO */
}

document.addEventListener("DOMContentLoaded", () => {

  /* SNAKE START POSITIONS */

  const snakeTail = document.querySelector("#grid div:nth-child(142)");
  const snakeBody1 = document.querySelector("#grid div:nth-child(143)");
  const snakeBody2 = document.querySelector("#grid div:nth-child(144)");
  const snakeBody3 = document.querySelector("#grid div:nth-child(145)");
  const snakeHead = document.querySelector("#grid div:nth-child(146)");



  $divdiv.forEach(element => {
    element.style.backgroundColor = "white";
  });

  snakeTail.style.backgroundColor = "yellow";
  snakeTail.style.opacity = "1";
  snakeBody1.style.backgroundColor = "green";
  snakeBody1.style.opacity = "1";
  snakeBody2.style.backgroundColor = "green";
  snakeBody2.style.opacity = "1";
  snakeBody3.style.backgroundColor = "green";
  snakeBody3.style.opacity = "1";
  snakeHead.style.backgroundColor = "red";
  snakeHead.style.opacity = "1";

  randomFruitPosition = $divdiv[random300()];

  while (randomFruitPosition.style.backgroundColor !== "white") {

    randomFruitPosition = $divdiv[random300()];
  }

  randomFruitPosition.style.backgroundColor = "orange";
  randomFruitPosition.style.opacity = "1";

  /* KEYBOARD CONTROLS */

  document.addEventListener("keydown", keyboard => {

    if (keyboard.key === "ArrowUp" && previousSens !== "down") {
      sensHead = "up";
    } else if (keyboard.key === "ArrowDown" && previousSens !== "up") {
      sensHead = "down";
    } else if (keyboard.key === "ArrowLeft" && previousSens !== "right") {
      sensHead = "left";
    } else if (keyboard.key === "ArrowRight" && previousSens !== "left") {
      sensHead = "right";
    }

  });

  /* FRUIT POP UP */

  setInterval(() => {

    randomFruitPosition = $divdiv[random300()];

    while (randomFruitPosition.style.backgroundColor !== "white") {

      randomFruitPosition = $divdiv[random300()];
    }

    randomFruitPosition.style.backgroundColor = "orange";
    randomFruitPosition.style.opacity = "1";

  }, intervalSpeed * 10);

  /* SNAKE MOVING */

  setInterval(() => {
    /* CHECKING CURRENT SNAKE POSITION AND RULES ABOUT NEXT HEAD / BODY / TAIL POSITION + MOVEMENT */
    var i = 0;
    $divdiv.forEach(element => {
      i++;

      const $BoxDown = $divdiv[i + 19];
      const $BoxUp = $divdiv[i - 21];
      const $BoxLeft = $divdiv[i - 2];
      const $BoxRight = $divdiv[i];
      const $BoxLeftScreen = $divdiv[i - 20];
      const $BoxRightScreen = $divdiv[i + 18];
      const $BoxBottomScreen = $divdiv[i + 279];
      const $BoxTopScreen = $divdiv[i - 281];

      /* WHAT TO DO IN THE LOOP IF THE ELEMENT IS BODY / GREEN */

      if (element.style.backgroundColor === "green") {
        snakeArray.push(element);
      }

      /* WHAT TO DO IN THE LOOP IF THE ELEMENT IS TAIL / YELLOW */

      if (element.style.backgroundColor === "yellow") {
        snakeArray.push(element);
        snakePreviousTailPosition = element;

        if (turnPositions[0] === $BoxUp && $BoxUp !== undefined) {
          snakeNextTailPosition = $BoxUp;
          sensTail = "up";

        } else if (turnPositions[0] === $BoxDown && $BoxDown !== undefined) {
          snakeNextTailPosition = $BoxDown;
          sensTail = "down";

        } else if (turnPositions[0] === $BoxLeft && $BoxLeft !== undefined) {
          snakeNextTailPosition = $BoxLeft;
          sensTail = "left";

        } else if (turnPositions[0] === $BoxRight && $BoxRight !== undefined) {
          snakeNextTailPosition = $BoxRight;
          sensTail = "right";

        } else if (turnPositions[0] === $BoxBottomScreen && $BoxBottomScreen !== undefined) {
          snakeNextTailPosition = $BoxBottomScreen;

        } else if (turnPositions[0] === $BoxTopScreen && $BoxTopScreen !== undefined) {
          snakeNextTailPosition = $BoxTopScreen;

        } else if (turnPositions[0] === $BoxLeftScreen && $BoxLeftScreen !== undefined) {
          snakeNextTailPosition = $BoxLeftScreen;

        } else if (turnPositions[0] === $BoxRightScreen && $BoxRightScreen !== undefined) {
          snakeNextTailPosition = $BoxRightScreen;

        } else {
          if (sensTail === "up") {

            if ($BoxUp === undefined) {

              snakeNextTailPosition = $BoxBottomScreen;
            } else {

              snakeNextTailPosition = $BoxUp;
            }

          } else if (sensTail === "down") {

            if ($BoxDown === undefined) {

              snakeNextTailPosition = $BoxTopScreen;
            } else {
              snakeNextTailPosition = $BoxDown;
            }

          } else if (sensTail === "right") {
            if (element === $divdiv[19] ||
              element === $divdiv[39] ||
              element === $divdiv[59] ||
              element === $divdiv[79] ||
              element === $divdiv[99] ||
              element === $divdiv[119] ||
              element === $divdiv[139] ||
              element === $divdiv[159] ||
              element === $divdiv[179] ||
              element === $divdiv[199] ||
              element === $divdiv[219] ||
              element === $divdiv[239] ||
              element === $divdiv[259] ||
              element === $divdiv[279] ||
              element === $divdiv[299]) {
              snakeNextTailPosition = $BoxLeftScreen;
            } else {
              snakeNextTailPosition = $BoxRight;
            }
          } else if (sensTail === "left") {
            if (element === $divdiv[0] ||
              element === $divdiv[20] ||
              element === $divdiv[40] ||
              element === $divdiv[60] ||
              element === $divdiv[80] ||
              element === $divdiv[100] ||
              element === $divdiv[120] ||
              element === $divdiv[140] ||
              element === $divdiv[160] ||
              element === $divdiv[180] ||
              element === $divdiv[200] ||
              element === $divdiv[220] ||
              element === $divdiv[240] ||
              element === $divdiv[260] ||
              element === $divdiv[280]) {
              snakeNextTailPosition = $BoxRightScreen;
            } else {
              snakeNextTailPosition = $BoxLeft;
            }
          }
        }
      }

      /* WHAT TO DO IN THE LOOP IF THE ELEMENT IS HEAD / RED */

      if (element.style.backgroundColor === "red") {
        snakeArray.push(element);
        snakeHeadPosition = element;

        if (sensHead === "right") {
          if (element === $divdiv[19] ||
            element === $divdiv[39] ||
            element === $divdiv[59] ||
            element === $divdiv[79] ||
            element === $divdiv[99] ||
            element === $divdiv[119] ||
            element === $divdiv[139] ||
            element === $divdiv[159] ||
            element === $divdiv[179] ||
            element === $divdiv[199] ||
            element === $divdiv[219] ||
            element === $divdiv[239] ||
            element === $divdiv[259] ||
            element === $divdiv[279] ||
            element === $divdiv[299]) {

            snakeNextHeadPosition = $BoxLeftScreen;
          } else {
            snakeNextHeadPosition = $BoxRight;
          }

        } else if (sensHead === "left") {
          if (element === $divdiv[0] ||
            element === $divdiv[20] ||
            element === $divdiv[40] ||
            element === $divdiv[60] ||
            element === $divdiv[80] ||
            element === $divdiv[100] ||
            element === $divdiv[120] ||
            element === $divdiv[140] ||
            element === $divdiv[160] ||
            element === $divdiv[180] ||
            element === $divdiv[200] ||
            element === $divdiv[220] ||
            element === $divdiv[240] ||
            element === $divdiv[260] ||
            element === $divdiv[280]) {

            snakeNextHeadPosition = $BoxRightScreen;

          } else {
            snakeNextHeadPosition = $BoxLeft;
          }

        } else if (sensHead === "up") {
          if ($BoxUp === undefined) {
            snakeNextHeadPosition = $BoxBottomScreen;
          } else {
            snakeNextHeadPosition = $BoxUp;
          }
        } else if (sensHead === "down") {
          if ($BoxDown === undefined) {
            snakeNextHeadPosition = $BoxTopScreen;
          } else {
            snakeNextHeadPosition = $BoxDown;
          }
        }


        turnPositions.push(snakeNextHeadPosition);
      }
    });

    /* MOVING RENDER : TODO : FUNCTION RENDER */

    if (snakeNextHeadPosition.style.backgroundColor !== "orange") {

      snakePreviousTailPosition.style.backgroundColor = "white";
      snakePreviousTailPosition.style.opacity = "0.7";
      snakeNextTailPosition.style.backgroundColor = "yellow";
      snakeNextTailPosition.style.opacity = "1";

      if (snakeNextTailPosition === turnPositions[0]) {
        turnPositions.splice(0, 1);
      }
    } else if (snakeNextHeadPosition.style.backgroundColor === "orange") {
      score += 100;
      $score.textContent = "Score : " + score;
    }


    if (snakeNextHeadPosition.style.backgroundColor !== "green" &&
      snakeNextHeadPosition.style.backgroundColor !== "yellow") {

      snakeHeadPosition.style.backgroundColor = "green";
      snakeHeadPosition.style.opacity = "1";
      snakeNextHeadPosition.style.backgroundColor = "red";
      snakeNextHeadPosition.style.opacity = "1";
    } else {
      alert("Game Over !")

      /* RESET SNAKE POSITION : TODO : FUNCTION, CODE X2 */

      $divdiv.forEach(element => {
        element.style.backgroundColor = "white";
        element.style.opacity = "0.7";
      });

      snakeTail.style.backgroundColor = "yellow";
      snakeTail.style.opacity = "1";
      snakeBody1.style.backgroundColor = "green";
      snakeBody1.style.opacity = "1";
      snakeBody2.style.backgroundColor = "green";
      snakeBody2.style.opacity = "1";
      snakeBody3.style.backgroundColor = "green";
      snakeBody3.style.opacity = "1";
      snakeHead.style.backgroundColor = "red";
      snakeHead.style.opacity = "1";
      score = 0;
      $score.textContent = "Score : " + score;

      /* + RESET VARIABLES */

      turnPositions = [];
      sensHead = "right";
      sensTail = "right";
      snakePreviousTailPosition = undefined;
      snakeNextTailPosition = undefined;
      snakeNextHeadPosition = undefined;
    }

    previousSens = sensHead;

    snakeArray = [];

  }, intervalSpeed);


});

