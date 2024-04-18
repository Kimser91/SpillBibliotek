libraryView()

function libraryView() {
  document.getElementById('app').innerHTML = /*html*/ `
  <div> <h1>Hei på dere</h1></div>
  <div>
  <h2>Takk for at du besøker mitt spillbibliotek</h2>
  </div>
  <div id="buttonDiv">
  <button onclick="drawARandomGame()">hva skal jeg spille?</button>
  <button onclick="viewGameLibrary()">Alle mine spill</button>
  <button onclick="addGameView()">Yay! nytt spill</button>
  </div>
  <div id='container'>
    <div class='scroll'>
    ${scrollWheel()}
    </div>
    <div class='fade'></div>
</div>
  `
}

function addGameView(){
  document.getElementById('app').innerHTML = /*html*/ `
  <div> <h1>Hei på dere igjen, nå skal vi legge til det nye spillet!</h1></div>
  <input onchange="newInputTitle(this.value)" placeholder="Tittel">
  <input onchange=" newInputCategory (this.value)" placeholder="Sjanger">
  <input onchange="newInputReleaseYear (this.value) "placeholder="Utgitt">
  <input onchange=" newInputGamePlatform (this.value)" placeholder="Platform">
  <input onchange=" newInputGameImg (this.value)" placeholder="Bilde link">
  <button onclick="addTheNewGame()">Legg til spill</button>
  <button onclick="libraryView()">Gå tilbake uendret</button>
  <div class="game">
      <img src="${newGameImage}"/>
      <div class="gameInfo">
        <li>${newGameTitle}
          <li>${newGameCategory}
            <li>${newGameReleasYear}
              <li>${newGamePlatform}
      </div>
      </div>
  `
}

//hei

function viewGameLibrary() {
  document.getElementById('app').innerHTML = /*html*/ `
  <button onclick="libraryView()">Home</button>
  <div>${printGameLibrary()}</div>
    `
  }


function printGameLibrary (){

  let result = '';

      for (let i = 0; i < myGames.length; i++) {
      result += 
      `<div class="game">
      <img src="${myGames[i].image}"/>
      <div class="gameInfo">
        <li>${myGames[i].title}
          <li>${myGames[i].category}
            <li>${myGames[i].releasYear}
              <li>${myGames[i].platform}
      </div>
      </div>`; 
      }
      return result;
}


function scrollWheel() {

  let result = '';

      for (let i = 0; i < myGames.length; i++) {
      result += 
      `<div class="game">
      <div class="item">
      <img src="${myGames[i].image}"/>
      </div>
      </div>`;
      }
      return result;
}

function drawARandomGame() {
  let i = Math.floor(Math.random() * myGames.length)

  document.getElementById('app').innerHTML = /*html*/ `
  <button onclick="libraryView()">Home</button>
  <div class="game">
  <img src="${myGames[i].image}"/>
  <div class="gameInfo">
    <li>${myGames[i].title}
      <li>${myGames[i].category}
        <li>${myGames[i].releasYear}
          <li>${myGames[i].platform}
  </div>
  </div>`
  }