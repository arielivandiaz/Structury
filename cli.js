var colNames = [0];
var selectedCol = -1;
var cursor = [];
var lastCommand = '';

var main = [ ];

function setMsg(msg) {
    console.log(msg);
}

function prettyPrint(obj, deep) {
    if (selectedCol > -1) {
        deep++;
        var objKeys = Object.keys(obj);
        for (let i = 0; i < objKeys.length; i++) {
            console.log("- ".repeat(deep), objKeys[i]);
            if (Object.keys(obj[objKeys[i]].childs).length)
                prettyPrint(obj[objKeys[i]].childs, deep);
        }
    }
}


function printCols() {

    for (var i = 0; i < main.length; i++) {
        console.log("Col :", colNames[i]);
        prettyPrint(main[i], -1);
        console.log("\n");
    }
}

function emptyChild(type = 1, status = 1) {
    return {
        properties: {
            "type": type,
            "status": status,
        },
        childs: {}
    }
}

function checkNewColNameisGood(colname) {
    if (!colname) return true;
    for (var i = 0; i < colNames.length; i++) {
        if (colname == colNames[i])
            return false;
    }
    return true
}

function newCol(colname = 0) {
    colNames.push(colname ? colname : colNames.length);
    main.push({});
    selectedCol++;
    return;
}

function getColId(id) {
    for (var i = 0; i < colNames.length; i++)
        if (colNames[i] === id) {
            return i;
        }
    var asInt = parseInt(id - 1);
    if (asInt < colNames.length) {
        return id;
    }
};


function setColActive(id) {
    selectedCol = id - 1;
}

function mkdir(dir) {
    switch (cursor.length) {
        case 0:
            if (main[selectedCol][dir] !== undefined) {
                setMsg('Already Exist');
            } else {
                main[selectedCol][dir] = emptyChild();
                setMsg('Created');
            }
            break;

        case 1:
            console.log("case 1");
            if (main[selectedCol][cursor[0]].childs[dir] !== undefined) {
                setMsg('Already Exist');
            } else {
                main[selectedCol][cursor[0]].childs[dir] = emptyChild();
                setMsg('Created');
            }
            break;
        case 2:
            console.log("case 2");
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir] !== undefined) {
                setMsg('Already Exist');
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir] = emptyChild();
                setMsg('Created');
            }
            break;
        case 3:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir] !== undefined) {
                setMsg('Already Exist');
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir] = emptyChild();
                setMsg('Created');
            }
            break;
        case 4:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir] !== undefined) {
                setMsg('Already Exist');
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir] = emptyChild();
                setMsg('Created');
            }
            break;
        case 5:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir] !== undefined) {
                setMsg('Already Exist');
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir] = emptyChild();
                setMsg('Created');
            }
            break;
        default:
            setMsg("Can't create new item. Max cursor deep is 5");
            break;
    }
}


function getCurrentObjKeys() {
    switch (cursor.length) {
        case 0:
            return Object.keys(main[selectedCol]);
            break;
        case 1:
            return Object.keys(main[selectedCol][cursor[0]].childs);
            break;
        case 2:
            return Object.keys(main[selectedCol][cursor[0]].childs[cursor[1]].childs);
            break;
        case 3:
            return Object.keys(main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs);
            break;
        case 4:
            return Object.keys(main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs);
            break;
        default:
            break;
    }
}

function getCurrentObj() {
    switch (cursor.length) {
        case 0:
            return main[selectedCol];
            break;
        case 1:
            return main[selectedCol][cursor[0]].childs;
            break;
        case 2:
            return main[selectedCol][cursor[0]].childs[cursor[1]].childs;
            break;
        case 3:
            return main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs;
            break;
        case 4:
            return main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs;
            break;
        default:
            break;
    }
}

function printLs() {
    var curObj = getCurrentObj();

    prettyPrint(curObj, -1);
}

function isCursorGood(command) {
    var curObjArr = getCurrentObjKeys();
    if (command == '..')
        return true;
    for (var i = 0; i < curObjArr.length; i++) {
        console.log(curObjArr[i], command);
        if (curObjArr[i] == command)
            return true;
    }
    return false;
}

function updateCursor(command) {

    if (command == '..')
        cursor.pop();
    else
        cursor.push(command);
    return;
}

function rmItem(dir) {

    switch (cursor.length) {
        case 0:
            if (main[selectedCol][dir] == undefined) {
                setMsg('Not found');
            } else {
                delete main[selectedCol][dir];
                setMsg('Deleted');
            }
            break;

        case 1:
            console.log("case 1");
            if (main[selectedCol][cursor[0]].childs[dir] == undefined) {
                setMsg('Not found');
            } else {
                delete main[selectedCol][cursor[0]].childs[dir];
                setMsg('Deleted');
            }
            break;
        case 2:
            console.log("case 2");
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir] == undefined) {
                       setMsg('Not found');
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir];
                  setMsg('Deleted');
            }
            break;
        case 3:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir] == undefined) {
                       setMsg('Not found');
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir];
                  setMsg('Deleted');
            }
            break;
        case 4:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir] == undefined) {
                       setMsg('Not found');
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir];
                  setMsg('Deleted');
            }
            break;
        case 5:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir] == undefined) {
                       setMsg('Not found');
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir];
                  setMsg('Deleted');
            }
            break;
        default:
            setMsg("Can't create new item. Max cursor deep is 5");
            break;
    }

}

function run(args) {

    var command = args.split(' ');
    lastCommand = args;

    switch (command[0].toLocaleLowerCase()) {

        case 'mkdir':
            if (selectedCol >= 0) {
                if (!command[1]) {
                    setMsg('need a name');

                } else {
                    mkdir(command[1]);

                }
                break;
            } else {
                setMsg('need a col');
                break;
            }
            break;
        case 'cd':
            if (isCursorGood(command[1])) {
                updateCursor(command[1]);
                setMsg('inside');

            } else {
                setMsg('Not found');
            }
            break;
        case 'rm':
            if (selectedCol >= 0) {
                if (!command[1]) {
                    setMsg('need a name');

                } else {
                    rmItem(command[1]);

                }
                break;
            } else {
                setMsg('need a col');
                break;
            }
            break;


        case 'ls':
            printLs();
            break;

        case 'newcol':

            if (checkNewColNameisGood(command[1])) {
                newCol(command[1]);
                setMsg('changed Col');
            } else {
                setMsg('Col name already exist');
            }

            break;
        case 'col':
            setColActive(getColId(command[1]))


            setMsg('changed Col');
            break;

        default:
            setMsg('Command Not Foud');
            break;
    }

    //printCols();

}



/****************************************************************************/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.on('close', function () {
    console.log('bye.');
    process.exit(0);
});



const talk = () => {
    rl.question('>', function (args) {
        if (args == 'close')
            rl.close();
        run(args);
        talk();
    });
}


talk();
