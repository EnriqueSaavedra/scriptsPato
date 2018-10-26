window.onload=function(){var e=new CanvasJS.Chart("chartContainer",{title:{text:""},exportFileName:"Pie Chart",exportEnabled:true,legend:{verticalAlign:"bottom",horizontalAlign:"center"},data:[{type:"pie",showInLegend:true,toolTipContent:"{legendText}: <strong>{y}%</strong>",indexLabel:"{label} {y}%",
	dataPoints:[
	// Aquí se agregan los items que conforman el gráfico.
	{y:55,legendText:"Primero",label:"Primero"},
	{y:30,legendText:"Segundo",label:"Segundo"},
	{y:15,legendText:"Tercero",label:"Tercero"},
]}]});e.render()}