$(document).ready(function() {
    $('.items-list__main-image__image').click(function() {
       $imgSrc = $(this).attr('src');
        $('#items-list__main-image').attr('src', $imgSrc);
    });
});