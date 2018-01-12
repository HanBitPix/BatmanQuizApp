'use strict';

// This holds Questions # 1 - 10
function questions(currentQuestionNumber){
  switch(currentQuestionNumber) {
  // Question #1
  case 1:
    $('#target').html(`
      <label for="exampleFormControlSelect1">Who is Batman?</label>
      <select name="question1" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
        <option value="0">Your Answer</option>
        <option value="Clark Kent">Clark Kent</option>
        <option value="Tony Stark">Tony Stark</option>
        <option value="Bruce Wayne">Bruce Wayne</option>
        <option value="Steve Rogers">Steve Rogers</option>
      </select>
      <input data-toggle="modal"  data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #2
  case 2:
    $('#target').html(`
    <label for="exampleFormControlSelect1">What city is Batman from?</label>
    <select name="question2" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Metropolis">Metropolis</option>
      <option value="Central City">Central City</option>
      <option value="Star City">Star City</option>
      <option value="Gotham City">Gotham City</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #3
  case 3:
    $('#target').html(`
    <label for="exampleFormControlSelect1">What superpower does Batman have?</label>
    <select name="question3" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Super Strength">Super Strength</option>
      <option value="Flight">Flight</option>
      <option value="Speed">Speed</option>
      <option value="None">None</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #4  
  case 4:
    $('#target').html(`
    <label for="exampleFormControlSelect1">What was the main reason Bruce Wayne became Batman?</label>
    <select name="question4" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Death of his son">Death of his son</option>
      <option value="To bring justice to all criminals">To bring justice to all criminals</option>
      <option value="Death of his parents">Death of his parents</option>
      <option value="Because of Joker">Because of Joker</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #5  
  case 5:
    $('#target').html(`
    <label for="exampleFormControlSelect1">What are the names of Bruce Wayne's parents?</label>
    <select name="question4" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Jonathan & Martha">Jonathan & Martha</option>
      <option value="Thomas & Selina">Thomas & Selina</option>
      <option value="Thomas & Martha">Thomas & Martha</option>
      <option value="Jonathan & Selina">Jonathan & Selina</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #6  
  case 6:
    $('#target').html(`
    <label for="exampleFormControlSelect1">Who is Batman's guardian and favorite butler?</label>
    <select name="question4" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Alfred Pennyworth">Alfred Pennyworth</option>
      <option value="Oswald Cobblepot">Oswald Cobblepot</option>
      <option value="Edward Nigma">Edward Nigma</option>
      <option value="James Gordon">James Gordon</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #7  
  case 7:
    $('#target').html(`
    <label for="exampleFormControlSelect1">Name of Batman's first Robin.</label>
    <select name="question4" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Jason Todd">Jason Todd</option>
      <option value="Dick Grayson">Dick Grayson</option>
      <option value="Tim Drake">Tim Drake</option>
      <option value="Damian Wayne">Damian Wayne</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #8  
  case 8:
    $('#target').html(`
    <label for="exampleFormControlSelect1">Who is the mother of Batman's son, Damian Wayne?</label>
    <select name="question4" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Catwoman">Catwoman</option>
      <option value="Talia al Ghul">Talia al Ghul</option>
      <option value="Wonder Woman">Wonder Woman</option>
      <option value="Batwoman">Batwoman</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #9  
  case 9:
    $('#target').html(`
    <label for="exampleFormControlSelect1">Who killed Bruce Wayne's parents?</label>
    <select name="question4" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Joker">Joker</option>
      <option value="Joe Chill">Joe Chill</option>
      <option value="James Gordon">James Gordon</option>
      <option value="Riddler">Riddler</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  // Question #10  
  case 10:
    $('#target').html(`
    <label for="exampleFormControlSelect1">What comic book title did Batman first appear?</label>
    <select name="question4" class="custom-select custom-select-lg" id="exampleFormControlSelect1">
      <option value="0">Your Answer</option>
      <option value="Action Comics">Action Comics</option>
      <option value="Detective Comics">Detective Comics</option>
      <option value=" Superman">Superman</option>
      <option value="Batman">Batman</option>
    </select>
    <input data-toggle="modal" data-target="#exampleModalCenter" class="btn mt-4 btn-outline-primary btn-lg btn-block" type="submit" value="SUBMIT"/>`);
    break;
  }
}

const answers = ['Bruce Wayne','Gotham City','None','Death of his parents','Thomas & Martha','Alfred Pennyworth','Dick Grayson','Talia al Ghul','Joe Chill','Detective Comics'];

// This holds all the correct answers in array
function answerKey(questionNumber){
  // Array of answers
  return answers[questionNumber];
}
