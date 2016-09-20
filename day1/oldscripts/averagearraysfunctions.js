
function average(array){
    var totalArray = 0;
    for ( var i = 0; i < array.length; i++){
        totalArray = totalArray + array[i];

    }
    return totalArray / array.length 
}

var arrayNumbers= [10,20,30,40]

var bob = average(arrayNumbers);

console.log(bob);