document.addEventListener('DOMContentLoaded', function() {

    var boxes = document.querySelectorAll('.box');

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function(event) {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    }


});
