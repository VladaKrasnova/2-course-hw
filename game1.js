function getSeason(){
    while ( true ){
        let monthNum = Number(prompt('Введите номер месяца'));
        if (monthNum == 12 || monthNum == 1 || monthNum == 2){
            alert('Зима');
            break;
        }else if(monthNum == 3 || monthNum == 4 || monthNum == 5){
            alert('Весна');
            break;
        }else if(monthNum == 6 || monthNum == 7 || monthNum == 8){
            alert('Лето');
            break;
        }else if (monthNum == 9 || monthNum == 10 || monthNum == 11){
            alert('Осень');
            break;
        }
            alert( "Такого месяца не существует" ); 
        }
}




