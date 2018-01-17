'use strict';

// Holds the users total correct answers
let correctAnswerCounter = 0;
// Holds the users total incorrect answers
let incorrectAnswerCounter = 0;
// Inputs the users answers into an array
let userAnswers = [];
// Shows the current question #
let questionCounter = 1;

// When start button is clicked, hides the header and will display the first question
$('.start-button').on('click', function(){

  // Hides the Header Section
  $('header').hide();

  // Shows the first question
  $('main').fadeIn(1000).show(questions(1));
});

// Question Counter
$('.question-counter').text(questionCounter + ' of 10');

//1 When submitting checks if the answer is selected
$( "#target" ).submit(function(event) {
  
  event.preventDefault();

  // Holds the users selected answer
  let userCurrentAnswer = $(".custom-select option:selected").val();
  
  //1.A If answer is not selected, will pop-up an alert
  if (userCurrentAnswer == 0){

    // Modal when user does not select an answer
    $('.modal-body').html(`<h3 class="modal-title" id="exampleModalLongTitle">No Escaping! Select an Answer!</h3>
    <img role="img" class="img-fluid" src="img/riddler.png" alt="Riddler shows up"/>`);
  }
 
  //1.B If answer is selected will compare and show if its the correct answer
  else{

    //1.B.A If correct answer, Batman will show up.
    if (userCurrentAnswer === answerKey(questionCounter-1)){

      // Modal for correct answer
      $('.modal-body').html(`<h3 class="modal-title correct-answer" id="exampleModalLongTitle">Great Job! Justice Shall Prevail!</h3>
      <img role="img" class="img-fluid" src="img/batman.png" alt="Batman shows up"/>`);

      // Correct Answer Counter
      correctAnswerCounter++;
      $('.correctAnswerCounter').text(correctAnswerCounter);
      
      //Input the answer to an array
      userAnswers.push(userCurrentAnswer);

      // Creates a results chart of Question #, User Answers & Answer Key
      $('tbody').append(`<tr role="row">
      <th role="columnheader" scope="row">${questionCounter}</th>
      <td role="cell">${userAnswers[questionCounter-1]}</td>
      <td role="cell">${answers[questionCounter-1]}</td>
      </tr>`);

      // Adds +1 to the current question counter
      questionCounter++;
      $('.question-counter').text(questionCounter + ' of 10');

      // Question counter for bottom of the card, displays the next question #
      $('ul').find('.active').removeClass('active').addClass('disabled').next('li').removeClass('disabled').addClass('active');

      // Hides question after submitting an answer
      $('main').hide(questions(questionCounter-1));

      // Shows new question after submitting an answer
      $('main').show(questions(questionCounter));
    }

    //1.B.B If Incorrect answer, the correct answer will show through modal, "joker will show up"
    else{

      // Modal: Incorrect = Joker Shows Up
      $('.modal-body').html(`<h3 class="modal-title" id="exampleModalLongTitle">WRONG ANSWER! Correct answer is: </h3>
      <p class="answerKey">${answerKey(questionCounter-1)}</p>
      <img role="img" class="img-fluid" src="img/joker.png" alt="Joker shows up"/>
      <p>You must be a villian ;)</p>`);

      // Incorrect Answer Counter
      incorrectAnswerCounter++;
      $('.incorrectAnswerCounter').text(incorrectAnswerCounter);
      
      //Input the answer to an array
      userAnswers.push(userCurrentAnswer);

      // Creates a results chart of Question #, User Answers & Answer Key
      $('tbody').append(`<tr role="row">
      <th role="columnheader" scope="row">${questionCounter}</th>
      <td role="cell">${userAnswers[questionCounter-1]}</td>
      <td role="cell">${answers[questionCounter-1]}</td>
      </tr>`);

      // Adds +1 to the current question counter
      questionCounter++;
      $('.question-counter').text(questionCounter + ' of 10');

      // Question counter for bottom of the card, displays the next question #
      $('ul').find('.active').removeClass('active').addClass('disabled').next('li').removeClass('disabled').addClass('active');

      // Hides question after submitting an answer
      $('main').hide(questions(questionCounter-1));

      // Shows new question after submitting an answer
      $('main').show(questions(questionCounter));
    }
  }
  
  // Only if the current question is greater than 10, the quiz will end!
  // After user answers all 10 questions, the quiz will end and the results will show
  if (questionCounter > 10){
    // Question card will fade out
    $('main').fadeOut(800);

    // Final Score is calculated
    $('.final-score').append(`<th role="columnheader" scope="col">Total Correct: ${correctAnswerCounter} out of 10</th>
    <th scope="col">Percentage: ${(correctAnswerCounter / 10) * 100}%</th>`);

    // Shows the results chart
    // Results | Shows all: User Answers, Correct Answers, & Score
    $('.results').show(3000);
  }
});

// When reset button is clicked, resets the whole quiz and empties out the saved data
$('.reset-button').on('click',function(){

  // Resets the users total correct answers
  correctAnswerCounter = 0;
  // Resets the users total incorrect answers
  incorrectAnswerCounter = 0;
  // Empties the users answers 
  userAnswers = [];
  // Resets the question counter back to 1
  questionCounter = 1;

  // Updates the Question, incorrect and correct counter on the card
  $('.question-counter').text(questionCounter + ' of 10');
  $('.incorrectAnswerCounter').text(incorrectAnswerCounter);
  $('.correctAnswerCounter').text(correctAnswerCounter);
  
  // Results are hidden
  $('.results').hide();

  // Reshows the header again to begin!
  $('header').show();
  
  // Resets the results table
  $('.table').html(`<thead role="rowgroup">
  <tr role="row" class="final-score">
  </tr>
  <tr role="row">
    <th role="columnheader" scope="col">Question #</th>
    <th role="columnheader" scope="col">Your Answer</th>
    <th role="columnheader" scope="col">Answer Key</th>
  </tr>
  </thead>
  <tbody role="rowgroup">
  </tbody>`);

  // Resets the cards bottom question counter 
  $('ul li').first().removeClass('disabled').addClass('active');
});


