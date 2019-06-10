window.onload = function () {

    //Better to construct options first and then pass it as a parameter
    var options = {
        animationEnabled: true,
        title: {
            text: "",                
            fontColor: "Peru"
        },	
        axisY: {
            tickThickness: 0,
            lineThickness: 0,
            valueFormatString: " ",
            gridThickness: 0                    
        },
        axisX: {
            tickThickness: 0,
            lineThickness: 0,
            labelFontSize: 20,
            labelFontColor: "black"				
        },
        data: [{
            indexLabelFontSize: 19,
            toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
            indexLabelFontWeight: 150,
            indexLabelFontFamily: "Segoe UI",
            color: "#62C9C3",
            type: "bar",
            dataPoints: [
                { y: 51.9, label: "51.9%", indexLabel: "Beep Adopo Fan" },
                { y: 52.6, label: "52.6%", indexLabel: "Adobo Harogo" },
                { y: 54.7, label: "54.7%", indexLabel: "Adobo Hot" },
                { y: 58.9, label: "58.9%", indexLabel: "Cheken  Pay" },
                { y: 65, label: "65%", indexLabel: "Wanton Noodles" },
                { y: 67.8, label: "67.8%", indexLabel: "Beep Steak" },
                { y: 79.5, label: "79%", indexLabel: "Wild Turkey" },
                { y: 81.6, label: "81.6%", indexLabel: "Hafon Beep Steak" },
                { y: 89.9, label: "89.9%", indexLabel: "Cheken" }
            ]
        }]
    };
    
    $("#chartContainer").CanvasJSChart(options);
    }



// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         title:{
//             text: "PRODUCT SALES OF 2019"
//         },
//         axisY: {
//             title: "RATING BAR"
//         },
//         legend: {
//             cursor:"pointer",
//             itemclick : toggleDataSeries
//         },
//         toolTip: {
//             shared: true,
//             content: toolTipFormatter
//         },
//         data: [{
//             type: "bar",
//             showInLegend: true,
//             name: "Wild Turkey",
//             color: "gold",
            
            
//             dataPoints: [
//                 // { y: 172, label: "December" },
//                 // { y: 172, label: "November" },
//                 // { y: 172, label: "October" },
//                 // { y: 172, label: "September" },
//                 // { y: 172, label: "August" },
//                 // { y: 172, label: "July" },
//                 { y: 172, label: "June" },
//                 { y: 309, label: "May" },
//                 { y: 302, label: "Appril" },
//                 { y: 285, label: "March" },
//                 { y: 100, label: "Feb" },
//                 { y: 88, label: "Jan" }
//             ]
//         },
//         {
//             type: "bar",
//             showInLegend: true,
//             name: "Hofan",
//             color: "Green",
//             dataPoints: [
//                 { y: 172, label: "June" },
//                 { y: 309, label: "May" },
//                 { y: 302, label: "Appril" },
//                 { y: 285, label: "March" },
//                 { y: 100, label: "Feb" },
//                 { y: 500, label: "Jan" }
//             ]
//         },
//         {
//             type: "bar",
//             showInLegend: true,
//             name: "Sauteed",
//             color: "silver",
//             dataPoints: [
//                 { y: 172, label: "June" },
//                 { y: 309, label: "May" },
//                 { y: 302, label: "Appril" },
//                 { y: 285, label: "March" },
//                 { y: 188, label: "Feb" },
//                 { y: 500, label: "Jan" }
//             ]
//         },
//         {
//             type: "bar",
//             showInLegend: true,
//             name: "Wanton Noodles",
//             color: "yellow",
//             dataPoints: [
//                 { y: 172, label: "June" },
//                 { y: 309, label: "May" },
//                 { y: 302, label: "Appril" },
//                 { y: 285, label: "March" },
//                 { y: 188, label: "Feb" },
//                 { y: 500, label: "Jan" }
//             ]
//         },
//         {
//             type: "bar",
//             showInLegend: true,
//             name: "Beep Steak",
//             color: "brown",
//             dataPoints: [
//                 // { y: 236, label: "Italy" },
//                 { y: 172, label: "June" },
//                 { y: 309, label: "May" },
//                 { y: 302, label: "Appril" },
//                 { y: 285, label: "March" },
//                 { y: 188, label: "Feb" },
//                 { y: 500, label: "Jan" }
//             ]
//         }]
//     });
//     chart.render();
    
//     function toolTipFormatter(e) {
//         var str = "";
//         var total = 0 ;
//         var str3;
//         var str2 ;
//         for (var i = 0; i < e.entries.length; i++){
//             var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
//             total = e.entries[i].dataPoint.y + total;
//             str = str.concat(str1);
//         }
//         str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
//         str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
//         return (str2.concat(str)).concat(str3);
//     }
    
//     function toggleDataSeries(e) {
//         if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//             e.dataSeries.visible = false;
//         }
//         else {
//             e.dataSeries.visible = true;
//         }
//         chart.render();
//     }
    
//     }