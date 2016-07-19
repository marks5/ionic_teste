angular.module('starter')
.controller('PrincipalController', function($scope)){
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