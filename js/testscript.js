let chess = {

    //I used this reference: "https://github.com/aliHaider-911/Chess-Game" to help set up the basic framework of my chess game
    properties: {
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        potentialWhiteMoves: [],
        potentialBlackMoves: [],
        futureWhiteMoves: [],
        futureBlackMoves: [],
        whiteDrawCheck: [],
        blackDrawCheck: [],
        w_check: false,
        b_check: false,
        w_EnPassant: 0,
        b_EnPassant: 0,
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
        
        //this method will be called when the start button is pushed
        gamesetup() {
            //initialize the tiles class in our HTML
            const tiles = document.querySelectorAll('.tile');
            tiles.forEach((tile) => {
                //we are setting each tile to have an attribute of null to recognize there is no piece on the tile
                tile.setAttribute('chesspiece', 'null');
            })

            //each piece in this for loop is the object name (w_pawn1, b_king, etc..)
            for(let piece in chess.properties.pieces){
                //first we are grabbing each piece's starting position (identical to the id's in my html)
                let pieceposition = document.getElementById(chess.properties.pieces[piece].position);
                //we are then assigning the innerHTML to the image of the appropriate piece
                pieceposition.innerHTML = `<img src='${chess.properties.pieces[piece].img}'>`;
                //and set the chesspiece attribute to it's appropriate name
                pieceposition.setAttribute('chesspiece', piece);
            }
        },

        moveoptions(selectedpiece) {

            //here we initialize the starting position so we can highlight the correct move tiles 
            let position = {
                x: '',
                y: ''
            };

            //using the event target we can find the coordinates for our starting square
            position.x = chess.properties.pieces[selectedpiece].position.split('_')[0];
            position.y = chess.properties.pieces[selectedpiece].position.split('_')[1];

            //initialize the variables so we can get the coordinates of the potential moves and filter through the options 
            let options = [];
            let coordinates = [];
            let startpoint = chess.properties.pieces[selectedpiece].position;
            //these will be all the different directions a piece can potentially go in one line (bishops,rooks,queens)
            let d1,d2,d3,d4,d5,d6,d7,d8;

            //this will check if we already have pieces highlighted and if we do it will toggle them
            if(chess.properties.highlighted.length != 0){
                chess.methods.togglehighlight(chess.properties.highlighted);
                // this line is to fix a bug where it continuously added more to the highlighted array
                chess.properties.highlighted.length = 0;
            }

            //based on the piece type we are going to be giving our piece coordinates and then filter through those coordinates accordingly before highlighting the appropriate tiles
            switch(chess.properties.pieces[selectedpiece].type) {
                
                case 'w_pawn':
                    //first we are using a conditional to see if a pawn can move forward twice
                    if(chess.properties.pieces[selectedpiece].moved == false){
                        coordinates = [{x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 1}, {x: -1, y: 1}].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        });
                    }
                    //if it has already moved then we only add the one tile forward movement
                    else if(chess.properties.pieces[selectedpiece].moved == true){
                        coordinates = [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1}].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        })
                    }
                    //we need to slice all our options into our options variable
                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type)).slice(0));
                    //here if the king is being attacked we have to further limit our move options by running them through my testMove function
                    //the check properties will always be true unless this method is being ran through using the testMove function (gives the ability to pin pieces to the king)
                    //prevents an infinite loop
                    if(chess.properties.w_check == true){
                        options = chess.methods.testMove(options);
                    }
                    //we can then add all our options to our highlighted array
                    chess.properties.highlighted = options.slice(0);
                    //and then call our togglehighlight method based on all our options
                    chess.methods.togglehighlight(options);

                    //this conditional is so we can return the attacking moves as potential castling stoppers but if you are being checked you need to return the full move options to potentially block the attacker & pin your piece
                    if(chess.properties.w_check == false){
                        //we want our pawns to be able to threaten the attack without being able to move there
                        let attackArray = [(parseInt(position.x) + 1) + '_' + (parseInt(position.y) + 1),(parseInt(position.x) - 1) + '_' + (parseInt(position.y) + 1)];
                        attackArray = attackArray.filter((item) => {
                            return (item.slice(0,1) >= 1 && item.slice(0,1) <= 8 && item.slice(2,3) >= 1 && item.slice(2,3) <= 8)
                        })
                        return attackArray;
                    }
                    else{
                        break;
                    }

                
                case 'b_pawn':
                    //same as above but inverse
                    if(chess.properties.pieces[selectedpiece].moved == false){
                        coordinates = [{x: 0, y: -1}, {x: 0, y: -2}, {x: 1, y:-1}, {x: -1, y: -1}].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        });
                    }
                    else if(chess.properties.pieces[selectedpiece].moved == true){
                        coordinates = [{x: 0, y: -1}, {x: 1, y: -1}, {x: -1, y: -1}].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        });
                    }

                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type)).slice(0));
                    if(chess.properties.b_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    if(chess.properties.b_check == false){
                        let attackArray2 = [(parseInt(position.x) + 1) + '_' + (parseInt(position.y) - 1),(parseInt(position.x) - 1) + '_' + (parseInt(position.y) - 1)];
                        attackArray2 = attackArray2.filter((item) => {
                            return (item.slice(0,1) >= 1 && item.slice(0,1) <= 8 && item.slice(2,3) >= 1 && item.slice(2,3) <= 8)
                        })
                        return attackArray2;
                    }
                    else{
                        break;
                    }

                case 'w_bishop':
                    
                    //for pieces that move in directions we are using a different method which will stop the line of sight once a piece is reached
                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    d2 = chess.methods.directionoptions(position, [{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    d4 = chess.methods.directionoptions(position, [{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    //we then need to combine all our different direction options together to form the potential coordinates
                    coordinates = d1.concat(d2).concat(d3).concat(d4);

                    options = coordinates;
                    //the check properties will always be true unless this method is being ran through using the testMove function (gives the ability to pin pieces to the king)
                    //prevents an infinite loop
                    if(chess.properties.w_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;
                
                case 'b_bishop':
                    
                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    d2 = chess.methods.directionoptions(position, [{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    d4 = chess.methods.directionoptions(position, [{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    coordinates = d1.concat(d2).concat(d3).concat(d4);

                    options = coordinates.slice(0);
                    if(chess.properties.b_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;
                
                case 'w_rook':

                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    d2 = chess.methods.directionoptions(position, [{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    d4 = chess.methods.directionoptions(position, [{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

                    coordinates = d1.concat(d2).concat(d3).concat(d4);

                    options = coordinates.slice(0);
                    if(chess.properties.w_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;
                
                case 'b_rook':

                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    d2 = chess.methods.directionoptions(position, [{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    d4 = chess.methods.directionoptions(position, [{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
    
                    coordinates = d1.concat(d2).concat(d3).concat(d4);
    
                    options = coordinates.slice(0);
                    if(chess.properties.b_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);
    
                    break;

                case 'w_queen':

                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    d2 = chess.methods.directionoptions(position, [{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    d4 = chess.methods.directionoptions(position, [{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
                    d5 = chess.methods.directionoptions(position, [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    d6 = chess.methods.directionoptions(position, [{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    d7 = chess.methods.directionoptions(position, [{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    d8 = chess.methods.directionoptions(position, [{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    coordinates = d1.concat(d2).concat(d3).concat(d4).concat(d5).concat(d6).concat(d7).concat(d8);

                    options = coordinates.slice(0);
                    if(chess.properties.w_check == true){
                        options = chess.methods.testMove(options);
                    }                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'b_queen':

                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    d2 = chess.methods.directionoptions(position, [{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    d4 = chess.methods.directionoptions(position, [{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
                    d5 = chess.methods.directionoptions(position, [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    d6 = chess.methods.directionoptions(position, [{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    d7 = chess.methods.directionoptions(position, [{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    d8 = chess.methods.directionoptions(position, [{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    coordinates = d1.concat(d2).concat(d3).concat(d4).concat(d5).concat(d6).concat(d7).concat(d8);

                    options = coordinates.slice(0);
                    if(chess.properties.b_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'w_knight':

                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map((value) => {
                        return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                    })

                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type))).slice(0);
                    if(chess.properties.w_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'b_knight':

                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map((value) => {
                        return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                    })

                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type))).slice(0);
                    if(chess.properties.b_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'w_king':

                    coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map((value) => {
                        return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                    });

                    if(chess.properties.pieces['w_king'].moved == false && chess.properties.pieces['w_rook2'].moved == false && document.getElementById('7_1').getAttribute('chesspiece') == 'null' && document.getElementById('6_1').getAttribute('chesspiece') == 'null' && chess.properties.potentialBlackMoves.includes('8_1') == false && chess.properties.potentialBlackMoves.includes('7_1') == false && chess.properties.potentialBlackMoves.includes('6_1') == false && chess.properties.potentialBlackMoves.includes('5_1') == false){
                        coordinates.push('7_1');
                    }

                    if(chess.properties.pieces['w_king'].moved == false && chess.properties.pieces['w_rook1'].moved == false && document.getElementById('2_1').getAttribute('chesspiece') == 'null' && document.getElementById('3_1').getAttribute('chesspiece') == 'null' && document.getElementById('4_1').getAttribute('chesspiece') == 'null' && chess.properties.potentialBlackMoves.includes('1_1') == false && chess.properties.potentialBlackMoves.includes('2_1') == false && chess.properties.potentialBlackMoves.includes('3_1') == false && chess.properties.potentialBlackMoves.includes('4_1') == false && chess.properties.potentialBlackMoves.includes('5_1') == false){
                        coordinates.push('3_1');
                    }

                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type))).slice(0);
                    
                    //here we are checking to see if any of the potential tiles are being attacked so you cannot move to them
                    options = options.filter((item) => {
                        return chess.properties.potentialBlackMoves.includes(item) == false;
                    })
                    if(chess.properties.w_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'b_king':

                    coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map((value) => {
                        return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                    });

                    if(chess.properties.pieces['b_king'].moved == false && chess.properties.pieces['b_rook2'].moved == false && document.getElementById('7_8').getAttribute('chesspiece') == 'null' && document.getElementById('6_8').getAttribute('chesspiece') == 'null' && chess.properties.potentialWhiteMoves.includes('8_8') == false && chess.properties.potentialWhiteMoves.includes('7_8') == false && chess.properties.potentialWhiteMoves.includes('6_8') == false && chess.properties.potentialWhiteMoves.includes('5_8') == false){
                        coordinates.push('7_8');
                    }

                    if(chess.properties.pieces['b_king'].moved == false && chess.properties.pieces['b_rook1'].moved == false && document.getElementById('2_8').getAttribute('chesspiece') == 'null' && document.getElementById('3_8').getAttribute('chesspiece') == 'null' && document.getElementById('4_8').getAttribute('chesspiece') == 'null' && chess.properties.potentialWhiteMoves.includes('1_8') == false && chess.properties.potentialWhiteMoves.includes('2_8') == false && chess.properties.potentialWhiteMoves.includes('3_8') == false && chess.properties.potentialWhiteMoves.includes('4_8') == false && chess.properties.potentialWhiteMoves.includes('5_8') == false){
                        coordinates.push('3_8');
                    }

                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type))).slice(0);
                    
                    //here we are checking to see if any of the potential tiles are being attacked so you cannot move to them
                    options = options.filter((item) => {
                        return chess.properties.potentialWhiteMoves.includes(item) == false;
                    })
                    if(chess.properties.b_check == true){
                        options = chess.methods.testMove(options);
                    }
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

            }
            //we are returning the options also so I can accurately update the potentialMoves arrays
            return options;
        },

        //this options method will take in potential coordinates and filter out out of bounds tiles, same team tiles, and if it is a pawn the ability to double jump
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

                        coordinates = coordinates.filter((value) => {
                        let sp = {x: 0, y: 0};
                        let coordinate = value.split('_');
                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        //if the startpoint coordinate does not equal the potential x coordinate we have to check to see if there is a piece on it and if it is black 
                        if(coordinate[0] != sp.x){
                            let piecename = document.getElementById(value).getAttribute('chesspiece');
                            //if there is a piece and it's black we can return the value as a valid coordinate option
                            //or if it has the opposite colors enpassant attribute you can capture
                            return (piecename != null && piecename.slice(0,1) == 'b') || document.getElementById(value).hasAttribute('b_enpassant') == true;
                        }
                        
                        else{
                            //here we are checking if the 1st jump square has a piece on it
                            let firsttile = document.getElementById(sp.x+'_'+(parseInt(sp.y)+1)).getAttribute('chesspiece');
                            if(coordinate[1] == (parseInt(sp.y) + 2) && firsttile != 'null'){
                                //we are stopping it from returning if the first tile is not equal to null
                            }
                            else{
                                let jumpabletile = document.getElementById(value).getAttribute('chesspiece');
                                //if  the second tile is empty we can return the value as a valid coordinate
                                return jumpabletile == 'null';
                            }
                        }
                    });
                    break;
                    
                case 'b_pawn':
                    //same as above but inverse
                    coordinates = coordinates.filter((value) => {
                        let sp = {x: 0, y: 0};
                        let coordinate = value.split('_');
                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        //if the startpoint coordinate does not equal the potential x coordinate we have to check to see if there is a piece on it and if it is black 
                        if(coordinate[0] != sp.x){
                            let piecename = document.getElementById(value).getAttribute('chesspiece');
                            //if there is a piece and it's white we can return the value as a valid coordinate option
                            //or if it has the opposite colors enpassant attribute you can capture
                            return (piecename != null && piecename.slice(0,1) == 'w') || document.getElementById(value).hasAttribute('w_enpassant') == true;
                        }
                        
                        else{
                            //here we are checking if the 1st jump square has a piece on it
                            let firsttile = document.getElementById(sp.x+'_'+(parseInt(sp.y)-1)).getAttribute('chesspiece');
                            if(coordinate[1] == (parseInt(sp.y) - 2) && firsttile != 'null'){
                                //we are stopping it from returning if tile 1/2 is not equal to null
                            }
                            else{
                                let jumpabletile = document.getElementById(value).getAttribute('chesspiece');
                                return jumpabletile == 'null';
                            }
                        }
                    });
                    break;

                case 'w_knight':

                    coordinates = coordinates.filter((value) => {
                        return (document.getElementById(value).getAttribute('chesspiece') == 'null' || document.getElementById(value).getAttribute('chesspiece').slice(0,1) == 'b');
                    })
                    break;

                case 'b_knight':

                    coordinates = coordinates.filter((value) => {
                        return (document.getElementById(value).getAttribute('chesspiece') == 'null' || document.getElementById(value).getAttribute('chesspiece').slice(0,1) == 'w');
                    })
                    break;

                case 'w_king':

                    coordinates = coordinates.filter((value) => {
                        return (document.getElementById(value).getAttribute('chesspiece') == 'null' || document.getElementById(value).getAttribute('chesspiece').slice(0,1) == 'b');
                    });
                    break;
                
                case 'b_king':

                    coordinates = coordinates.filter((value) => {
                        return (document.getElementById(value).getAttribute('chesspiece') == 'null' || document.getElementById(value).getAttribute('chesspiece').slice(0,1) == 'w');
                    });
                    break;
            }

            return coordinates;
        },

        //here we are sorting the the directional pieces to filter out out of bounds and stop the directions line of sight when a friendly or enemy piece is reached
        directionoptions(position, coordinates){

            //we need to initialize a stop variable which will stop the coordinates from continuing once we reach a piece
            let stop = false;

            //first we are turning all the potential coordinates into the appropriate tiles based on our starting position
            coordinates = coordinates.map((value) => {
                return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
            });

            //then we are removing all the invalid tile coordinates
            coordinates = coordinates.filter((value) => {
                let pos = {
                    x: 0,
                    y: 0
                }
                pos.x = parseInt(value.split('_')[0]);
                pos.y = parseInt(value.split('_')[1]);
                
                if(pos.x >= 1 && pos.x <= 8 && pos.y >= 1 && pos.y <= 8){
                    return value;
                }
            })

            //then we are stopping the direction once the line of sight is broken
            coordinates = coordinates.filter((value) => {
                if(stop == false){
                    //these conditionals keep the direction going until it reaches either the same type of piece or an enemy piece
                    //if the tile is empty return the value as a suitable tile
                    if(document.getElementById(value).getAttribute('chesspiece') == 'null'){
                        return value;
                    }
                    //if the tile has the same color piece on it don't return the tile but stop the direction
                    else if(document.getElementById(value).getAttribute('chesspiece').slice(0,1) == chess.properties.turn){
                        stop = true;
                        //this is so piece's that are being defended are recognized
                        //the second conditional (check == true) is so if the piece is being attacked by your own piece during the testMove method it doesn't get added (fixed bug where it wouldn't let you capture with king if your piece was also attacking it)
                        if(chess.properties.turn == 'w' && chess.properties.w_check == true){
                            chess.properties.potentialWhiteMoves.push(value);
                        }
                        else if(chess.properties.turn == 'b' && chess.properties.b_check == true){
                            chess.properties.potentialBlackMoves.push(value);
                        }
                        //you need to also add these into our futureMoves arrays for the testMove function because it will run the opposite color's pieces into this conditional (big bug fix)
                        if(chess.properties.turn == 'w'){
                            chess.properties.futureBlackMoves.push(value);
                        }
                        else if(chess.properties.turn == 'b'){
                            chess.properties.futureWhiteMoves.push(value);
                        }
                    }
                    //if the tile has a different color piece on it and is not empty you return the value and also stop the direction
                    else{
                        stop = true;
                        return value;
                    }
                }  
            })
            //finally don't forget to return all the now finalized coordinates back
            return coordinates;
        },

        //this method will be used if the highlighted tile clicked does not have a piece on it
        move(target){
            
            //we first need to get the appropriate piece name and the target tile 
            let piece = document.getElementById(chess.properties.selectedpiece).getAttribute('chesspiece');
            let targettile = document.getElementById(target.id);

            //here I am setting up En Passant functionality
            if(piece.slice(0,6) == 'b_pawn' && chess.properties.pieces[piece].position == (targettile.getAttribute('id').slice(0,1) + '_' + (parseInt(targettile.getAttribute('id').slice(2,3)) + 2))){
                //we want to target the tile that was hopped over
                let enPassantTile = document.getElementById(targettile.getAttribute('id').slice(0,1) + '_' + (parseInt(targettile.getAttribute('id').slice(2,3)) + 1));
                //then give it the enpassant attribute which will be removed in the endTurn method after the tally reaches 2
                enPassantTile.setAttribute('b_enpassant', piece);
                //reset the tally also
                chess.properties.b_EnPassant = 0;
            }
            if(piece.slice(0,6) == 'w_pawn' && chess.properties.pieces[piece].position == (targettile.getAttribute('id').slice(0,1) + '_' + (parseInt(targettile.getAttribute('id').slice(2,3)) - 2))){
                let enPassantTile = document.getElementById(targettile.getAttribute('id').slice(0,1) + '_' + (parseInt(targettile.getAttribute('id').slice(2,3)) - 1));
                enPassantTile.setAttribute('w_enpassant', piece);
                chess.properties.w_EnPassant = 0;
            }

            //here I am implimenting castling based on specific conditions
            if(target.id == '7_1' && piece == 'w_king' && chess.properties.pieces['w_king'].moved == false){
                //since we are already moving the king to the appropriate tile below we just need to move the rook
                //first we delete it from our old tile
                let oldRookTile = document.getElementById('8_1');
                oldRookTile.innerHTML = '';
                oldRookTile.setAttribute('chesspiece', 'null');

                //then add both the image and attribute to the new tile
                document.getElementById('6_1').innerHTML = `<img src='${chess.properties.pieces['w_rook2'].img}'>`;
                document.getElementById('6_1').setAttribute('chesspiece', 'w_rook2');

                //after updating the HTML we need to update our Javascript object
                chess.properties.pieces['w_rook2'].position = '6_1';
                chess.properties.pieces['w_rook2'].moved = true;
            }

            //same as above but for long side castling
            if(target.id == '3_1' && piece == 'w_king' && chess.properties.pieces['w_king'].moved == false){
                let oldRookTile = document.getElementById('1_1');
                oldRookTile.innerHTML = '';
                oldRookTile.setAttribute('chesspiece', 'null');

                document.getElementById('4_1').innerHTML = `<img src='${chess.properties.pieces['w_rook1'].img}'>`;
                document.getElementById('4_1').setAttribute('chesspiece', 'w_rook1');

                chess.properties.pieces['w_rook1'].position = '4_1';
                chess.properties.pieces['w_rook1'].moved = true;
            }

            //same as above but with the black king long castling
            if(target.id == '3_8' && piece == 'b_king' && chess.properties.pieces['b_king'].moved == false){
                let oldRookTile = document.getElementById('1_8');
                oldRookTile.innerHTML = '';
                oldRookTile.setAttribute('chesspiece', 'null');

                document.getElementById('4_8').innerHTML = `<img src='${chess.properties.pieces['b_rook1'].img}'>`;
                document.getElementById('4_8').setAttribute('chesspiece', 'b_rook1');

                chess.properties.pieces['b_rook1'].position = '4_8';
                chess.properties.pieces['b_rook1'].moved = true;
            }

            //same as above but with black king short castling
            if(target.id == '7_8' && piece == 'b_king' && chess.properties.pieces['b_king'].moved == false){
                let oldRookTile = document.getElementById('8_8');
                oldRookTile.innerHTML = '';
                oldRookTile.setAttribute('chesspiece', 'null');

                document.getElementById('6_8').innerHTML = `<img src='${chess.properties.pieces['b_rook2'].img}'>`;
                document.getElementById('6_8').setAttribute('chesspiece', 'b_rook2');

                chess.properties.pieces['b_rook2'].position = '6_8';
                chess.properties.pieces['b_rook2'].moved = true;
            }

            //we then set the target tile's innerHTML to the appropriate image and update the chesspiece attribute to be the correct piece
            targettile.innerHTML = `<img src='${chess.properties.pieces[piece].img}'>`;
            targettile.setAttribute('chesspiece', piece);

            //we then need to remove the piece from the old tile entirely
            let oldtile = document.getElementById(chess.properties.selectedpiece);
            oldtile.innerHTML = '';
            oldtile.setAttribute('chesspiece', 'null');
            
            //and also update our Javascript object accordingly
            chess.properties.pieces[piece].position = target.id;
            chess.properties.pieces[piece].moved = true;
        },

        //this method will be invoked when the target tile has an enemy piece on it
        capture(target){

            //first we need to create a variable which will hold our already selected piece's name and tile id
            let selectedpiece = {
                name: document.getElementById(chess.properties.selectedpiece).getAttribute('chesspiece'),
                //remember the selected piece in my chess object is just the square name (1_8)
                id: chess.properties.selectedpiece
            };

            //initialize the target tile
            let targettile = document.getElementById(target.id);

            //here I am checking if the captured tile was an en passant because it captures differently
            if(targettile.hasAttribute('b_enpassant') == true){
                //if we just captured a piece that has the enpassant property we need to delete the piece from the square below our target
                let actualTargetTile = document.getElementById(targettile.getAttribute('id').slice(0,1) + '_' + (parseInt(targettile.getAttribute('id').slice(2,3)) - 1));
                actualTargetTile.innerHTML = '';
                chess.properties.pieces[actualTargetTile.getAttribute('chesspiece')].captured = true;
                actualTargetTile.setAttribute('chesspiece', 'null');
            }
            else if(targettile.hasAttribute('w_enpassant') == true){
                //if we just captured a piece that has the enpassant property we need to delete the piece from the square above our target
                let actualTargetTile = document.getElementById(targettile.getAttribute('id').slice(0,1) + '_' + (parseInt(targettile.getAttribute('id').slice(2,3)) + 1));
                actualTargetTile.innerHTML = '';
                chess.properties.pieces[actualTargetTile.getAttribute('chesspiece')].captured = true;
                actualTargetTile.setAttribute('chesspiece', 'null');
            }

            //we then need to replace the targetted tile with the new piece properties
            targettile.innerHTML = `<img src='${chess.properties.pieces[selectedpiece.name].img}'>`;
            targettile.setAttribute('chesspiece', selectedpiece.name);

            //then replace the cell we moved from's information 
            let oldtile = document.getElementById(selectedpiece.id);
            oldtile.innerHTML = '';
            oldtile.setAttribute('chesspiece', 'null');

            //then we need to update our Javascript object information accordingly
            chess.properties.pieces[selectedpiece.name].position = target.id;
            chess.properties.pieces[selectedpiece.name].moved = true;
            
            //here we are only updating the targeted piece as captured if it isn't an en passant
            if(targettile.hasAttribute('w_enpassant') == false && targettile.hasAttribute('b_enpassant') == false){
                chess.properties.pieces[target.name].captured = true;
            }
        },

        endturn() {
            //here I am storing all the pieces and their potential moves into an array so I can check if certain tiles are being attacked for castling and potential king moves
            let allTiles = document.querySelectorAll('.tile');
            let tileArray = [];
            for(let tile of allTiles){
                tileArray.push(tile);
            }

            //make sure to reset potentialMoves before you refresh them for that turn
            chess.properties.potentialWhiteMoves.length = 0;
            chess.properties.potentialBlackMoves.length = 0;

            //here I am first filtering through each tile to find the ones with white pieces
            let allWhitePieces = tileArray.filter((item) => {
                return item.getAttribute('chesspiece').slice(0,1) == 'w';
            }).map((item) => {
                //then I am mapping them to change each item to it's id value
                return item.getAttribute('chesspiece').slice(0);
            })
            //exact same as above but opposite
            let allBlackPieces = tileArray.filter((item) => {
                return item.getAttribute('chesspiece').slice(0,1) == 'b';
            }).map((item) => {
                return item.getAttribute('chesspiece').slice(0);
            })

            //then I can go through each index and use our moveoptions function to update our potentialMoves property for each color
            for(let piece of allWhitePieces){
                chess.properties.potentialWhiteMoves = chess.properties.potentialWhiteMoves.concat(chess.methods.moveoptions(piece));
            }
            for(let piece of allBlackPieces){
                chess.properties.potentialBlackMoves = chess.properties.potentialBlackMoves.concat(chess.methods.moveoptions(piece));
            }

            //here I am implimenting a promotion check for the pawns
            let allWhitePawns = tileArray.filter((item) => {
                return item.getAttribute('chesspiece').slice(0,6) == 'w_pawn';
            }).map((item) => {
                return item.getAttribute('chesspiece').slice(0);
            });

            //if any of the white pawns reaches the eighth rank they promote to a queen automatically (I got lazy)
            for(let pawn of allWhitePawns){
                if(chess.properties.pieces[pawn].position == '1_8' || chess.properties.pieces[pawn].position == '2_8' || chess.properties.pieces[pawn].position == '3_8' || chess.properties.pieces[pawn].position == '4_8' || chess.properties.pieces[pawn].position == '5_8' || chess.properties.pieces[pawn].position == '6_8' || chess.properties.pieces[pawn].position == '7_8' || chess.properties.pieces[pawn].position == '8_8'){
                    chess.properties.pieces[pawn].type = 'w_queen';
                    chess.properties.pieces[pawn].img = chess.properties.pieces['w_queen'].img
                    let changePicture = document.getElementById(chess.properties.pieces[pawn].position);
                    changePicture.innerHTML = `<img src='${chess.properties.pieces['w_queen'].img}'>`;
                }
            }

            //the exact same as above but for black pawns
            let allBlackPawns = tileArray.filter((item) => {
                return item.getAttribute('chesspiece').slice(0,6) == 'b_pawn';
            }).map((item) => {
                return item.getAttribute('chesspiece').slice(0);
            });

            for(let pawn of allBlackPawns){
                if(chess.properties.pieces[pawn].position == '1_1' || chess.properties.pieces[pawn].position == '2_1' || chess.properties.pieces[pawn].position == '3_1' || chess.properties.pieces[pawn].position == '4_1' || chess.properties.pieces[pawn].position == '5_1' || chess.properties.pieces[pawn].position == '6_1' || chess.properties.pieces[pawn].position == '7_1' || chess.properties.pieces[pawn].position == '8_1'){
                    chess.properties.pieces[pawn].type = 'b_queen';
                    chess.properties.pieces[pawn].img = chess.properties.pieces['b_queen'].img
                    let changePicture = document.getElementById(chess.properties.pieces[pawn].position);
                    changePicture.innerHTML = `<img src='${chess.properties.pieces['b_queen'].img}'>`;
                }
            }

            //here I am adding one and removing all the En Passant attributes if it is greater than 2 (gets set to 0 when a pawn jumps 2 tiles forward)
            chess.properties.w_EnPassant++;
            chess.properties.b_EnPassant++;
            //removed at the end of the other player's turn
            if(chess.properties.w_EnPassant >= 2){
                for(let tile of tileArray){
                    tile.removeAttribute('w_enpassant');
                }
            }
            if(chess.properties.b_EnPassant >= 2){
                for(let tile of tileArray){
                    tile.removeAttribute('b_enpassant');
                }
            }


            //here we are swapping the turn
            if(chess.properties.turn == 'w'){
                //white will become black
                chess.properties.turn = 'b';

                //and then toggle all the highlighted tiles before setting the highlighted array back to 0
                chess.methods.togglehighlight(chess.properties.highlighted);
                chess.properties.highlighted.length = 0;

                //we then also need to set the selected piece back to nothing
                chess.properties.selectedpiece = '';

                //we then need to change our turn text to the opposite colors turn
                let turndisplay = document.getElementById('turn');
                turndisplay.innerText = "Black's Turn";
            }
            //same as above but inverse
            else if(chess.properties.turn = 'b'){
                chess.properties.turn = 'w';

                chess.methods.togglehighlight(chess.properties.highlighted);
                chess.properties.highlighted.length = 0;

                chess.properties.selectedpiece = '';

                let turndisplay = document.getElementById('turn');
                turndisplay.innerText = "White's Turn";
            }


            //here I am implimenting a checkmate check for white
            //allDefense arrays store the potential moves you have to respond to a check threat, if the length is 0 checkmate will occur
            let allWhiteDefense = [];
            let potentialWhiteDraw = [];
            for(let item of allTiles){
                if(item.getAttribute('chesspiece').slice(0,1) == 'w'){
                    chess.properties.selectedpiece = item.getAttribute('id');
                    //this conditional checks the array that is updated at the end of every turn above
                    if(chess.properties.potentialBlackMoves.includes(chess.properties.pieces['w_king'].position) == true){
                        //here is where we are overriding the display text to say check
                        let displayText = document.querySelector('#turn');
                        displayText.innerText = "Check! White's turn";
                        
                        //we then need to check to see if you have any potential moves
                        //make sure these are wrapped in the check conditional so it doesn't get run unless a king is being checked, causes game to lag after you move a piece
                        if(chess.methods.testMove(chess.methods.moveoptions(item.getAttribute('chesspiece'))).length == 0){
    
                        }
                        //if you do then it will be pushed into this array to counter my checkmate conditional
                        else{
                            allWhiteDefense.push(item);
                        }
                    }
                    //here I am implimenting a stalemate check/output
                     if(chess.properties.turn === 'w'){
                        //we then need to check to see if you have any potential moves
                        chess.properties.w_check = true;
                        if(chess.methods.testMove(chess.methods.moveoptions(item.getAttribute('chesspiece'))).length == 0){
    
                        }
                        //if you do then it will be pushed into this array to counter my checkmate conditional
                        else{
                            potentialWhiteDraw.push(item);
                        }
                    }
                }
            }

            //stalemate conditional
            if(chess.properties.turn == 'w'){
                if(potentialWhiteDraw.length == 0){
                    let displayText = document.querySelector('#turn');
                    displayText.innerText = "Stalemate! It's a Draw";
                }
            }

            //checkmate conditional
            if(allWhiteDefense.length == 0 && chess.properties.potentialBlackMoves.includes(chess.properties.pieces['w_king'].position) == true){
                let displayText = document.querySelector('#turn');
                displayText.innerText = "Checkmate! Black Wins!";
            }

            //here I am doing the same as above but for black
            let allBlackDefense = [];
            let potentialBlackDraw = [];
            for(let item of allTiles){
                if(item.getAttribute('chesspiece').slice(0,1) == 'b'){
                    chess.properties.selectedpiece = item.getAttribute('id');
                    if(chess.properties.potentialWhiteMoves.includes(chess.properties.pieces['b_king'].position) == true){
                        chess.properties.b_check = true;
                        //here we are updating the display text to say check
                        let displayText = document.querySelector('#turn');
                        displayText.innerText = "Check! Black's turn"
                        //make sure these are wrapped in the check conditional so it doesn't get run unless a king is being checked, causes game to lag
                        if(chess.methods.testMove(chess.methods.moveoptions(item.getAttribute('chesspiece'))).length == 0){
    
                        }
                        else{
                            allBlackDefense.push(item);
                        }
                    }

                    //here I am implimenting a stalemate check/output
                    if(chess.properties.turn === 'b'){
                        //we then need to check to see if you have any potential moves
                        chess.properties.b_check = true;
                        if(chess.methods.testMove(chess.methods.moveoptions(item.getAttribute('chesspiece'))).length == 0){

                        }
                        //if you do then it will be pushed into this array to counter my checkmate conditional
                        else{
                            potentialBlackDraw.push(item);
                        }
                    }
                }
            }
            //checkmate conditional
            if(allBlackDefense.length == 0 && chess.properties.potentialWhiteMoves.includes(chess.properties.pieces['b_king'].position) == true){
                let displayText = document.querySelector('#turn');
                displayText.innerText = "Checkmate! White Wins!";
            }
            //stalemate conditional
            if(chess.properties.turn == 'b'){
                if(potentialBlackDraw.length == 0){
                    let displayText = document.querySelector('#turn');
                    displayText.innerText = "Stalemate! It's a Draw";
                }
            }
            //lack of material draw conditional
            let numberOfPieces = [];
            for(let tile of allTiles){
                if(tile.getAttribute('chesspiece').slice(0,1) == 'b' || tile.getAttribute('chesspiece').slice(0,1) == 'w'){
                    numberOfPieces.push(tile);
                }
            }
            
            if(numberOfPieces.length == 2){
                let displayText = document.querySelector('#turn');
                displayText.innerText = "Lack of Material! It's a Draw";
            }

            //finally make sure to reset the selected piece
            chess.properties.selectedpiece = '';
        },

        //here we are going to test a potentialtile array to find moves that allow the tile the king is occupying to be safe
        testMove(potentialtile){

            //here we initialize our future pieces and their results as well as the validMoves array where we will return moves that meet the conditions
            let potentialWhiteResult = [];
            let potentialBlackResult = [];
            let validMoves = [];

            //we also need to change our check property to false so it doesn't cause an infinite loop in our moveoptions method            
            chess.properties.w_check = false;
            chess.properties.b_check = false;
            
            //here I am putting each potential tile through a simulation where we put the selectedpiece in the potentialtile and then check to see if the king is still being attacked after that move, if he is not then filter that move as valid
            for(let tile of potentialtile){

                //the selected piece is stored before the moveoptions method gets run in our click event listener
                let startingTile = document.getElementById(chess.properties.selectedpiece);
                let futureTile = document.getElementById(tile);
                let pieceName = startingTile.getAttribute('chesspiece');
                let targetName = futureTile.getAttribute('chesspiece');

                //we need to reset the array 
                potentialBlackResult.length = 0;
                potentialWhiteResult.length = 0;
                let allBlackPieces = [];
                let allWhitePieces = [];

                //make sure to reset the potential future moves on each instance
                chess.properties.futureBlackMoves = [];
                chess.properties.futureWhiteMoves = [];

                //first I am setting each potential tile to the selected piece and removing it from our old square
                //need to make sure to do this first so we can set the future's to the old name before deleting it from the old tile
                futureTile.setAttribute('chesspiece', pieceName);
                startingTile.setAttribute('chesspiece', 'null');
                chess.properties.pieces[pieceName].position = tile;

                //I then need to run the new chess board through the potential options to check if the king's square is still being attacked
                let allTiles = document.querySelectorAll('.tile');
                let tileArray = [];
                for(let tile of allTiles){
                    tileArray.push(tile);
                }
                //here I am first filtering through each tile to find the ones with white pieces
                allWhitePieces = tileArray.filter((item) => {
                    return item.getAttribute('chesspiece').slice(0,1) == 'w';
                }).map((item) => {
                //then I am mapping them to change each item to it's id value
                    return item.getAttribute('chesspiece').slice(0);
                })
                //exact same as above but opposite
                allBlackPieces = tileArray.filter((item) => {
                    return item.getAttribute('chesspiece').slice(0,1) == 'b';
                }).map((item) => {
                    return item.getAttribute('chesspiece').slice(0);
                })

                //then I can go through each index and use our moveoptions function to update our potentialMoves property for each color
                //make sure to check to see which turn it is so you only have to look through the enemies future moves to see if they remove check (less lag and problems)
                if(chess.properties.turn == 'b'){
                    for(let piece of allWhitePieces){
                        chess.properties.futureWhiteMoves = chess.properties.futureWhiteMoves.concat(chess.methods.moveoptions(piece));
                    }
                }
                else{
                    for(let piece of allBlackPieces){
                        chess.properties.futureBlackMoves = chess.properties.futureBlackMoves.concat(chess.methods.moveoptions(piece));
                    }
                }

                //we then push the move into the validMoves array if the futureMoves array does not include the kings position
                if(chess.properties.turn == 'b') {
                    if(chess.properties.futureWhiteMoves.includes(chess.properties.pieces['b_king'].position) == true){

                    }
                    else{
                        validMoves.push(tile);
                    }
                }
                if(chess.properties.turn == 'w'){
                    if(chess.properties.futureBlackMoves.includes(chess.properties.pieces['w_king'].position) == true){

                    }
                    else{
                        validMoves.push(tile);
                    }
                }

                //we then need to set the piece back to it's original position before the simulation
                startingTile.setAttribute('chesspiece', pieceName);
                
                //if the target was a piece we need to reset it to it's appropriate value
                if(targetName.slice(0,1) == 'w' || targetName.slice(0,1) == 'b'){
                    futureTile.setAttribute('chesspiece', targetName);
                }
                //if not reset it to null
                else{
                    futureTile.setAttribute('chesspiece', 'null');
                }

                //then also set the piece's Javascript object position back to the original tile
                chess.properties.pieces[pieceName].position = chess.properties.selectedpiece;
            }

            //after the simulation is over turn the check properties back to true
            chess.properties.w_check = true;
            chess.properties.b_check = true;
            

            //remember to togglehighlight and change the selected piece back to nothing so it doesn't bug and show the last piece it checked
            chess.methods.togglehighlight(chess.properties.highlighted);
            chess.properties.highlighted.length = 0;

            //and don't forget to return the now valid moves!
            return validMoves;
        },

        //a standard togglehighlight function (accepts an array)
        togglehighlight(options) {
            options.forEach((element) => {
                //fixes but where you can through the div and highlight the body background
                if(element[1] == '_'){
                    let color = document.getElementById(element);
                    color.classList.toggle('red');
                }
            })
        }
    }
}

//here the page begins to load 

//initializing the appropriate pieces
let body = document.querySelector('body');
let startButton = document.createElement('button');

//also add the startButton class and change it's innerHTML to Start
startButton.classList.add('startButton');
startButton.innerHTML= "Start!";

//then append it to the body (styled in css to appear in the middle of the board statically)
body.appendChild(startButton);

//adding event listener which when clicked will turn the display text to White's turn, remove the button and run the gameSetup method
startButton.addEventListener('click', () => {
    let turndisplay = document.getElementById('turn');
    turndisplay.innerText = "White's Turn";
    startButton.remove();
    chess.methods.gamesetup();
})


//grabbing all the tiles
const tileclicks = document.querySelectorAll(".tile");

//adding an eventlistener to each tile
tileclicks.forEach((tile) => {
    tile.addEventListener('click', (event) => {

        //this will store the piece so it can distinguish between a moveoption click and move/capture among more conditionals
        let selectedpiece = {
            name: '',
            id: chess.properties.selectedpiece
        };

        //conditions to check to see if we are selecting a fresh piece or moving/capturing
        if(chess.properties.selectedpiece == ''){
            selectedpiece.name = document.getElementById(event.target.id)
        }
        else{
            selectedpiece.name = document.getElementById(chess.properties.selectedpiece).getAttribute('chesspiece');
        }

        //target will be activated always, used in conditionals also
        let target = {
            name: event.target.getAttribute('chesspiece'),
            id: event.target.id
        };
        

        //we want to check to see if the selected potential square to move to is an actual highlighted option
        let potentialtile = chess.properties.highlighted.some((item) => {
            return item == event.target.id;
        });
        
        //here we want to show our options if there is no selected piece
        if(chess.properties.selectedpiece == '' && target.name.slice(0,1) == chess.properties.turn){
            //we also need to set the selectedpiece as the now clicked on piece before running the testMove method
            chess.properties.selectedpiece = event.target.id;
            //this is a workaround for pinning, the check properties being true forces the moveoptions function to check if moving endangers the king
            chess.properties.b_check = true;
            chess.properties.w_check = true;

            //the check properties will be true at all times except when being run by the testMove function since the testMove function above sets it to true at the end
            chess.methods.moveoptions(event.target.getAttribute('chesspiece'));
        }

        //here we are deselecting the available tiles if the user pushes the already selected tile
        else if(chess.properties.selectedpiece == event.target.id){
            chess.methods.togglehighlight(chess.properties.highlighted);
            chess.properties.highlighted.length = 0;
            chess.properties.selectedpiece = '';
        }

        //here we want to disable all our highlighted squares and highlight the new ones when a different piece is clicked
        else if(chess.properties.selectedpiece != '' && target.name.slice(0,1) == chess.properties.turn){
            chess.properties.selectedpiece = event.target.id;
            chess.methods.moveoptions(event.target.getAttribute('chesspiece'));
        }

        //here we are checking if we have already selected a piece, the target's name is a piece and if it is a potential tile to jump to before capturing
        //you need to have this conditional before the move conditional for En Passant functionality
        else if(chess.properties.selectedpiece != '' && (target.name != 'null' || (event.target.hasAttribute('b_enpassant') == true && selectedpiece.name.slice(0,6) == 'w_pawn') || (event.target.hasAttribute('w_enpassant') == true && selectedpiece.name.slice(0,6) == 'b_pawn')) && potentialtile == true){
            //for some reason I need to set these back to false before the piece is moved but I can't figure out/remember why
            chess.properties.w_check = false;
            chess.properties.b_check = false;

            chess.methods.capture(target);
            chess.methods.endturn();
        }

        //if there already is a selected piece but not a piece on the target square we want to run our move method
        else if(chess.properties.selectedpiece != '' && target.name == 'null' && potentialtile == true){
            //for some reason I need to set these back to false before the piece is moved but I can't figure out/remember why
            chess.properties.w_check = false;
            chess.properties.b_check = false;
            
            chess.methods.move(target);
            chess.methods.endturn();
        }

        //if the user clicks on a square that is not a potential tile to jump to after selecting a piece this will stop highlighting all the squares and reset our selected piece data
        else if(potentialtile == false){
            chess.methods.togglehighlight(chess.properties.highlighted);
            chess.properties.highlighted.length = 0;
            chess.properties.selectedpiece = '';
        }
    })
})