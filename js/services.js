/********************************************************************
   Service Name: sharedVars 
   Job: This service will help to share common variables between
   controllers via $rootScope
 *******************************************************************/
//get a reference of the mainApp
var mainApp = angular.module('mainApp');

mainApp.service('sharedVars', ['$rootScope', function ($rootScope) {
   var sharedVars = {};
   sharedVars.classPageId = 'homePage';

   sharedVars.changePageID = function (pageID) {
      console.log(pageID);
      this.classPageId = pageID;
      this.NotifyPageChange();
   };

   sharedVars.NotifyPageChange = function () {
      $rootScope.$broadcast('pageChange');
   };
 
   return sharedVars;
}]);

mainApp.service('jqUtils', function () {
   var jqUtils = {};
   
   this.activateMainMenu = function() {
      $('body').on('click', '.mainMenu li', function(){
         $('.mainMenu li').removeClass('active');
         $(this).addClass('active');
      });
   };
});
