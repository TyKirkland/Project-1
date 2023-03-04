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

            //this will check if we already have pieces highlighted and if we do it will toggle them
            if(chess.properties.highlighted.length != 0){
                chess.methods.togglehighlight(chess.properties.highlighted);
                // this line is to fix a bug where it keeps adding more to the highlighted property
                // chess.properties.highlighted = [];
            }

            switch(chess.properties.pieces[selectedpiece].type) {
                
                case 'w_pawn':
                    //first we are using a conditional to see if they can move forward twice
                    if(chess.properties.pieces[selectedpiece].moved == false){
                        coordinates = [{x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y:1}, {x: -1, y: 1}].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        });
                    }
                    //if it has moved then we only add the one tile forward movement
                    else if(chess.properties.pieces[selectedpiece].moved == true){
                        coordinates = [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        })
                    }
                    //we need to slice all our options into our options variable
                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type)).slice(0));
                    //we can then add all our options to our highlighted array
                    chess.properties.highlighted = options.slice(0);
                    //and then call our togglehighlight method based on all our options
                    chess.methods.togglehighlight(options);
            }
        },

        options(startpoint, coordinates, piecetype){

            //first we need to check if any of the possible coordinates are out of bounds
            coordinates = coordinates.filter((value) => {
                let pos = {x: 0, y: 0};
                pos.x = parseInt(value.split('_')[0]);
                pos.y = parseInt(value.split('_')[1]);

                if(pos.x >= 1 && pos.x <= 8 && pos.y >= 1 && pos.y <= 8){
                    return value;
                }
            });

            //we can then run through our potential piece type's and perform the appropriate functions based on what they are
            switch(piecetype){
                case 'w_pawn':
                    //we are filtering through our coordinates to check if they are movable
                    coordinates = coordinates.filter((value) => {
                        let sp = {x: 0, y: 0};
                        let coordinate = value.split('_');
                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        //if the startpoint coordinate does not equal the potential x coordinate we have to check to see if there is a piece on it and if it is black 
                        if(coordinate[0] != sp.x){
                            let piecename = document.getElementById(value).getAttribute('chesspiece');
                            //if there is a piece and it's black we can return the value as a valid coordinate option
                            return piecename != null && piecename.slice(0,1) == 'b';
                        }
                        
                        else{
                            //here we are checking if the 1st jump square has a piece on it
                            let firsttile = document.getElementById(sp.x+'_'+(parseInt(sp.y)+1)).getAttribute('chesspiece');
                            if(coordinate[1] == (parseInt(sp.y) + 2) && firsttile != 'null'){
                                //we are stopping it from returning if tile 1/2 is not equal to null
                            }
                            else{
                                let jumpabletile = document.getElementById(value).getAttribute('chesspiece');
                                return jumpabletile == 'null';
                            }
                        }
                    });
                    break;

                    
            }

            return coordinates;
        },

        move(target){
            
            //we first need to get the appropriate piece name and the target tile 
            let piece = document.getElementById(chess.properties.selectedpiece).getAttribute('chesspiece');
            let targettile = document.getElementById(target.id);

            //we then set the target tile's innerHTML to the appropriate image and update the chesspiece attribute to be the correct piece
            targettile.innerHTML = `<img src='${chess.properties.pieces[piece].img}'>`;
            targettile.setAttribute('chesspiece', piece);

            //we then need to remove the piece from the old tile entirely
            let oldtile = document.getElementById(chess.properties.selectedpiece);
            oldtile.innerHTML = '';
            oldtile.setAttribute('chesspiece', 'null');
            
            //and also update our Javascript object accordingly
            chess.properties.pieces[selectedpiece].position = target.id;
            chess.properties.pieces[selectedpiece].moved = true;
        },

        togglehighlight(options) {
            options.forEach((element) => {
                if(element[1] == '_'){
                    let color = document.getElementById(element);
                    color.classList.toggle('red');
                }
            })
        }
    }
}

// const testclick = document.getElementById("1_7");
// testclick.addEventListener('click', (event) => {
//     //need to get the specific piece name so we have to go through the image
//     // chess.methods.moveoptions(event.target.parentElement.getAttribute('chesspiece'));
//     //I have to split the id because the togglehighlight method needs an array
//     chess.methods.togglehighlight(event.target.parentElement.id.split());
// })


chess.methods.gamesetup();


//this code allows me to be able to click on a chesspiece and use the togglehighlight method on it
const testallclicks = document.querySelectorAll(".tile");
let allpieces = [];
for(let each of testallclicks){
    // console.log(each);
    if(each.getAttribute('chesspiece') != 'null'){
        allpieces.push(each);
    }
}
allpieces.forEach((item) => {
    item.addEventListener('click', (event) => {
        // console.log(event.target.parentElement.getAttribute('chesspiece'));
        // let tempelement = chess.properties.pieces[event.target.parentElement.getAttribute('chesspiece')];
        // tempelement = tempelement.type;
        // console.log(tempelement);
        // if(chess.properties.selectedpiece = ''){
        
        if(chess.properties.highlighted.length != 0){
            
        }




            chess.properties.selectedpiece = event.target.parentElement.getAttribute('chesspiece');
            chess.methods.moveoptions(event.target.parentElement.getAttribute('chesspiece'));

        // }
        // else if(event.target.parentElement.getAttribute('chesspiece') == 'null'){

        //     // chess.methods.move();

        // }
        // console.log(chess.properties.selectedpiece);

        // chess.methods.moveoptions(event.target.parentElement.getAttribute('chesspiece'));
        
    })
})
