
/**
 * This changes the color of the line(below the Title Input)
 */
function hoverInTitle() {

    let changeLinecolor = document.getElementById('title-underline');
    changeLinecolor.style.borderColor = 'blue';
    changeLinecolor.style.borderWidth = '13px';

}

/**
 * A function that resets the style of the line(below the Title Input)
 */
function hoverOutTitle() {

    let reset = document.getElementById('title-underline');
    reset.style.borderColor = '';
    reset.style.borderWidth = '';

}

function hoverInMessage() {

    let changeLinecolor = document.getElementById('description-underline');
    changeLinecolor.style.borderColor = 'red';
    changeLinecolor.style.borderWidth = '13px';
    
    
}

function hoverOutMessage() {

    let changeLinecolor = document.getElementById('description-underline');
    changeLinecolor.style.borderColor = '';
    changeLinecolor.style.borderWidth = '';

}

function displaySelection() {

    let displayOption = document.getElementById('selection');
    displayOption.style.display = 'block';

}  

function hideSelection() {
    
    let displayOption = document.getElementById('selection');
    displayOption.style.display = 'none';

}