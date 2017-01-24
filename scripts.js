document.addEventListener("DOMContentLoaded", function() {
  var leftTrigger = document.getElementById('portfolio-toggle-button');
  var slidingSections = document.querySelectorAll('.sliding-site-section');
  var secondSection = document.querySelector('.sliding-site-section.second');

  leftTrigger.addEventListener('click', function(){
    slidingSections.forEach(function(element) {
      element.classList.toggle('showing');
      document.body.classList.add('viewport-locked')
      setTimeout(() => document.body.classList.remove('viewport-locked'), 500);
    });
  });
});