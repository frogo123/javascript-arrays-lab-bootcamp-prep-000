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

function destructiveRemoveFirstKitten(){
  kittens.unshift();
  return kittens;
}
