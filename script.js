/* script.js for Scheduler */
// time block for jumbotron -- works!  (now doesn't)
class TimeblockObj {
  constructor(hour, todo) {
    this.hour = hour;
    this.todo = todo; 
  }
}
// superseded method use $( document ).ready ?? see Stack Overflow
window.onload = function() {
  const currentTimeblocks = getCurrentTimeblocks();
  const currentTime = moment();

  displayCurrentDate(currentTime);
  displayTimeBlockRows(currentTime);

  document.querySelector(".container")
    .addEventListener("click", function(event) {
      containerClicked(event, currentTimeblocks);
    });
  setTimeblockText(currentTimeblocks);
};

function getCurrentTimeblocks() {
  const currentTimeblocks = localStorage.getItem("timeblockObjects");
  return currentTimeblocks ? JSON.parse(currentTimeblocks) : [];
}

function displayCurrentDate(currentTime) {
  document.getElementById("currentDay")
    .textContent = currentTime.format("dddd, MMMM Do YYYY, HH:mm");
}

/*
// timeblock rows display function begins here
function displayTimeBlockRows(currentTime) {
  const currentHour = currentTime.hour();
  // hours initially will be 9-5, 9-17; to revise later as 7-22
  // creates col layout of 1+10+1; could be revised depending on look
  for (let i=9; i <= 17; i++) {
    const timeblock = createTimeblockRow(i);
    const hourCol = createCol(createHourDiv(i), 1);
    const textArea = createCol(createTextArea(i, currentHour), 10);
    const saveBtn = createCol(createSaveBtn(i), 1);
    appendTimeblockColumns(timeblock, hourCol, textArea, saveBtn);
    document.querySelector(".container").appendChild(timeblock);
  }
}
//timeblock rows create function
  function createTimeblockRow(hourId) {
    const timeblock = document.createElement("div");
    timeblock.classList.add("row");
    timeblock.id = "timeblock-${hourId}";
    return timeblock;
  }

// timeblock cols create function
  function createCol(element, colSize) {
    const col = document.createElement("div");
    col.classList.add("col-${colSize}", "p-0");
    col.appendChild(elememnt);
    return col;
  }

// hour div
  function createHourDiv(hour) {
    const hourCol = document.createElement("div");
    hourCol.classList.add("hour");
    hourCol.textContent = formatHour(hour);
    return hourCol;
  }

  function formatHour(hour) {
    const hourString = String(hour);
    return moment(hourString, "H").format("H");
  }

  function createTextArea(hour, currentHour) {
    const textArea = document.createElement("textarea");
    textArea.classList.add(getTextAreaBackgroundClass(hour, currentHour));
    return textArea;
  }

  function getTextAreaBackgroundClass(hour, currentHour) {
    return hour < currentHour ? "past"
    : hour === currentHour ? "present"
    : "future";
  }

  function createSaveBtn(hour) {
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("saveBtn");
    saveBtn.innerHTML = "<i class='fas fa-save'></i>";
    saveBtn.setAttribute("data-hour", hour);
    return saveBtn;
  }

  function appendTimeblockColumns(timeblockRow, hourCol, textAreaCol, saveBtnCol) {
    const innerCols = [hourCol, textAreaCol, saveBtnCol];
    for (let col of innerCols) {
      timeblockRow.appendChild(col);
    }
  }

// localStorage saves NB to review
  function containerClicked(event, timeblockList) {
    if (isSaveButton(event)) {}
      const timeblockHour = getTimeblockHour(event);
      const textAreaValue = getTextAreaValue(timeblockHour);
      placeTimeblockInList(new TimeblockObj(timeblockHour, textAreaValue, timeblockList));
      saveTimeblockList(timeblockList);   
  }

  function isSaveButton(event) {
    return event.target.matches("button") || event.target.matches(".fa-save");
  }

  function getTimeblockHour(event) {
    return event.target.matches(".fa-save") ? event.target.parentElement.dataset.hour : event.target.dataset.hour;
  }

  function getTextAreaValue(timeblockHour) {
    return document.querySelector("#timeblock-${timeblockHour} textarea").value;
  }

  function placeTimeblockInList(newTimeblockObj, timeblockList) {
    if (timeblockList.length > 0) {
      for (let savedTimeblock of timeblockList) {
        if (savedTimeblock.hour === newTimeblockObj.hour) {
          savedTimeblock.todo = newTimeblockObj.todo;
          return;
        }
      }
    }
    timeblockList.push(newTimeblockObj);
    return;
  }

  function saveTimeblockList(timeblockList) {
    localStorage.setItem("timeblockObjects", JSON.stringify(timeblockList));
  }

  function setTimeblockText(timeblockList) {
    if (timeblockList.length === 0) {
      return;
    } else {
      for (let timeblock of timeblockList) {
        document.querySelector("#timeblock-${timeblock.hour} textarea")
        .value = timeblock.todo;
      }
    }
  }
  