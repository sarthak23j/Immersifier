// $(:root).css("--timeperiod","")
let ispressed = false;

$(".slide-button").on("mousedown",(e) => {
    ispressed = true;
});

$(document).on("mouseup",(e) => {
    ispressed = false;
});

$(document).on("mousemove", function(e) {
    if (ispressed) {
        let a = e.clientX;
        let c = a - (0.075 * $(document).width());
        let d = $(document).width() - (0.15 * $(document).width());
        let percentage = (c / d) * 100;
        let p2 = Math.max(0,Math.min(percentage - 0.5,100));
        percentage = Math.max(0.01, Math.min(percentage, 99.99));
        console.log(percentage);
        $(".slide-button").css("left", p2 + "%");

        let tp = ((1 - (percentage/100)) * 200) + 30;
        console.log(tp+" ----");
        $("body").css("--timeperiod",tp+"s"); 
    }
});