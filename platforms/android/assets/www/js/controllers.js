angular.module('starter')
.controller('HomeController', function($scope)){
	$scope.esportes = [
	{
		nome: "Atletismo"
	},
	{
		nome: "Badminton"
	},
	{
		nome: "Basquetebol"
	},
	{
		nome: "Natação"
	}];
});