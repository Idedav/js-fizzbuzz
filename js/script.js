for(let i = 0; i < 100; i++){

    if(!((i + 1) % 3)){
        console.log('Fizz')
    }else if(!((i + 1) % 5)){
        console.log('Buzz')
    }
    
    if(!((i + 1 ) % 3) && !((i + 1) % 5)){
        console.log('FizzBuzz')
    }

    console.log(i + 1)

}