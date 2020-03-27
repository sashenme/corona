

var questionsLK = [{
    title: "ඔබ පහත සඳහන් සෞඛ්‍ය  තත්වයන්  වලින් එකක් හෝ අත්විඳිනවාද?",
    notsure: false,
    items: ["හුස්ම ගැනීමේ දැඩි අපහසුතාවයක් (කතා කිරීමට වත් නොහැකි අයුරෙන් )", "පපුවේ තද ගතියක් හෝ වේදනාවක්", "මානසික ව්‍යාකුලතාවයක්"]
},
{
    title: " ඔබට උණ තත්වයක්  දැනට තිබේද?",
    subtile: "උණ තත්වයක් යනු ශරීර උෂ්ණත්වය සෙල්සියස් 37 හෝ ෆැරනයිට් 98.6 ට වැඩි විය යුතුය",
    notsure: false
},
{
    title: "ඔබට වියලි කැස්සක් තිබේද?",
    notsure: false
},
{
    title: "ඔබට හුස්ම ගැනීමේ අපහසුතාවයක් තිබේද?",
    notsure: false
},
{
    title: "ඔබට පහත සඳහන් අමතර රෝග ලක්ෂණ තිබේද?",
    notsure: false,
    items: ["මහන්සි ගතිය", "ඇඟේ පතේ රිදීමක් ", "නාසයේ සිරවුම් ගතියක්", "හොටු දියර ගැලීම", "උගුරේ අමාරුව", "පාචනය"]
},
{
    title: "සංචරණ හා සමාජ අන්තර්ක්‍රියා",
    subtile: " ඔබ පසුගිය දින 14 තුල ශ්‍රී ලංකාවෙන් පිටත සංචරණය යෙදුනාද ? හෝ ඔබ පසුගිය දින 14 තුල  කොරෝනා වෛරසය වැළඳුනු හෝ වැළඳුනු යැයි සැක සහිත පුද්ගලයෙකු ඇසුරක යෙදුනාද?",
    notsure: true,
},
{
    title: "ඔබ දුම් පානය කරන්නෙක්ද?",
    notsure: false,
},
{
    title: "ඔබට දියවැඩියාව ,  අධි රුධිර පීඩනය , හතිය හෝ වෙනත් ශ්වසන රෝග තිබේද ?",
    notsure: false
}
];

var questionsEN = [{
    title: "Are you experiencing any of the following conditions?",
    notsure: false,
    items: ["Severe difficulty breathing (e.g., Struggling for each breath, Speaking in single words)", "Severe chest pain", "Feeling confused or disoriented"]
},
{
    title: "Do you have fever?",
    subtile: "A fever is considered when your body temperature is above 98.6 F or 37 C",
    notsure: false
},
{
    title: "Do you have a dry cough?",
    notsure: false
},
{
    title: "Do you have any difficulty in breathing?",
    notsure: false
},
{
    title: "Do you have any of the following symptoms?",
    notsure: false,
    items: ["Tiredness", "Aches and Pains", "Nasal Congestion", "Runny Nose", "Sore Throat", "Diarrhoea"]
},
{
    title: "Travel & Social History",
    subtile: "Have you returned to Sri Lanka from any country within the last 14 days?  Or Have you been in contact with a confirmed or suspected COVID19 patient during the last 14 days?",
    notsure: true,
},
{
    title: "Do You Smoke?",
    notsure: false,
},
{
    title: "Do you have any chronic illnesses such as Diabetes, Hypertension, Asthma or other respiratory illness?",
    notsure: false
}
];

var questionsTA = [{
    title: "பின்வரும் நிபந்தனைகளில் ஏதேனும் ஒன்றை நீங்கள் சந்திக்கிறீர்களா?",
    notsure: false,
    items: ["மூச்சு விடுவதில் கடுமையான சிரமம் (உதாரணம் , ஒவ்வொரு சுவாசத்திற்கும் போராடுவது, ஒற்றை வார்த்தைகளில் பேசுவது)", "கடுமையான நெஞ்சு வலி", "குழப்பம் அல்லது  திசை திருப்பப்பட்ட உணர்வு"]
},
{
    title: "உங்களுக்கு காய்ச்சல் இருக்கிறதா?",
    subtile: "(உங்கள் உடல் வெப்பநிலை 98.6 F அல்லது 37 C க்கு மேல் இருக்கும்போது காய்ச்சல் கருதப்படுகிறது)",
    notsure: false
},
{
    title: "வறட்டு இருமல் இருக்கிறதா?",
    notsure: false
},
{
    title: "சுவாசிப்பதில் உங்களுக்கு ஏதாவது சிரமம் இருக்கிறதா?",
    notsure: false
},
{
    title: "உங்களுக்கு பின்வரும் அறிகுறிகள் ஏதேனும் உள்ளதா?",
    notsure: false,
    items: ["சோர்வு", "குடைச்சலும் வலியும்", "மூக்கடைப்பு", "மூக்கு ஒழுகுதல்", "தொண்டை வலி", "வயிற்றுப்போக்கு"]
},
{
    title: "பயணம் மற்றும் சமூக வரலாறு",
    subtile: "நீங்கள் கடந்த 14 நாட்களுக்குள் வெளிநாடுகளில் இருந்து இலங்கைக்கு திரும்பியிருக்கிறீர்களா? அல்லது கடந்த 14 நாட்களில் உறுதிப்படுத்தப்பட்ட அல்லது சந்தேகிக்கப்பட்ட COVID19 நோயாளியுடன் நீங்கள் தொடர்பு கொண்டுள்ளீர்களா? ",
    notsure: true,
},
{
    title: "நீங்கள்  புகைப்பிடிப்பவரா ?",
    notsure: false,
},
{
    title: "நீரிழிவு நோய், உயர் இரத்த அழுத்தம், ஆஸ்துமா அல்லது பிற சுவாச நோய் போன்ற நீண்டகால நோய்கள் ஏதேனும் உங்களுக்கு உள்ளதா?",
    notsure: false
}

];



var language = 'english';
var gender = 0;
var answers = [];
var currentQuestion = 0;

$(window).load(function () {
    // Animate loader off screen
    $(".lds-ellipsis").fadeOut("slow");
    $(".language-check").fadeIn("slow");

});

$(function () {
    $("#price-range").slider({
        range: "max",
        min: 1, // Change this to change the min value
        max: 100, // Change this to change the max value
        value: 25, // Change this to change the display value
        step: 1, // Change this to change the increment by value.
        slide: function (event, ui) {
            $("#priceRange").val(ui.value + " ");
            $("#age").html(ui.value)
        }
    });
    $("#priceRange").val($("#price-range").slider("value") + "");
});

$(document).ready(function () {
    $('#descrimination').modal('show');


    questions = questionsEN;
    //Starting Screen
    $("#btn-notsure").hide();
    $("#q-list").hide()
    $("#q-subtitle").hide()
    $(".recommendation").hide();
    $(".questions").hide(); //
    $(".buttons").hide(); //
    $("#return").hide();
    $(".guide").hide();

    $("#age-btn").click(function () {
        $(".gender").show();
        $('.age').hide();
        age = $("#priceRange").val();
        $("#txt-age").val(age);

    });

    $(".btn-male").click(function () {
        startQuestionare(1);
        $("#txt-gender").val(1);
    });
    $(".btn-female").click(function () {
        startQuestionare(0);
        $("#txt-gender").val(0);
    });

    function startQuestionare(getGender) {


        gender = getGender;
        $(".gender").hide();
        $(".questions").show(); //
        $(".buttons").show(); //

        showQuestion(currentQuestion);


        $(".icon-info").attr("src", "img/icon-" + gender + "-info.png");
        $(".icon-warning").attr("src", "img/icon-" + gender + "-warning.png");
        $(".icon-danger").attr("src", "img/icon-" + gender + "-danger.png");


        $("#btn-yes").click(function () {
            saveAnswers(true);
            currentQuestion++;
            showQuestion(currentQuestion);
        });
        $("#btn-notsure").click(function () {
            saveAnswers(true);
            currentQuestion++;
            showQuestion(currentQuestion);
        });
        $("#btn-no").click(function () {
            saveAnswers(false);
            currentQuestion++;
            showQuestion(currentQuestion);

        });

        $("#return").click(function () {
            currentQuestion--;
            showQuestion(currentQuestion, true);
            answers.pop();
            // $("#btn-notsure").hide();
        });

    }



    $('.btn-sinhala').click(function () {
        console.log($(this).parents().parent());
        questions = questionsLK;
        showQuestion(currentQuestion, true);
    });
    $('.btn-english').click(function () {
        questions = questionsEN;
        showQuestion(currentQuestion, true);
    });
    $('.btn-tamil').click(function () {
        questions = questionsTA;
        showQuestion(currentQuestion, true);
    });
    $(".language-btn").click(function () {
        $("#language .nav-item").removeClass("active");
        $(this).parent().addClass("active");
        dataLang = $(this).attr('data-lang');
        $("#" + dataLang).parent().addClass("active");
        $(".loading").fadeOut();

        $("#txt-language").val($(this).attr('data-language'));
    });


    $('#insert_form').on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            url: "./save.php",
            method: "POST",
            data: $('#insert_form').serialize(),
            beforeSend: function () {
                console.log("data added");

            },
            success: function (data) {
                // $('#insert_form')[0].reset();
                console.log(data);

            }
        });
    });

    $('#feedback_form').on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            url: "./feedback.php",
            method: "POST",
            data: $('#feedback_form').serialize(),
            beforeSend: function () {
              

            },
            success: function (data) {
                console.log(data);
                $('#feedback_form')[0].reset();
                $("#feedbackForm").modal("hide");
                alert("Thanks for your feedback!");

            }
        });
    });
});


function showQuestion(q, langRefresh) {
    if (langRefresh == null)
        langRefresh = false;

    currentQuestion = q;
    if (currentQuestion > 0) {
        $("#return").show();
    } else {
        $("#return").hide();
    }
    if (currentQuestion < questions.length) {
        console.log(gender);
        $("#q-icon").attr("src", "img/icon-" + gender + currentQuestion + ".png");


        $("#q-title").html(questions[currentQuestion].title);
        if ('subtile' in questions[currentQuestion]) {
            $("#q-subtitle").show()

            $("#q-subtitle").html(questions[currentQuestion].subtile);
        } else {
            $("#q-subtitle").hide()

        }
        if ('items' in questions[currentQuestion]) {
            $("#q-list").show();
            if (currentQuestion == 4 || langRefresh) {
                $("#q-list").html("");
            }
            if ($("#q-list").is(':empty') || langRefresh) {
                for (i = 0; i < questions[currentQuestion].items.length; i++) {

                    $("#q-list").append("<li>" + questions[currentQuestion].items[i] + "</li>");


                }
            }
        } else {
            $("#q-list").hide()
        }
        if (questions[currentQuestion].notsure) {
            $("#btn-notsure").show();
        } else {
            $("#btn-notsure").hide();
        }
    }
    console.log(currentQuestion)
}

function saveAnswers(answer) {


    answers.push(answer);
    if (answers[0]) {
        $(".buttons").hide();
        $(".questions").hide();
        $("#txt-q0").val('1');
        showRecommendation("3");
    }
    if (answers.length == 8) {
        $(".buttons").hide();
        $(".questions").hide();


        for (v = 0; v < 9; v++) {
            if (answers[v]) {
                $("#txt-q" + v).val('1');
            } else {
                $("#txt-q" + v).val('0');
            }
        }

        if (!answers[1] && !checkSymtoms() && !answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("5");
            $(".guide").show();
        } else if (!answers[1] && !checkSymtoms() && !answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("5");
            $(".guide").show();
        } else if (!answers[1] && !checkSymtoms() && !answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("1");
            $(".guide").show();
        } else if (!answers[1] && !checkSymtoms() && !answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("1");
            $(".guide").show();
        } else if (!answers[1] && !checkSymtoms() && answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (!answers[1] && !checkSymtoms() && answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (!answers[1] && !checkSymtoms() && answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("1");
            $(".guide").show();
        } else if (!answers[1] && !checkSymtoms() && answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("1");
            $(".guide").show();
        } else if (!answers[1] && checkSymtoms() && !answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (!answers[1] && checkSymtoms() && !answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (!answers[1] && checkSymtoms() && !answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (!answers[1] && checkSymtoms() && !answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (!answers[1] && checkSymtoms() && answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (!answers[1] && checkSymtoms() && answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (!answers[1] && checkSymtoms() && answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("3");
        } else if (!answers[1] && checkSymtoms() && answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("3");
        } else if (answers[1] && !checkSymtoms() && !answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] && !checkSymtoms() && !answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] && !checkSymtoms() && !answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] && !checkSymtoms() && !answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] && !checkSymtoms() && answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] && !checkSymtoms() && answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] && !checkSymtoms() && answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] && !checkSymtoms() && answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] && checkSymtoms() && !answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] && checkSymtoms() && !answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("4");
            $(".guide").show();
        } else if (answers[1] && checkSymtoms() && !answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("3");
        } else if (answers[1] && checkSymtoms() && !answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("3");
        } else if (answers[1] && checkSymtoms() && answers[4] && !answers[5] && !highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] && checkSymtoms() && answers[4] && !answers[5] && highRiskQ()) {
            showRecommendation("2");
            $(".guide").show();
        } else if (answers[1] && checkSymtoms() && answers[4] && answers[5] && !highRiskQ()) {
            showRecommendation("3");
        } else if (answers[1] && checkSymtoms() && answers[4] && answers[5] && highRiskQ()) {
            showRecommendation("3");
        }

    } else {

    }
    console.log(answers);
}
var riskLevel;
function showRecommendation(key) {
    $("#rec-" + key).show();
    $("#txt-recommendation").val(key);
    $("#submit-btn").trigger('click');
   
    switch (key) {
        case "1":
            riskLevel = 70;
            break;
        case "2":
            riskLevel = 30;
            break;
        case "3":
            riskLevel = 0;
            $("#rec-3 .risk-mark").css("margin-left","-6px");
            $("#rec-3 i").css("margin-left","0");
            break;
        case "4":
            riskLevel = 60;
            break;
        case "5":
            riskLevel = 100;
            $("#rec-5 .risk-mark").css("margin-left","-24px");
            $("#rec-5 i").css("margin-left","-17px");
            break;

    }
    // if(key == 3)
    

    setTimeout(() => {
        console.log(riskLevel);
        $("#rec-" + key + " i").css('left', riskLevel + '%');
        $("#rec-" + key + " .risk-mark").css('left', riskLevel + '%');
    }, 500);

}

function checkSymtoms() {
    if (answers[2] || answers[3]) {
        return true;
    } else {
        return false;
    }
}

function highRiskQ() {
    if (age > 59 || answers[6] || answers[7]) {
        return true;
    } else {
        return false;
    }
}