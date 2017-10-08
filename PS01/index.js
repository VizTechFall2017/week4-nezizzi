var svg = d3.select('svg');

var allData;
var male;
var female;

d3.csv('./data.csv', function(dataIn){

    allData = dataIn;
    //console.log(allData);
    //save the objects from the .csv with female
    female = dataIn.filter(function(d){
        return d.A2GENDER == 1;
    });

    //save the objects from the .csv with male
    male = dataIn.filter(function(d){
        return d.A2GENDER == 2;
    });

    //bind the data to the d3 selection, but don't draw it yet
    svg.selectAll('circles')
        .data(female)
        .enter()
        .append('circle')
        .attr('class','dataPoints');

    //call the drawPoints function below, and hand it the data2016 variable with the 2016 object array in it
    //drawPoints(female);
    console.log(female);
    console.log(male);

});




//drawing data points function
function drawPoints(dataPoints) {

    svg.selectAll('.myCircles')
        .data(dataPoints)
        .enter()
        .attr('cx', function(d){
            return d.A8ABEGTR;
        })
        .attr('cy',function(d){
            return d.A8CBGPCR;
        })
        .attr('r','1');
}
