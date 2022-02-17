// script.js for Scheduler //
$(document).ready(function () {

 // listen for button click to save to localStorage
 $('.saveBtn').on('click', function() {
   var time = $(this).parent().attr('id');
   var value = $(this).siblings('.todo').val();
 
   localStorage.setItem(time, value);
 });
 
 function hourBlock () {
   var currentHour = moment().hours();
   $('.blockTime').each(function() {
     var blockHour = parseInt($(this).attr('id').split('-')[1]);
     if (blockHour < currentHour) {
       $(this).addClass('past');
     } else if (blockHour = currentHour) {
       $(this).addClass('present');
     } else (blockHour > currentHour) {
       $(this).addClass('future');
     } 
   }
 }
 hourBlock ();
 
 /* class rowTimeBlock {
  hour = hour;
  todo = todo;
 
 
   //Moment.js code for current date and time
   let NowMoment = moment().format("dddd, MMMM Do, YYYY, HH:mm");
   let displayCurrentDate = document.getElementById("currentDay");
  });
 
  function displayCurrentDate(currentTime) {
   document.getElementById("currentDay")
   .textContent = currentTime.format("dddd, MMMM, Do, YYYY, HH:mm");
  }
  
 
 displayCurrentDate(currentTime);
  displayTimeblockRow(currentTime);
 
  document.querySelector(".container")
   .addEventListener('click', function(event) {
    containerClicked(event, currentTimeblocks);
   });
   setTimeblockText(currentTimeblocks);
 }
 
 function displayCurrentDate(currentTime) {
  document.getElementById("currentDay")
  .textContent = currentTime.format("dddd, MMMM, Do, YYYY, HH:mm");
 }
 */
 }