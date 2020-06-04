let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const cellElementArray = document.querySelectorAll('.grid-cell');

function checkForWin(winningCombination, playerSelections){
    for (let i = 0; i < winningCombination.length; i++){
        let matches = 0;
        for (let i2 = 0; i2 < 3; i2++){
            if (playerSelections.includes(winningCombination[i][i2])){
                matches++;
            }
            if (matches === 3){
                return true;
            }
        }
        matches = 0;
    }
    return false;
}

function reset(){
    for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
        cellElementArray[elementIndex].innerHTML = "";
    }
    playerOSelections = [];
    playerXSelections = [];
    currentPlayer = 'X';
    return null;
}

for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]
    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target;
        if (clickedCellElement.innerHTML !== "X" && clickedCellElement.innerHTML !== "O"){
             clickedCellElement.innerHTML = currentPlayer;
            if (currentPlayer === 'X'){
                playerXSelections.push(elementIndex + 1);
                currentPlayer = 'O'
            } else {
                playerOSelections.push(elementIndex + 1)
                currentPlayer = 'X'
            }
            console.log(playerXSelections);
            console.log(checkForWin(winningCombinations, playerXSelections));
            console.log(playerOSelections);
            console.log(checkForWin(winningCombinations, playerOSelections));
            if (checkForWin(winningCombinations, playerXSelections)){
                alert("Player X wins!");
                reset();
            } else if (checkForWin(winningCombinations, playerOSelections)){
                alert("Player O wins!")
                reset();
            } else if (playerOSelections.length + playerXSelections.length === 9){
                alert("Draw!")
                reset();
            }
        }
    });
}
