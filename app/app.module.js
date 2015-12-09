var app = angular.module('app', ['ui.bootstrap']);

app.controller('mainController', function($scope){
    $scope.systems = [
        {'name':'מערכת', 'imgName': 'panda'},
        {'name':'מערכת', 'imgName': 'indic'},
        {'name':'מערכת', 'imgName': 'apollo'},
        {'name':'מערכת', 'imgName': 'triathlon'},
        {'name':'מערכת', 'imgName': 'triathlon2'},
        {'name':'מערכת', 'imgName': 'jupiter'},
        {'name':'מערכת', 'imgName': 'canary'},
        {'name':'מערכת', 'imgName': 'hulk'},
        {'name':'מערכת', 'imgName': 'broadway'},
        {'name':'מערכת', 'imgName': 'shoev'},
        {'name':'מערכת', 'imgName': 'date'},
        {'name':'מערכת', 'imgName': 'termite'},
        {'name':'מערכת', 'imgName': 'yellow'},
        {'name':'מערכת', 'imgName': 'crunch'},
        {'name':'מערכת', 'imgName': 'runway'},
        {'name':'מערכת', 'imgName': 'childplay'},
        {'name':'מערכת', 'imgName': 'DMZ'}

    ];

});