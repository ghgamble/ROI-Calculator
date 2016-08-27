(function(){
var myApp = angular.module("roiCalculator", [])
     .controller("calculatorController", calculatorController)

     function calculatorController (){
          var cCtrl = this

          cCtrl.revenueItems = []
          cCtrl.expenseItems = []

          cCtrl.oneTimeRevenue = 0
          cCtrl.monthlyRevenue = 0
          cCtrl.oneTimeExpense = 0
          cCtrl.monthlyExpense = 0
          cCtrl.totalRevenue = 0
          cCtrl.totalExpenses = 0
          cCtrl.monthlyContributionProfit = 0
          cCtrl.totalContributionProfit = 0
          cCtrl.contributionMargin = 0
          cCtrl.capitalRoi = 0 

          cCtrl.deleteRevenue = function($index) {
               cCtrl.totalRevenue -= (cCtrl.revenueItems[$index].oneTimeRevenue + (cCtrl.revenueItems[$index].monthlyRevenue * 12))
               cCtrl.oneTimeRevenue -= cCtrl.revenueItems[$index].oneTimeRevenue
               cCtrl.monthlyRevenue -= cCtrl.revenueItems[$index].monthlyRevenue
               cCtrl.monthlyContributionProfit = cCtrl.monthlyRevenue - cCtrl.totalExpenses
               cCtrl.totalContributionProfit = cCtrl.totalRevenue - cCtrl.totalExpenses
               cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue
               cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit
               cCtrl.revenueItems.splice($index, 1)
          }
          cCtrl.addRevenue = function(){
               cCtrl.totalRevenue += (cCtrl.newRevenue.oneTimeRevenue + (cCtrl.newRevenue.monthlyRevenue * 12))
               cCtrl.oneTimeRevenue += cCtrl.newRevenue.oneTimeRevenue
               console.log(cCtrl.newRevenue.oneTimeRevenue)
               console.log(cCtrl.oneTimeRevenue)
               cCtrl.monthlyRevenue += cCtrl.newRevenue.monthlyRevenue
               console.log(cCtrl.newRevenue.monthlyRevenue * 12)
               console.log(cCtrl.monthlyRevenue)
               cCtrl.monthlyContributionProfit += cCtrl.monthlyRevenue - cCtrl.monthlyExpense
               cCtrl.totalContributionProfit += cCtrl.totalRevenue - cCtrl.totalExpenses
               cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue
               cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit
               cCtrl.revenueItems.push(cCtrl.newRevenue)
               cCtrl.newRevenue = {}
          }
          cCtrl.deleteExpense = function($index){
               cCtrl.totalExpenses -= (cCtrl.expenseItems[$index].oneTimeExpense + (cCtrl.expenseItems[$index].monthlyExpense * 12))
               cCtrl.oneTimeExpense -= cCtrl.expenseItems[$index].oneTimeExpense
               cCtrl.monthlyExpense -= (cCtrl.expenseItems[$index].monthlyExpense)
               cCtrl.monthlyContributionProfit = cCtrl.monthlyRevenue - cCtrl.monthlyExpense
               cCtrl.totalContributionProfit = cCtrl.totalExpenses - cCtrl.totalRevenue
               cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue
               cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit
               cCtrl.expenseItems.splice($index, 1)
          }
          cCtrl.addExpense = function(){
               cCtrl.totalExpenses += (cCtrl.newExpense.oneTimeExpense + (cCtrl.newExpense.monthlyExpense * 12))
               cCtrl.oneTimeExpense += cCtrl.newExpense.oneTimeExpense
               cCtrl.monthlyExpense += cCtrl.newExpense.monthlyExpense
               cCtrl.monthlyContributionProfit = cCtrl.monthlyRevenue - cCtrl.monthlyExpense
               cCtrl.totalContributionProfit = cCtrl.totalRevenue - cCtrl.totalExpenses
               cCtrl.contributionMargin = cCtrl.totalContributionProfit/cCtrl.totalRevenue
               cCtrl.capitalRoi = (cCtrl.oneTimeExpense - cCtrl.oneTimeRevenue)/cCtrl.monthlyContributionProfit
               cCtrl.expenseItems.push(cCtrl.newExpense)
               cCtrl.newExpense = {}
          }
     }
})()
