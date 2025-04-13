for (let index = 1; index < 100; index++) {
    let output = '';
    if(index % 3 === 0){
        output += 'Fuzz';
    }
    if(index % 5 === 0){
        output += 'Buzz';
    }
    console.log(output || index);
    
}