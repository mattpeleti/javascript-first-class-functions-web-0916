function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function aFunction(){

  }
}

function returnsAnAnonymousFunction(){
  return function(){
    
  }
}
