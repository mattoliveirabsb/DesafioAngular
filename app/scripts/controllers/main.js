'use strict';

angular.module('desafioApp')
    .controller('MainCtrl', function ($scope, $http, $window) {

        $scope.produtos = [

            $http.get('json/produtos.json').success(function(dados){
                $scope.produtos = dados;
            })

        ]

        $scope.orderProduct = 'selected';

        var getValue = function(){
            return $window.sessionStorage.length;
        }

        var getData = function(){
            var json = [];
            $.each($window.sessionStorage, function(i, v){
                json.push(angular.fromJson(v));
            });
            return json;
        }

        $scope.product = getData();
        $scope.count = getValue();

        $scope.addItem = function(id){
            var image = document.getElementById('img'+id);
            var title = document.getElementById('title'+id);
            var price = document.getElementById('price'+id);
            var description = document.getElementById('description'+id);
            var json = {
                id: id,
                img: image.src,
                title:  title.innerHTML,
                description:  description.innerHTML,
                price:  price.innerHTML
            }
            $window.sessionStorage.setItem(id, JSON.stringify(json));
            $scope.count = getValue();
            $scope.allPrice = getAllPrice();
            $scope.product = getData();
        }


        var getAllPrice = function(){
          var json = getData();
          var value = 0;
          $.each(json, function(i, v){
            value += parseFloat(v.price);
          });
          return value;
        }
        
        $scope.allPrice = getAllPrice();


        $scope.removeItem = function(id){
            $window.sessionStorage.removeItem(id);
            $scope.count = getValue();
            $scope.allPrice = getAllPrice();
            $scope.product = getData();
        }

        $scope.mudarNome = function (cart){
            document.getElementById("cart");
            document.innerHTML= "teste"
        } 
        
        $scope.submitForm = function() {
          $scope.data = {};
          $scope.data.name = $scope.name;
          $scope.data.lastname = $scope.lastname;
          $scope.data.email = $scope.email;
          console.log($scope.data);
          alert("Send with success!");
        }


    });
