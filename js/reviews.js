(function($){
    'use strict';

    // Review data
    const data = getData();

    // Current number of reviews per display
    const REVS_PER = 1;

    // Number of reviews
    const NUM_REVS = data.length;

    // Current iteration of reviews
    var curr_rev = 0;

    // List of visible reviews
    var curr_revs = [];

    // Update Reviews every 5 seconds
    window.setInterval(function() {
        getNextReviews();
        updateReviews();
    }, 5000);

    // Get the next set of reviews
    function getNextReviews() {
        // Create rev_end by curr_rev + REVS_PER
        var rev_end = curr_rev + REVS_PER;
        // Check if rev_end > NUM_REVS
        if(rev_end > NUM_REVS) {
            // IF yes, add the first reviews from start, set curr_rev to 0
            var over = rev_end - NUM_REVS;
            curr_revs = data.slice(curr_rev, NUM_REVS);
            var extra = data.slice(0, over);
            curr_revs = curr_revs.concat(extra);
            curr_rev = over;
        }
        else {
            curr_revs = data.slice(curr_rev, rev_end);
            curr_rev = rev_end;
        }            
    };
    
    // Update reviews on screen
    function updateReviews() {
        var rev = curr_revs[0];
        var text = '"' + rev["Review"] + '"';
        var end = rev["Name"] + ". " + rev["Location"] + ". " + rev["Date"];

        $("#review_text").text(text);
        $("#review_end").text(end);

    };

    // Review data
    function getData(){
        
        var data = [
            {
                "Name": "Aldo",
                "Location": "Brescia Italy",
                "Review": "This is to confirm I received the shipment. Great service.",
                "Date": "Dec. 22, 2015"
            },
            {
                "Name": "Vivien",
                "Location": "Hong Kong",
                "Review": "Peter is great with getting all the information we needed in a prompt manner. We will likely use Astro again.",
                "Date": "Dec. 23, 2015"
            },
            {
                "Name": "Sylvia",
                "Location": "Frankfurt Germany",
                "Review": "The accuracy, cleanness, kindness, and professionalism is so much appreciated, as well as the receiving moving company in Germany very well chosen. My husband and I are very grateful for the good and amazing job! We are very happy to have chosen 'Astro International' to have taken care of our household goods. I will spread out the word and if by any chance we happen to think about moving, we will definitely choose you again. God bless!",
                "Date": "Nov. 30, 2015"
            },
            {
                "Name": "Agustin",
                "Location": "Barcelona, Spain",
                "Review": "The service was excellent",
                "Date": "Sept. 28, 2015"
            },
            {
                "Name": "Carmel",
                "Location": "Dublin, Ireland",
                "Review": "We received the shipment in excellent condition and are very satisfied with the service your company provided",
                "Date": "Oct. 12, 2015"
            },
            {
                "Name": "Tobias",
                "Location": "Muelheim Germany",
                "Review": "Very good service.",
                "Date": "July 20, 2015"
            },
            {
                "Name": "Miikka",
                "Location": "Helsinki Finland",
                "Review": "Thank you very much.  You mad our life allot easier.",
                "Date": "Aug. 15, 2015"
            },
            {
                "Name": "Matthias",
                "Location": "St. Blaise Switzerland",
                "Review": "Everything went very well.  The quote was accurate. A trouble free trans-Atlantic move.",
                "Date": "July 27, 2015"
            },
            {
                "Name": "Daniel",
                "Location": "Immensee Switzerland",
                "Review": "Very good service.  Will recommend to friends.",
                "Date": "July 27, 2015"
            },
            {
                "Name": "Sarah",
                "Location": "St. Andrews UK",
                "Review": "Our shipment arrived and everything looks great.  Thank you for everything and I will recommend your service in the future.",
                "Date": "July 29, 2015"
            },
            {
                "Name": "Renata",
                "Location": "Ouilly-le-Vicomte France",
                "Review": "Thank you for making it all very easy. If you want to give our name for future référence - please do. We ll be happy to say good things about you.  All of my Murano arived intact, which is a miracle on Its own.",
                "Date": "June 20, 2015"
            },
            {
                "Name": "David",
                "Location": "Osaka Japan",
                "Review": "Thank you for a very good shipping experience.",
                "Date": "April 15, 2015"
            },
            {
                "Name": "Max",
                "Location": "Petitionville, Haiti",
                "Review": "Everything went perfectly well.  Thank you.",
                "Date": "May 17, 2015"
            },
            {
                "Name": "Alphonse",
                "Location": "Dar Es Salaam Tanzania",
                "Review": "This is to let you know that my shipment  arrived in Dar es Salaam safely. I was personally there to receive it and was pleasantly surprised when the container was opened and my car was as it was delivered to your warehouse - no scratch or dent on it. I am happy with the work you did for me and will highly recommend Astro International to my friends/colleagues for any international shipments.",
                "Date": "April 30, 2015"
            },
            {
                "Name": "Roman",
                "Location": "Zurich Switzerland",
                "Review": "Thanks for organizing the move of our household. Everything is complete and we're very satisfied with the outcome! I look forward to a similarly successful experience with the lab.",
                "Date": "June 10, 2015"
            },
            {
                "Name": "Chevanthia",
                "Location": "Sri Lanka to Boston",
                "Review": "A short to thank you for all the support given with regards to my shipment.",
                "Date": "July 3, 2015"
            },
            {
                "Name": "Carolyn",
                "Location": "Berlin Germany",
                "Review": "Thank you again for all your help with my move. I greatly appreciate your making a complicated task simpler and less stressful.",
                "Date": "March 30, 2015"
            },
            {
                "Name": "Deirdra",
                "Location": "Dublin Ireland",
                "Review": "I will definitely recommend you any friends that intend shipping in the future.",
                "Date": "April 7, 2015"
            },
            {
                "Name": "Lyvia",
                "Location": "France to Boston",
                "Review": "I would like to thank ASTRO International Boston for the great service  provided when moving my goods from France to Boston on January 30, 2015. They were very professional, efficient, pro-active and very nice. In such a big stressful transition period as moving could be it's been very helpful. I belong to an European community in Boston counting numerous expatriates and I will, with no doubt, highly recommend your company to whoever may need.",
                "Date": "Jan. 30, 2015"
            },
            {
                "Name": "Kathryn",
                "Location": "Sieci Italy",
                "Review": "We used Astro's service twice- perfect every time. We highly recommend them!",
                "Date": "Jan 15, 2015"
            }
        
        ];
        return data
    }

})(jQuery);