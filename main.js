(function(){
angular.module("roiCalculator", [])
     .controller("calculatorController", calculatorController)

     function calculatorController (){
          var cCtrl = this
          
          cCtrl.revenueItems = [{name: "Item 1", oneTimeRevenue: 100, monthlyRevenue: 50}, {name: "Item 2", oneTimeRevenue: 50, monthlyRevenue: 25}, {name: "Item 3", oneTimeRevenue: 25, monthlyRevenue: 85}]
          cCtrl.expenseItems = [{name: "Expense 1", oneTimeExpense: 500, monthlyExpense: 20}, {name: "Expense 2", oneTimeExpense: 200, monthlyExpense: 40}]

          // cCtrl.revenueItems = []
          // cCtrl.expenseItems = []

          // cCtrl.oneTimeRevenue = 0 / sum of the one-time column of all revenue items / currency
          // cCtrl.monthlyRevenue = 0 / sum of the monthly column of all revenue items / currency
          // cCtrl.oneTimeExpense = 0 / sum of the one-time column of all expense items / currency
          // cCtrl.monthlyExpense = 0 / sum of the monthly column of all expense items / currency
          // cCtrl.totalRevenue = 0 / one time revenue + monthly revenue * 12 / currency
          // cCtrl.totalExpenses = 0 / one time expense + monthly expenses * 12 / currency
          // cCtrl.monthlyContributionProfit = 0 / monthly revenue - monthly expenses / currency
          // cCtrl.totalContributionProfit = 0 / total revenue - total expenses / currency
          // cCtrl.contributionMargin = 0 / total contribution profit/total revenue / percentage
          //cCtrl.capitalRoi = 0 / (one-time expenses - one-time revenue)/monthly contribution profit / decimal

          cCtrl.oneTimeRevenueTotal = 175
          cCtrl.oneTimeExpenseTotal = 700
          cCtrl.monthlyRevenueTotal = 160
          cCtrl.monthlyExpenseTotal = 60
          cCtrl.revenueTotal = 2095
          cCtrl.totalExpenses = 1420
          cCtrl.contributionProfitMonthly = 100
          cCtrl.contributionProfitTotal = 675
          cCtrl.contributionMargin = 32

          cCtrl.deleteRevenue = function($index) {
               cCtrl.revenueTotal -= (cCtrl.revenueItems[$index].oneTimeRevenue + (cCtrl.revenueItems[$index].monthlyRevenue * 12))
               cCtrl.oneTimeRevenueTotal -= cCtrl.revenueItems[$index].oneTimeRevenue
               cCtrl.monthlyRevenueTotal -= cCtrl.revenueItems[$index].monthlyRevenue
               cCtrl.revenueItems.splice($index, 1)
          }
          cCtrl.addRevenue = function(){
             cCtrl.revenueTotal += (cCtrl.newRevenue.oneTimeRevenue + (cCtrl.newRevenue.monthlyRevenue * 12))
             cCtrl.oneTimeRevenueTotal += cCtrl.newRevenue.oneTimeRevenue
             cCtrl.monthlyRevenueTotal += cCtrl.newRevenue.monthlyRevenue * 12
             cCtrl.revenueItems.push(cCtrl.newRevenue)
             cCtrl.newRevenue = {}
          }
          cCtrl.deleteExpense = function($index){
               cCtrl.totalExpenses -= (cCtrl.expenseItems[$index].oneTimeExpense + (cCtrl.expenseItems[$index].monthlyExpense * 12))
               cCtrl.oneTimeExpenseTotal -= cCtrl.expenseItems[$index].oneTimeExpense
               cCtrl.monthlyExpenseTotal -= cCtrl.expenseItems[$index].monthlyExpense
               cCtrl.expenseItems.splice($index, 1)
          }
          cCtrl.addExpense = function(){
               cCtrl.totalExpenses += (cCtrl.newExpense.oneTimeExpense + (cCtrl.newExpense.monthlyExpense * 12))
               cCtrl.oneTimeExpenseTotal += cCtrl.newExpense.oneTimeExpense
               cCtrl.monthlyExpenseTotal += cCtrl.newExpense.monthlyExpense * 12
               cCtrl.expenseItems.push(cCtrl.newExpense)
               cCtrl.newExpense = {}
          }
     }
})()
