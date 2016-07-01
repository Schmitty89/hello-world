// find 4 ways to find the article h1
// first one
$(function(){
  // $('#article-1 h1').first().css('color', 'blue');
  // $('#article-1').after().css('color','red'); THIS DOESNT WORK FOR JUST THE H1 TAKES TO MUCH
  $('#article-1').after('h1').css('color','red');
  });

//  dylans example
//  $(function() {
//     $('#article-1 h1').first().css('color', 'blue');
//     $('h1').last().css('color', 'green');
//     $('#article-1 p').prev().css('color', 'red');
//     $('#article-1 p').siblings().css('color', 'purple');
// });
