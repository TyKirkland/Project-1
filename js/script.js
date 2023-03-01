class game {
    // add a pieces object that has all the different pieces in it
    // add the gameBoard property into this as well
    constructor(){
        pieces = {
            
        };
        gameBoard = {
            A1: {
                currentPiece: null,
                beingAttackedBy: 0,
                placeOnBoard: document.getElementById("101"),
            },
        };
    }
}

const whitePawn = {
    constructor(){
        this.color = "white";
        
        this.firstJump = true;
        this.innerHTML = "IMAGEGOESHERE";
    }
}

class blackPawn {
    constructor(){
        this.color = "black";
        this.firstJump = true;
        this.innerHTML = "IMAGEGOESHERE";
    }
}

const testPawn2 = new whitePawn();

const testPawn = {
    color: "white",
    innerHTML: "Hello",
}

function determineRange(item){
    if(item.classList.contains('pawn')){

    }
}

function move(){

}

const li = document.querySelector('li');
li.addEventListener('click', (event) => {
    initializePieces();
    let getID = li.id;
    let idArray = Array.from(getID);
    let rowNumber = eval(idArray.shift());
    let columnNumber = eval(idArray.pop());
    let effectedTiles = document.getElementById(`${rowNumber - 1}0${columnNumber}`);
    effectedTiles.innerHTML = `${document.getElementById("101").innerHTML}`;
    event.target.innerHTML = "";
})

const gameBoard = {
    A1: {
        currentPiece: null,
        beingAttackedBy: 0,
        placeOnBoard: document.getElementById("101"),
    },
}

//this function will be called as soon as the start button is pressed and it will put all the pieces on the board
function initializePieces() {
    document.querySelectorAll('.tile').forEach(square => {
        if(square.innerText == "wPawn"){
            square.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3411/3411017.png" class="white pawn" style="width: 50px; height: 50px;">`;
        }
        else if(square.innerText == "bPawn"){
            square.innerHTML = '<img src="https://img.freepik.com/premium-vector/pixel-art-pawn-chess-piece-item-8bit-game-white-background_360488-245.jpg?w=740" class="black pawn" style="width: 50px; height: 50px;">'
        }
        else if(square.innerText == "wKnight"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "wBishop"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "wKing"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "wQueen"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "wRook"){
            square.innerHTML = `IMAGEGOESHERE`;
        }
        else if(square.innerText == "bRook"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "bKnight"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "bBishop"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "bKing"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
        else if(square.innerText == "bQueen"){
            square.innerHTML = 'IMAGEGOESHERE'
        }
    })
}

//this function is used to color the entire board when the game starts and each instance of color changing
function setColors() {
    //first we are getting each "tile" or li with a class of tile
    const tileArray = document.querySelectorAll('.tile');
    //we then use a forEach loop to iterate through every tile 
    tileArray.forEach(tile => {
        //for every tile we grab it's id
        let id = tile.id;
        //change that string into an array
        let idArray = Array.from(id);
        //take the first number from our idArray
        let firstNumber = eval(idArray.shift());
        //take the last number from our idArray
        let lastNumber = eval(idArray.pop());
        //add them together so we can impliment the checkered pattern
        let idValue = firstNumber + lastNumber;

        // check with the conditional to see if they are even or odd and set the color accordingly
        if(idValue % 2 == 0){
            tile.style.backgroundColor = "gray";
        }
        else if(idValue % 2 != 0){
            tile.style.backgroundColor = "white";
        }
    })
}
setColors();