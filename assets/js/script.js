// script.js for Scheduler //
// ready function wraps code (recommended, may not be necessary)
$(document).ready(function () {

// listen for button click, saver to localStorage
$('.saveBtn').on('click', function() {
  var time = $(this).parent().attr('id');
  var value = $(this).siblings('.todo').val();

  localStorage.setItem(time, value);
});

// Button function to clear local storage and clear contents
 $('.clearBtn').on('click', function() {
  $("textarea").val("");
  localStorage.clear();
});

// moment displays current day and time to header
$('#currentDay').text(moment().format("dddd, MMMM, Do, YYYY, HH:mm"));

// main function of hourBlock including past, present, future states
function hourBlock () {
  var currentHour = moment().hours();
  $('.blockTime').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    } 
   });
 }
// calls the hourBlock function
hourBlock ();

// establish 15 millisecond check/update interval for hourBlock
var interval = setInterval(hourBlock, 15000);

// gets todo values for textarea of individual hours from localStorage
$('#hour-7 .todo').val(localStorage.getItem('hour-7'));
$('#hour-8 .todo').val(localStorage.getItem('hour-8'));
$('#hour-9 .todo').val(localStorage.getItem('hour-9'));
$('#hour-10 .todo').val(localStorage.getItem('hour-10'));
$('#hour-11 .todo').val(localStorage.getItem('hour-11'));
$('#hour-12 .todo').val(localStorage.getItem('hour-12'));
$('#hour-13 .todo').val(localStorage.getItem('hour-13'));
$('#hour-14 .todo').val(localStorage.getItem('hour-14'));
$('#hour-15 .todo').val(localStorage.getItem('hour-15'));
$('#hour-16 .todo').val(localStorage.getItem('hour-16'));
$('#hour-17 .todo').val(localStorage.getItem('hour-17'));
$('#hour-18 .todo').val(localStorage.getItem('hour-18'));
$('#hour-19 .todo').val(localStorage.getItem('hour-19'));
$('#hour-20 .todo').val(localStorage.getItem('hour-20'));
$('#hour-21 .todo').val(localStorage.getItem('hour-21'));
$('#hour-22 .todo').val(localStorage.getItem('hour-22'));

// closes out document ready wrapper
});