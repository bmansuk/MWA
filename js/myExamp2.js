
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
     
        $scope.editing = false;
        $scope.addItem = function(item) {
        $scope.myitems.push(item);
        

        };


