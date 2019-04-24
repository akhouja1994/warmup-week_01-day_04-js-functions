const leapYear = function(num){
    if (typeof(num)==='number'){
        if(num>=0){
            if(num%4===0){
                if (num%100===0){
                    if(num%400==0){
                        return 'true';
                    }
                    else{
                        return 'false';
                    }
                }
                else{
                    return 'true';
                }
            }
            else{
                return 'false';
            }
        }
        else {
            return 'that is before 0';
        }
    }
    else{
        return 'that is not a number';
    }
}