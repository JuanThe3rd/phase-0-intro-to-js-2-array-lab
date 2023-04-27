function destructivelyAppendCat(cat) {
    cats.push(cat);
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(cat) {
    const copyCats = cats.slice();
    copyCats.push(cat);
    return copyCats;
}

function prependCat(cat) {
    const copyCats = cats.slice();
    copyCats.unshift(cat);
    return copyCats;
}

function removeLastCat() {
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}

function removeFirstCat() {
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats
}

const cats = ["Milo", "Otis", "Garfield"];