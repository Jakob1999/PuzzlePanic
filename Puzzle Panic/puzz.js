var lvl = 1

genrateGrid()

function incLvl() {
    if (lvl == 6) {
        lvl = lvl
    }else {
        lvl += 1
    }
    genrateGrid()
}

function decLvl() {
    if (lvl == 1) {
        lvl = lvl
    }else {
        lvl -= 1
    }
    genrateGrid()
}

function genrateGrid() {
    tilesClicked = []
    clicks = Math.round(lvl/2)
    clicked = 0
    if (clicks == 1) {
        clickLeft()
        document.getElementById('tiles').innerHTML = 'You are on lvl ' + lvl + ' and may click '+ clicks +' tile.'
    }else {
        clickLeft()
        document.getElementById('tiles').innerHTML = 'You are on lvl ' + lvl + ' and may click '+ clicks +' tiles.'
    }
    grid = document.getElementById('grid')
    solutionGrid = document.getElementById('solutionGrid')
    document.getElementById('result').innerHTML = ''
    grid.innerHTML="";
    solutionGrid.innerHTML="";
    for (var i=0; i<(4+lvl); i++) {
      row = grid.insertRow(i);
      solRow = solutionGrid.insertRow(i);
      for (var j=0; j<(4+lvl); j++) {
        cell = row.insertCell(j);
        solCell = solRow.insertCell(j);
        cell.onclick = function() { clickCell(this), gameWon(), clickLeft()};
        var darkCell = document.createAttribute("darkCell");       
        darkCell.value = "false";             
        cell.setAttributeNode(darkCell);
        }
    }
    addForm();
    for (var i = 0; i<clicks; i++) {
        randomRow = Math.floor(Math.random() * ((4+lvl) - 0)) + 0
        randomCol = Math.floor(Math.random() * ((4+lvl) - 0)) + 0
        clickCell(grid.rows[randomRow].cells[randomCol])
        clicked = 0
        tilesClicked = []
        if (i == 0) {
            randomRow0 = randomRow
            randomCol0 = randomCol
        }
        else if (i == 1) {
            randomRow1 = randomRow
            randomCol1 = randomCol
        }
        else {
            randomRow2 = randomRow
            randomCol2 = randomCol
        }
        //console.log(randomRow + ' ' + randomCol)
    }
}

/* function newTileClicker(tile) {
    clickLeft()
    var cellRow = tile.parentNode.rowIndex;
    var cellCol = tile.cellIndex;
    tilesClicked.push([cellRow, cellCol])

    for (var i = 0; i < (3+lvl)+1;i++) {
        for (var j = 0; j < (3+lvl)+1;j++) {
            
        }
    } 
} */


function clickLeft() {
    if (clicks - clicked == 1) {
        document.getElementById('clicksLeft').innerHTML = 'You have ' + (clicks - clicked) + ' click left'
    }else {
        document.getElementById('clicksLeft').innerHTML = 'You have ' + (clicks - clicked) + ' clicks left'
    }
    
}

function addForm() {
    for (var i=0; i<20*(lvl); i++) {
      var row = Math.floor(Math.random() * (4+lvl));
      var col = Math.floor(Math.random() * (4+lvl));
      var solCell = solutionGrid.rows[row].cells[col];
      var cell = grid.rows[row].cells[col];
      cell.setAttribute("darkCell","true");
      cell.style.backgroundColor = 'Blue'
      solCell.setAttribute("darkCell","true");
      solCell.style.backgroundColor = 'Blue'
    }
}

function clickCell(cell) {
    var cellRow = cell.parentNode.rowIndex;
    var cellCol = cell.cellIndex;
    tilesClicked.push([cellRow, cellCol])
    if (clicked < clicks) {
        clicked ++
        if (cellRow == 0 && cellCol == 0) {
            for (var i = 0; i<2; i++) {
                for (var j = 0; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)+j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else if (cellRow == 0 && cellCol == (3+lvl)) {
            for (var i = 0; i<2; i++) {
                for (var j = 0; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else if (cellRow == 0 && cellCol > 0 && cellCol < (3+lvl)) {
            for (var i = 0; i<2; i++) {
                for (var j = -1; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else if (cellRow == (3+lvl) && cellCol == 0) {
            for (var i = 0; i<2; i++) {
                for (var j = 0; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else if ((cellRow > 0 || cellRow < (3+lvl)) && cellCol == 0) {
            for (var i = -1; i<2; i++) {
                for (var j = 0; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else if (cellRow == (3+lvl) && cellCol == (3+lvl)) {
            for (var i = -1; i<1; i++) {
                for (var j = 0; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)+i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else if (cellRow == (3+lvl) && cellCol > 0 && cellCol < (3+lvl)) {
            for (var i = 0; i<2; i++) {
                for (var j = -1; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)+j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else if ((cellRow > 0 || cellRow < (3+lvl)) && cellCol == (3+lvl)) {
            for (var i = -1; i<2; i++) {
                for (var j = 0; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }else {
            for (var i = -1; i<2; i++) {
                for (var j = -1; j<2; j++) {
                    if (grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].getAttribute("darkCell") == 'true') {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "false");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = ''
                    }else {
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].setAttribute("darkCell", "true");
                        grid.rows[(parseInt(cellRow)-i)].cells[(parseInt(cellCol)-j)].style.backgroundColor = 'Blue'
                    }
                }
            }
        }
    }
}

function gameWon() {
    var checker = 0
    var sol1 = 0
    var sol2 = 0
    if (clicked == clicks) {
        for (var i=0; i < (3+lvl)+1; i++){
            for (var j=0;j<(3+lvl)+1;j++) {
                if (solutionGrid.rows[i].cells[j].getAttribute("darkCell") == 'true') {
                    sol1 ++
                }
                if (grid.rows[i].cells[j].getAttribute("darkCell") == 'true') {
                    sol2 ++
                }
                if (grid.rows[i].cells[j].getAttribute("darkCell") == 'true' && solutionGrid.rows[i].cells[j].getAttribute("darkCell") == 'true') {
                    checker ++
                }
            }
        }
        if (checker === sol1 && sol1 === sol2) {
            document.getElementById('result').innerHTML = 'You Won!'
            reveal()
        }else{
            document.getElementById('result').innerHTML = 'You Lost :('
            reveal()
        }
    }
    
}


function reveal() {
    if (clicks == 1) {
        //first click
        x = tilesClicked[0][0]
        y = tilesClicked[0][1]
        grid.rows[x].cells[y].style.backgroundColor = 'Red'
        grid.rows[randomRow0].cells[randomCol0].style.backgroundColor = 'Green'
        
    }
    else if (clicks == 2) {
        //first click
        x = tilesClicked[0][0]
        y = tilesClicked[0][1]
        grid.rows[x].cells[y].style.backgroundColor = 'Red'
        //second click
        x = tilesClicked[1][0]
        y = tilesClicked[1][1]
        grid.rows[x].cells[y].style.backgroundColor = 'Red'

        grid.rows[randomRow0].cells[randomCol0].style.backgroundColor = 'Green'
        grid.rows[randomRow1].cells[randomCol1].style.backgroundColor = 'Green'
    }
    else {
        //first click
        x = tilesClicked[0][0]
        y = tilesClicked[0][1]
        grid.rows[x].cells[y].style.backgroundColor = 'Red'
        //second click
        x = tilesClicked[1][0]
        y = tilesClicked[1][1]
        grid.rows[x].cells[y].style.backgroundColor = 'Red'
        //third click
        x = tilesClicked[2][0]
        y = tilesClicked[2][1]
        grid.rows[x].cells[y].style.backgroundColor = 'Red'

        grid.rows[randomRow0].cells[randomCol0].style.backgroundColor = 'Green'
        grid.rows[randomRow1].cells[randomCol1].style.backgroundColor = 'Green'
        grid.rows[randomRow2].cells[randomCol2].style.backgroundColor = 'Green'
    }
}





/* x = 1
y = 2
list = []
list.push([x,y])
x = 3
y=4
list.push([x,y])
x = 5
y=6
list.push([x,y])
console.log(list[0][0]) */