var svg = d3.select('svg');

var data25; //dancers ages 21-25
var data30; // dancers ages 26-30

d3.csv('./data.csv', function(dataIn){

    //save the objects from the .csv with age input 21-25
    data25 = dataIn.filter(function(d){
        return d.A3AGEGP == 1;
    });

    //save the objects from the .csv wiht age input 26-30
    data30 = dataIn.filter(function(d){
        return d.A3AGEGP == 2;
    });

    //call the drawPoints function below, and hand it the data2016 variable with the 2016 object array in it
    drawPoints(data2016);

});


