function receivesAFunction (callback) {
    callback ("Maendeleo ya wanawake");
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