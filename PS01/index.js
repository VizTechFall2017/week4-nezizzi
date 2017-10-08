var svg = d3.select('svg');

var allData;
var data25; //dancers ages 21-25
var data30; // dancers ages 26-30

d3.csv('./data.csv', function(dataIn){

    allData = dataIn;
    //console.log(allData);
    //save the objects from the .csv with age input 21-25
    data25 = dataIn.filter(function(d){
        return d.A3AGEGP == 1;
    });

    //save the objects from the .csv wiht age input 26-30
    data30 = dataIn.filter(function(d){
        return d.A3AGEGP == 2;
    });

    //call the drawPoints function below, and hand it the data2016 variable with the 2016 object array in it
    drawPoints(data25);

});

//drawing data points function
function drawPoints(dataPoints) {

    console.log(dataPoints);
    svg.selectAll('.myCircles')
        .data(dataPoints)
        .attr('cx', function(d){
            console.log(cx);
            return d.A8BEGTR;
        })
        .attr('cy',function(d){
            return d.A8CBGPCR;
        })
        .attr('r',1);
}
