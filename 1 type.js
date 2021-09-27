var isFetching = true;
var isLoading = false;
var int = 21;
var float = 4.2;
var num = 3e10;
var message = 'Hello TypeScript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TypeScript'];
//Tuple
var contact = ['Andrey', 555555555];
//Any
var variable = 42;
//...
variable = 'New String';
variable = [];
//===
function sayMyName(name) {
    console.log(name);
}
sayMyName('Heisenberg');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
