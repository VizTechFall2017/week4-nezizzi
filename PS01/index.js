var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(100,100)');

var allData;
var filter1Data;
var male;
var female;
gender= female;

//axes
var ScaleX = d3.scaleLinear().domain([0,30]).range([0, 450]);
var ScaleY = d3.scaleLinear().domain([0,30]).range([400, 0]);
svg.append('g')
    .attr('transform', 'translate(0,400)')
    .call(d3.axisBottom(ScaleX));
svg.append('g')
    .call(d3.axisLeft(ScaleY));
svg.append('text')
    .text('Professional Dancer Age Comparison')
    .attr('transform','translate(300, -20)')
    .style('text-anchor','middle');
svg.append('text')
    .text('Age Dancer Began Training')
    .attr('transform','translate(250, 440)');
svg.append('text')
    .text('Age Professional Career Began')
    .attr('transform', 'translate(-50,300)rotate(270)');



//bring in the data!
d3.csv('./data.csv', function(dataIn){

    allData = dataIn;
    console.log(allData);

    //filter out data that is NaN
    filter1Data = allData.filter(function(d) {
        return d.A8ABEGTR !== 'D';
    });
    filterData = filter1Data.filter(function(d) {
        return d.A8CBGPCR !== 'D';
    });
    console.log(filter1Data);
    console.log(filterData);

    //save the objects from the .csv with female
    female = filterData.filter(function(d){
        return d.A2GENDER == 1;
    });

    //save the objects from the .csv with male
    male = filterData.filter(function(d){
        return d.A2GENDER == 2;
    });

    //bind the data to the d3 selection, but don't draw it yet
    svg.selectAll('circles')
        .data(female)
        .enter()
        .append('circle')
        .attr('class','myCircles');

    drawPoints(female);
    //console.log(female);
    //console.log(male);

});


//drawing data points function
function drawPoints(dataPoints) {
    svg.selectAll('.myCircles')
        .data(dataPoints)
        .attr('cx', function(d){
            return ScaleX(d.A8ABEGTR);
        })
        .attr('cy',function(d){
            return ScaleY(d.A8CBGPCR);
        })
        .attr('r','3');
 }


function buttonClicked() {

    if (gender == female) {
        male = filterData.filter(function (d) {
            return d.A2GENDER == 2;
        });
        gender = male;
        drawPoints(male);

    }

    else{
        data2016 = filterData.filter(function (d) {
            return d.A2GENDER == 1;
        });
        gender = female;
        drawPoints(female);
    }
}

