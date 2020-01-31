// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById("modal")

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  heartClick()
})

function heartClick() {
  const hearts = document.getElementsByClassName("like-glyph")
  for(const heart of hearts) {
    heart.addEventListener("click", function() {
      mimicServerCall()
        .then(response => {
          if(heart.innerText == EMPTY_HEART) {
            heart.innerText = FULL_HEART
            heart.className = "activated-heart"
          } else {
            heart.innerText = EMPTY_HEART
            heart.classList.remove("activated-heart")
          }

        })
        .catch(error => {
          modal.classList.remove("hidden")
          modalMessage = document.getElementById("modal-message")
          modalMessage.innerText = error
          setTimeout(function(){
            modal.className = "hidden"
          }, 5000)
        })
    })
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
