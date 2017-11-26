---
layout: post
title:      "Final Project"
date:       2017-11-26 22:24:20 +0000
permalink:  final_project
---


My [final project](https://github.com/mess3109/memory-react-redux) is almost complete!  I recreated the common card-flipping memory game in a single-page React/Redux web app with Rails backend.  I wanted to use the [Artsy API](https://developers.artsy.net/) to do something other than submitting data through forms.  So I decided to create a game.  I was given the advice to pick a project that would keep me engaged because it would be challenging.  I would offer this advice to others!  The main route of the application is the game component which contains the cards.  Artwork images on the cards are fetched from the Artsy API with additional information on the featured artworks displayed on a separate route.  The game is scored by the number of rounds it takes to match all of the cards.  When all matches are found, the score is saved to the Rails API.  

To start I created the entire game in React with number placeholders for images.  React was incredibly confusing until I understood the best practices of handling communication between components.  The main thing to remember is that data is passed from parent component to child component through props and the child passes data back to the parent through functions.  These functions should be written out in the parent component and passed to the child as a prop.  The game logic worked in React using a callback in the optional second argument of the ```setState()``` function.  The callback will execute after ```this.setState()``` is complete ensuring state is updated in proper order.  ```this.setState()``` can be unpredictable and you cannot call ```this.state``` directly after  ```this.setState()``` and expect the state to have changed without calling ```this.state``` in the callback.  For the memory game to work, cards are flipped with a call to ```this.setState()``` that has a callback function ```checkMatch()``` to check for a match.  ```checkMatch()``` must occur after two cards are flipped with time to view both.  

Asynchronous actions in Redux were even more challenging.  Redux alone cannot make asynchronous calls and requires additional middleware.  The main benefit of Redux is well-managed state.  Before adding in Redux, the Game component was handling a significant amount of game logic.  When using React, organizing the application into mostly stateless components with few components handling state is the best set up.  When Redux is added in, it is still better to minimize the number of components handling state but it is much easier to pass data between components.  There is one location, ```store```, where state can be accessed.  

As with the other projects, I am amazed how much I learned through completing this application.  [Here](https://imgur.com/N3zn1s2) is what the game looks like mid-play.

Some to do items for my app:
-  Bootstrap it for better styling
-  Make better use of component lifecycles
-  Add other images for user choice
-  Get it uploaded to Heroku
-  
