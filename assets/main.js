let arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Ali", "Malik", "Kamil"];


const filternames = (arrayy, letter) => {
    let fnames = []
    for (let name of arrayy) {
        if (name.startsWith(letter)) {
            fnames.push(name);
        }
    }
    return fnames;
};

let letter = 'A';
let result = filternames(arrayy, letter)

console.log(result);