(function() {
    'use strict';

    var app = angular.module('PredatorApp')
        .controller('ChecksCtrl', ChecksCtrl)
        .controller('AddCheckCtrl', AddCheckCtrl);

    function ChecksCtrl($filter, $http, $uibModal, checkResource) {

        var vm = this;
        vm.inserted = {};
        vm.checks = [];

        vm.openCheckDetailsModal = openCheckDetailsModal;
        vm.addCheck = addCheck;
        vm.printSelectedChecks = printSelectedChecks;

        /////////////////////////////////

        // checkResource.query(function(data){
        // 	vm.checks = data;
        // })

        function openCheckDetailsModal(check){
		    var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'app/checks/checkDetailsModal.html',
				controller: 'AddCheckCtrl as vm',
				size: 'lg',
				resolve: {
					checks: function () {
				 		return vm.checks;
					},
					check: function(){
						return check;
					}
				}
			})
        }

        function addCheck(){
		    var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'app/checks/checkDetailsModal.html',
				controller: 'AddCheckCtrl as vm',
				size: 'lg',
				resolve: {
					checks: function () {
						return vm.checks;
					},
					check: function(){
						var insertingCheck = {};
						insertingCheck.id = vm.checks.length + 1;
						vm.checks.push(insertingCheck);
						return insertingCheck;
					}
		      	}
		    });
        }

        function printSelectedChecks(){
			var doc = new jsPDF();

			var letter = 	
"																									\n\
Dear ___Joe__                                                                                       \n\
\n\
This is to inform you that your check dated __________, 20__, payable                               \n\
\n\
to________________, in the amount of $__________, has been returned to us due to                    \n\
\n\
insufficient funds.                                                                                 \n\
\n\
We realize that such mishaps do occur and therefore are bringing this matter to your                \n\
\n\
attention so that you will take the opportunity to correct this error and issue us a new            \n\
\n\
check.                                                                                              \n\
\n\
It is our policy to retain the old check until a new check is issued and cleared as we have         \n\
\n\
unfortunately realized that there are some people who do not honor their debts. If a new            \n\
\n\
check is not issued and the old check does not clear we will pursue legal action to the full        \n\
\n\
extend of the law.                                                                                  \n\
\n\
We are confident that you will resolve this matter and look forward to doing business               \n\
\n\
with you again in the future.                                                                       \n\
\n\
Our thanks for your attention to this matter.                                                       \n\
\n\
Very truly yours,                                                                                   \n\
\n\
__________Koopa Krew Inc________________";

			doc.setFontSize(12);
			doc.text(12, 10, letter);
			doc.save('InvalidCheckLetter.pdf');
        }

        // vm.saveCheck = saveCheck;
        // vm.removeCheck = removeCheck;
        // vm.addCheck = addCheck;
        vm.checks = 
        [
	        {
	        	id: 0,
	        	checkNum: 3,
	        	accountNum: 11103093,
	        	routingNum: 441103093,
	        	amount: 500.66,
	        	checkDate:"2015-04-05T00:00:00",
	        	storeId: 0,
	        	cashierId:5,
	        	offenseLevel:1
	        },
	        {
	        	id: 1,
	        	checkNum: 4,
	        	accountNum:11103093,
	        	routingNum: 411103093,
	        	amount: 1000.343,
	        	checkDate:"2015-04-05T00:00:00",
	        	storeId: 2,
	        	cashierId:4,
	        	offenseLevel:2
	        },
	        {
	        	id: 1,
	        	checkNum: 4,
	        	accountNum: 11103093,
	        	routingNum: 411103093,
	        	amount: 1000.343,
	        	checkDate:"2015-04-05T00:00:00",
	        	storeId: 2,
	        	cashierId:4,
	        	offenseLevel:2
	        },
	        {
	        	id: 2,
	        	checkNum: 5,
	        	accountNum: 211274450,
	        	routingNum: 34324,
	        	amount: 200.0001,
	        	checkDate:"2014-03-20T00:00:00",
	        	storeId: 5,
	        	cashierId:16,
	        	offenseLevel:3
	        },
	        {
	        	id: 3,
	        	checkNum: 7,
	        	accountNum: 26013673,
	        	routingNum: 4323423,
	        	amount: 7778,
	        	checkDate:"2010-01-01T00:00:00",
	        	storeId: 29,
	        	cashierId:3,
	        	offenseLevel:1
	        },
	        

        ]

        // //////////////////

        // function saveCheck (data, id){
	       //  //$scope.check not updated yet
	       //  angular.extend(data, {
	       //      id: id
	       //  });
	       //  return $http.post('/saveCheck', data);
        // }

        // function removeCheck (index){
	       //  vm.checks.splice(index, 1);
        // }




    }


    function AddCheckCtrl($modalInstance, checks, check){
		var vm = this;
		vm.checks = checks;
		vm.check = check;
		vm.close = close;


		function close () {
			$modalInstance.dismiss('close');
		};
    }


})();
