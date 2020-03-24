var app = angular.module("at", ["pascalprecht.translate"]);

app.config(function ($translateProvider) {
  $translateProvider.translations("en", {
    TITLE:
      "Answer these questions and check your health status for coronavirus.",
    selectGender: "Select Gender",
    male: "Male",
    female: "Female",
    yes: "Yes",
    no: "No",
    notsure: "Not Sure",
    guideTitle: "SELF-QUARANTINE GUIDE",
    guideH1: "Why am I being asked to self-isolate?",
    guideP1: "Self-isolation can help prevent the spread of infections, such as novel coronavirus (2019-nCoV). When you are exposed to an illness, there is a time between the exposure and when you start to feel sick. This is known as the incubation period (usually 2 to 10 days for 2019-nCoV, and up to a maximum of 14 days). There is a very small chance that you can spread the germs during this time (the few days before a feeling of sickness starts). More importantly, staying home means that if you do start to feel sick, you won’t run the risk of this happening while you are in a public place. Self-isolation is a cautious action used to lower the chance that the virus could spread to others. It is important to remember that not everyone who is exposed will get sick, and anyone who feels well for the full 14 days after an exposure of concern is not considered to be infectious. ",
    guideH2: "What does self-isolation mean?",
    guideP2: "Self-isolation means avoiding situations where you could infect other people. This means all situations where you may come in contact with others, such as social gatherings, work, school/university, child care, athletic events, faith-based gatherings, healthcare facilities, grocery stores, restaurants, shopping malls, and any public gatherings. You should, (where possible) not use public transportation including buses, taxis, or ride sharing. As much as possible, you should limit your contact with people and avoid having visitors to your home, but it is okay for friends, family or delivery drivers to drop off food or other things you may need. You can also use delivery or pick up services for errands such as grocery shopping. If you need to leave your home for an urgent errand, such as picking up essential medication, as a precaution to further reduce risk of spread, you can wear a surgical mask while you are out. ",
    guideH3: "What else can I do to stop the spread of infection?",
    guideL1:"Consider allocating a separate room with adequate ventilation at home if possible and  household members should stay in another room or to be separated from the returnee.",
    guideL2:"Maintain at least one meter distance from family members.",
    guideL3:" Preferably, household members should use a separate bathroom. But, if sharing the same bathroom, cleaning of taps, doorknobs and utensils with soap and water or disinfectant after each use are very important.",
    guideL4:"Need to minimize visitors to home and returnee should not face any visitors",
    guideL5:"Frequent hand washing with soap and water for at least 20 seconds at a time and maintain alcohol based hand hygiene in instances where hand washing facilities are inadequate 6. Avoid touching eyes, nose and mouth with unwashed hands.",
    guideL6:"Have adequate supplies for personal hygiene, food and drinks. Also have clear , undisrupted lines of communication.",
    guideL7:"Home quarantined person is expected to monitor body temperature using a thermometer twice a day. If gets fever , cough, difficulty in breathing, sore throat, body aches and pain, including flue like symptoms, immediately inform 1999 ,  MOH / PHI of the area immediately",
    guideL8:"The disposable facemasks and gloves after use should be properly discarded without reuse, preferably in a closed container",
    guideL9:"Assign separate dishes, drinking glasses, cups, eating utensils, towels, bedding, and other items for the quarantined person",
    guideL10:"Used utensils, bed linen and clothes should wash with soap and water",
  });
  $translateProvider.translations("lk", {
    TITLE: "කොරෝනා වෛරසයෙන් ඔබේ සෞඛ්‍ය තත්වය පරීක්ෂා කර ගැනීමට පහත සඳහන් ප්‍රශ්න වලට පිළිතුරු සපයන්න",
    selectGender: "ස්ත්‍රී පුරුෂභාවය",
    male: "පුරුෂ",
    female: "ස්ත්‍රී",
    yes: "ඔව්",
    no: "නෑ",
    notsure: "අවිනිශ්චිතයි"
  });
  $translateProvider.preferredLanguage("en");
});

app.controller("Ctrl", function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});
