const boxesContainer = document.querySelector('.boxes')

for(let i = 0; i < 100; i++){
    
    const box = document.createElement('div');
    box.classList.add('box');

    if(!((i + 1) % 3) && !((i + 1) % 5)){
        box.classList.add('fizz-buzz')
        box.append('FizzBuzz')
    }else if(!((i + 1) % 3)){
        box.classList.add('fizz')
        box.append('Fizz')
    }else if(!((i + 1) % 5)){
        box.classList.add('buzz')
        box.append('Buzz')
    }else{
        box.append(i + 1)
    }

    boxesContainer.append(box)

}