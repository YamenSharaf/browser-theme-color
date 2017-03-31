
/////////////////////////////////////

// an array of strings (hex colors)
var colors = [
  '#7b7554',
  '#17183b',
  '#a11692',
  '#ff4f79',
  '#ffb49a'
];
// a variable for the current color index
var currentColor = 0;

// my click function

$('#click-android').on('click', function() {
    // Just replacing the value of the 'content' attribute will not work.

    /* we need to check if the current color is the last object
     in the array. If it is, we set the value back to 0 (the
     first color in the array. Otherwise, we increment the
     current color by 1. */
    if (currentColor == colors.length-1) currentColor = 0;
    else currentColor++;
    $.newColor = colors[currentColor];
    $('meta[name=theme-color]').remove();
    $('head').append( '<meta name="theme-color" content="'+$.newColor+'">' );
    /* now we can set the body's style - backgroundColor to the
     new color. */
    document.body.style.backgroundColor = colors[currentColor];
});




// our click function
function click() {

}

/* when the window has finished loading, update the body to
 the first color */
window.onload = function() {
  document.body.style.backgroundColor = colors[currentColor];
}
