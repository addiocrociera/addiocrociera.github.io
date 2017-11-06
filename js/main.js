console.log('this works');



$(function () {    
    $('.drop').on('click touchend', function() { 
        var link = $(this).attr('href');   
        location.href = link; 
    });    
});

$(function () {    
    $('.nav-icon').on('click', function(e) {
    	e.preventDefault();
    	console.log('hi')
        var link = $(this).attr('href');    
        window.open(link);


    });    
});


$(function () {    
    $('.nav-icon').on('touchstart', function(e) {
    	e.preventDefault();
    	console.log('ho')
        var link = $(this).attr('href');   
        window.open(link);

    });    
});