var year = 2021
var counter = 20;
var result=true;


function leapyear(year, counter, result) {
    while (counter >= 0) {

        if ((year % 4 === 0) && (year % 100 !== 0)||(year % 400 === 0));
         {
            result = true;
            console.log(year);
            year++;
            counter--;
        } 
        else;

         {
            year++; 
         } 
    }
}



