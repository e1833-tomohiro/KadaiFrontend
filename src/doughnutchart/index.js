import { Chart } from 'chart.js'
function register(proportion, id){
    Chart.register(
        {
            id: "doughnutChart"+id.toString(),
            beforeDraw: function(chart) {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;
                var val = proportion;
                var fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
        
                var text = val+"%",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;
        
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }
    )
}
export default register;