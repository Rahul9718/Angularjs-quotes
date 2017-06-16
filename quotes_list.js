

(function(angular) {
  'use strict';
    
    var app = angular.module("change", []);
    
    app.controller('ChangeController',  ['$scope', function($scope) {
        
        var list_index = -1;
       
        
        var quotes = ["Be the change you wish to see.", "Social progress can be measured by the social position of the female sex.", "I like the religion that teaches liberty, equality and fraternity.", "If you tremble with indignation at every injustice then you are a comrade of mine.", "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me."];
 
    var reaction =["show_author","hide_author"]

    var authors = ["Mahatma Gandhi", "Karl Marx", "B. R. Ambedkar", "Ernesto Che Guevara", "Abdul Kalam"];
        changequotes();
        
    $scope.lines =["Be the change you wish to see.", "Social progress can be measured by the social position of the female sex.", "I like the religion that teaches liberty, equality and fraternity.", "If you tremble with indignation at every injustice then you are a comrade of mine.", "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me."]
        

        
        $scope.line =0;
        $scope.remove =function (index){
            console.log(index)
            $scope.quote = $scope.lines[index]
            list_index =index;
        }
        
        

            
        function for_show(){
            $scope.show = true;
            $scope.show_author =reaction[1]
        }

        function for_hide(){
            $scope.show = false; 
            $scope.show_author =reaction[0] 
        }

        function changequotes(){
            if (list_index%2 == 1){
                for_show();
            }
            else{
                for_hide();
            }

            list_index = list_index + 1;

            $scope.author = authors[list_index];
            $scope.quote = quotes[list_index];

            if (list_index==quotes.length-1){
                list_index = -1;
            }
        };
        
        $scope.showauthor = function showauthor(){
            if ($scope.show_author ==reaction[0]){
                for_show();
            }
            else{
                for_hide();
            }
            
        };
        
        $scope.changequotes = changequotes;
    }]);
    
})(window.angular)