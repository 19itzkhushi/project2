
//hidden box

// Show the box when the page is loaded
// window.onload = function() {
//     var box = document.getElementById("box");
//     setTimeout(function() {
//         box.classList.remove("hidden");
//         box.style.transform = "scale(1)";
//     },-2000 ); // Adjust the delay for appearing as needed
//     // Hide the box after a delay (e.g., 5 seconds)
//     setTimeout(function() {
//         box.classList.add("hidden");
//         box.style.transform = "scale(0.5)";
//     }, 3500); // Adjust the delay for disappearing as needed
//   };

  
  function flip(){
    console.log("clickeddddddd");
    var flipbox = document.querySelector('.profileimg',);
   flipbox.classList.toggle('animate');
   flipbox.classList.remove('animate');
void flipbox.offsetWidth; // This forces a reflow, flushing the CSS changes
flipbox.classList.add('animate');

  }

const extrabox = document.querySelector('.extra');
  //about me hidden box appearing
  document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('myh1');
    const showButton2 = document.getElementById('candies')
    const box = document.getElementById('box1');
    const closeButton = document.getElementById('closeButton1');
  let i=0;
  showButton2.addEventListener('click', function() {
    const textbox = document.getElementById('firsth11')
    box.classList.toggle('visible-box');
    
    const heightbox = document.getElementById('itbox');
    const constheight = heightbox.offsetHeight;
    console.log("heighttt is",constheight);
    if(i%2==0){
       textbox.innerHTML = "Chocolate level one is unlocked!!";
       textbox.classList.toggle('textdecor');
     extrabox.style.height = (constheight + 630)+'px';
     
    
     i++;
    }else{
     
      extrabox.classList.toggle('new');
      extrabox.style.height = (0)+'px';
      i++;
    }

  });
    showButton.addEventListener('click', function() {
      const textbox = document.getElementById('firsth11')
      box.classList.toggle('visible-box');
      const heightbox = document.getElementById('itbox');
      const constheight = heightbox.offsetHeight;
      console.log("heighttt is",constheight);
      if(i%2==0){
         textbox.innerHTML = "Chocolate level one is unlocked!!";
         textbox.classList.toggle('textdecor');
       extrabox.style.height = (constheight + 630)+'px';
       i++;
      }else{
       
        extrabox.classList.toggle('new');
        extrabox.style.height = (0)+'px';
        
        i++;
      }
    });
  
   
  });


  //barchart

  
    // Set up the data for the bar chart
    const data = {
        labels: ['Java', 'C++', 'Javascript', 'DSA', 'Python', 'HTML'],
        datasets: [{
            label: 'Sales',
            data: [90, 70, 60, 81, 76, 80],
            backgroundColor: 'green',
            borderColor: 'black',
            borderWidth: 2
        }]
    };

    // Configure the chart options
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Initialize the bar chart
    const ctx = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });



//scroll......

window.onload = function() {

  const myDiv = document.getElementById('trainid');
  myDiv.classList.toggle('move-left'); 


//scroller1


const hiddenBox1 = document.querySelector('#contact-section');
const hiddenBoxP1 = hiddenBox1.querySelector('p');
const spacerHeight1 = document.querySelector('.spacer1').offsetHeight;

function handleScroll1() {
    const scrollPosition1 = window.scrollY + window.innerHeight;
    const hiddenBoxTop1 = hiddenBox1.offsetTop;


    if (scrollPosition1 > hiddenBoxTop1 + spacerHeight1 / 2) {
        hiddenBox1.style.height = 'auto';
        hiddenBoxP1.style.opacity = '1';
        // Adjust to desired height
     
    }
    else {
      hiddenBox1.style.height = '0';
      hiddenBoxP1.style.opacity = '0';    
  }
}

window.addEventListener('scroll', handleScroll1);



 //scroller2

  const hiddenBox = document.querySelector('.projects');
  const hiddenBoxP = hiddenBox.querySelector('p');
  const spacerHeight = document.querySelector('.spacer').offsetHeight;

  function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const hiddenBoxTop = hiddenBox.offsetTop;


      if (scrollPosition > hiddenBoxTop + spacerHeight / 2) {
          hiddenBox.style.height = '500px'; // Adjust to desired height
       
      }
      else {
        hiddenBox.style.height = '0';
        hiddenBoxP.style.opacity = '0';    
    }
  }

  window.addEventListener('scroll', handleScroll);
};

//contact

const scriptURL = 'https://script.google.com/macros/s/AKfycbygbFcFDkcqCpbbxWwbH--Wwf0khZWLx-9phEPfifaGrH__S14mLH-hbbF0p43pR3AF/exec';
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwO365aGOgWgrvHGqRXQIs0l4IqgqXPPsLv-5GAbL3pQh9TcPFmIf0V_1WvlaS7mNF7/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent Successfully"
      setTimeout(function(){
          msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})






ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
  });
  ScrollReveal().reveal('.trainnew ,.para ,.sticker1,.profileimg,.eh1,.aboutme', { origin: 'top' });
  ScrollReveal().reveal(' .navbar ,.contact-left', { origin: 'left' });
  ScrollReveal().reveal('', { origin: 'bottom' });
  ScrollReveal().reveal('.contact-right', { origin: 'right' });


 



