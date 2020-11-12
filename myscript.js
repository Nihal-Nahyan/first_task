const URL = 'http://covid19.mathdro.id/api';

let app = angular.module("MyApp",[]);

app.controller('MyCtrl',($scope,$http)=>{

    $scope.title = "CORONA VIRUS REPORT - 2020";

    console.log("Application loaded");

    //calling api

    $http.get(URL).then ( (response)=>{
        console.log("Success message");
        console.log(response.data);
        $scope.all_data = response.data;

    }, (error)=>{
        console.log("Error message");
        console.log(error);

    })

//Country Data

$scope.get_Country_data= () =>{

    let Countrry=$scope.Country;
    if(Countrry==""){
        $scope.Country_data=undefined;
        return;
    }
    $http.get(`${URL}/countries/${Countrry}`).then ((response)=>{

        console.log(response.data);
        $scope.Country_data=response.data;
    },(error)=>{
        console.log(error);
    });
};





});