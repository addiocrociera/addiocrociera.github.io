console.log('this works');

$(function () {    
    $('.nav-icon').on('click touchend', function() { 
        var link = $(this).attr('href');   
        window.open(link); // opens in new window as requested 

           
    });    
});

$(function () {    
    $('.drop').on('click touchend', function() { 
        var link = $(this).attr('href');   
        location.href = link; // opens in new window as requested 
        console.log('what what')
   
    });    
});