var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(100,100)');


/* Your code goes here */

d3.csv('./data.csv', function(dataIn){
    console.log(dataIn);
    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return ScaleX(d.x)
        })
        .attr('cy', function(d){
            return ScaleY(d.y)
        })
        .attr('r', 10);

        svg.append('g')
            .attr('transform', 'translate(0,400)')
            .call(d3.axisBottom(ScaleX));
        svg.append('g')
            .call(d3.axisLeft(ScaleY));

        svg.append('text')
            .attr('x', 300)
            .attr('y', 0)
            .attr('font-size', 24)
            .text('test');

        svg.append('text')
            .attr('x', 300)
            .attr('y', 450)
            .attr('font-size', 16)
            .text('x-axis title');

        svg.append('text')
            .attr('transform', 'rotate(270)')
            .attr('x', -250)
            .attr('y', -50)
            .attr('font-size', 16)
            .text('y-axis title');



});

var ScaleX = d3.scaleLinear().domain([0,400]).range([0,600]);
var ScaleY = d3.scaleLinear().domain([500,0]).range([0,400]);

function buttonClicked(){
    console.log('here');
}