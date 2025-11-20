jQuery(document).ready(function($){
	
    $("#slide_nav ul li").click(function(){
         $(".elementor-element.elementor-widget-hotspot").removeClass('active');
         $("#slide_nav ul li").removeClass('active');
         $(".director_details").removeClass('active');
        var id = $(this).attr('id');
        //alert("leadership_"+id);
       $("#leadership_" + id).addClass('active');
       $("#slide_nav ul li#" + id).addClass('active');
       $(".director_details." + id).addClass('active');
    });
    
    // LEADERSHIP TOGGLE 
    // SLIDE 1 - 1
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-42ce2b9").click(function(){
      $("#slide_1 h3.user_details_1").show();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 2
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-99ccdf2").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").show();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 3
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-b002b7d").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").show();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 4
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-805f9c7").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").show();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 5
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-d0aad8f").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").show();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 6
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-259df32").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").show();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 7
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-8712696").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").show();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 8
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-076822d").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").show();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 9
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-53eecb8").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").show();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 10
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-7c2e41b").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").show();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 11
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-44d281e").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").show();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 12
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-4a34796").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").show();
        $("#slide_1 h3.user_details_13").hide();
    });
    // SLIDE 1 - 13
    $("#leadership_year_2022 .e-hotspot.elementor-repeater-item-694bc0f").click(function(){
      $("#slide_1 h3.user_details_1").hide();
        $("#slide_1 h3.user_details_2").hide();
        $("#slide_1 h3.user_details_3").hide();
        $("#slide_1 h3.user_details_4").hide();
        $("#slide_1 h3.user_details_5").hide();
        $("#slide_1 h3.user_details_6").hide();
        $("#slide_1 h3.user_details_7").hide();
        $("#slide_1 h3.user_details_8").hide();
        $("#slide_1 h3.user_details_9").hide();
        $("#slide_1 h3.user_details_10").hide();
        $("#slide_1 h3.user_details_11").hide();
        $("#slide_1 h3.user_details_12").hide();
        $("#slide_1 h3.user_details_13").show();
    });
    // SLIDE 2 - 1
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-42ce2b9").click(function(){
      $("#slide_2 h3.user_details_1").show();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 2
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-2f9e9b9").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").show();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 3
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-99ccdf2").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").show();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 4
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-b002b7d").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").show();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 5
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-805f9c7").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").show();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 6
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-8712696").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").show();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 7
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-259df32").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").show();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 8
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-076822d").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").show();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 9
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-53eecb8").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").show();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 10
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-7c2e41b").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").show();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 11
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-44d281e").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").show();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 12
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-06c977d").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").show();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 13
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-8112e7f").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").show();
        $("#slide_2 h3.user_details_14").hide();
    });
    // SLIDE 2 - 14
    $("#leadership_year_2021 .e-hotspot.elementor-repeater-item-cec37ac").click(function(){
      $("#slide_2 h3.user_details_1").hide();
        $("#slide_2 h3.user_details_2").hide();
        $("#slide_2 h3.user_details_3").hide();
        $("#slide_2 h3.user_details_4").hide();
        $("#slide_2 h3.user_details_5").hide();
        $("#slide_2 h3.user_details_6").hide();
        $("#slide_2 h3.user_details_7").hide();
        $("#slide_2 h3.user_details_8").hide();
        $("#slide_2 h3.user_details_9").hide();
        $("#slide_2 h3.user_details_10").hide();
        $("#slide_2 h3.user_details_11").hide();
        $("#slide_2 h3.user_details_12").hide();
        $("#slide_2 h3.user_details_13").hide();
        $("#slide_2 h3.user_details_14").show();
    });
    // SLIDE 3 - 1
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-42ce2b9").click(function(){
      $("#slide_3 h3.user_details_1").show();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 2
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-8bb1494").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").show();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 3
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-c757de6").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").show();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 4
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-2f9e9b9").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").show();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 5
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-99ccdf2").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").show();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 6
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-b002b7d").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").show();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 7
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-805f9c7").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").show();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 8
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-076822d").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").show();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 9
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-53eecb8").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").show();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 10
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-7c2e41b").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").show();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 11
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-6625756").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").show();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 12
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-78448d6").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").show();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").hide();
    });
    // SLIDE 3 - 13
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-259df32").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").show();
        $("#slide_3 h3.user_details_14").hide();
    });  
    // SLIDE 3 - 14
    $("#leadership_year_2020 .e-hotspot.elementor-repeater-item-f88fe9e").click(function(){
      $("#slide_3 h3.user_details_1").hide();
        $("#slide_3 h3.user_details_2").hide();
        $("#slide_3 h3.user_details_3").hide();
        $("#slide_3 h3.user_details_4").hide();
        $("#slide_3 h3.user_details_5").hide();
        $("#slide_3 h3.user_details_6").hide();
        $("#slide_3 h3.user_details_7").hide();
        $("#slide_3 h3.user_details_8").hide();
        $("#slide_3 h3.user_details_9").hide();
        $("#slide_3 h3.user_details_10").hide();
        $("#slide_3 h3.user_details_11").hide();
        $("#slide_3 h3.user_details_12").hide();
        $("#slide_3 h3.user_details_13").hide();
        $("#slide_3 h3.user_details_14").show();
    });  
      // SLIDE 4 - 1
    $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-42ce2b9").click(function(){
      $("#slide_4 h3.user_details_1").show();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 2
    $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-2f9e9b9").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").show();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 3
    $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-99ccdf2").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").show();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 4
    $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-b002b7d").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").show();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 5
    $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-805f9c7").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").show();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 6
    $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-8712696").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").show();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 7
    $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-259df32").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").show();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 8
     $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-076822d").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").show();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 9
     $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-8b2c2a0").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").show();
        $("#slide_4 h3.user_details_10").hide();
    });
    // SLIDE 4 - 10
     $("#leadership_year_2019 .e-hotspot.elementor-repeater-item-2c07d6e").click(function(){
      $("#slide_4 h3.user_details_1").hide();
        $("#slide_4 h3.user_details_2").hide();
        $("#slide_4 h3.user_details_3").hide();
        $("#slide_4 h3.user_details_4").hide();
        $("#slide_4 h3.user_details_5").hide();
        $("#slide_4 h3.user_details_6").hide();
        $("#slide_4 h3.user_details_7").hide();
        $("#slide_4 h3.user_details_8").hide();
        $("#slide_4 h3.user_details_9").hide();
        $("#slide_4 h3.user_details_10").show();
    });
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 100) {
          $("#global_header_top.tab_bg").addClass("darkHeader");
      } else {
          $("#global_header_top.tab_bg").removeClass("darkHeader");
      }
  });
  });