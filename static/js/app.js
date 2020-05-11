d3.json("data/samples.json").then((data) => {
    var top10OTUSubarray = [];
    var top10OTUArray = [];
    for (var i = 0; i < data.samples.length; i++) {
        if (data.samples[i].sample_values.length >= 10) {
            for (var j = 0; j < 10; j++) {
                top10OTUSubarray.push(data.samples[i].sample_values[j])
                if (j === 9) {
                    top10OTUArray.push(top10OTUSubarray.splice(0, 10))
                };
            };
        } else {
            for (var j = 0; j <= data.samples[i].sample_values.length; j++) {
                if (j === data.samples[i].sample_values.length) {
                    top10OTUArray.push(top10OTUSubarray.splice(0, data.samples[i].sample_values.length))
                } else {
                top10OTUSubarray.push(data.samples[i].sample_values[j])
                };
            };
        };
    };
    var OTUIDSubarray = [];
    var OTUIDArray = [];
    for (var i = 0; i < data.samples.length; i++) {
        if (data.samples[i].otu_ids.length >= 10) {
            for (var j = 0; j < 10; j++) {
                OTUIDSubarray.push("OTU " + data.samples[i].otu_ids[j].toString())
                if (j === 9) {
                    OTUIDArray.push(OTUIDSubarray.splice(0, 10))
                };
            };
        } else {
            for (var j = 0; j <= data.samples[i].otu_ids.length; j++) {
                if (j === data.samples[i].otu_ids.length) {
                    OTUIDArray.push(OTUIDSubarray.splice(0, data.samples[i].otu_ids.length))
                } else {
                    OTUIDSubarray.push("OTU " + data.samples[i].otu_ids[j].toString())
                };
            };
        };
    };
    var OTULabelSubarray = [];
    var OTULabelArray = [];
    for (var i = 0; i < data.samples.length; i++) {
        if (data.samples[i].otu_labels.length >= 10) {
            for (var j = 0; j < 10; j++) {
                OTULabelSubarray.push(data.samples[i].otu_labels[j])
                if (j === 9) {
                    OTULabelArray.push(OTULabelSubarray.splice(0, 10))
                };
            };
        } else {
            for (var j = 0; j <= data.samples[i].sample_values.length; j++) {
                if (j === data.samples[i].otu_labels.length) {
                    OTULabelArray.push(OTULabelSubarray.splice(0, data.samples[i].otu_labels.length))
                } else {
                    OTULabelSubarray.push(data.samples[i].otu_labels[j])
                };
            };
        };
    };
    // I assume that all three of the above nested for loops could have been more easily done w/ a forEach or map, but I am not comfortable w/ them

    // creating option elements
    for (i = 0; i < data.names.length; i++) {
        var option = document.createElement("option");
        option.value = `${data.names[i]}`;
        option.text = `${data.names[i]}`;
        document.getElementById("selDataset").appendChild(option);
    };

    // Initializes the page with a default plot
    function init() {
        data = [{
            type: "bar",
            x: [163, 126, 113, 78, 71, 51, 50, 47, 40, 40],
            y: ["OTU 1167", "OTU 2859", "OTU 482", "OTU 2264", "OTU 41", "OTU 1189", "OTU 352", "OTU 189", "OTU 2318", "OTU 1977"],
            text: ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales"],
            orientation: "h" }];
        var layout = {
            title: "Top 10 OTUs for Each Individual",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU IDs"} };
        Plotly.newPlot("plot", data, layout);
    };

    // make this a global variable for use inside the function below
    var namesArray = data.names;

    // Call updatePlotly() when a change takes place to the DOM
    d3.selectAll("body").on("change", updatePlotly);
    // This function is called when a dropdown menu item is selected
    function updatePlotly() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.node().value;
        // Note the extra brackets around 'x' and 'y'
        for (i = 0; i < namesArray.length; i++) {
            if (dataset === namesArray[i]) {
                x = top10OTUArray[i]
                y = OTUIDArray[i]
                text = OTULabelArray[i]
            };
        };
        Plotly.restyle("plot", "x", [x]);
        Plotly.restyle("plot", "y", [y]);
    };
    init();
});