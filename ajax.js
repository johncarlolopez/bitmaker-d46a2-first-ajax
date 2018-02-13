document.addEventListener("DOMContentLoaded", function() {

  var stepOneEle = document.querySelector('.step_one');
  var stepThreeEle = document.querySelector('.step_three');
  var stepThreeDivEle = document.querySelector('#step3456');
  var stepSevenEle = document.querySelector('.step_seven');
  var stepSevenDivEle = document.querySelector('#step7');
  var stepEightEle = document.querySelector('.step_eight');
  var stepEightDivEle = document.querySelector('#step8');

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

  stepSevenEle.addEventListener('click', function() {
    var response = $.ajax( {
          url: 'https://first-ajax-api.herokuapp.com/count',
          method: 'GET',
          dataType: 'text'
      }).done(function(responseData) {
        var countResponseEle = document.createElement('p').innerHTML = responseData;
        stepSevenDivEle.append(countResponseEle);
      });
  });

  stepEightEle.addEventListener('click', function() {
    var response = $.ajax( {
          url: 'https://first-ajax-api.herokuapp.com/time',
          data: {timezone: 'Pacific/Honolulu'},
          method: 'GET',
          dataType: 'text'
      }).done(function(responseData) {
        var timeResponseEle = document.createElement('p').innerHTML = responseData;
        stepEightDivEle.append(timeResponseEle);
      });
  });

});
