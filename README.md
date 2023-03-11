#  ♟ Project 1... Chess! ♟
## Project Description: 
A rudimentary version of chess where you can play against yourself or an enemy locally.
## Getting Started: 
Welcome to the classic game of Chess! Using the game link provided you will be able to play against either yourself or a friend locally. You can find an in-depth guide at how the various pieces move and the rules for the game [here](https://www.wikihow.com/Play-Chess-for-Beginners).

<img src="https://i.imgur.com/UUF6iYH.png" width="275px" height="300px"> <img src="https://i.imgur.com/5oXyy9n.png" width="275px" height="300px"> <img src="https://i.imgur.com/E0kx15n.png" width="275px" height="300px">

## User Stories
### MVP Goals:
1. Create the 8x8 tile game board and a start button upon launch.
2. After the start button is pushed initialize all 32 pieces in their correct positions (16 pawns, 4 knights, 4 bishops, 4 rooks, 2 queens, and 2 kings).
3. The user should see at the top whose move it is (black or white).
4. Give pawns functionality: ability to move one tile forward as long as there are no pieces occupying the tile (two if they are at their starting position) and potentially capture one tile in front of them diagonally if there is an enemy piece there.
5. Give bishops functionality: ability to move unlimited tiles diagonally in any direction until there is a piece in the way and potentially capture if it is an enemy piece.
6. Give knights functionality: ability to jump to their specific tiles (for information regarding the specific tiles please reference the guide given in the project description section) and capture any piece that is there.
7. Give rooks functionality: ability to move unlimited tiles in a straight line (not diagonally) until there is a piece in the way and potentially capture if it is an enemy piece.
8. Give queens functionality: abliity to move unlimited square both in a straight line and diagonally until there is a piece in the way and potentially capture if it is an enemy piece.
9. Give kings functionality: ability to move one square in any direction unless the tile is being attacked by another piece.
10. Impliment castling: if you have not moved your king or a rook, there are no pieces in between them, and there are no tiles being attacked in between them then you can castle (for more information regarding castling please reference the chess guide in the project description section).
11. Impliment En Passant (French for in passing): special rule that allows you to capture a pawn with another pawn under specific conditions (for more information regarding en passant please reference the chess guide in the project description section).
12. Impliment the promotion system where if a pawn reaches the end of the board it promotes to a queen.
12. Impliment pins (pinning): if a piece is currently protecting your king from an attack then you will lose the ability to move that piece.
13. Impliment checks and checkmate: if the king is currently under attack you get a notification and must either move the king to a safe tile or block the attacker with another piece. If there are no available squares to move to or pieces to block with then the game will end and declare the winner has checkmated his opponent.

### Stretch Goals:
1. Impliment a draw mechanic where if both players have insufficient material (cannot checkmate), both players repeat the same move 3 times in a row, a player has no moves left to make, or the players reach 50 moves then the game draws.
2. Impliment draw and forfeit buttons where the players have the option to either accept a draw and if one of the players quit you don't have to finish out the game.
3. Let the user input a name for each side so we can keep track of the win/loss/draw history and flip sides after each game is over.
4. An undo button which will allow the user to undo the most recent move.
5. Impliment a scrollable block that shows in chess notation each move that was made in the game.
## Technologies Used:
JavaScript, HTML, and CSS