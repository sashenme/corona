// var englishQ = [ 
//     { title: "Are you experiencing any of the following conditions?", notsure: false, items: ["Severe difficulty breathing (e.g., Struggling for each breath, Speaking in single words)", "Severe chest pain", "Feeling confused or disoriented"] },
//     { title: "Do you have fever?", subtile: "A fever is considered when your body temperature is above 98.6 F or 37 C", notsure: false },
//     { title: "Do you have a dry cough?", notsure: false },
//     { title: "Do you have any difficulty in breathing?", notsure: false },
//     { title: "Do you have any of the following symptoms?", notsure: false, items: ["Tiredness", "Aches and Pains", "Nasal Congestion", "Runny Nose", "Sore Throat", "Diarrhoea"] },
//     { title: "Travel & Social History", subtile: "Have you returned to Sri Lanka from any country within the last 14 days?  Or Have you been in contact with a confirmed or suspected COVID19 patient during the last 14 days?", notsure: true, }
// ];

// var sinhalaQ = [ 
//     { title: "ඔබ පහත සඳහන් සෞඛ්‍ය  තත්වයන්  වලින් එකක් හෝ අත්විඳිනවාද?", notsure: false, items: ["හුස්ම ගැනීමේ දැඩි අපහසුතාවයක් (කතා කිරීමට වත් නොහැකි අයුරෙන් )", "පපුවේ තද ගතියක් හෝ වේදනාවක්", "මානසික ව්‍යාකුලතාවයක්"] },
//     { title: "Do you have fever?", subtile: "A fever is considered when your body temperature is above 98.6 F or 37 C", notsure: false },
//     { title: "Do you have a dry cough?", notsure: false },
//     { title: "Do you have any difficulty in breathing?", notsure: false },
//     { title: "Do you have any of the following symptoms?", notsure: false, items: ["Tiredness", "Aches and Pains", "Nasal Congestion", "Runny Nose", "Sore Throat", "Diarrhoea"] },
//     { title: "Travel & Social History", subtile: "Have you returned to Sri Lanka from any country within the last 14 days?  Or Have you been in contact with a confirmed or suspected COVID19 patient during the last 14 days?", notsure: true, }
// ];
var questions = [
    { title: "Are you experiencing any of the following conditions?", notsure: false, items: ["Severe difficulty breathing (e.g., Struggling for each breath, Speaking in single words)", "Severe chest pain", "Feeling confused or disoriented"] },
    { title: "Do you have fever?", subtile: "A fever is considered when your body temperature is above 98.6 F or 37 C", notsure: false },
    { title: "Do you have a dry cough?", notsure: false },
    { title: "Do you have any difficulty in breathing?", notsure: false },
    { title: "Do you have any of the following symptoms?", notsure: false, items: ["Tiredness", "Aches and Pains", "Nasal Congestion", "Runny Nose", "Sore Throat", "Diarrhoea"] },
    { title: "Travel & Social History", subtile: "Have you returned to Sri Lanka from any country within the last 14 days?  Or Have you been in contact with a confirmed or suspected COVID19 patient during the last 14 days?", notsure: true, }
];



var language = 'english';
var gender = 0;
var answers = [];

$(document).ready(function () {

    //Starting Screen
    $("#btn-notsure").hide();
    $("#q-list").hide()
    $("#q-subtitle").hide()
    $(".recommendation").hide();
    $(".questions").hide(); //
    $(".buttons").hide(); //
    $("#return").hide();
    $(".guide").hide();


    $("#btn-male").click(function () {
        startQuestionare(1);
    });
    $("#btn-female").click(function () {
        startQuestionare(0);
    });

    function startQuestionare(getGender) {


        gender = getGender;
        $(".gender").hide();
        $(".questions").show(); //
        $(".buttons").show(); //
        var q = 0;
        showQuestion(q);


        $(".icon-info").attr("src", "img/icon-" + gender + "-info.png");
        $(".icon-warning").attr("src", "img/icon-" + gender + "-warning.png");
        $(".icon-danger").attr("src", "img/icon-" + gender + "-danger.png");


        $("#btn-yes").click(function () {
            saveAnswers(true);
            q++;
            showQuestion(q);
        });
        $("#btn-notsure").click(function () {
            saveAnswers(true);
            q++;
            showQuestion(q);
        });
        $("#btn-no").click(function () {
            saveAnswers(false);
            q++;
            showQuestion(q);

        });

        $("#return").click(function () {
            q--;
            showQuestion(q);
            answers.pop();
            $("#btn-notsure").hide();
        });

    }






});


function showQuestion(q) {
    if (q > 0) {
        $("#return").show();
    } else {
        $("#return").hide();
    }
    if (q < questions.length) {
        console.log(gender);
        $("#q-icon").attr("src", "img/icon-" + gender + q + ".png");


        $("#q-title").html(questions[q].title);
        if ('subtile' in questions[q]) {
            $("#q-subtitle").show()

            $("#q-subtitle").html(questions[q].subtile);
        } else {
            $("#q-subtitle").hide()

        }
        if ('items' in questions[q]) {
            $("#q-list").show();
            if (q == 4) {
                $("#q-list").html("");
            }
            if ($("#q-list").is(':empty')) {
                for (i = 0; i < questions[q].items.length; i++) {

                    $("#q-list").append("<li>" + questions[q].items[i] + "</li>");


                }
            }
        } else {
            $("#q-list").hide()
        }
        if (questions[q].notsure) {
            $("#btn-notsure").show();
        }
    }

}

function saveAnswers(answer) {


    answers.push(answer);
    if (answers[0]) {
        $(".buttons").hide();
        $(".questions").hide();
        showRecommendation("3");
    }
    if (answers.length == 6) {
        $(".buttons").hide();
        $(".questions").hide();

        if (answers[1] == true && checkSymtoms() == false && answers[5] == false) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] == false && checkSymtoms() == true && answers[5] == false) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] == false && checkSymtoms() == false && answers[5] == true) {
            showRecommendation("1");
            $(".guide").show();
        } else if (answers[1] == false && checkSymtoms() == true && answers[5] == true) {
            showRecommendation("3");
        } else if (answers[1] == true && checkSymtoms() == true && answers[5] == true) {
            showRecommendation("3");
        } else if (answers[1] == true && checkSymtoms() == true && answers[5] == false) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] == true && checkSymtoms() == false && answers[5] == true) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] == false && checkSymtoms() == false && answers[5] == false) {
            showRecommendation("5");
        }


    } else {

    }
    console.log(answers);
}

function showRecommendation(key) {
    $("#rec-" + key).show();
}

function checkSymtoms() {
    if (answers[2] || answers[3] || answers[4]) {
        return true;
    } else {
        return false;
    }
}
