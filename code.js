
/////////////////////////////////////

// an array of strings (hex colors)
var colors = [
  '#362143',
  '#DB649C',
  '#754792',
  '#ff4f79',
  '#171717'
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

    /* now we can set the body's style - backgroundColor to the
     new color. */
    document.body.style.backgroundColor = colors[currentColor];
    $('meta[name=theme-color]').remove();
    $('head').append( '<meta name="theme-color" content="'+colors[currentColor]+'">' );
});

//$('head').append( '<meta name="theme-color" content="'+colors[currentColor]+'">' );




// our click function
function click() {

}

/* when the window has finished loading, update the body to
 the first color */
window.onload = function() {
  document.body.style.backgroundColor = colors[currentColor];
}
