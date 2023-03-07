let chess = {

    properties: {
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        allWhitePieceTiles: [],
        allBlackPieceTiles: [],
        potentialWhiteMoves: [],
        potentialBlackMoves: [],
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
                chess.properties.highlighted.length = 0;
            }

            switch(chess.properties.pieces[selectedpiece].type) {
                
                case 'w_pawn':
                    //first we are using a conditional to see if they can move forward twice
                    if(chess.properties.pieces[selectedpiece].moved == false){
                        coordinates = [{x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 1}, {x: -1, y: 1}].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        });
                    }
                    //if it has moved then we only add the one tile forward movement
                    else if(chess.properties.pieces[selectedpiece].moved == true){
                        coordinates = [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1}].map((value) => {
                            return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                        })
                    }
                    //we need to slice all our options into our options variable
                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type)).slice(0));
                    //we can then add all our options to our highlighted array
                    chess.properties.highlighted = options.slice(0);
                    //and then call our togglehighlight method based on all our options
                    chess.methods.togglehighlight(options);

                    break;
                
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
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'w_bishop':
                    
                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    d2 = chess.methods.directionoptions(position, [{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    d4 = chess.methods.directionoptions(position, [{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    //concat combines the arrays together
                    coordinates = d1.concat(d2).concat(d3).concat(d4);

                    options = coordinates;
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;
                
                case 'b_bishop':
                    
                    d1 = chess.methods.directionoptions(position, [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    d2 = chess.methods.directionoptions(position, [{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    d3 = chess.methods.directionoptions(position, [{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    d4 = chess.methods.directionoptions(position, [{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    //concat combines the arrays together
                    coordinates = d1.concat(d2).concat(d3).concat(d4);

                    options = coordinates.slice(0);
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
                    chess.properties.highlighted = options.slice(0);
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
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'w_knight':

                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map((value) => {
                        return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                    })

                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type))).slice(0);
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

                case 'b_knight':

                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map((value) => {
                        return (parseInt(position.x) + parseInt(value.x)) + '_' + (parseInt(position.y) + parseInt(value.y));
                    })

                    options = (chess.methods.options(startpoint, coordinates, (chess.properties.pieces[selectedpiece].type))).slice(0);
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
                    chess.properties.highlighted = options.slice(0);
                    chess.methods.togglehighlight(options);

                    break;

            }
            return options;
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
                            return piecename != null && piecename.slice(0,1) == 'w';
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

        directionoptions(position, coordinates){

            //we need to initialize a stop variable which will stop the coordinates from continuing once we reach a piece
            let stop = false;

            //first we are turning all the potential coordinates into the appropriate tile coordinates
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

        move(target){
            
            //we first need to get the appropriate piece name and the target tile 
            let piece = document.getElementById(chess.properties.selectedpiece).getAttribute('chesspiece');
            let targettile = document.getElementById(target.id);

            //here I am setting specific conditions for each direction you can castle
            if(target.id == '7_1' && piece == 'w_king'){
                //since we are already fully moving the king to the appropriate tile we just need to move the rook
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
            if(target.id == '3_1' && piece == 'w_king'){
                let oldRookTile = document.getElementById('1_1');
                oldRookTile.innerHTML = '';
                oldRookTile.setAttribute('chesspiece', 'null');

                document.getElementById('4_1').innerHTML = `<img src='${chess.properties.pieces['w_rook1'].img}'>`;
                document.getElementById('4_1').setAttribute('chesspiece', 'w_rook1');

                chess.properties.pieces['w_rook1'].position = '4_1';
                chess.properties.pieces['w_rook1'].moved = true;
            }

            //same as above but with the black king long castling
            if(target.id == '3_8' && piece == 'b_king'){
                let oldRookTile = document.getElementById('1_8');
                oldRookTile.innerHTML = '';
                oldRookTile.setAttribute('chesspiece', 'null');

                document.getElementById('4_8').innerHTML = `<img src='${chess.properties.pieces['b_rook1'].img}'>`;
                document.getElementById('4_8').setAttribute('chesspiece', 'b_rook1');

                chess.properties.pieces['b_rook1'].position = '4_8';
                chess.properties.pieces['b_rook1'].moved = true;
            }

            //same as above but with black king short castling
            if(target.id == '7_8' && piece == 'b_king'){
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

        capture(target){
            //first we need to create a variable which will hold our already selected piece's name and tile id
            let selectedpiece = {
                name: document.getElementById(chess.properties.selectedpiece).getAttribute('chesspiece'),
                //remember the selected piece in my chess object is just the square name (1_8)
                id: chess.properties.selectedpiece
            };

            //then we need to update our new cell with the correct picture and attribute
            let targettile = document.getElementById(target.id);
            targettile.innerHTML = `<img src='${chess.properties.pieces[selectedpiece.name].img}'>`;
            targettile.setAttribute('chesspiece', selectedpiece.name);

            //then replace the cell we moved from's information 
            let oldtile = document.getElementById(selectedpiece.id);
            oldtile.innerHTML = '';
            oldtile.setAttribute('chesspiece', 'null');

            //then we need to update our object information accordingly
            chess.properties.pieces[selectedpiece.name].position = target.id;
            chess.properties.pieces[selectedpiece.name].moved = true;
            
            chess.properties.pieces[target.name].captured = true;

        },

        endturn() {
            //here I am trying to store all the pieces and their potential moves into an array so I can check if certain tiles are being attacked for castling and king moves/checkmate            let allTiles = document.querySelectorAll('.tile');
            let allTiles = document.querySelectorAll('.tile');
            let tileArray = [];
            for(let tile of allTiles){
                tileArray.push(tile);
            }

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

            //here I am adding all of the piece's into our Javascript object
            chess.properties.allWhitePieceTiles = allWhitePieces.slice(0);
            chess.properties.allBlackPieceTiles = allBlackPieces.slice(0);


            //then I can go through each index and use our moveoptions function to update our potentialMoves property for each color
            for(let piece of chess.properties.allWhitePieceTiles){
                chess.properties.potentialWhiteMoves = chess.properties.potentialWhiteMoves.concat(chess.methods.moveoptions(piece));
            }
            for(let piece of chess.properties.allBlackPieceTiles){
                chess.properties.potentialBlackMoves = chess.properties.potentialBlackMoves.concat(chess.methods.moveoptions(piece));
            }



            if(chess.properties.turn == 'w'){
                //here we are changing whose turn it is to black
                chess.properties.turn = 'b';

                //and then toggling all the highlighted squares before setting the highlighted array back to nothing
                chess.methods.togglehighlight(chess.properties.highlighted);
                chess.properties.highlighted.length = 0;

                //we then also need to set the selected piece back to ''
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


chess.methods.gamesetup();

const tileclicks = document.querySelectorAll(".tile");

tileclicks.forEach((tile) => {
    tile.addEventListener('click', (event) => {

        //need to scope this globally because I use it in my move function to update data
        var selectedpiece = {
            name: '',
            id: chess.properties.selectedpiece
        };

        //checking to see if we are selecting a fresh piece or moving/capturing later on
        if(chess.properties.selectedpiece == ''){
            selectedpiece.name = document.getElementById(event.target.id)
        }
        else{
            selectedpiece.name = document.getElementById(chess.properties.selectedpiece).getAttribute('chesspiece');
        }

        var target = {
            name: event.target.getAttribute('chesspiece'),
            id: event.target.id
        };

        //we want to check to see if the selected potential square to move to is an actual option
        let potentialtile = chess.properties.highlighted.some((item) => {
            return item == event.target.id;
        });

        
        //here we want to show our options if there is no selected piece
        if(chess.properties.selectedpiece == '' && target.name.slice(0,1) == chess.properties.turn){
            //we also need to set the selectedpiece as the now clicked on piece
            chess.properties.selectedpiece = event.target.id;
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
        //if there already is a selected piece but not a piece on the target square we want to run our move method
        else if(chess.properties.selectedpiece != '' && target.name == 'null' && potentialtile == true){
            chess.methods.move(target);
            chess.methods.endturn();
        }
        //if the user clicks on a square that is not a potential tile to jump to after selecting a piece this will stop highlighting all the squares and reset our selected piece data
        else if(potentialtile == false){
            chess.methods.togglehighlight(chess.properties.highlighted);
            chess.properties.highlighted.length = 0;
            chess.properties.selectedpiece = '';
        }
        //here we are checking if we have already selected a piece, the target's name is a piece and if it is a potential tile to jump to before capturing
        else if(chess.properties.selectedpiece != '' && target.name != 'null' && potentialtile == true){
            chess.methods.capture(target);
            chess.methods.endturn();
        }
    })
})