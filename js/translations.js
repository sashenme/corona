var app = angular.module("at", ["pascalprecht.translate"]);

app.config(function($translateProvider) {
  $translateProvider.translations("en", {
    TITLE:
      "Answer these questions and check your health status for coronavirus."
  });
  $translateProvider.translations("lk", {
    TITLE: "පිළිතුරු සපයන්න"
  });
  $translateProvider.preferredLanguage("en");
});

app.controller("Ctrl", function($scope, $translate) {
  $scope.changeLanguage = function(key) {
    $translate.use(key);
  };
});
