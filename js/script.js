const boxesContainer = document.querySelector('.boxes')

for(let i = 1; i <= 100; i++){
    
    const box = document.createElement('div');
    box.classList.add('box');

    if((i % 3 == 0) && (i % 5 == 0)){
        box.classList.add('fizz-buzz')
        box.append('FizzBuzz')
    }else if(i % 3 == 0){
        box.classList.add('fizz')
        box.append('Fizz')
    }else if(i % 5 == 0){
        box.classList.add('buzz')
        box.append('Buzz')
    }else{
        box.append(i)
    }

    boxesContainer.append(box)

}