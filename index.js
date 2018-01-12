
// When start button is clicked, hides the header and will display the first question
'use strict';

let correctAnswerCounter = 0;
let incorrectAnswerCounter = 0;
let userAnswers = [];
let questionCounter = 1;


// When user clicks 'START', hides the header section and unhides the main section
$('.start-button').on('click', function(){
  // Hides the Header Section
  $('header').hide();
  // Shows the first question
  $('main').fadeIn(2000).show(questions(1));
});


// Question Counter
$('.question-counter').text(questionCounter + ' of 10');


//1 When submitting checks if the answer is selected
$( "#target" ).submit(function(event) {
  event.preventDefault();

  let userCurrentAnswer = $(".custom-select option:selected").val();
  
  //1.A If answer is not selected will pop-up an alert
  if (userCurrentAnswer == 0){
    // Modal when user does not select an answer
    $('.modal-body').html(`<h3 class="modal-title" id="exampleModalLongTitle">No Escaping! Select an Answer!</h3>
    <img class="img-fluid" src="Images/Riddler.png" alt="Riddler shows up"/>`);
  }
 
  //1.B If answer is selected will compare and show if its the correct answer
  else{

    //1.A.A If correct answer, Batman will show up.
    if (userCurrentAnswer === answerKey(questionCounter-1)){
      // Modal for correct answer
      $('.modal-body').html(`<h3 class="modal-title correct-answer" id="exampleModalLongTitle">Great Job! Justice Shall Prevail!</h3>
      <img class="img-fluid" src="Images/Batman.png" alt="Batman shows up"/>`);
      // Correct Answer Counter
      correctAnswerCounter++;
      $('.correctAnswerCounter').text(correctAnswerCounter);
      
      //Input the answer to an array
      userAnswers.push(userCurrentAnswer);

      // Creates a results chart of Question #, User Answers & Answer Key
      $('tbody').append(`<tr>
      <th scope="row">${questionCounter}</th>
      <td>${userAnswers[questionCounter-1]}</td>
      <td>${answers[questionCounter-1]}</td>
      </tr>`);

      // Adds +1 to the current question counter
      questionCounter++;
      $('.question-counter').text(questionCounter + ' of 10');

      // Question Counter at footer card
      $('ul').find('.active').removeClass('active').addClass('disabled').next('li').removeClass('disabled').addClass('active');

      // Hides question after submitting an answer
      $('main').hide(questions(questionCounter-1));

      // Shows new question after submitting an answer
      $('main').show(questions(questionCounter));
    }

    //1.A.B If Incorrect answer will show through modal, "joker will show up"
    else{

      // Modal: Incorrect = Joker Shows Up
      $('.modal-body').html(`<h3 class="modal-title" id="exampleModalLongTitle">WRONG ANSWER! Correct answer is: </h3>
      <p class="answerKey">${answerKey(questionCounter-1)}</p>
      <img class="img-fluid" src="Images/Joker.png" alt="Joker shows up"/>
      <p>You must be a villian ;)</p>`);
      // Incorrect Answer Counter
      incorrectAnswerCounter++;
      $('.incorrectAnswerCounter').text(incorrectAnswerCounter);
      
      //Input the answer to an array
      userAnswers.push(userCurrentAnswer);

      // Creates a results chart of Question #, User Answers & Answer Key
      $('tbody').append(`<tr>
      <th scope="row">${questionCounter}</th>
      <td>${userAnswers[questionCounter-1]}</td>
      <td>${answers[questionCounter-1]}</td>
      </tr>`);

      // Adds +1 to the current question counter
      questionCounter++;
      $('.question-counter').text(questionCounter + ' of 10');

      // Question Counter at footer card
      $('ul').find('.active').removeClass('active').addClass('disabled').next('li').removeClass('disabled').addClass('active');

      // Hides question after submitting an answer
      $('main').hide(questions(questionCounter-1));

      // Shows new question after submitting an answer
      $('main').show(questions(questionCounter));
    }
  }
  
  if (questionCounter > 10){
    $('main').fadeOut(800);

    // Final Score
    $('.final-score').append(`<th scope="col">Total Correct: ${correctAnswerCounter} out of 10</th>
    <th scope="col">Percentage: ${(correctAnswerCounter / 10) * 100}%</th>`);

    // Shows the results chart
    $('.results').show(3000);
  }
});

$('.reset-button').on('click',function(){
  correctAnswerCounter = 0;
  incorrectAnswerCounter = 0;
  userAnswers = [];
  questionCounter = 1;

  $('.question-counter').text(questionCounter + ' of 10');
  $('.incorrectAnswerCounter').text(incorrectAnswerCounter);
  $('.correctAnswerCounter').text(correctAnswerCounter);
  
  $('.results').hide();
  $('header').show();
  
  $('.table').html(`<thead>
  <tr class="final-score">
  </tr>
  <tr>
    <th scope="col">Question #</th>
    <th scope="col">Your Answer</th>
    <th scope="col">Answer Key</th>
  </tr>
</thead>
<tbody>
</tbody>`);

  $('ul li').first().removeClass('disabled').addClass('active');
});


