function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {

  }

  return namedFunction;
}

function returnsAnAnonymousFunction() {
    const anonymousFunction = function() {

    };
  
    return anonymousFunction;
  }