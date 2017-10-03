var svg = d3.select('svg');

/* Your code goes here */

d3.csv('./data.csv', function(dataIn){
    console.log(dataIn);

    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr(cx, '100')
        .attr(cy, '100')
        .attr()

});




