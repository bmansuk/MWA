
/******************************************************************************************
        This javascript code is adopted and modified from the solution discussed in workshop 4.
        Set the value of an input box and put it in a variable and listen to a click of a button.  
 *******************************************************************************************/

    $("button").click(function(){  

        // remove previous search results 
        $("#popups").empty();

        //Fixed number of pictures to download. This could be made dynamic by asking the user to type the amount he/she wants to download. But for now we leave it fixed!
        var numOfPics  = 8;  
        var anchorHTML = "";
        var popupHTML  = "";
        var mysearch   = $("input").val();

        // make call and handle callback from Flickr public Feed
        (function(){
            var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            $.getJSON(flickerAPI, {  
                    tags: mysearch, // our input
                    tagmode: "any",
                    format: "json"
                })         //$(selector).getJSON(url, data, success(data, status, xhr))
               
                //When .done() function is complete, then excute the callback() function!
                .done(function(data){ 

                 // looping numOfPics times
                  $.each(data.items, function(i, item){

                  //generate the 'Open Photo' in the list according to their photo ids
                  anchorHTML +='<li><a href="#photo' + i + ' ">Open Photo ' + i + ' </a></li>';

                  
                //generate the photos and display them in a new page according to 
                //their (photoid+1)   
                 popupHTML += '<div data-role="page" id="photo' + i + '"><img src="' + item.media.m + '"/><a class="ui-btn" href="#main">Return to Home Page</a><a class="ui-btn" href="#page'  + i + ' ">Photo '+ i + ' '+ ' - '+ ' '+ 'in  ' +'Page '+ ''+ (i+1) + '</a></div>' 
  
                      if (i === numOfPics-1){
                         return false;
                      }

                  }); // end of loop

                  // DOM injection 
                  $("ul").append(anchorHTML).listview("refresh");
                  $(popupHTML).insertAfter($('#main'));

                  // set a unique ID atribute for each image using attr()
                  jQuery.each(  $("img"), function( i, val ){
                    $(this).attr("id", i);
                        
                  });

                });  

        })();
    });
