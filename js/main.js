console.log('this works');



$(function () {    
    $('.drop').on('click touchend', function() { 
        var link = $(this).attr('href');   
        location.href = link; 
    });    
});

$(function () {    
    $('.nav-icon').on('click', function() {
        var link = $(this).attr('href');    
        window.open(link);
        return false;

    });    
});


$(function () {    
    $('.nav-icon').on('touchstart', function() {
        var link = $(this).attr('href');   
        window.location.replace(link);
    });    
});