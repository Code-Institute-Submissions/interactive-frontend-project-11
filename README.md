
# Interactive Frontend Milestone Project - Travelverse

*Developer: Anthony Guillermo*

 - Project Brief 
 - Technologies
 - UXD
 - Deployment
 - Tests and Fixes
 - Media
 - Acknowledgements
 

## Project Brief

In this project I was tasked with building an interactive front-end site presenting useful information to users, using all the technologies learnt so far in this course.

The data was to be presented in way that helps users achieve their goals and and advance the site owners goals.

Build a website for users to choose their next holiday destination (Travelverse) mainly using technologies such as HTML, CSS, JavaScript and as on option jQuery or other jQuery libraries or external APIs. The project may be started using wireframes, as taught in the UX lesson.

Travelverse is a relatively new online business based in the Philippines opened 2 years ago. Currently only has three destinations to offer clients with three all inclusive packages. But is looking to expand in the future. The following requirements were given by the travel agency after meeting with the client;

 - Display information about the three cities that are potential holiday destinations.
 - Allow users to select/search a destination and see a map with relevant attractions, accommodations and restaurants. 
 - Present the results in a way that is visually pleasing and user friendly.

## Technologies

 - HTML5
 - CSS3
 - JavaScript
 - [jQuery](https://jquery.com)
 - [Bootstrap v4.4.1](https://getbootstrap.com/)
 - [Font Awesome v4.7.0](https://fontawesome.com/v4.7.0/)
 - [Google Maps API](https://cloud.google.com/maps-platform/)
 - [EmailJS]([https://www.emailjs.com/](https://www.emailjs.com/))

## UXD

**Strategy**

|Focus	|User Needs	|Business Objectives	|
|:------------:|:------------:|:------------:|
|Aims	|Interested in finding a holiday destination	|Increase clients	|
|	|Look at destinations and travel packages	|Retain clients	|
|Clients|Book travel package for myself/friends/family| Increase customer base|
|User objectives|View potential holiday destinations and packages|Gain more exposure
|	|View map of destinations with tourist spots|		|
|	|Read about destination and view pictures|		|
|	|Email/contact travel agency with questions or queries| 		|
|	|Find out about travel information|		|
|	|View social media sites|	|
|	|Subscribe to newsletter|	|

**Scope**

|Focus	|Functional Specification	|Content Requirements	|
|:------------:|:------------:|:------------:|
|Features	|Home	|Information about site/choose a destination	|
|Future Features|Destination pages	|View information/photos/map of destination|
|	|Account	|Sign in or sign up|
|	|Contact Us|Send question by email|
|	|Newsletter|Subscribe to newsletter|
|	|Travel Advice|View latest travel advice|
|	|Social Media|Access social media links|
|	|Newsletter|Subscribe to newsletter|
|	|Travel Advice|Access Government travel info|
|	|~~Bookings~~|~~View current bookings~~|
|	|~~Live chat~~|~~Chat live with an agent~~

**Structure**

|Focus	|Interaction Design	|Information Architecture	|
|:------------:|:------------:|:------------:|
|Information Structure	|How to navigate the site	|Navigational Structure (Tree/Dashboard)	|
|Groupings|Mobile- hamburger navigation|Home/Account/Contact|
|	|Desktop/Tablet - navbar|Home - Travel Agency info & Pick your destination (Baguio/Boracay/Manila)	|	
|	|Links in Footer Section	|Account - Sign in or sign up to personal account|
|	|	|Contact - Email queries or questions|
|	|	|Baguio/Boracay/Manila - Destination info/packages |
|	|	|Footer links - Social media sites, newsletter subscription & travel advice

**Skeleton**

|Focus	|Interaction Design	|Navigational Design|		|
|:------------:|:------------:|:------------:|:------------:|
|Presentation of information|[See Wireframe]()|Home >|Baguio|
|User Navigation|Desktop/Tablet/Mobile - travel advice/newsletter/social links in footer||Boracay|
|	|	|	|Manila	|
|	|	|Account|	|
|	|	|Contact	|	|

**Surface**

|Focus	|Visual Design	|
|:------------:|:------------:|
|Look of finished product|	|
|Colors and typography used|[Pacifico](https://fonts.google.com/specimen/Pacifico)	|
|	|[Monsterrat](https://fonts.google.com/specimen/Montserrat)		|
|	|#fd0|
|	|#1D428A|

## Deployment

 - On project repo page on GitHub click on "Settings"
 - Scroll  down to "GitHub Pages"
 - Select master branch from drop down bar under "Sources"
 - Select "Save"
 - Project link: [Travelverse]()

## Tests and Fixes

[HTML Validator Results]()
[CSS Validator Results]()

**Desktop/Tablet/Mobile** 
Tested on Chrome desktop/tablet/mobile simulator

***Mobile Issue***
Navigation bar wasn't expanding in mobile view

***Mobile Fix***
Added Bootstrap JavaScript Navigation bar links to all HTML pages 

> script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"  crossorigin="anonymous" /script
script  src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"  crossorigin="anonymous" /script

***Tablet/Mobile Issue***
Position of photos on site were not visually pleasing on tablet and mobile appearing on one line

***Tablet/Mobile Fix***
Added Media Queries for photos to load as columns on tablet and mobile screens

>@media  screen and (max-width:943px){
.photo {
column-count: 3}
}
@media  screen and (max-width:800px){
.photo {
column-count: 1;}
}

***Desktop/Tablet/Mobile Issue***
Welcome class h1 text was not appearing on index.html page

***Desktop/Tablet/Mobile Fix***
In style.css added style z-index to h1 text in Welcome class

>.welcome  h1 {
text-align: center;
font-family: "Pacifico", sans-serif;
color: #ffffff;
z-index: 1;
}

***Desktop/Tablet/Mobile Issue***
In Google Map API marker cluster was not appearing in map

***Desktop/Tablet/Mobile Fix***
Located correct script code in order for marker cluster to load

>script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclustererplus@4.0.1.min.js" /script
script  async  defer  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVwmQTEowqoN8j79GvEbutBT4Bki5Nci8&callback=initMap" /script

***Desktop Issue***
There was a margin on the right side of the video in index.html when the video on displayed on large screens

***Desktop Fix***
Welcome section in index.html "container-fluid" was removed.

## Media
The photos used in this project was taken from [Unsplash](https://unsplash.com/).
The video used in this project was taken from [Pexels](https://www.pexels.com/).
Some of the text in this project was taken from [Google](https://google.com). 

## Acknowledgements
Inspiration for this project was taken from [Disney Cruise](https://disneycruise.disney.go.com/), [Cebu Pacific](https://www.cebupacificair.com/), [Golden State Warriors](https://www.nba.com/warriors/) and previous Code Institute Projects (Love Running, Resume and Whiskey Drop).