function countItems(list){
    if(!list[0]){
        return 0;
    }else{
        return 1 + countItems(list.slice(1))
    }
    
}

let result = countItems([2,2,1000,1]));
