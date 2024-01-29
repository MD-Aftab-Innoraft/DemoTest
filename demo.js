$(document).ready(function (){
    // for scrolling to various positions
    $("#to-learnings").click(function () {
        $("html").animate({ scrollTop: $("#learnings").offset().top - 65 }, 1000);
    });

    $("#to-embed-video").click(function () {
        $("html").animate({ scrollTop: $("#video").offset().top - 65 }, 1000)
    });

    $("#to-pricing").click(function () {
        $("html").animate({ scrollTop: $("#pricing").offset().top - 65 }, 1000)
    });

    $(".nav-logo").click(function () {
        // document.documentElement.scrollTop = 0;
        $("html").animate({ scrollTop: $(".nav-overlay").offset().top }, 1000);
    });

    // if there are more than 2 items in a card list 
    if ($("#pricing-feature-list1").children().length > 2) {   // hide the next items and add a read-more button
        $("#pricing-feature-list1").children().eq(1).nextAll().hide();
        $("#pricing-feature-list1").after(`<a id="read-more1" href="URL:void(0)">Read more</a>`);
    }
    // read more and read less toggle
    $("#read-more").click(function () {
        $("#pricing-feature-list1").children().eq(1).nextAll().toggle();
        if ($("#read-more").text() == "Read more") {
            $("#read-more").text("Read less");
        }
        else {
            $("#read-more").text("Read more");
        }
    });

    if ($("#pricing-feature-list2").children().length > 2) {
        $("#pricing-feature-list2").children().eq(1).nextAll().hide()
        $("#pricing-feature-list2").after(`<a id="read-more2" href="URL:void(0)">Read more</a>`);
    }
    $("#read-more2").click(function () {
        $("#pricing-feature-list2").children().eq(1).nextAll().toggle();
        if ($("#read-more2").text() == "Read more") {
            $("#read-more2").text("Read less");
        }
        else {
            $("#read-more2").text("Read more");
        }
    });

    if ($("#pricing-feature-list3").children().length > 2) {
        $("#pricing-feature-list3").children().eq(1).nextAll().hide()
        $("#pricing-feature-list3").after(`<a id="read-more3" href="URL:void(0)">Read more</a>`);
    }
    $("#read-more3").click(function () {
        $("#pricing-feature-list3").children().eq(1).nextAll().toggle();
        if ($("#read-more3").text() == "Read more") {
            $("#read-more3").text("Read less");
        }
        else {
            $("#read-more3").text("Read more");
        }
    });

    // For removing a card when clickeed on cross icon 
    $(".cross1").click(function () {
        $(".pricing-card1").css("display", "none");
        $("#reset-cards-btn").removeAttr("disabled").addClass('active-btn').removeClass('disabled-btn');
    });

    $(".cross2").click(function () {
        $(".pricing-card2").css("display", "none");
        $("#reset-cards-btn").removeAttr("disabled").addClass('active-btn').removeClass('disabled-btn');
    });

    $(".cross3").click(function () {
        $(".pricing-card3").css("display", "none");
        $("#reset-cards-btn").removeAttr("disabled").addClass('active-btn').removeClass('disabled-btn');
    });

    $("#reset-cards-btn").click(function(){
        $(".card").css("display", "block");
        $("#reset-cards-btn").attr("disabled","disabled").addClass('disabled-btn').removeClass('active-btn');
    });

    if($("#reset-cards-btn").attr("disabled") == "disabled")
    {
        $("#reset-cards-btn").addClass('disabled-btn').removeClass('active-btn');
    }
//    if($(".pricing-card1").show() || $(".pricing-card2").show() || $(".pricing-card3").show()){
//     $("#reset-cards-btn").css("backcround-color","green");
//    }
//    else{
//     $("#reset-cards-btn").css("backcround-color","red");
//    }   

});