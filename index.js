function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
}

kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name){
  kittens.pop(name);
  return kittens;
}
