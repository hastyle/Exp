$(function(){

  //////////////////////// Navigation Animation ///////////////////

  var listItem = $('.list-item');

    listItem.on('click', function(){

        var currentListItem = $(this);
        var anchorLink = currentListItem.find('a');
          currentListItem.addClass('current');
          currentListItem.siblings().removeClass('current');

    });



//////////////////// CounterUp ///////////////////////////////////
    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };
    var demo = new CountUp("myTargetElement", 0, 100, 0, 2.5, options);
    var demo2 = new CountUp("myTargetElement2", 0, 100, 0, 2.5, options);
    var demo3 = new CountUp("myTargetElement3", 0, 100, 0, 2.5, options);
    demo.start();
    demo2.start();
    demo3.start();

////////////////// More Section Animation ///////////////////////

  //var controller = new ScrollMagic.Controller();


});
