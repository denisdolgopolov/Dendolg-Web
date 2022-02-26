

function date_time()
{
        var date_start = new Date(2017, 0, 1);
        var date_end = new Date();

        var year =  date_end.getFullYear() - date_start.getFullYear();
        var month =  date_end.getMonth() - date_start.getMonth();

        var days =  date_end.getFullYear() - date_start.getFullYear();
        var hours =  date_end.getHours();
        var minutes =  date_end.getMinutes();
        var second =  date_end.getSeconds();

        
         var yearWord = "";
        if(year <= 4) 
                yearWord = ' года ' 
        else 
                yearWord = ' лет '

        var monthWord =  "";
        if(month == 1) 
                monthWord = ' месяц ' 
        else if (month > 1 && month <= 4)
                monthWord = ' месяца '
        else 
                monthWord = ' месяцев '

        var daysWord = "";
        if(days <= 4) 
                daysWord = ' дня '
        else 
                daysWord = ' дней '

        if (hours < 10) hours = '0' + hours;
        if(minutes < 10) minutes = '0' + minutes;
        if(second < 10) second = '0' + second;


        return year + yearWord + month + monthWord + days + daysWord + hours + ':' + minutes + ':' + second;
}

setInterval(function () {
        document.getElementById('date_work').innerHTML = date_time();
}, 1000);