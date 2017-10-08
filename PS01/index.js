var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(100,100)');

var allData;
var male;
var female;

var ScaleX = d3.scaleLinear().domain([0,30]).range([0, 600]);
var ScaleY = d3.scaleLinear().domain([0,30]).range([400, 0]);

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

    //axes
    svg.append('g')
        .attr('transform', 'translate(0,400)')
        .call(d3.axisBottom(ScaleX));
    svg.append('g')
        .call(d3.axisLeft(ScaleY));


    //call the drawPoints function below, and hand it the data2016 variable with the 2016 object array in it
    //drawPoints(female);
    console.log(female);
    console.log(male);

});




//drawing data points function
function drawPoints(dataPoints) {
    console.log(dataPoints);
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
