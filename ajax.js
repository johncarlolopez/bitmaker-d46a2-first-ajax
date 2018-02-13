document.addEventListener("DOMContentLoaded", function() {

  var stepOneEle = document.querySelector('.step_one');
  var stepThreeEle = document.querySelector('.step_three');
  var stepThreeDivEle = document.querySelector('#step3456');

  stepOneEle.addEventListener('click', function() {
    var response = $.ajax( {
          url: 'https://first-ajax-api.herokuapp.com/',
          method: 'GET',
          dataType: 'text'
      }).done(function(responseData) {
        console.log(responseData);
      }).fail(function(_jqXHR, textStatus, errorThrown) {
        console.log(errorThrown)
      });
  });

  stepThreeEle.addEventListener('click', function() {
    var response = $.ajax( {
          url: 'https://first-ajax-api.herokuapp.com/pong',
          method: 'GET',
          dataType: 'text'
      }).done(function(responseData) {
        var pingResponseEle = document.createElement('p').innerHTML = responseData;
        stepThreeDivEle.append(pingResponseEle);
      }).fail(function(_jqXHR, textStatus, errorThrown) {
        var pongResponseEle = document.createElement('p').innerHTML = "Sorry, we'll try harder next time";
        stepThreeDivEle.append(pongResponseEle);
      }).always(function() {
        console.log("Hey the request is finished!");
      });
  });

});
