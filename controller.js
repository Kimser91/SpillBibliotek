//add new game

function newInputTitle (inputValue) {
  newGameTitle = inputValue;
  addGameView()
}

function newInputCategory (inputValue) {
  newGameCategory = inputValue;
  addGameView()
}

function newInputReleaseYear (inputValue) {
  newGameReleasYear = inputValue;
  addGameView()
}

function newInputGameImg (inputvalue) {
  newGameImage = inputvalue;
  addGameView()
}

function newInputGamePlatform (inputValue) {
  newGamePlatform = inputValue;
  addGameView()
}

function addTheNewGame () {
  newGame = {
    title: newGameTitle,
    category: newGameCategory,
    releasYear: newGameReleasYear,
    image: newGameImage,
    platform: newGamePlatform,
  }

  myGames.push(newGame)
  libraryView()
}

