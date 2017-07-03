
//Standard jQuery ajax technique to load XML file...

  $.ajax({
      url: 'xml/lolcatz.xml',
      type: 'GET',
      dataType: 'xml',
      success: function(data){

           //Find and retrieve the XML data  
     	  $(data).find('LolCatz kitteh').each(function(i, item){

             var numOfPics = 4;   
             var name = $(this).find("name").text();      //This indicates child node retrieval of XML data
             var src  = $(this).find("url").text();
             var id   = $(this).attr("id");             //This indicates an attribute retrieval of XML data
             var i

            //Retrieve and display XML data 
            $(".lolcatz ul").append( $('<li>' + '<a class="ui-btn" href="#'+ id + ' "' + 'data-transition="flow"' + '>' + name + '</a></li>')); 

            $('<div data-role="page" id="'+ id +'"><img src="'+ src +'"><br><a class="ui-btn" href="#pageone">Return to Main Page</a><a class="ui-btn" href="#'  + id + ' ">'+ id + ' '+ ' - '+ ' '+ 'in  ' +'Page '+ ''+ (i+1) + '</a></div>').insertAfter('#pageone');
             
             if (i === numOfPics-1){
                         return false;
             }

        });
      
      },    

      error: function(){
        $(".lolcatz").name('Failed to get the feed');
      }

  });
  
