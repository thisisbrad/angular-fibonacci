angular.module('fireApp')
.service('FibonacciSvc', function() {
  // this.looping = function(n) {
  //   var a = 0, b = 1, f = 1;
  //   for(var i = 2; i <= n; i++) {
  //     f = a + b;
  //     a = b;
  //     b = f;
  //   }
  //   return f;
  // };
  // this.recursive = function(n) {
  //   if(n <= 2) {
  //     return 1;
  //   } else {
  //     return this.recursive(n-1) + this.recursive(n-2)
  //   }
  // };
});

/* EXPLAIN RECURSION

recursive(4) + recursive(3)
(recursive(3) + recursive(2)) + (recursive(2) + recursive(1))
((recursive(2) + recursive(1)) + 1) + (1 + 1)
((1 + 1) + 1) + (1 + 1)
5

*/