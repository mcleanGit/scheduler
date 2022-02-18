# 05 Third-Party APIs: Work Day Scheduler

## Project Purpose
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

*Motivation.* As an executive leader for many years in higher-education and innovation in the performing arts and digital media, I am driven by the socio-economic, organizational, and technological impact of these transformative fields. Now that my institutional administrative role is completed, I am reengaged in many ongoing projects in interdisciplinary research and infrastructure development. In addition to their legacy value, some of those projects also explore new horizons, in part related to my role as co-founder of Digital Media at the Crossroads (DM@X) and other networking initiatives. I am motivated to expand my circle of influence and range of capability by working from the ground up, to explore the coding and implementation aspects of the digital present and future as an important complement to my executive experience in these areas. Although at this stage of my career I am more likely to be on the employer side of the hiring table, I am interested in developing my coding skills and perspective on this side of the industry. The current Work Day Scheduler application is part of that process.

The current Scheduler app, certainly in the form I have it here, would be quite inadequate as a real-life application. For one thing, in my previous professional role, the day's meetings routinely began at 8 am (with 7 am for transit or prep and concerts, normally about 5 evenings a week, did not end until after 10 pm. Accordingly, the Scheduler has been adjusted to encompass those hours, 0700-2200. It would also be necessary to flip between daily, weekly, and monthly schedules to be able to plan ahead, and reflect or review back. These elements are beyond the scope of this excercise.


## Aspects of the Project

The sequence of the application is as follows:
- the planner is opened in the browser
- the current day is displayed for extended business hours, to reflect my own experience
- the schedule presents hourly timeblocks
- the timeblocks are coded to indicate whether the hour is in the past grey, present--the current hour red--, or future green
- clicking a timeblock allows entry of text describing the event
- the save button at the right of each hourly timeblock saves the info in local storage
- so that the saved events persist when the page is refreshed
- this local storage is fully functional as deployed
- in addition, a delete --or clear-- button has been added at the top of the page, which clears local storage to provide a fresh start if desired
- 
### Notes on previous submission: 
- in a previous version, I inadvertently sent chunks of JS code that I was studying from other sources! I have since revisited and refactored my original code, reviewed additional aspects of jQuery and Moment documentation, and worked with a tutor to re-confirm fundamental concepts
- also, in the previous version, many difficulties arose from my decision to try to drive too much of the HTML via vanilla JS, with resultant under-usage of jQuery--which was the idea of the assignment--and Moment.js. A good learning experience but it would, in hindsight, have been wiser to do most of the layout directly in the HTML--which has now been done. The result is more repetitive HTML coding for the browser layout of the hour blocks and more repetitive jQuery coding for the local storage of those. However, these decisions have their own logic and simplicity.

## Review

The URL of the functional, deployed application.
URL:
 https://mcleangit.github.io/scheduler/
 screenshots in repo -- see below as well

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
URL:
https://github.com/mcleanGit/scheduler

Screenshots:
basic deployment blank:
<img src="https://user-images.githubusercontent.com/94858165/154741077-ae18abc7-b45e-4fff-b549-9f1a89032e68.png" width="15%"></img> 

scheduled items loaded 
<img src="https://user-images.githubusercontent.com/94858165/154741097-9335a3c3-fb30-4398-a860-3b94db026b13.png" width="15%"></img>

showing items saved in local storage
 <img src="https://user-images.githubusercontent.com/94858165/154741109-b3096770-5fa2-468a-9e9c-d86d74426a52.png" width="15%"></img> 
 
 back to blank deployment after clicking clear button
 <img src="https://user-images.githubusercontent.com/94858165/154741117-dd60b107-e329-4a26-a7b5-fc6b462cff45.png" width="15%"></img> 



---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
