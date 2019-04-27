namespace ExtendingAnInstanceWithAnotherOne {

function extend<First, Second>(first: First, second: Second): 
    First & Second {    
    const result: unknown = {};
    for (const prop in first) {    
        if (first.hasOwnProperty(prop)) {
            (<First>result)[prop] = first[prop];
        }
    }
    for (const prop in second) {    
        if (second.hasOwnProperty(prop)) {
            (<Second>result)[prop] = second[prop];
        }
    }
    return <First & Second>result;
}

}