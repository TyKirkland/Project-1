#  ♟ Project 1... Chess! ♟
## Project Description: 
A rudimentary version of chess where you can play against yourself or an enemy locally.
## Getting Started: 
Welcome to the classic game of Chess! Using the game link provided you will be able to play against either yourself or a friend locally. You can find an in-depth guide at how the various pieces move and the rules for the game [here](https://www.wikihow.com/Play-Chess-for-Beginners).
## User Stories
### MVP Goals:
1. Create the 8x8 tile game board and a start button upon launch.
2. After the start button is pushed initialize all 32 pieces in their correct positions (16 pawns, 4 knights, 4 bishops, 4 rooks, 2 queens, and 2 kings).
3. The user should see at the top whose move it is (black or white).
4. Give pawns functionality: ability to move one tile forward as long as there are no pieces occupying the tile (two if they are at their starting position) and potentially capture one tile in front of them diagonally if there is an enemy piece there.
5. After the game has begun provide a reset button where a user can reset the game at any time.
### Stretch Goals:
1. Give bishops functionality: ability to move unlimited tiles diagonally in any direction until there is a piece in the way and potentially capture if it is an enemy piece.
2. Give knights functionality: ability to jump to their specific tiles (for information regarding the specific tiles please reference the guide given in the project description section) and capture any piece that is there.
3. Give rooks functionality: ability to move unlimited tiles in a straight line (not diagonally) until there is a piece in the way and potentially capture if it is an enemy piece.
4. Give queens functionality: abliity to move unlimited square both in a straight line and diagonally until there is a piece in the way and potentially capture if it is an enemy piece.
5. Give kings functionality: ability to move one square in any direction unless the tile is being attacked by another piece.
6. Impliment checks and checkmate: if the king is currently under attack you get a notification and must either move the king to a safe tile or block the attacker with another piece. If there are no available squares to move to or pieces to block with then the game will end and declare the winner has checkmated his opponent.
7. Impliment pins (pinning): if a piece is currently protecting your king from an attack then you will lose the ability to move that piece.
8. Impliment castling: if you have not moved your king or a rook, there are no pieces in between them, and there are no tiles being attacked in between them then you can castle (for more information regarding castling please reference the chess guide in the project description section).
9. Impliment En Passant (French for in passing): special rule that allows you to capture a pawn with another pawn under specific conditions (for more information regarding en passant please reference the chess guide in the project description section).
10. Impliment a scrollable block that shows you in chess notation each move that was made in the game.
## Technologies Used:
JavaScript, HTML, and CSS