
let myGames = [
  {
    title: "Valheim",
    category: "survival",
    releasYear: "2021",
    platform: "PC",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Valheim_2021_logo.jpg/220px-Valheim_2021_logo.jpg",
  },

  {
    title: "DARK SOULS II",
    category: "RPG",
    releasYear: "2014",
    platform: "PC",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Dark_Souls_II_cover.jpg/220px-Dark_Souls_II_cover.jpg",
  },

  {
    title: "ARK: Survival Evolved",
    category: "Survival",
    releasYear: "2017",
    platform: "PC",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/ArkSurvivalEvolved.png/220px-ArkSurvivalEvolved.png",
  },

  {
    title: "Cyberpunk 2077",
    category: "RPG",
    releasYear: "2020",
    platform: "PC",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg",
  },

  {
    title: "Starfield",
    category: "FPS",
    releasYear: "2023",
    platform: "PC",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg?t=1704299959",
  },
  {
    title: "Elden Ring",
    category: "RPG",
    releasYear: "22",
    platform: "PC",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9F18eA6V0dzEudIeCUwYbwlYFsXjMLScFg&usqp=CAU",
  },

  {
    title: "Skyrim",
    category: "RPG",
    releasYear: "2011",
    platform: "PC",
    image: "img/skyrim.png",
  },

  {
    title: "FS22",
    category: "Simulator",
    releasYear: "2021",
    platform: "PC",
    image: "img/FS22.png",
  },

  {
    title: "Conan Exiles",
    category: "RPG, Survival",
    releasYear: "2018",
    platform: "PC",
    image: "img/Conan_Exiles.jpg",
  },

  {
    title: "CS2",
    category: "FPS",
    releasYear: "2023",
    platform: "PC",
    image: "img/CS2.jpg",
  },

  
]

let newGame
//new input
let newGameTitle = "";
let newGameCategory = "";
let newGameReleasYear = "";
let newGameImage = "";
let newGamePlatform = "";

// view variables
let html = document.getElementById('app')
let newGames = [];
let myGameLibrary = [];
let myActiveGame = [];
let myPossibleComments = {};
let shownComment = '';
let randomGame = "";