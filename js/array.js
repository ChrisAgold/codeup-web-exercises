var array = ['green tea', 'white tea', 'black tea', 'yellow tea'];

for (var i = 0; i < array.length; i++) {
    console.log(array[i])
}

// .forEach loop
array.forEach(function(tea, i, array) {
    console.log(tea + " is pretty good.");

})


