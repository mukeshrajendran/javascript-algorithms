function sum(list){
    if(list.length<=0){
        return 0;
    }else{
        return list[0] + sum(list.slice(1))
    }
}

let x = sum([2,2,1000,1])
