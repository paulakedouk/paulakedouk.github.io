## Website Performance Optimization portfolio project

To run this file, [click here](https://github.com/paulakedouk/paulakedouk.github.io/tree/master/portfolio) and Clone/Download the repository.
.

### Getting started

#### Optimized PageSpeed Insights score for index.html

Optimizations:

* Reduced and compress the images size using Photoshop
* Installed gulp and minify Javascript and CSS, renamed with .min and cleared cache
* Added async to the Javascript script tags
* Moved CSS and Javascript to the bottom of index.html
* Add a media query for print.css

#### Optimized Frames per Second in main.js

Optimization:

* Reduced for-loop calculation by:
	* Moved all constants out of the for loop in updatePositions 
	* Changed `document.querySelectorAll` to `document.getElementsByClassName` to make it load faster.
	* Set number of pizzas to 48 in `document.addEventListener('DOMContentLoaded', function()`
	* Declared var elem outside the loop on line 527 to prevent it being created each iteration
	* Changed CSS for `.mover: Add will-change: transform;`
* Repositioned pizzas with this:
inserted `items[i].style.transform = 'translateX(' + (100 * phase) + 'px)';`
* Replaced *querySelector's* with *getElementById* to increase scroll and page rendering.
* Declared the *pizzasDiv* variable outside the loop, so only DOM call is made.
* Declared *var elem* outside the for-loop to prevent it from being created every time the loop is executed.
* Declared *var movingPizzas* outside for-loop as `var movingPizzas = document.getElementById('movingPizzas1');`

