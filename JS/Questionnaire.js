function check() {

    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    /*The checked property sets or returns the checked state of a radio button*/
    var q41 = document.getElementById("q41").checked;
    var q42 = document.getElementById("q42").checked;
    var q43 = document.getElementById("q43").checked;
    var q44 = document.getElementById("q44").checked;
    var q45 = document.getElementById("q45").checked;
    var q51 = document.getElementById("q51").checked;
    var q52 = document.getElementById("q52").checked;
    var q53 = document.getElementById("q53").checked;
    var q54 = document.getElementById("q54").checked;
    //we use the variable mark to store the correct and wrong answers
    var mark = 0;
    //we use the variable feedback to store the feedback information depends on the
    //answers of the user
    var feedback = "Feedback: <br> ";
    //question 1: check a date
    if (q1 == "1789-05-05") {
        feedback += "Question 1 correct <br>";
        mark += 2;

    } else if (q1 == "") {
        feedback += "Question 1 not answered <br>";
        mark += 0;

    } else {
        feedback += "Question 1 incorrect <br>";
        mark += -1;

    }

    //question 2: check a text or string
    if (q2 == "Arturo") {
        feedback += "Question 2 correct <br>";
        mark += 2;

    } else if (q2 == "") {
        feedback += "Question 2 not answered <br>";
        mark += 0;

    } else {
        feedback += "Question 2 incorrect <br>";
        mark += -1;

    }

    //question 3: check a text or string
    if (q3 == "Paris") {
        feedback += "Question 3 correct <br>";
        mark += 2;

    } else if (q1 == "empty") {
        feedback += "Question 3 not answered <br>";
        mark += 0;

    } else {
        feedback += "Question 3 incorrect <br>";
        mark += -1;

    }

    //question 4: check a radio input
    if (q42) {
        feedback += "Question 4 correct <br>";
        mark += 2;

    } else if (!q41 && !q42 && !q43 && !q44 && !q45) {
        feedback += "Question 4 not answered <br>";
        mark += 0;

    } else {
        feedback += "Question 4 incorrect <br>";
        mark += -1;

    }

    //question 5: in this case, any option is correct, so we check that the user has
    // choosen any option
    if (!q51 && !q52 && !q53 && !q54) {
        feedback += "Question 5 not answered <br>";
        mark += 0;

    } else {
        feedback += "Question 5 correct <br>";
        mark += 2;

    }

    if(mark == 10){
        document.getElementById("congratulations").innerHTML = "Congratulations, you got all answers right!";
    } else {
        /* Nothing happens */
    }

    document.getElementById("mark").innerHTML = "Final mark: " + mark;
    document.getElementById("feedback").innerHTML = feedback;

}//function