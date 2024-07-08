'use strict';

foodMeApp.controller('CheckoutController',
    function CheckoutController($scope, cart, customer, $location, $http) {

  $scope.cart = cart;
  $scope.restaurantId = cart.restaurant.id;
  $scope.customer = customer;
  $scope.submitting = false;

  $scope.purchase = function() {
    if ($scope.submitting) return;

   if(cart.payment.type === "amex"){
    $location.path('amex')
    return
   }

    $scope.submitting = true;
    cart.submitOrder().then(function(orderId) {
      $location.path('thank-you').search({orderId: orderId});
    });
  };

  // Función para crear una sesión en Stripe
  $scope.createStripeSession = function() {

 
    if ($scope.submitting) return;

    $scope.submitting = true;
 

     $http.post('https://retoplatzi.com/checkout/session/stripe', {
        customer: $scope.customer
      })
      .then(function(response) {
        console.log('Stripe session created:', response.data.url);
        window.location.href = response.data.url;
      })
      .catch(function(error) {
        console.error('Error creating Stripe session:', error);
        // Manejo de errores: muestra un mensaje al usuario
      })
      .finally(function() {
        $scope.submitting = false;
      });
  };
});
