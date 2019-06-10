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


