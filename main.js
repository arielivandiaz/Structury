/*Global Varialbes */

var colNames = [];

var selectedCol = -1;
var cursor = [];
var lastCommand = '';
var main = [];

/* Example :
//var colNames = [0, 1, 2, 3, 4, 5, 6, 7];
//var selectedCol = 0;
var main = [
    {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        },
    {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        }, {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        }, {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        }, {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        }, {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        }, {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        }, {
        "alfa": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {

                "set": {
                    "properties": {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {
                        "reset": {
                            "properties": {
                                "type": 1,
                                "status": 1,
                            },
                            childs: {}
                        }
                    }
                },
                "unset": {
                    properties: {
                        "type": 1,
                        "status": 1,
                    },
                    childs: {}
                }

            }
        },
        "beta": {
            properties: {
                "type": 1,
                "status": 1,
            },
            childs: {}
        }
        }

];
*/
/* Primitive Functioens */
function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}
/* Debug Functions */
function printCols() {
    for (var i = 0; i < main.length; i++) {
        console.log("Col :", colNames[i]);
        prettyPrint(main[i], -1);
        console.log("\n");
    }
}

function getId() {

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

/* Core functions */


function emptyChild(type = 1, status = 1) {
    return {
        properties: {
            "type": type,
            "status": status,
        },
        childs: {}
    }
}


function newCol(colname = 0) {
    var newColName = colname ? colname : colNames.length;
    colNames.push(newColName);
    main.push({});
    selectedCol = colNames.length - 1;
    cursor = [];

    return colname ? colname : false;
}

function checkNewColNameisGood(colname = 0) {
    if (!colname) return true;
    for (var i = 0; i < colNames.length; i++) {
        if (colname == colNames[i])
            return false;
    }
    return true
}



function setColActive(colId) {

    var colIdInt = parseInt(colId);
    if (colIdInt - 1 > -1 && colIdInt - 1 < colNames.length) {
        selectedCol = (colIdInt - 1);
        return (colIdInt)
    }


    for (var i = 0; i < colNames.length; i++) {
        if (strcmp(colNames[i], colId) == 0) {
            selectedCol = i;
            return (i + 1);
        }

    }
    return -1;

}


function mkdir(dir) {

    switch (cursor.length) {
        case 0:
            if (main[selectedCol][dir] !== undefined) {
                uiSetMsg('Already Exist', 0);
            } else {
                main[selectedCol][dir] = emptyChild();
                uiSetMsg('Created', 1);
                return "col_" + (selectedCol + 1) + "_" + "deep_" + cursor.length + "_" + dir;
            }
            break;

        case 1:
            console.log("case 1");
            if (main[selectedCol][cursor[0]].childs[dir] !== undefined) {
                uiSetMsg('Already Exist', 0);
            } else {
                main[selectedCol][cursor[0]].childs[dir] = emptyChild();
                uiSetMsg('Created', 1);
                return "col_" + (selectedCol + 1) + "_" + "deep_" + cursor.length + "_" + dir;
            }
            break;
        case 2:
            console.log("case 2");
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir] !== undefined) {
                uiSetMsg('Already Exist', 0);
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir] = emptyChild();
                uiSetMsg('Created', 0);
                return "col_" + (selectedCol + 1) + "_" + "deep_" + cursor.length + "_" + dir;
            }
            break;
        case 3:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir] !== undefined) {
                uiSetMsg('Already Exist', 0);
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir] = emptyChild();
                uiSetMsg('Created', 0);
                return "col_" + (selectedCol + 1) + "_" + "deep_" + cursor.length + "_" + dir;
            }
            break;
        case 4:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir] !== undefined) {
                uiSetMsg('Already Exist', 0);
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir] = emptyChild();
                uiSetMsg('Created', 0);
                return "col_" + (selectedCol + 1) + "_" + "deep_" + cursor.length + "_" + dir;
            }
            break;
        case 5:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir] !== undefined) {
                uiSetMsg('Already Exist', 0);
            } else {
                main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir] = emptyChild();
                uiSetMsg('Created', 0);
                return "col_" + (selectedCol + 1) + "_" + "deep_" + cursor.length + "_" + dir;
            }
            break;
        default:
            uiSetMsg("Can't create new item. Max cursor deep is 5", 0);
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
                return false;
            } else {
                delete main[selectedCol][dir];
                return true;
            }
            break;

        case 1:
            console.log("case 1");
            if (main[selectedCol][cursor[0]].childs[dir] == undefined) {
                return false;
            } else {
                delete main[selectedCol][cursor[0]].childs[dir];
                return true;
            }
            break;
        case 2:
            console.log("case 2");
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir] == undefined) {
                return false;
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[dir];
                return true;
            }
            break;
        case 3:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir] == undefined) {
                return false;
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[dir];
                return true;
            }
            break;
        case 4:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir] == undefined) {
                return false;
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[dir];
                return true;
            }
            break;
        case 5:
            if (main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir] == undefined) {
                return false;
            } else {
                delete main[selectedCol][cursor[0]].childs[cursor[1]].childs[cursor[2]].childs[cursor[3]].childs[cursor[4]].childs[dir];
                return true;
            }
            break;
        default:
            return false;
            break;
    }

}



/* Ui functions */
function uiInit() {
    document.getElementById('consoleText').focus();
}

function uiResetConsole() {
    document.getElementById('consoleText').value = '';
}


function uiSetMsg(msg, type) {
    var e = document.getElementById('msg');
    e.textContent = msg;

    if (type == 0) {
        if (e.classList.contains("color-success")) {
            e.classList.remove("color-success");
        }
        if (!e.classList.contains("color-error")) {
            e.classList.add("color-error");
        }
    }

    if (type == 1) {
        if (e.classList.contains("color-error")) {
            e.classList.remove("color-error");
        }
        if (!e.classList.contains("color-success")) {
            e.classList.add("color-success");
        }
    }

}

function uiRecoverLastCommand() {
    document.getElementById('consoleText').value = lastCommand;
    uiMovInputeCursorAtEnd();
}

function uiClearCol() {
    document.getElementById("col_" + (selectedCol + 1) + "_content").innerHTML = "";
}


function iuGetLastWord() {
    var e = document.getElementById('consoleText');
    e.value = e.value.replace('|', '');
    let arr = e.value.split(' ');

    return arr[arr.length - 1];
}

function uiSetCaretPosition(ctrl, pos) {
    //CODEPEN: https://codepen.io/qzzd/pen/RwNWmaX
    // Modern browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);

        // IE8 and below
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

function uiMovInputeCursorAtEnd() {
    var e = document.getElementById('consoleText');
    uiSetCaretPosition(e, e.value.length);
    return;
}

function uiFindValueByPrefix(name) {
    var obj = getCurrentObj();
    for (var prop in obj) {
        if (prop.indexOf(name) === 0) {
            return prop;
        }
    }
    return 0;
}


function uiAutocomplete(k) {
    var values = document.getElementById('consoleText').value.split(' ');
    values.pop();
    values.push(k);
    var str = '';
    for (var i = 0; i < values.length; i++)
        str += values[i] + ' ';

    document.getElementById('consoleText').value = str;
}




function uiSetTarget() {

    var targets = document.getElementsByClassName("target");
    for (var i = 0; i < targets.length; i++)
        if (targets[i].classList.contains("target"))
            targets[i].classList.remove("target");

    if (cursor.length) {
        var curId = "col_" + (selectedCol + 1) + "_deep_" + (cursor.length - 1) + "_" + cursor[cursor.length - 1];

        document.getElementById(curId).classList.add("target");
    }
}


function uiSetColActive(id) {
    var cols = document.getElementsByClassName("colContent");
    for (var i = 0; i < cols.length; i++)
        if (cols[i].classList.contains("selected"))
            cols[i].classList.remove("selected");
    cols[id - 1].classList.add("selected");
    cols[id - 1].focus();

    var b = document.getElementById('board');
    b.scrollLeft = b.scrollWidth;
}




function uiDrawNewCol(name) {
    var parent = document.getElementById('board');

    var newDiv = document.createElement("div");
    var cols = document.getElementsByClassName("colContent");

    var colId = cols.length + 1;

    var colName = name ? name : `Col ${colId}`;



    newDiv.innerHTML = `            
                  <div class="col ai-fs marg-h colContent" id="col_${colId}">
                    <span class="selected">${colName} </span>
                    <div class="col ai-fs" id="col_${colId}_content">              
                </div>`
    parent.appendChild(newDiv);

    uiSetColActive(colId);

}


function uiGetLastWord() {
    var e = document.getElementById('consoleText');
    e.value = e.value.replace('|', '');
    e.value = e.value.replace('`', '');
    let arr = e.value.split(' ');

    return arr[arr.length - 1];
}



function uiDrawCol(obj, deep) {


    if (selectedCol > -1) {
        var parent = document.getElementById("col_" + (selectedCol + 1) + "_content");
        deep++;
        var objKeys = Object.keys(obj);
        for (let i = 0; i < objKeys.length; i++) {


            var newDiv = document.createElement("div");

            var newContent = document.createTextNode(objKeys[i]);
            newDiv.appendChild(newContent);
            newDiv.classList.add("item");



            newDiv.style = "margin-left : " + 30 * deep + "px;";
            newDiv.id = "col_" + (selectedCol + 1) + "_" + "deep_" + deep + "_" + objKeys[i];

            parent.appendChild(newDiv);
    
            if (obj[objKeys[i]] !== undefined && obj[objKeys[i]] !== false)
                if (Object.keys(obj[objKeys[i]].childs)) {

                    uiDrawCol(obj[objKeys[i]].childs, deep);
                }

        }
    }
}


function uiDrawExisted() {

    for (var i = 0; i < colNames.length; i++) {
        selectedCol = i;
        uiDrawNewCol(colNames[i]);
        uiDrawCol(main[i], -1);
    }
}


function exportJSON() {

    document.getElementById('textExport').value = JSON.stringify({
        structury: main,
        colNames,
        selectedCol
    });

}

function importJSON() {


    try {
        a = JSON.parse(document.getElementById('textImport').value);
        main = a.structury;
        colNames = a.colNames;
        selectedCol = a.selectedCol;
        uiDrawExisted();
    } catch (e) {
        console.log(e);
        alert(e); // error in the above string (in this case, yes)!
    }

}

function run() {
    var command = document.getElementById('consoleText').value.split(' ');

    lastCommand = document.getElementById('consoleText').value;

    switch (command[0].toLocaleLowerCase()) {
        case 'mkdir':

            if (selectedCol >= 0) {
                if (!command[1]) {
                    uiSetMsg('need a name', 0);
                    break;
                } else {
                    var newIdItem = mkdir(command[1]);


                    uiClearCol();

                    uiDrawCol(main[selectedCol], -1);
                    uiSetTarget();
                    addClass(newIdItem, 'entrace');
                    break;

                }
            } else {
                uiSetMsg('need a col', 0);
                break;
            }
            break;
        case 'cd':
            if (isCursorGood(command[1])) {
                updateCursor(command[1]);
                uiSetTarget();
                uiSetMsg('inside', 1);
                uiSetTarget();
            } else {
                uiSetMsg('Not found', 0);
            }
            break;
        case 'newcol':


            if (checkNewColNameisGood(command[1])) {
                var newColName = newCol(command[1]);
                uiDrawNewCol(newColName);
                uiSetTarget();
                uiSetMsg('changed Col', 1);
            } else {
                uiSetMsg('Col name already exist', 0);
            }

            break;
        case 'col':

            var colNameCommand = setColActive(command[1]);
            if (colNameCommand > -1) {
                uiSetColActive(colNameCommand);
                //uiSetTarget();
                uiSetMsg('changed Col', 1);

            } else {
                uiSetMsg("can't get  Col", 0);
            }
            break;
        case 'rm':

            if (selectedCol >= 0) {
                if (!command[1]) {
                    uiSetMsg('need a name', 0);
                    break;
                } else {
                    if (rmItem(command[1])) {
                        uiSetMsg('Deleted', 1);
                        uiClearCol();

                        uiDrawCol(main[selectedCol], -1);
                        uiSetTarget();
                    } else {
                        uiSetMsg('Not found', 0);
                    }


                    break;

                }
            } else {
                uiSetMsg('need a col', 0);
                break;
            }
            break;


        case 'ls':


            console.log(main[selectedCol]);

        default:
            uiSetMsg('Command Not Foud', 0);
            break;
    }


    uiResetConsole()

}

for (var i = 0; i < colNames.length; i++) {
    selectedCol = i;
    uiDrawNewCol(colNames[i]);
    uiDrawCol(main[i], -1);
}

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        run();
    }
    if (event.keyCode === 220 || event.keyCode === 192) {
        console.log("predict");
        var keyName = uiFindValueByPrefix(uiGetLastWord());
        if (keyName != 0) {
            uiMovInputeCursorAtEnd();
            uiAutocomplete(keyName);
        }
    }
    if (event.keyCode === 38) {
        uiRecoverLastCommand();

    }
});
