function receivesAFunction(callback) {
    callback()
}

function callback() {console.log(`function called`)}

function returnsANamedFunction() {
    return function namedFunction() {console.log(`function returned`)}
}

function returnsAnAnonymousFunction() {
    return function () {console.log(`anon function returned`)}
}