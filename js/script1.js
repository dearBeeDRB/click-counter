// plus, counter increase

document.getElementById('plus-icon').addEventListener('click', function(){
    const counterElement = document.getElementById('counter');
    const previousCount = parseInt(counterElement.innerText);
    const newCount = previousCount + 1;
    counterElement.innerText = newCount;
});

//minus, counter decrease

document.getElementById('minus-icon').addEventListener('click', function(){
    const counterElement = document.getElementById('counter');
    const previousCount = parseInt(counterElement.innerText);
    const newCount = previousCount - 1;
    counterElement.innerText = newCount;
});