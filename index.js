function receivesAFunction (callback) {
    callback ("hello");
}

function returnsANamedFunction() {
    return function days() {
        console.log("Monday");
    };
}
function returnsAnAnonymousFunction(){
    return function() {
    console.log("Martin");
    }
};