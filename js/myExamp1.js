
   var myApp = angular.module("myApp", []); 

    //Create and register the controller with this App!
       myApp.controller("mylistCtrl", function($scope){

       //Set our data
        var products = [ { name:"Milk", description: "Dairy"},

                         { name:"Bread", description:"Carbohydrates"},

                         { name:"Cheese", description:"Dairy"},

                         { name:"Butter", description:"Dairy"}, 

                         { name:"Tomatoes", description:"Fruit"},

                         { name:"Oranges", description:"Fruit"},

                         { name:"Carrots", description:"Vegetables"},

                         { name:"Cabbage", description:"Vegetables"},

                         { name:"Cucumber", description:"Vegetable"},

                         { name:"Eggs", description: "Poultry"},

                         { name:"Bacon", description: "Meat Products"}
                      ];
        //Add it to the scope
        $scope.products = products;
     /*
        //Add logic to the controller
        $scope.addnewItem = function () {

	       $cope.addnewItem.push (
	           {
                 name: $scope.newProduct.name,
                 description: $scope.newProduct.description
	           }
	        );
        }
      */
    $scope.addItem  = function () {
    	
        $scope.errortext = "";
        if (!$scope.addMe) {return;}        
        if ($scope.products.indexOf($scope.addMe) == -1){
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }

    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
    
    });


