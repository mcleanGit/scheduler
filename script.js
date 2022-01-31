/* script.js for Scheduler : much third-party with modifications as trying to push dynamic JS skillset */
class TimeblockObj {
  constructor(hour, todo) {
    this.hour = hour;
    this.todo = todo; 
  }
}
// $(document).ready(function ()) preferred to window.onload; neither should not be necessary if all js below body ??
$(document).ready(function () {
  const currentTimeblocks = getCurrentTimeblocks();
  const currentTime = moment();

  displayCurrentDate(currentTime);
  displayTimeblockRows(currentTime);

  document.querySelector(".container")
    .addEventListener("click", function(event) {
      containerClicked(event, currentTimeblocks);
    });
    setTimeblockText(currentTimeblocks);
});

// to review localStorage syntax here and later; functions with console.log for empty array, to check saved content
function getCurrentTimeblocks() {
  const currentTimeblocks = localStorage.getItem("timeblockObjects");
  return currentTimeblocks ? JSON.parse(currentTimeblocks) : [];
}

// this works in correct drm format to this point - OK.
function displayCurrentDate(currentTime) {
  document.getElementById("currentDay")
    .textContent = currentTime.format("dddd, MMMM Do, YYYY, HH:mm");
}

// timeblock rows display function begins here; to review flex aspects, row shows < 12 columns wide
function displayTimeblockRows(currentTime) {
  const currentHour = currentTime.hour();
  // hours requisitie 9-5, 9-17; revised as 08-22; timeblock is row
  // creates col bootstrap layout of 1+10+1; could be revised depending on look; 10 not functioning properly ??
  for (let i = 8; i <= 22; i ++) {
    const timeblock = createTimeblockRow(i);
    const hourCol = createCol(createHourDiv(i), 1);
    const textArea = createCol(createTextArea(i, currentHour), 10);
    const saveBtn = createCol(createSaveBtn(i), 1);
    appendTimeblockColumns(timeblock, hourCol, textArea, saveBtn);
    document.querySelector(".container").appendChild(timeblock);
  }
}

//timeblock rows create function, note use of ${} for Id, shortform for ...getElementbyId etc.
  function createTimeblockRow(hourId) {
    const timeblock = document.createElement("div");
    timeblock.classList.add("row");
    timeblock.id = `timeblock-${hourId}`;
    return timeblock;
  }

// timeblock cols create function, similar use of ${} syntax
  function createCol(element, colSize) {
    const col = document.createElement("div");
    col.classList.add(`col-${colSize}`, "p-0");
    col.appendChild(element);
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
    return moment(hourString, "HH").format("HH");
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
// uses fontawesome API for floppy-disk icon, problematic - not loading ?
  function createSaveBtn(hour) {
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("saveBtn");
    saveBtn.innerHTML = '<i class = svg-inline--fa fa-save fa-w-14"></i>';  
    "svg-inline--fa fa-save fa-w-14" 
    saveBtn.setAttribute("data-hour", hour);
    return saveBtn;
  }
// this part of the code needs review, third-party research, problematic
  function appendTimeblockColumns(timeBlockRow, hourCol, textAreaCol, saveBtnCol) {
    const innerCols = [hourCol, textAreaCol, saveBtnCol];
    for (let col of innerCols) {
      timeBlockRow.appendChild(col);
    }
  }

// localStorage saves NB to review, correct minor errors in syntax
  function containerClicked(event, timeblockList) {
    if (isSaveButton(event)) {
      const timeblockHour = getTimeblockHour(event);
      const textAreaValue = getTextAreaValue(timeblockHour);
      placeTimeblockInList(new TimeblockObj(timeblockHour, textAreaValue, timeblockList));
      saveTimeblockList(timeblockList);   
    }
  }

  function isSaveButton(event) {
    return event.target.matches("button") || event.target.matches(".fa fa-save");
  }
// to review syntax of this: ? and event.target etc redundancies
  function getTimeblockHour(event) {
    return event.target.matches(".fa fa-save") ? event.target.parentElement.dataset.hour : event.target.dataset.hour;
  }
// again use of $ syntax as Id marker
  function getTextAreaValue(timeblockHour) {
    return document.querySelector(`#timeblock-${timeblockHour} textarea`).value;
  }
// note that .push seems problematic, adds new item to end of array; length parameter undefined ?
// the structure of much of this requires further review
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
        document.querySelector(`#timeblock-${timeblock.hour} textarea`)
        .value = timeblock.todo;
      }
    }
  };