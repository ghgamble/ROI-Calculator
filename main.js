(function(){
angular.module("roiCalculator", [])
     .controller("calculatorController", calculatorController)

     function calculatorController (){
          var cCtrl = this

          cCtrl.revenueItems = []
          cCtrl.expenseItems = []

          cCtrl.oneTimeRevenue = 0 // sum of the one-time column of all revenue items / currency
          cCtrl.monthlyRevenue = 0 // sum of the monthly column of all revenue items / currency
          cCtrl.oneTimeExpense = 0 // sum of the one-time column of all expense items / currency
          cCtrl.monthlyExpense = 0 // sum of the monthly column of all expense items / currency
          cCtrl.totalRevenue = 0 // one time revenue + monthly revenue * 12 / currency
          cCtrl.totalExpenses = 0 // one time expense + monthly expenses * 12 / currency
          cCtrl.monthlyContributionProfit = 0 // monthly revenue - monthly expenses / currency
          cCtrl.totalContributionProfit = 0 // total revenue - total expenses / currency
          cCtrl.contributionMargin = 0 // total contribution profit/total revenue / percentage
          cCtrl.capitalRoi = 0 // (one-time expenses - one-time revenue)/monthly contribution profit / decimal

          cCtrl.deleteRevenue = function($index) {
               cCtrl.totalRevenue -= (cCtrl.revenueItems[$index].oneTimeRevenue + (cCtrl.revenueItems[$index].monthlyRevenue * 12))
               cCtrl.oneTimeRevenue -= cCtrl.revenueItems[$index].oneTimeRevenue
               cCtrl.monthlyRevenue -= cCtrl.revenueItems[$index].monthlyRevenue * 12
               cCtrl.revenueItems.splice($index, 1)
          }
          cCtrl.addRevenue = function(){
               cCtrl.totalRevenue += (cCtrl.newRevenue.oneTimeRevenue + (cCtrl.newRevenue.monthlyRevenue * 12))
               cCtrl.oneTimeRevenue += cCtrl.newRevenue.oneTimeRevenue
               console.log(cCtrl.newRevenue.oneTimeRevenue)
               console.log(cCtrl.oneTimeRevenue)
               cCtrl.monthlyRevenue += cCtrl.newRevenue.monthlyRevenue * 12
               console.log(cCtrl.newRevenue.monthlyRevenue * 12)
               console.log(cCtrl.monthlyRevenue)
               cCtrl.revenueItems.push(cCtrl.newRevenue)
               cCtrl.newRevenue = {}
          }
          cCtrl.deleteExpense = function($index){
               cCtrl.totalExpenses -= (cCtrl.expenseItems[$index].oneTimeExpense + (cCtrl.expenseItems[$index].monthlyExpense * 12))
               cCtrl.oneTimeExpense -= cCtrl.expenseItems[$index].oneTimeExpense
               cCtrl.monthlyExpense -= (cCtrl.expenseItems[$index].monthlyExpense) * 12
               cCtrl.expenseItems.splice($index, 1)
          }
          cCtrl.addExpense = function(){
               cCtrl.totalExpenses += (cCtrl.newExpense.oneTimeExpense + (cCtrl.newExpense.monthlyExpense * 12))
               cCtrl.oneTimeExpense += cCtrl.newExpense.oneTimeExpense
               cCtrl.monthlyExpense += cCtrl.newExpense.monthlyExpense * 12
               cCtrl.expenseItems.push(cCtrl.newExpense)
               cCtrl.newExpense = {}
          }
     }
})()
