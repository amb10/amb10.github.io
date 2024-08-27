window.addEventListener("load", (e) => main());
let serviceDetails = new Map([
    ["base_cut", "<h2><b>Base Cut</b></h2>" +
                "<p>Standard hair cut to a length that you desire.</p>" +
                "<p><i>Estimated Service Time: 35 minutes</i></p>"],
    ["base_cut_jr", "<h2><b>Base Cut Jr</b></h2>" +
                "<p>Standard hair cut to a length that you desire for children.</p>" +
                "<p><i>Estimated Service Time: 35 minutes</i></p>"],
    ["beard_trim", "<h2><b>Beard Trim & Grooming</b></h2>" +
                "<p>A professional touchup to your beard and facial hair.</p>" +
                "<p><i>Estimated Service Time: 25 minutes</i></p>"],
    ["clipper_cut", "<h2><b>Clipper Cut</b></h2>" +
                "<p>Buzz cuts and other standard cuts using clippers.</p>" +
                "<p><i>Estimated Service Time: 30 minutes</i></p>"],
    ["clipper_cut_jr", "<h2><b>Clipper Cut Jr.</b></h2>" +
                "<p>Buzz cuts and other standard cuts using clippers for children.</p>" +
                "<p><i>Estimated Service Time: 25 minutes</i></p>"],
    ["smart_cut", "<h2><b>Smart Cut</b></h2>" +
                "<p>Specialized hair cuts to get the perfect frame for your face.</p>" +
                "<p><i>Estimated Service Time: 60 minutes</i></p>"],
    ["smart_cut_jr", "<h2><b>Smart Cut Jr.</b></h2>" +
                "<p>Specialized hair cuts to get the perfect face frame for your children.</p>" +
                "<p><i>Estimated Service Time: 45-60 minutes</i></p>"],
    ["smart_color", "<h2><b>Smart Color</b></h2>" +
                "<p>Services involving changes in hair color such as highlights or color dye.</p>" +
                "<p><i>Estimated Service Time: 400 minutes</i></p>"],
    ["smart_style", "<h2><b>Smart Style</b></h2>" +
                "<p>Get the newest and perfect hair style for you special occasion.</p>" +
                "<p><i>Estimated Service Time: 30 minutes</i></p>"],
    ["smart_style_plus", "<h2><b>Smart Style Plus</b></h2>" +
                "<p>Get the newest and perfect hair style for you including longer transformations.</p>" +
                "<p><i>Estimated Service Time: 90 minutes</i></p>"],
    ["wax_1", "<h2><b>Wax 1 Area</b></h2>" +
                "<p>Wax service on one area of choice.</p>" +
                "<p><i>Estimated Service Time: 10 minutes</i></p>"],
    ["wax_2", "<h2><b>Wax 2 Areas</b></h2>" +
                "<p>Wax service on two areas of choice.</p>" +
                "<p><i>Estimated Service Time: 15 minutes</i></p>"],
    ["wax_3", "<h2><b>Wax 3 Areas</b></h2>" +
                "<p>Wax service on three areas of choice.</p>" +
                "<p><i>Estimated Service Time: 20 minutes</i></p>"],
    ["wax_4", "<h2><b>Wax 4 Areas</b></h2>" +
                "<p>Wax service on four areas of choice.</p>" +
                "<p><i>Estimated Service Time: 30 minutes</i></p>"],
    ["consultation", "<h2><b>Complimentary Consultation</b></h2>" +
                "<p>Consult with me on your hair services to determine pricing and results.</p>" +
                "<p><i>Estimated Service Time: 30 minutes</i></p>"],
    ["olaplex", "<h2><b>Olaplex Treatment</b></h2>" +
                "<p>Hair treatment using Olaplex restorative products.</p>" +
                "<p><i>Estimated Service Time: 40 minutes</i></p>"],
    ["pm_bond_rx", "<h2><b>Pm Bond Rx Treatment</b></h2>" +
                "<p>Hair treatment using Pm Bond Rx services.</p>" +
                "<p><i>Estimated Service Time: 30 minutes</i></p>"],
    ["perm", "<h2><b>Smart Perm (Plus)</b></h2>" +
                "<p>A service creating long lasting curls.</p>" +
                "<p><i>Estimated Service Time: 120-180 minutes</i></p>"]
]);

let button = "<button class=\"buttons\" id=\"end_button\">Close Box</button>";

function presentDetails(mapID) {
    // Display box with text
    let detailsBox = document.getElementById("services_block");
    detailsBox.innerHTML = serviceDetails.get(mapID) + button;
    detailsBox.style.display = "block";

    let buttonClick = document.getElementById("end_button");
    buttonClick.addEventListener("click", (e) => {
        detailsBox.style.display = "none";
    });
}

function main() {
    document.getElementById("base_cut").addEventListener("click", (e) => presentDetails("base_cut"));
    document.getElementById("base_cut_jr").addEventListener("click", (e) => presentDetails("base_cut_jr"));
    document.getElementById("beard_trim").addEventListener("click", (e) => presentDetails("beard_trim"));
    document.getElementById("clipper_cut").addEventListener("click", (e) => presentDetails("clipper_cut"));
    document.getElementById("clipper_cut_jr").addEventListener("click", (e) => presentDetails("clipper_cut_jr"));
    document.getElementById("smart_cut").addEventListener("click", (e) => presentDetails("smart_cut"));
    document.getElementById("smart_cut_jr").addEventListener("click", (e) => presentDetails("smart_cut_jr"));
    document.getElementById("smart_color").addEventListener("click", (e) => presentDetails("smart_color"));
    document.getElementById("smart_style").addEventListener("click", (e) => presentDetails("smart_style"));
    document.getElementById("smart_style_plus").addEventListener("click", (e) => presentDetails("smart_style_plus"));
    document.getElementById("wax_1").addEventListener("click", (e) => presentDetails("wax_1"));
    document.getElementById("wax_2").addEventListener("click", (e) => presentDetails("wax_2"));
    document.getElementById("wax_3").addEventListener("click", (e) => presentDetails("wax_3"));
    document.getElementById("wax_4").addEventListener("click", (e) => presentDetails("wax_4"));
    document.getElementById("consultation").addEventListener("click", (e) => presentDetails("consultation"));
    document.getElementById("olaplex").addEventListener("click", (e) => presentDetails("olaplex"));
    document.getElementById("pm_bond_rx").addEventListener("click", (e) => presentDetails("pm_bond_rx"));
    document.getElementById("perm").addEventListener("click", (e) => presentDetails("perm"));
}