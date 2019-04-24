const leapYear = function(num){
    if(typeof(num)==='number'){
        if(num>=0){
            if((num%4===0&&num%100!==0)||(num%4===0&&num%100===0&&num%400===0)){
                return 'it is a leap year';
                }
            else {
                return 'it is not a leap year';
            }
        }
        else{
            return 'that is before 0';
        }
    }
    else{
        return 'that is not a number';
    }
}