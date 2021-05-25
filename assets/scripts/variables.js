let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

//Snake Visual Parameters
const snakeSize = 10;
const snakeColor = "#008000";

//Food Visual Parameters
const foodSize = 10;
const foodColor = "#800000";

//MinionBlock Parameters
const minionSize = 10;
const minionColor = "#000080"

//Map Parameters
const rows = 48;
const columns = 72;
const grid = 10;
let msgX = 0;
let msgY = 0;
let msgSize = 0;

/* Location Variables */
let x = 0;
let y = 0;

//Difficulty Parameters
let speed = 5;
let blockProbability = 0;
let blockNumber = 0;

//Gameplay Parameters

let snakeTrail = [];
let start = false;
let gameover = false;
let score = 0;
let length = 1;
let msgTime = 0;

/* Food Variables */
let eaten = false;
let specialFood = false;
let appear = false;
