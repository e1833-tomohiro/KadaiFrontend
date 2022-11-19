<template>
    <div>
        <div class="mx-auto" :style="{width: width>=1200?'1000px':'800px'}">
            <BubbleChart :chartData="chartData" ckass="mx-auto" :plugins="plugins" :chartOptions="chartOptions"></BubbleChart>
        </div>
    </div>
</template>
<script>
import BubbleChart from './chart/BubbleChart.vue';

var x = {
    type: 'label',
    xValue: 0,
    yValue: 0,
    color: 'rgba(0, 0, 0, 0.8)',
    content: [],
    font: {
        size: 18
    }
}
var y = [];
for(var i=0; i<8; i++){
    y.push(JSON.parse(JSON.stringify(x)))
}

export default{
    data: function(){
        return{
            width: 0,
            chartData:{
                datasets: [
                {
                    label: '朝霧公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 80, y: 10, r: 15,  z: 5}
                    ]
                },
                {
                    label: '大蔵海岸公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 77, y: 5, r: 30,  z: 4}
                    ]
                },
                {
                    label: '望海海岸公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 65, y: 3, r: 20,  z: 10}
                    ]
                },
                {
                    label: '上ヶ池公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 54, y: 25, r: 15,  z: 8}
                    ]
                },
                {
                    label: '松江公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 55, y: 13, r: 20,  z: 25}
                    ]
                },
                {
                    label: '八木遺跡公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 42, y: 32, r: 30, z: 25}
                    ]
                },
                {
                    label: '金ケ崎公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 28, y: 50, r: 30, z: 20}
                    ]
                },
                {
                    label: '明石海浜公園',
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [
                        {x: 4, y: 63, r: 20, z: 25}
                    ]
                },
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    annotation: {
                        annotations: y
                    }
                    
                },
                scales: {
                    x: {

                        suggestedMin: 0,
                        suggestedMax: 100,
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    },
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    },
            }

            },
            plugins: [
                {
                    id: "bubblechart1",
                    afterDatasetsDraw: function(chart) {
                        var ctx = chart.ctx;
                        chart.data.datasets.forEach(function(dataset, i) {
                            var meta = chart.getDatasetMeta(i);
                            if (meta.type == "bubble") { //exclude scatter
                                meta.data.forEach(function(element) {
                                    ctx.fillStyle = 'rgba(54, 162, 235, 1)';
                                    var fontSize = Number(dataset.data[0].r);
                                    var fontStyle = 'normal';
                                    var fontFamily = 'Helvetica Neue';
                                    ctx.font = fontStyle+ " " +fontSize + "px "+fontFamily;
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    //var padding = Math.min(100/Number(dataset.data[0].r)**2, 30);
                                    var position = element.tooltipPosition();
                                    ctx.fillText(Number(dataset.data[0].z), position.x, position.y - fontSize/5);
                                    ctx.save()
                                });
                            }
                        })
                    }
                }
            ]
        }
    },
    components: {
        BubbleChart
    },
    created: function(){
        for (var i=0; i<8; i++){
            this.chartData.datasets[i].data[0].z = this.$store.state.suppliesDataSets.datasets[i][0][0];
            this.chartData.datasets[i].data[0].r = Math.min(40, 20+this.$store.state.suppliesDataSets.datasets[i][0][0]/8)
        }
        this.chartOptions.plugins.annotation.annotations[0].content = new Array(this.chartData.datasets[0].label);
        this.chartOptions.plugins.annotation.annotations[0].xValue = this.chartData.datasets[0].data[0].x+this.chartData.datasets[0].data[0].r/3+(this.chartData.datasets[0].label.length-this.chartData.datasets[0].data[0].r/20.0-3);
        this.chartOptions.plugins.annotation.annotations[0].yValue = this.chartData.datasets[0].data[0].y;
        this.chartOptions.plugins.annotation.annotations[1].content = new Array(this.chartData.datasets[1].label);
        this.chartOptions.plugins.annotation.annotations[1].xValue = this.chartData.datasets[1].data[0].x+this.chartData.datasets[1].data[0].r/3+(this.chartData.datasets[1].label.length-this.chartData.datasets[1].data[0].r/20.0-3)
        this.chartOptions.plugins.annotation.annotations[1].yValue = this.chartData.datasets[1].data[0].y-3;
        this.chartOptions.plugins.annotation.annotations[2].content = new Array(this.chartData.datasets[2].label);
        this.chartOptions.plugins.annotation.annotations[2].xValue = this.chartData.datasets[2].data[0].x-this.chartData.datasets[2].data[0].r/3-(this.chartData.datasets[2].label.length-this.chartData.datasets[2].data[0].r/20.0-3)
        this.chartOptions.plugins.annotation.annotations[2].yValue = this.chartData.datasets[2].data[0].y;
        this.chartOptions.plugins.annotation.annotations[3].content = new Array(this.chartData.datasets[3].label);
        this.chartOptions.plugins.annotation.annotations[3].xValue = this.chartData.datasets[3].data[0].x+this.chartData.datasets[3].data[0].r/3+(this.chartData.datasets[3].label.length-this.chartData.datasets[3].data[0].r/20.0-3);
        this.chartOptions.plugins.annotation.annotations[3].yValue = this.chartData.datasets[3].data[0].y;
        this.chartOptions.plugins.annotation.annotations[4].content = new Array(this.chartData.datasets[4].label);
        this.chartOptions.plugins.annotation.annotations[4].xValue = this.chartData.datasets[4].data[0].x+this.chartData.datasets[4].data[0].r/3+(this.chartData.datasets[4].label.length-this.chartData.datasets[4].data[0].r/20.0-3);
        this.chartOptions.plugins.annotation.annotations[4].yValue = this.chartData.datasets[4].data[0].y;
        this.chartOptions.plugins.annotation.annotations[5].content = new Array(this.chartData.datasets[5].label);
        this.chartOptions.plugins.annotation.annotations[5].xValue = this.chartData.datasets[5].data[0].x+this.chartData.datasets[5].data[0].r/3+(this.chartData.datasets[5].label.length-this.chartData.datasets[5].data[0].r/20.0-3);
        this.chartOptions.plugins.annotation.annotations[5].yValue = this.chartData.datasets[5].data[0].y;
        this.chartOptions.plugins.annotation.annotations[6].content = new Array(this.chartData.datasets[6].label);
        this.chartOptions.plugins.annotation.annotations[6].xValue = this.chartData.datasets[6].data[0].x+this.chartData.datasets[6].data[0].r/3 +(this.chartData.datasets[6].label.length-this.chartData.datasets[6].data[0].r/20.0-3);
        this.chartOptions.plugins.annotation.annotations[6].yValue = this.chartData.datasets[6].data[0].y;
        this.chartOptions.plugins.annotation.annotations[7].content = new Array(this.chartData.datasets[7].label);
        this.chartOptions.plugins.annotation.annotations[7].xValue = this.chartData.datasets[7].data[0].x+this.chartData.datasets[7].data[0].r/3 +(this.chartData.datasets[7].label.length-this.chartData.datasets[7].data[0].r/20.0-3);
        this.chartOptions.plugins.annotation.annotations[7].yValue = this.chartData.datasets[7].data[0].y;
    },
    mounted: function(){
        this.width = window.screen.width;
        //console.log(this.width)
    }
}

</script>