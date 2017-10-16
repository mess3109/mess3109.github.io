---
layout: post
title:      "Practice.  Practice.  And Practice some more."
date:       2017-10-16 23:29:43 +0000
permalink:  practice_practice_and_practice_some_more
---


Around halfway through the jQuery Tic-Tac-Toe with a Rails API project, Flatiron announced it had revised its JavaScript curriculum.  I seized the opportunity to improve my JS skills before tackling the portfolio project of adding jQuery to my Rails app, [Capsule Wardrobe Organizer](https://github.com/mess3109/capsule-wardrobe-rails-flatiron).  Like most people, I found the JS material less intuitive than Ruby.  I griped a bit about redoing the JS sections and rebuilding a completed application.  But this reminds me of my piano teacher insisting that "the only path to Carnegie Hall is: Practice. Practice. Practice."  In the end I am better off for completing the JS curriculum twice and dismantling a finished project.  

In the wardrobe app there is a `has_many` to `has_many` relationship between the clothing items and outfits.  The outfit model is more complex so I focused on adding jQuery to the Outfits index and show views.  There were so many ways to make the outfit views more dynamic.  

Before I started the project, my understanding of $.get() and $.post() was too shallow to even question.  The first get request I completed was for the outfits index page.   It seemed impossible to use a get request to capture only the outfits of a current user without some serious magic.  With some experimentation, I identified the url I needed and updated the `#index` controller action to handle JSON objects.  The logic needed to capture only the outfits belonging to the current user was right there in the controller action.  Looking back this process seems so clear but at the time something clicked and receiving correct response was no longer magical.  Each subsequent client side request to the backend became easier and easier.  So much of learning to code is having the patience to practice and repeat.  

While trying to write event listeners for dynamically added objects I scrapped my work multiple times.  As each new feature was added a previous one broke.  I tried to attach an event listener to dynamically added `form` objects but broke every other `<form>` in the process.  Eventually I discovered not to add the event `$('form').on('submit', function() {})` in the document ready function because it will not attach to form elements created after the page loads.  It is better to attach listeners like this under a specific class this way `$(document).on('submit', '.class form',  function() {})` so that each form object under that specific class has the event.  Otherwise every `<form>` object will have that event.  It was a learning process to see and understand the impact of adding on additional layers of complexity.  

This was a great learning exercise!  I have some ideas of what else I can implement to develop my application.  I will work on modifying the rest of the interface using jQuery.
