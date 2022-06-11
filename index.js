const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
  cats.push(name);
}

function destructivelyPrependCat (name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat () {
  cats.pop();
}

function destructivelyRemoveFirstCat () {
  cats.shift();
}

let appendCat =(name) =>[...cats, name];


let prependCat =(name) => [name, ...cats];


let removeFirstCat =() => cats.slice(1);


let removeLastCat= () =>cats.slice(0, cats.length - 1);

