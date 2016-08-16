'use strict';

var d3 = require('d3'),
    step = require('./../src/charts/step'),
    dataBuilder = require('./../test/fixtures/stepChartDataBuilder');


function createStepChart() {
    var stepChart = step(),
        testDataSet = new dataBuilder.StepDataBuilder(),
        containerWidth = d3.select('.js-step-chart-container').node().getBoundingClientRect().width,
        stepContainer = d3.select('.js-step-chart-container'),
        dataset;

    d3.select('#button').on('click', function() {
        stepChart.exportChart();
    });

    dataset = testDataSet.withSmallData().build();

    stepChart
        .width(containerWidth)
        .height(300)
        .on('customHover', function(d, i){
            console.log('Step data is ', d);
            console.log('Step index is ', i);
        });

    stepContainer.datum(dataset.data).call(stepChart);
}

// Show charts if container available
if (d3.select('.js-step-chart-container').node()){
    createStepChart();

    d3.select(window).on('resize', function(){
        d3.select('.step-chart').remove();
        createStepChart();
    });
}
