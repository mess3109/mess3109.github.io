---
layout: post
title:  "Sinatra Project Post"
date:   2017-07-25 00:20:52 +0000
---


For the Sinatra project app I chose to build a time tracking app for tasks.  This idea came from discussions with my partner who frequently underestimates how long any given task will take.  To humor him after some complaints about "having no time," I said I would show him where his time goes with this app.  Each task has a goal time and actual time for comparison and is organized by tags such as personal or work.

This project was straightforward overall once decisions were made for the activerecord relationships and model property data types.  Mapping out the model relationships was challenging because it could be done in so many ways.  I initially overcomplicated the activerecord relationships by having a has_many to has_many relationship between the user and tag models.  Once I thought about how I wanted to show the tasks on the user's index page, I realized that each user should have its own set of tags so only the user has_many tags relationship was necessary.  The correct relationship in the other direction was a tag belongs_to a user.  Then a task belongs_to a tag and a user has_many tasks through tags.  With these relationships, the tasks were easily organized by tag on the user's index page.  

I encountered an issue unrelated to this specific project.  More than once I reloaded my project after putting it down and the files did not load properly from the server.  Unfortunately I did some work before realizing this and have some wonky commits.  I had to return to a previous commit requiring the command `git reset --hard` followed by the commit ID.  The repository commits could be cleaner but these things happen.  I'm happy github was there with my earlier commits!  

The Time Tracker app passes the project requirements so I need to submit it but I would like to add more features:
* A Start and Stop button to time a task
* Edit/delete capabilities for the tags

Thank you to [Corneal](https://github.com/thebrianemory/corneal) for helping me to get this project started.
