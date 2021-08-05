class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span> `;

        let typeSpeed = 300;

        if (this.isDeleating) {
            typeSpeed/= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init () {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}

function names () {
     names = document.getElementById('name').style.color = 'red';
     names.style.color = 'red';
    
     var name;    
    
    document.getElementById('Main-footer').style.color = 'blue';

    document.body.style.background = "#f3f3f3";
}
let footers = document.getElementById(".name");

footers.addEventListener("mouseenter", function ( event ){
    event.target.style.color = "purple"

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
    footers.addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.color = "orange";
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.color = "";
        }, 500);
      }, false);
    
