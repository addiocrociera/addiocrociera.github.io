// console.log('js connected');

$(function () {    
    $('.drop').on('click touchend', function() { 
        var link = $(this).attr('href');   
        location.href = link; 
    });    
});

$(function () {    
    $('.nav-icon').on('click touchend', function(e) {
    	e.preventDefault();
        var link = $(this).attr('href');    
        window.open(link);
        console.log('what')
    });    
});