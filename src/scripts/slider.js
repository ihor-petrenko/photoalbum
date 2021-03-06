$(function() {
var slider = {
    widthBrowser : document.documentElement.clientWidth,
    heightBrowser : document.documentElement.clientHeight,
    responsiveStatus : true,
    }
slider.quantity = function(){
        this.num = $('.alboms_content img:last').attr('src');
        num = +(num[24] + num[25])-10;
        return ++num;
}();

slider.change = function (alt) {
    var src = $('img[alt=slide_'+alt+']').attr('src');
        this.position =  src[24]+src[25];
        this.catalog = src[15];
    $('img[alt=slide]').attr('src','images/catalog_'+ this.catalog + '/_slide_'+this.position+'.jpg');
    console.log(src);
}

slider.prevSlide = function(){
    $('._left').click(function(eventObject){
        eventObject.preventDefault();
        if(+slider.position > 10){
        $('img[alt=slide]').hide()
                           .attr('src','images/catalog_'+ slider.catalog +'/_slide_'+ --slider.position +'.jpg')
                           .fadeIn(500);
                           slider.responsive(slider.position);
        }
    });
}();

slider.nextSlide = function(){
    $('._right').click(function(eventObject){
         eventObject.preventDefault();
         this.amount = slider.quantity + 10;
         // console.log(this.amount);
    if(+slider.position < this.amount-1){
        $('img[alt=slide]').hide()
                           .attr('src','images/catalog_'+ slider.catalog +'/_slide_'+ ++slider.position +'.jpg')
                           .fadeIn(500);
                           slider.responsive(slider.position);
        }
    });
}();
slider.responsiveSwitch = function(){
    $('.fa-window-maximize').click(function(){
        (slider.responsiveStatus === true) ?
            slider.responsiveStatus = false:
                slider.responsiveStatus = true;
                    slider.responsive(slider.position);
    })
}();
slider.responsive = function(position){
    var widthImg = $('img[alt=slide_'+ position +']').width(),
        heightImg = $('img[alt=slide_'+ position +']').height(),
        form = true;
        (widthImg/heightImg < 1) ? form = false : form;
        if(form === false && slider.responsiveStatus === true){
        var new_height = slider.heightBrowser,
           new_width = new_height /(1920/1282);
           $('.alboms_slide>p').css('height', new_height)
                                   .css('width', new_width);
        }else{
            $('.alboms_slide>p').css('height', '100%')
                                .css('width', '100%');
        }
}
slider.arrowsHover = function(){
    $('.arrows').mouseover(function(){
        $('.arrows > p').css('display','inline'); });
    $('.arrows').mouseout(function(){
        $('.arrows > p').css('display','none'); });
}();
slider.transform = function(number){
    $('img[alt=slide_'+number+']').click(function(){
        slider.change(number);
        slider.responsive(number);
    });
}
    $('.fa-window-restore').click(function(){
        ( $('.alboms_slide').css('max-width') != '100%') ?
                $('.alboms_slide').css('max-width', '100%'):
                    $('.alboms_slide').css('max-width', '85%');
                });
for(var numObject = 10; numObject < slider.quantity+10; numObject++){
     slider.transform(numObject);
}
});
