console.log('this works');

$(function () {    
    $('.drop').on('click touchend', function() { 
        var link = $(this).attr('href');   
        location.href = link; // opens in new window as requested 
        console.log('what what')
   
    });    
});