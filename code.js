$('#click-android').on('click', function() {
    // Just replacing the value of the 'content' attribute will not work.
    $('meta[name=theme-color]').remove();
    $('head').append( '<meta name="theme-color" content="#EF6C00">' );
});
