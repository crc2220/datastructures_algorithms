const numSmallBagsToFill = function (small, big, goal) {
    const bk = big * 5;
    let remainder;
    if(bk === goal) {
        return 0;
    } else {
        if(bk < goal) {
            remainder = (goal - bk);
            if(small >= remainder){
                return remainder;
            } else {
                return -1;
            }
        } else {
            let num_big = parseInt(goal/5);
            let num_big_kilos = (num_big*5);
            remainder = (goal - num_big_kilos);
            if(small >= remainder) {
                return remainder;
            } else {
                return -1;
            }
        }
        
    }
};

numSmallBagsToFill(4,5,19);   // 4
numSmallBagsToFill(4,2,19);   // -1
numSmallBagsToFill(4,10,19);  // 4
numSmallBagsToFill(8,39,200); // 5
