'use strict';

let money  = +prompt("Ваш бюджет на месяц?");
let time  =prompt("Введите дату в формате YYYY-MM-DD");
let moneyDay;

let appData ={
    budget:money,
    timeData:time,
    expenses : {},
    optionalExpenses:{},
    income : [] 
}

let i=0;
do{
    let a1  = prompt("Введите обязательную статью расходов в этом месяце"),
        b1  = prompt("Во сколько обойдется?");

    if ((typeof(a1))==='string' && (typeof(a1))!=null && (typeof(b1))==='string' && (typeof(b1))!=null &&
     a1!='' && b1!='' &&  alert.length<50) {
        console.log("done");
        appData.expenses[a1]=b1;   
    } else {
        --i;
    }
    i++;
} while (i<2);

moneyDay=money/30;
alert("Ежедневный бюджет:" + moneyDay)

if (moneyDay <= 100) {
    console.log("Минимальный уровень достатка")
} else if (moneyDay>100 && moneyDay<1000) {
    console.log("Средний уровень достатка")
} else if (moneyDay>=1000 ) {
    console.log("Высокий уровень достатка")
} else  {console.log("Error")}

console.log(appData.expenses);
console.log(moneyDay,typeof(moneyDay));
alert(moneyDay)
    

