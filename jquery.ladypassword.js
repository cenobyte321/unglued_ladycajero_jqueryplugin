(function ( $ ) {
  var elem;
  var ladyCajeroImg = $('<img />',
               {
                 src: 'images/ladycajero.png',
               });
  var leftPosition;
  var offsetImgHeight= 30;
  var offsetImgTop = 10;

  var lengthEvalDummy = $('<span />');


  $.fn.ladypassword = function() {
      elem = this;

      if(this.is("input") && $(this).get(0).type == 'password'){
        ladyCajeroImg.on('load', initImage);
        this.keyup(placeImage);
      }
  };

  var initImage = function(){
    ladyCajeroImg.appendTo("body");
    lengthEvalDummy.appendTo("body");
    ladyCajeroImg.height(elem.height()+offsetImgHeight);
    leftPosition =  elem.position().left-(ladyCajeroImg.width()/2);

    ladyCajeroImg.css({position: 'absolute',top: elem.position().top-offsetImgTop, left: leftPosition});
    ladyCajeroImg.hide();

    lengthEvalDummy.css({'font-size': parseInt(elem.css("font-size"))});
  };

  var placeImage = function(){
      if(this.selectionStart > 0){
        ladyCajeroImg.show();
      }
      else{
        ladyCajeroImg.hide();
      }
      lengthEvalDummy.text('*'.repeat(this.selectionStart));
      var width = lengthEvalDummy.width();
      lengthEvalDummy.empty();
      if(width < elem.width())
        ladyCajeroImg.css({left: leftPosition + width });

  };
}( jQuery ));
