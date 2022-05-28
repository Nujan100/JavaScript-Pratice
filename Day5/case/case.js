function purchaseMilk(qty, amount){
    const RATE = 45; // const means read only and cannot be changed
    // calculate the quantity and remainder
    if (amount < RATE){
        var result = {
            pkts: 0,
            return_amount: amount,
        }
        return result;
    }
    else {
        var rem  = amount- (qty*RATE);
        var result = {
            pkts: qty,
            return_amount: rem,
        }
        return result;
    }
}


// create v3 of purchaseMilk function - with optimization

// const, var, let 
