var mainFolder = '../Structury';
var saveOn = 'output.json';
const path = require('path');
const fs = require('fs');

var structury = [{}];
var colNames = [];

const ignore = [
    ".git",
    "node_modules",
    ".env",
    ".npm"
];

const checkPath = (d) => {
    for (let i = 0; i < ignore.length; i++) {
      
       // if (d.indexOf(ignore[i])!== -1)
        //    console.log(d.indexOf(ignore[i]), ignore[i], d);
        if (d.includes(ignore[i])) return false;
    
    }
    return true;
}

const returnObjStructury = (pathRoute, name) => {

    try {
        if (!checkPath(pathRoute)) return false;

        let obj = {};

        if (fs.lstatSync(pathRoute).isDirectory()) {
            obj[name] = {
                properties: {
                    "type": 1,
                    "status": 1,
                },
                childs: {}
            }
            fs.readdirSync(pathRoute).forEach(d => {
                //obj[name].childs[d] = returnObjStructury(path.join(pathRoute, d), d);
                let o = returnObjStructury(path.join(pathRoute, d), d);
                let k = Object.keys(o);
                if (o)
                    if (o[k] !== false)
                        obj[name].childs[d] = o[k];


            });
            return obj;
        } else {
            obj[name] = {
                properties: {
                    "type": 1,
                    "status": 1,
                },
                childs: {}
            }
            return obj;
        }
    } catch (e) {
        console.log("Error on ${pathRoute}");
        console.log(e);
    }
}

let main = () => {
    const args = process.argv.slice(2);
    if (args[0])
        mainFolder = args[0];

    if (args[1])
        saveOn = args[1];

    console.log(`Reading ${mainFolder} and saving on ${saveOn}`);

    fs.readdirSync(mainFolder).forEach(d => {
        let o = returnObjStructury(path.join(mainFolder, d), d);
        let k = Object.keys(o);

        if (o)
            if (o[k] !== false)
                structury[0][k] = o[k];
    });


    fs.writeFileSync(saveOn, JSON.stringify({
        structury: structury,
        colNames: [mainFolder],
        selectedCol: 0

    }));

    console.log('Finished');
    process.exit(1);
}


main();
