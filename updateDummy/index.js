var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(100,100)');


var ScaleX = d3.scaleLinear().domain([0,400]).range([0,600]);
var ScaleY = d3.scaleLinear().domain([0,400]).range([0,400]);

var allData;

var currentYear= "2016";

d3.csv('./data.csv', function(dataIn){

    allData = dataIn;

    data2016 = dataIn.filter(function(d){
        return d.year == 2016;
    });

    svg.selectAll('circle')
        .data(data2016)
        .enter()
        .append('circle')
        .attr('class', 'myCircles');

    svg.append('g')
        .attr('transform', 'translate(0,400)')
        .call(d3.axisBottom(ScaleX));
    svg.append('g')
        .call(d3.axisLeft(ScaleY));

    updateData(data2016);

});

function updateData(dataPoints) {

    console.log(dataPoints);
    svg.selectAll('.myCircles')
        .data(dataPoints)
        .attr('cx', function(d){
            return d.x
        })
        .attr('cy',function(d){
            return d.y
        })
        .attr('r',function(d){
            return d.r
        })
}

function buttonClicked() {

    if (currentYear == '2016') {
        data2017 = allData.filter(function (d) {
            return d.year == 2017;
        });

        console.log(data2017);

        currentYear = '2017';
        updateData(data2017);
    }
    else{
        data2016 = allData.filter(function (d) {
            return d.year == 2016;
        });

        console.log(data2016);

        currentYear = '2016';
        updateData(data2016);
    }
}

window.setInterval(function(){
    buttonClicked();
}, 1000);
