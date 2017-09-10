function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
}

function destructivelyPrependKitten(name){
  kittens.pop(name);
  return kittens;
}
