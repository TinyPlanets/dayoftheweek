// grab day of the week from local computer

let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0:
        nameOfDay = 'Sunday';
        quote = 'Lazy day today!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Time to code!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Stepping up a gear!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Halfway there!';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'I still need that work!';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Yeees its Friday!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Party time!';
        break;
}

// display the day of the week

let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

// display quote

let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;