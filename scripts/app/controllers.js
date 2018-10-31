'use strict';

angular.module('axialApp')

.controller('ProductsController', ['$scope', 'productsFactory', function($scope, productsFactory) {

  $scope.spasyproducts = productsFactory.getSpasyProducts();

  $scope.practicaldissecproducts = productsFactory.getPracticalDissecProducts();

  $scope.practicalendoscoproducts = productsFactory.getPracticalEndoscoProducts();

  $scope.zeniusproducts = productsFactory.getZeniusProducts();

  $scope.waveflexproducts = productsFactory.getWaveflexProducts();

  $scope.iliadproducts = productsFactory.getIliadProducts();

  $scope.osronproducts = productsFactory.getOsronProducts();

  $scope.veelerproducts = productsFactory.getVeelerProducts();

  $scope.razekbrocas = productsFactory.getRazekBrocas();

  $scope.razekatmproducts = productsFactory.getRazekATMProducts();

  $scope.streedproducts = productsFactory.getStReedProducts()

}]);
