var pageCounter =1;       //This variable points to the specified url and makes it dynamic

var animalContainer = document.getElementById("animal-infor");   //This variable points to an empty div in the HTML

var btn = document.getElementById("btn");        //This variable points to the blue button in the HTML

btn.addEventListener("click", function(){       //An Event listener on 'click' event

  var ourRequest = new XMLHttpRequest();      // This tool will do the heavy lifting for us

  //Use the 'GET' function to get the data from the specified url. The url is made dynamic by using the pageCounter variable
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');

    //What should happen when the data is loaded
    ourRequest.onload = function(){
  	
    // This part of code is for potential error handling if needed!
  
       if(ourRequest.status >= 200 && ourRequest.status < 400){

  	   var ourData = JSON.parse(ourRequest.responseText);          //This variable interprets this line as a JSON filter
       renderHTML(ourData);                                        //This line calls the renderHTML function
      }
      else{
          console.log("We connected to the server, but it returned an error");
      }
  
    };
     //Handles outright connection error!
     ourRequest.onerror = function(){
     console.log("Connection error");

     };

      // Send the data
      ourRequest.send();
      pageCounter++;            //Increments pageCounter

      //The if condition hides the blue button after the third click
      if(pageCounter >3){
	   btn.classList.add("hide-me");
    }

});

//function to render the HTML data
function renderHTML(data){
    var htmlString = " ";

   //The main outer 'for' loop
    for(i=0; i< data.length; i++){
        htmlString+= "<p><li />" + data[i].name + " is a " +data[i].species + " that likes to eat "; 

        //A nested 'for' loop for likes
        for(j=0; j< data[i].foods.likes.length; j++){
     	    if(j== 0){
               htmlString+= data[i].foods.likes[j];
     	    }
     	    else{
                htmlString+= " and " + data[i].foods.likes[j]; //This adds a space between the fav foods
     	    }
        }

        htmlString+= " and dislikes ";  //This adds the dislikes foods.

        //A nested 'for' loop for dislikes
        for(j=0; j< data[i].foods.dislikes.length; j++){

     	    if(j== 0){
              htmlString+= data[i].foods.dislikes[j];
     	    }
     	    else{
                htmlString+= " and " + data[i].foods.dislikes[j];
     	    }
        }

        htmlString+= ".</p>"; // This adds the closing period and closing paragraph tag.
    }
    
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
 