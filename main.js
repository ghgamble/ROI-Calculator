(function(){
angular.module("roiCalculator", [])
     .controller("calculatorController", calculatorController);
     function calculatorController (){
     	var cCtrl = this;

     	cCtrl.revenueItems = [];
     	cCtrl.expenseItems = [];

     	cCtrl.totalOneTimeRevenue = 0;
     	cCtrl.totalMonthlyRevenue = 0;
          cCtrl.totalOneTimeExpense = 0;
          cCtrl.totalMonthlyExpense = 0;
     	cCtrl.totalRevenue  = 0;
          cCtrl.totalExpenses = 0;
          cCtrl.monthlyContributionProfit = 0;
          cCtrl.totalContributionProfit = 0;
          cCtrl.contributionMargin = 0;
          cCtrl.capitalRoi = 0;

          cCtrl.deleteRevenue = function($index) {
               cCtrl.oneTimeRevenue -= cCtrl.revenueItems[$index].oneTimeRevenue;
               cCtrl.monthlyRevenue -= cCtrl.revenueItems[$index].monthlyRevenue;
               cCtrl.totalRevenue -= (cCtrl.revenueItems[$index].oneTimeRevenue + (cCtrl.revenueItems[$index].monthlyRevenue * 12));
               cCtrl.monthlyContributionProfit = cCtrl.totalMonthlyRevenue - cCtrl.totalMonthlyExpenses;
               cCtrl.totalContributionProfit = cCtrl.totalRevenue - cCtrl.totalExpenses;
               cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue;
               cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit;
               cCtrl.revenueItems.splice($index, 1);
          };
          cCtrl.addRevenue = function(){
          	cCtrl.totalOneTimeRevenue += cCtrl.oneTimeRevenue||0;
          	cCtrl.totalMonthlyRevenue += cCtrl.monthlyRevenue||0;
          	cCtrl.totalRevenue += (cCtrl.oneTimeRevenue + (cCtrl.monthlyRevenue * 12));
          	cCtrl.monthlyContributionProfit = cCtrl.totalMonthlyRevenue - cCtrl.totalMonthlyExpenses;
          	cCtrl.totalContributionProfit = cCtrl.totalRevenue - cCtrl.totalExpenses;
          	cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue;
          	cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit;
          	cCtrl.revenueItems.push({
          		revenueName: cCtrl.revenueName||"noName",
          		oneTimeRevenue: cCtrl.oneTimeRevenue||0,
          		monthlyRevenue: cCtrl.monthlyRevenue||0
          	});
          	cCtrl.revenueName = "";
          	cCtrl.oneTimeRevenue = null;
          	cCtrl.monthlyRevenue = null;
          };
          cCtrl.deleteExpense = function($index){
               cCtrl.oneTimeExpense -= cCtrl.expenseItems[$index].oneTimeExpense;
               cCtrl.monthlyExpense -= (cCtrl.expenseItems[$index].monthlyExpense);
               cCtrl.monthlyContributionProfit = cCtrl.totalMonthlyRevenue - cCtrl.totalMonthlyExpenses;
               cCtrl.totalExpenses -= (cCtrl.expenseItems[$index].oneTimeExpense + (cCtrl.expenseItems[$index].monthlyExpense * 12));
               cCtrl.totalContributionProfit = cCtrl.totalExpenses - cCtrl.totalRevenue;
               cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue;
               cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit;
               cCtrl.expenseItems.splice($index, 1);
          };
          cCtrl.addExpense = function(){
               cCtrl.totalOneTimeExpense += cCtrl.oneTimeExpense||0;
               cCtrl.totalMonthlyExpense += cCtrl.monthlyExpense||0;
               cCtrl.totalExpenses += (cCtrl.oneTimeExpense + (cCtrl.monthlyExpense * 12));
               cCtrl.monthlyContributionProfit = cCtrl.totalMonthlyRevenue - cCtrl.totalMonthlyExpenses;
               cCtrl.totalContributionProfit = cCtrl.totalRevenue - cCtrl.totalExpenses;
               cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue;
               cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit;
               cCtrl.expenseItems.push({
                    expenseName: cCtrl.expenseName||"noName",
                    oneTimeExpense: cCtrl.oneTimeExpense||0,
                    monthlyExpense: cCtrl.monthlyExpense||0
               });
               cCtrl.expenseName = "";
               cCtrl.oneTimeExpense = null;
               cCtrl.monthlyRevenue = null;
          };
     };
})();
