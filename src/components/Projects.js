import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import NeonLettersProjects from './NeonLettersProjects.js';
import './NeonLetters.css';
import './Projects.css';
import hackathon_resources_screenshot from './images/hackathon_resources_screenshot.PNG';
import ufhome_screenshot4 from './images/ufhome_screenshot4.png';
import pupfetcher_screenshot2 from './images/pupfetcher_screenshot2.png';
import fooddice_screenshot from './images/fooddice_screenshot.png';
import tictactoe_screenshot from './images/tictactoe_screenshot.png';
import './projectCardAnimation.css';

class Projects extends Component {
  render() {
    return (
      <div className="App">
        <NeonLettersProjects />
        <div className="projectsContainer">

          <div className="projectDisplayContainer">

            <div className="project4Back back appInfo">
              <p className="projectParagraph">
                This Project was to simply set up a starting point for a future site for a former employer.  I was given free range on how to set up the site.  The idea of the site is to give participants quick access to resources to use in the projects.
              </p>
              <p className="projectParagraph">
              The Title page and Import Your Own page deal with using Fenix Web Server.  Fenix is a system to set up a local webserver and also provide collaborators with a real time link to see the changes made to websites and projects without needing to actually deploy.
              </p>
              <p className="projectParagraph">
                On both the Comments and Catalog page, I used Firebase to set up the database in JSON format.
              </p>
              <p className="projectParagraph">
                On the Images page, I used the <a href='unsplash.com'>UnSplash</a> API to pull images.  You can search without filling out the input fields and get ten random images.  You can also search on specific tags to get images that best fit the project you are building for the hackathon.  You can download images individually, or you can place the images in the 'cart' and download them as a .zip file.  I used NGN, which is an open source framework that.  I also implemented the JSZip library to zip the images and have them download.
              </p>
              <p className="projectParagraph">
                This was a fun project for me to work on.  My pride and joy of this adventure was the Images page.  I set up the page and the ability to download a .zip file of the selected images.
              </p>
              <p className="projectParagraph">
                Take a tour of the site <a className='projectTag' href="./static-site/" target='blank'>here!</a>
              </p>

            </div>
            <div className="project4Front front"><img className='hackathonImage' src={hackathon_resources_screenshot} alt='hackathon resources'/></div>
          </div>

          <div className="projectDisplayContainer">
            <div className="project1Back back appInfo">
              <p className="projectParagraph">
                UFHome was my final project for General Assembly.  It was a solo project that I came up with, designed, and developed on my own.  We were given free range to come up with whatever we wanted to in order to showcase our skills.
              </p>
              <p className="projectParagraph">
                It was something that came to mind as I was sitting around a campfire with friends looking at the sky and talking about UFOs and wondering if we could lookup all the sightings.  And, if you could look them up, where would you stay if you traveled to see the sightings?
              </p>
              <p className="projectParagraph">
                That night, UFHome was born.
              </p>
              <p className="projectParagraph">
                Take a tour of the site <a className='projectTag' href="https://ufhome.herokuapp.com/" target='blank'>here!</a> See if you can find the Easter Eggs!
              </p>
            </div>
            <div className="project1Front front"><img className='ufhomeImage' src={ufhome_screenshot4} alt='UFHome'/></div>
          </div>


          <div className="projectDisplayContainer">
            <div className="project2Back back appInfo">
              <p className="projectParagraph">
                Pupfetcher was the first group project we did at General Assembly.  Our group was comprised of a total of four students.  We were expected to follow these requirements:
              </p>
              <ul>
                <li className="projectList">Build an Express Application that has JSON endpoints.</li><br/>
                <li className="projectList">Design our CRUD routes using the REST convention.</li><br/><br/>
                <li className="projectList">Leverage AJAX to fetch JSON data from the backend.</li><br/>
                <li className="projectList">Use jQuery to add interactivity and render data on the client-side.</li><br/>
                <li className="projectList">Render the JSON data on the frontend using ES6 String literals or on the backend using EJS.</li><br/>
                <li className="projectList">Persist at least two models to a Mongo Database. Use at least one one-to-many or many-to-many relationship between models. You can choose to reference or embed your data.</li><br/>
                <li className="projectList">Git 50+ commits. Commit early, commit often. </li><br/>
                <li className="projectList">You must use semantically clean HTML and CSS.</li><br/>
                <li className="projectList">Deploy our app to Heroku.</li><br/>
              </ul>
              <p className="projectParagraph">
                Other than that, we were to come up with, design, and develop the app as we saw fit.  We decided to let people search for dogs in shelters in their area!  We were very proud of our idea and product!
              </p>
              <p className="projectParagraph">
                Take a tour of the site <a className='projectTag' href="https://pupfetchrs.herokuapp.com/" target='blank'>here!</a>
              </p>
            </div>
            <div className="project2Front front"><img className='pupfetcherImage' src={pupfetcher_screenshot2} alt='Pupfetcher'/></div>
          </div>


          <div className="projectDisplayContainer">
            <div className="project3Back back appInfo">
              <p className="projectParagraph">
                FoodDice was our second group project. Our group was comprised of a total of four students from the web development immersive class. We were given one week to come up with an idea and develop the web app using React.
              </p>
              <p className="projectParagraph">
                Unlike other projects, we were paired up with the a team from the UX immersive class to help design the site and come up with our target user.  This was very enlightening and gave us an entirely new way to look at how we should develop the app.
              </p>
              <p className="projectParagraph">
                The app idea came from the fact that, after many weeks of us all eating at the same handful of places for lunch around the General Assembly campus, we wanted to find a few new places to eat.  We wanted to come up with a way to find new restaurants with our favorite cuisines or, if so desired, just find a completely random restaurant.
              </p>
              <p className="projectParagraph">
                Take a tour of the site <a className='projectTag' href="https://food-dice.herokuapp.com/" target='blank'>here!</a>
              </p>
            </div>
            <div className="project3Front front"><img className='fooddiceImage' src={fooddice_screenshot} alt='FoodDice'/></div>
          </div>


          <div className="projectDisplayContainer bottomProject">
            <div className="project4Back back appInfo">
              <p className="projectParagraph">
                The Tic-Tac-Toe project was the first project in the General Assembly course.  It was, at the time, a very daunting task.  We had a Friday through the weekend to complete the task.  The requirements were as follows:
              </p>
              <ul className="projectUL">
                Baseline Requirements
                <li className="projectList">Users should be able to click on any empty box to make a move.</li><br/>
                <li className="projectList">Every move should alternate between marking an X and O (the two players).</li><br/>
                <li className="projectList">A user should not be able to claim a box that has already been claimed for X or O.</li><br/>
                <li className="projectList">Users should be able to click a "reset" button to clear all X's and O's from the board and restart the game.</li><br/>
              </ul>
              <ul className="projectUL">
                Further Challenge Ideas:
                <li className="projectList">Display a message to indicate which player's turn is about to be played (X or O).</li><br/>
                <li className="projectList">If a player wins, show a message with the mark of the winner. Separate your code that finds the winner (if there is a winner) into its own function.</li><br/>
                <li className="projectList">If the board fills up before anyone wins, show a message declaring the game a draw.</li><br/>
                <li className="projectList">Display separate colors for X's and O's.</li><br/>
                <li className="projectList">Creatively style your tic-tac-toe game!</li><br/>
                <li className="projectList">Research "event delegation," and attach your event listeners to the whole board instead of individual boxes.</li><br/>
              </ul>
              <p className="projectParagraph">
                I really enjoyed figuring this project out and I even added a few little fun surprises!
              </p>
              <p className="projectParagraph">
                Take a tour of the site <a className='projectTag' href="./tictactoe.html" target='blank'>here!</a> See if you can find the Easter Eggs!
              </p>
            </div>
            <div className="project4Front front"><img className='tictactoeImage' src={tictactoe_screenshot} alt='tictactoe'/></div>
          </div>


        </div>

        </div>
      // </div>
    );
  }
}

export default Projects;