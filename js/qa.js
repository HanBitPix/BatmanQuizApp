'use strict';

// This holds all the correct answers in an array from 1 - 10
const answers = ['Bruce Wayne','Gotham City','None','Death of his parents','Thomas & Martha','Alfred Pennyworth','Dick Grayson','Talia al Ghul','Joe Chill','Detective Comics'];

// Simple arrow function that checks the answer key with the question number asked
const answerKey = (questionNumber) => answers[questionNumber];

// This holds Questions # 1 - 10
function questions(currentQuestionNumber){
  switch(currentQuestionNumber) {
  // Question #1
  case 1:
    $('#target').html(`
      <label for="questionNumberOne">Who is Batman?</label>
      <select role="listbox" name="questionNumberOne" class="custom-select custom-select-lg" id="questionNumberOne">
        <option role="option" value="0">Your Answer</option>
        <option role="option" value="Clark Kent">Clark Kent</option>
        <option role="option" value="Tony Stark">Tony Stark</option>
        <option role="option" value="Bruce Wayne">Bruce Wayne</option>
        <option role="option" value="Steve Rogers">Steve Rogers</option>
      </select>
      <input role="button" data-toggle="modal"  data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #2
  case 2:
    $('#target').html(`
    <label for="questionNumberTwo">What city is Batman from?</label>
    <select role="listbox" name="questionNumberTwo" class="custom-select custom-select-lg" id="questionNumberTwo">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Metropolis">Metropolis</option>
      <option role="option" value="Central City">Central City</option>
      <option role="option" value="Star City">Star City</option>
      <option role="option" value="Gotham City">Gotham City</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #3
  case 3:
    $('#target').html(`
    <label for="questionNumberThree">What superpower does Batman have?</label>
    <select role="listbox" name="questionNumberThree" class="custom-select custom-select-lg" id="questionNumberThree">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Super Strength">Super Strength</option>
      <option role="option" value="Flight">Flight</option>
      <option role="option" value="Speed">Speed</option>
      <option role="option" value="None">None</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #4  
  case 4:
    $('#target').html(`
    <label for="questionNumberFour">What was the main reason Bruce Wayne became Batman?</label>
    <select role="listbox" name="questionNumberFour" class="custom-select custom-select-lg" id="questionNumberFour">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Death of his son">Death of his son</option>
      <option role="option" value="To bring justice to all criminals">To bring justice to all criminals</option>
      <option role="option" value="Death of his parents">Death of his parents</option>
      <option role="option" value="Because of Joker">Because of Joker</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #5  
  case 5:
    $('#target').html(`
    <label for="questionNumberFive">What are the names of Bruce Wayne's parents?</label>
    <select role="listbox" name="questionNumberFive" class="custom-select custom-select-lg" id="questionNumberFive">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Jonathan & Martha">Jonathan & Martha</option>
      <option role="option" value="Thomas & Selina">Thomas & Selina</option>
      <option role="option" value="Thomas & Martha">Thomas & Martha</option>
      <option role="option" value="Jonathan & Selina">Jonathan & Selina</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #6  
  case 6:
    $('#target').html(`
    <label for="questionNumberSix">Who is Batman's guardian and favorite butler?</label>
    <select role="listbox" name="questionNumberSix" class="custom-select custom-select-lg" id="questionNumberSix">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Alfred Pennyworth">Alfred Pennyworth</option>
      <option role="option" value="Oswald Cobblepot">Oswald Cobblepot</option>
      <option role="option" value="Edward Nigma">Edward Nigma</option>
      <option role="option" value="James Gordon">James Gordon</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #7  
  case 7:
    $('#target').html(`
    <label for="questionNumberSeven">Name of Batman's first Robin.</label>
    <select role="listbox" name="questionNumberSeven" class="custom-select custom-select-lg" id="questionNumberSeven">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Jason Todd">Jason Todd</option>
      <option role="option" value="Dick Grayson">Dick Grayson</option>
      <option role="option" value="Tim Drake">Tim Drake</option>
      <option role="option" value="Damian Wayne">Damian Wayne</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #8  
  case 8:
    $('#target').html(`
    <label for="questionNumberEight">Who is the mother of Batman's son, Damian Wayne?</label>
    <select role="listbox" name="questionNumberEight" class="custom-select custom-select-lg" id="questionNumberEight">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Catwoman">Catwoman</option>
      <option role="option" value="Talia al Ghul">Talia al Ghul</option>
      <option role="option" value="Wonder Woman">Wonder Woman</option>
      <option role="option" value="Batwoman">Batwoman</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #9  
  case 9:
    $('#target').html(`
    <label for="questionNumberNine">Who killed Bruce Wayne's parents?</label>
    <select role="listbox" name="questionNumberNine" class="custom-select custom-select-lg" id="questionNumberNine">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Joker">Joker</option>
      <option role="option" value="Joe Chill">Joe Chill</option>
      <option role="option" value="James Gordon">James Gordon</option>
      <option role="option" value="Riddler">Riddler</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #10  
  case 10:
    $('#target').html(`
    <label for="questionNumberTen">What comic book title did Batman first appear?</label>
    <select role="listbox" name="questionNumberTen" class="custom-select custom-select-lg" id="questionNumberTen">
      <option role="option" value="0">Your Answer</option>
      <option role="option" value="Action Comics">Action Comics</option>
      <option role="option" value="Detective Comics">Detective Comics</option>
      <option role="option" value=" Superman">Superman</option>
      <option role="option" value="Batman">Batman</option>
    </select>
    <input role="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  }
}