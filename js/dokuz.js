$(document).ready(function(){
    $(window).scroll(startCountAnimation);
    function startCountAnimation(){
        if($(window).scrollTop()>1200){
            $(".say").each(function(){
                var currentElement=$(this);
                jQuery({Counter:0}).animate({Counter:currentElement.text()},{
                    duration:2000,
                    easing:"swing",
                    step:function(){
                        currentElement.text(parseInt(this.Counter+1));
                    }

                });
            });
            $(window).off("scroll",startCountAnimation);
        }
    }  
    $(".brre .card").hover(function(){
        $(this).find("button").animate({"margin-top":"170px","opacity":"1"},{
            duration:1200,
            easing:"swing"
        });
    });
    $(".scol .card").mouseout(function(){
        $(this).find("button").animate({"margin-top":"150px","opacity":"0"},{
            duration:1200,
            easing:"swing"
        });
    });
});

