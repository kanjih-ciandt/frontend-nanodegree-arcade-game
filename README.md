# Classic Arcade Game 

## Table of Contents

- [Instructions](#instructions)
- [Required Libraries and Dependencies](#required-libraries-and-dependencies)
- [How to Play](#how-to-play)
- [Project contents](#project-contents)
- [How to Run the Project](#how-to-run-the-project)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

## Required Libraries and Dependencies

This project use **ECMAScript 6** so you must use a browser compatible. Please check [here](https://kangax.github.io/compat-table/es6/).   

## How to Play
> Use the arrow keys on your keyboard to move the player around the game.
> Your goal is to reach the water without colliding with a bug.
> Every time you achieve your goal, you go up a level and another enemy is added.
> Your browser will remember your high score, so come back and try a beat it.
> Try collecting the green gems to see what they do.

## Project contents
This project consists for the following files:

* `index.html` 
* `js/app.js`  
* `js/engine.js` 
* `js/resources.js`
* `images/` - folder with images used.
* `css/style.css` 

## How to Run the Project
Load the `index.html` in a browser that supports HTML5 and ECMAScript 6 or above. 

If you want to test the game locally and have Python installed, execute:

```bash
python -m SimpleHTTPServer 8008
```

Then navigate you browser to `0.0.0.0:8008` to test the game.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
