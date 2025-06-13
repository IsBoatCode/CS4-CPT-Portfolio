$(function() {
  // Typed.js initialization
  $(".typed").typed({
    strings: [
      "stat nolandubel<br/>" +
      "><span class='caret'>$</span> job: Swim Instructor: City Of Mississauga <br/> ^100" +
      "><span class='caret'>$</span> skills: Speedrunning, Coding, Rapping <br/> ^100" +
      "><span class='caret'>$</span> hobbies: Volleyball, Video Games, Drumming <br/> ^300" +
      "><span class='caret'>$</span> alias: IsBoat <br/> ^300" +
      "><span class='caret'>$</span> amount: 1 of a kind <br/> ^300" +
      "><span class='caret'>$</span> age: 17</span><br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {
      $('.message form').show();
    },
  });

  $('.message form').hide();
});
