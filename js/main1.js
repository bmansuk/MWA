
  var btn = document.getElementById("btn");        //This variable points to the blue button in the HTML

  var ourRequest = new XMLHttpRequest();      // This tool will do the heavy lifting for us

  //Use the 'GET' function to get the data from the specified url. The url is made dynamic by using the pageCounter variable
  ourRequest.open('GET', 'json/myfile.json');

    //What should happen when the data is loaded
    ourRequest.onload = function(){
  	
        console.log(ourRequest.responseText);
    };
     
     ourRequest.send();
 