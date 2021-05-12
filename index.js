// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(name);
}

function destructivelyPrependCat(name) {
cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const newCatNames = [...cats, name]
    return newCatNames
}

function prependCat(name) {
    const newListOfCats = [name, ...cats]
    return newListOfCats
}

function removeLastCat() {
   const newCatArray = cats.slice(0, -1)
    return newCatArray
}

function removeFirstCat() {
    const catsMinusOne = cats.slice(1)
    return catsMinusOne
}