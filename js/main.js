console.log('this works');



$(function () {    
    $('.drop').on('click touchend', function() { 
        var link = $(this).attr('href');   
        location.href = link; 
    });    
});

$(function () {    
    $('.nav-icon').on('click touchend', function(event) {
    	event.preventDefault();
    	event.stopPropagation();
        var link = $(this).attr('href');   
        location.href = link; 
        window.open(link);

    });    
});