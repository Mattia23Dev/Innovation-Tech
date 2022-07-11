//fadein effect section
function Utils() {}
        Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop = $(window).scrollTop();
                var pageBottom = pageTop + $(window).height();
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();

                if (fullyInView === true) {
                    return ((pageTop < elementTop) && (pageBottom > elementBottom));
                } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };

        var Utils = new Utils();
        $(window).on('load', addFadeIn());
        
        $(window).scroll(function() {
            addFadeIn(true);
        });

function addFadeIn(repeat) {
            var classToFadeIn = ".vamos";
            
            $(classToFadeIn).each(function( index ) {
                var isElementInView = Utils.isElementInView($(this), false);
                if (isElementInView) {
                    if(!($(this).hasClass('fadeInRight')) && !($(this).hasClass('fadeInLeft'))) {
                        if(index % 2 == 0) $(this).addClass('fadeInRight');
                        else $(this).addClass('fadeInLeft');
                    }
                } else if(repeat) {
                    $(this).removeClass('fadeInRight');
                    $(this).removeClass('fadeInLeft');
                }
            });
        }

 //REQUEST API 
 /*
fetch('https://hacker-news.firebaseio.com/v0/newstories.json').then(
    function (result){
        return result.json();
    }
    ).promise.then( 
        function (j){
            console.log(j);
            let appendi = document.getElementsByTagName('div');
            let lunghezza = j.length < 10;
            for(i= 0 ; i < j.length ; i++) {
                let el = document.createElement('main');
                el.innerHTML = j[i].title + ' - ' + j[i].body;
                appendi.appendChild(el);
            }

    
        }
    );
    */

    let richiesta = new XMLHttpRequest();
    richiesta.onload = function(){
        if(richiesta.status === 200){
            response = JSON.parse(richiesta.responseText);
            console.log(this.response);
        }
    };
    richiesta.open('GET', 'https://hacker-news.firebaseio.com/v0/newstories.json', true);
    richiesta.send(null);