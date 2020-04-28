'use strict';

let money  =prompt("Ваш бюджет на месяц?");
let time  =prompt("Введите дату в формате YYYY-MM-DD");
let moneyDay;

let appData ={
    budget:money,
    timeData:time,
    expenses : {},
    optionalExpenses:{},
    income : []
}

let expensesAnswer1  =prompt("Введите обязательную статью расходов в этом месяце");
let expensesAnswer2  =prompt("Во сколько обойдется?");
expenses: {
    expensesAnswer1 : expensesAnswer2
    }

moneyDay=money/30;
console.log(moneyDay,typeof(moneyDay));
alert(moneyDay)
    
console.log(appData.budget,typeof(appData.budget));
console.log(appData.timeData,typeof(appData.timeData));
