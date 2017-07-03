//Standard jQuery ajax technique to load JSON file...


  $.ajax({
      url: 'jkm/myfile3.json',   //JSON file about wildAnimals...
      type: 'GET',
      dataType: 'json',
      cache: "false",
      success: function(data){

        //Looping through the list x times...
       $(data.wildAnimals).each(function(index, value){
        
          //Target area where the data will be appended
          $("ul").append("<li>" + value.id + " - " + value.name + " - "+ value.description +  "</li>" + "<br/>");
          
         });
       
      }        
  
  });

  