const fs = require('fs');
const path = require('path');
//file system Создание директории
/*fs.mkdir(path.join(__dirname, 'notes'), (err) =>{
    if(err) throw new Error(err);

    console.log("Папка была создана");
})*/

//file system Создание файла
/*fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello, world!',
    err => {
        if (err) throw new Error(err);
        console.log('File created');
        fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'),
            ' \nFrom append file',
            (err) => {
                if (err) throw new Error(err)
                console.log('File was modify')
            })
        //Read file
        fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'),
            'utf-8',
            (err, data) => {
                if (err) throw err
                console.log(data);
            })

    })*/
fs.rename(path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err
        console.log('file was renamed');
    })
