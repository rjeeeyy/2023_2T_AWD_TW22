let boxCount = 0;
let lastPickedColor = 'black'; 

function animateBox(newDay) {
    const container = document.getElementById('animated-container');
    const box = document.createElement('div');
    box.className = 'animated-box';
    const targetColor = getButtonColor(newDay.toLowerCase());
    box.style.backgroundColor = targetColor;
    box.style.setProperty('--target-color', targetColor);
    box.id = `animated-box-${boxCount}`;
    boxCount++;
    container.appendChild(box);
    const button = document.getElementById(`${newDay.toLowerCase()}-button`);
    if (button) {
        button.style.backgroundColor = targetColor;
    }
    lastPickedColor = targetColor; 
    box.offsetHeight;
    box.style.animation = 'appearFromTop 1s forwards';
    const previousBox = document.getElementById(`animated-box-${boxCount - 2}`);
    if (previousBox) {
        previousBox.style.animation = 'retractToTop 1s forwards';
    }
}

function getButtonColor(day) {
    switch (day) {
        case 'monday':
            return '#7F00FF';
        case 'tuesday':
            return '#FFC0CB';
        case 'wednesday':
            return '#0000FF';
        case 'thursday':
            return '#008000';
        case 'friday':
            return '#FFFF00';
        case 'saturday':
            return '#FFA500';
        case 'sunday':
            return '#FF0000';
        default:
            return lastPickedColor;
    }
}