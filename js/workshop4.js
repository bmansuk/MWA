
//Set the value of an input box and put it in a variable.
    $("button").click(function() {

        // remove previous search results
        $("#popups").empty();

        var numOfPics = 2;
        var anchorHTML = "";
        var popupHTML = "";

        var mysearch = $("input").val();

        // make call and handle callback from Flickr public Feed
        (function() {
            var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            $.getJSON(flickerAPI, {
                    tags: mysearch, // our input
                    tagmode: "any",
                    format: "json"
                })
                .done(function(data) {

                    // looping numOfPics times
                    $.each(data.items, function(i, item) {

                      // generate  <a href="#photo0" >Open Popup 0 </a>
                      anchorHTML +='<li><a href="#photo' + i + '">Open Pic ' + i + ' </a></li>';

                      // generate <div data-role="page" id="photo0"><img src={{flickr query}} /><a href="#main">Back</a></div>
                      popupHTML += '<div data-role="page" id="photo' + i + '"><img src="' + item.media.m + '"/><a class="ui-btn" href="#main">Back</a></div>';

                        if (i === numOfPics-1) {
                            return false;
                        }
                    }); // end of loop

                    // Dom injection 
                    $("ul").append(anchorHTML).listview("refresh");
                    $(popupHTML).insertAfter($('#main'));
                           
                    // set a unique ID atribute for each image using attr()
                    jQuery.each(  $("img"), function( i, val ) {
                        $(this).attr("id", i);
                    });
                });                            
        })();
    });