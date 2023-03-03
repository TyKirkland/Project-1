let chess = {

    properties: {
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        pieces: {
            w_pawn1: {
                position: '1_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_pawn2: {
                position: '2_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_pawn3: {
                position: '3_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_pawn4: {
                position: '4_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_pawn5: {
                position: '5_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_pawn6: {
                position: '6_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_pawn7: {
                position: '7_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_pawn8: {
                position: '8_2',
                img: './pictures/w_pawn.png',
                type: 'w_pawn',
                captured: false,
                moved: false
            },
            w_rook1: {
                position: '1_1',
                img: './pictures/w_rook.png',
                type: 'w_rook',
                captured: false,
                moved: false
            },
            w_rook2: {
                position: '8_1',
                img: './pictures/w_rook.png',
                type: 'w_rook',
                captured: false,
                moved: false
            },
            w_knight1: {
                position: '2_1',
                img: './pictures/w_knight.png',
                type: 'w_knight',
                captured: false,
                moved: false
            },
            w_knight2: {
                position: '7_1',
                img: './pictures/w_knight.png',
                type: 'w_knight',
                captured: false,
                moved: false
            },
            w_bishop1: {
                position: '3_1',
                img: './pictures/w_bishop.png',
                type: 'w_bishop',
                captured: false,
                moved: false
            },
            w_bishop2: {
                position: '6_1',
                img: './pictures/w_bishop.png',
                type: 'w_bishop',
                captured: false,
                moved: false
            },
            w_king: {
                position: '5_1',
                img: './pictures/w_king.png',
                type: 'w_king',
                captured: false,
                moved: false
            },
            w_queen: {
                position: '4_1',
                img: './pictures/w_queen.png',
                type: 'w_queen',
                captured: false,
                moved: false
            },
            b_pawn1: {
                position: '1_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_pawn2: {
                position: '2_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_pawn3: {
                position: '3_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_pawn4: {
                position: '4_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_pawn5: {
                position: '5_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_pawn6: {
                position: '6_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_pawn7: {
                position: '7_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_pawn8: {
                position: '8_7',
                img: './pictures/b_pawn.png',
                type: 'b_pawn',
                captured: false,
                moved: false
            },
            b_rook1: {
                position: '1_8',
                img: './pictures/b_rook.png',
                type: 'b_rook',
                captured: false,
                moved: false
            },
            b_rook2: {
                position: '8_8',
                img: './pictures/b_rook.png',
                type: 'b_rook',
                captured: false,
                moved: false
            },
            b_knight1: {
                position: '2_8',
                img: './pictures/b_knight.png',
                type: 'b_knight',
                captured: false,
                moved: false
            },
            b_knight2: {
                position: '7_8',
                img: './pictures/b_knight.png',
                type: 'b_knight',
                captured: false,
                moved: false
            },
            b_bishop1: {
                position: '3_8',
                img: './pictures/b_bishop.png',
                type: 'b_bishop',
                captured: false,
                moved: false
            },
            b_bishop2: {
                position: '6_8',
                img: './pictures/b_bishop.png',
                type: 'b_bishop',
                captured: false,
                moved: false
            },
            b_queen: {
                position: '4_8',
                img: './pictures/b_queen.png',
                type: 'b_queen',
                captured: false,
                moved: false
            },
            b_king: {
                position: '5_8',
                img: './pictures/b_king.png',
                type: 'b_king',
                captured: false,
                moved: false
            }
        },
    },
    
    methods: {
        
        gamesetup() {
            //initialize the tiles
            const tiles = document.querySelectorAll('.tile');
            tiles.forEach((tile) => {
                //we are setting each tile to have an attribute of null for later conditionals
                tile.setAttribute('chesspiece', 'null');
            })

            //each piece in this for loop is the object name (w_pawn1, etc, etc)
            for(let piece in chess.properties.pieces){
                //first we are grabbing each piece's position (identical to the id's in my html)
                let pieceposition = document.getElementById(chess.properties.pieces[piece].position);
                //we are then assigning the innerHTML to the image of the appropriate piece
                pieceposition.innerHTML = `<img src='${chess.properties.pieces[piece].img}'>`;
                //and set the chesspiece attribute to it's appropriate name
                pieceposition.setAttribute('chesspiece', piece);
            }
        },

        moveoptions(selectedpiece) {

            let position = {
                x: '',
                y: ''
            };

            //using the event target we can find the coordinates for our starting square
            position.x = chess.properties.pieces[selectedpiece].position.split('_')[0];
            position.y = chess.properties.pieces[selectedpiece].position.split('_')[1];

            //these variables need to be var instead of let so they are scoped globally
            //these will be all the squares they can go to
            var options = [];
            var coordinates = [];
            var startpoint = chess.properties.pieces[selectedpiece].position;
            //these will be all the different directions they can go
            var d1,d2,d3,d4,d5,d6,d7,d8;


        },
        togglehighlight(options) {
            options.forEach(function(element){
                let color = document.getElementById(element);
                color.toggleClass('red');
            })
        }
    }
}

const testclick = document.getElementById("1_7");
testclick.addEventListener('click', (event) => {
    //need to get the specific piece name so we have to go through the image
    chess.methods.moveoptions(event.target.parentElement.getAttribute('chesspiece'));
})

chess.methods.gamesetup();