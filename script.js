function calctip(){
    var tip;
    if (bill>=50 && bill<=300){
        tip= (15/100)*bill
    }
    if (bill>300){
        tip= (20/100)*80
    }
    return tip;
}
