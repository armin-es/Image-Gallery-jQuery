/**
* Large image is shown when thumbnail is clicked
* @author Armin
* @name bigImg
*/
$(".crop-img").click(function(){
    $("#bigImg").attr('src',
        $(this).attr('src'));
});

var counter = 1;

/**
* Scrolls right in image gallery
* @author Armin
* @name scrollRight
*/
$("#forward").click(function(){
    if(counter < 4){
        counter = counter + 1;
        col1 = counter;
        col2 = counter + 1;
        col3 = counter + 2;

        $("#gal-col-1").attr('src',"./img/gallery_"+col1+".jpg");
        $("#gal-col-2").attr('src',"./img/gallery_"+col2+".jpg");
        $("#gal-col-3").attr('src',"./img/gallery_"+col3+".jpg");
    }
});

/**
* Scrolls left in image gallery
* @author Armin
* @name scrollLeft
*/
$("#backward").click(function(){
    if(counter > 1){
        counter = counter - 1;
        col1 = counter;
        col2 = counter + 1;
        col3 = counter + 2;
        $("#gal-col-1").attr('src',"./img/gallery_"+col1+".jpg");
        $("#gal-col-2").attr('src',"./img/gallery_"+col2+".jpg");
        $("#gal-col-3").attr('src',"./img/gallery_"+col3+".jpg");
    }
});
