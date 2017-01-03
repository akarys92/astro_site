(function($){
    'use strict';
    // Number of pics per page
    const NUM_PICS = 3;
    // Get total pics
    const TOTAL_PICS = 5;
    
    // The numbers of the pics to display
    var display_pics = [];
    // Starting index
    var start = 0;
    // Ending index
    var end = NUM_PICS - 1;

    // Initialize the page
    updatePics();
    
    // Change pics every 11 seconds
    window.setInterval(function() {
        getPics();
        updatePics();
    }, 11000);

    // Select NUM_PICS of numbers to display
    function getPics(){
        // Select NUM_PICS numbers between 0 and TOTAL_PICS
        start++;
        end++;
        if(start >= TOTAL_PICS) {
            start = 0;
        }
        if(end >= TOTAL_PICS) {
            end = 0;
        }
        console.log("start: " + start + " end: " + end);
    };
    // Update the displayed pictures
    function updatePics(){
        // Make all pics display: none
        $('.pic-show').hide();
        // Create an array of pic ids to be made visible
        var visible_pics = [];
        var iter = start;
        for(var i = 0; i < NUM_PICS; i++){
            var id = "#pic-show-" + iter;
            $(id).show();
            iter++;
            if(iter >= TOTAL_PICS) {
                iter = 0;
            }
        }
    };

})(jQuery);