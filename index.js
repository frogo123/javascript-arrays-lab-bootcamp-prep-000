function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
}


function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
var newArr = [...kittens, name];
return newArr;
}

function prependkitten(name){
newArr = [name, ...kittens];
return newArr;
}

function removeLastKitten(){
  kittens.slice(0, -1);
  return kittens;
}
