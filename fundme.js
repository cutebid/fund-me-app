let carouselImages  = document.querySelectorAll('.carousel-images');
let images = document.querySelectorAll('.carousel-images .image');
let totalImage = images.length;
let counter = 0;


document.getElementById('next').addEventListener('click', function(){
    moveToNextSlide();
})
document.getElementById('previous').addEventListener('click', function(){
    moveToPrevSlide();
});
function updateCounterPosition(){
    for(let image of images){
        image.classList.remove('image-visible');
    }
    images[counter].classList.add('image-visible')
}
 
function moveToNextSlide(){
    updateCounterPosition()
    if(counter === totalImage - 1 ){
       counter = 0;
    }
    else{
        counter++;
    }
}
function moveToPrevSlide(){
    updateCounterPosition()
    if(counter === 0){
        counter = totalImage - 1;
     }
     else{
         counter--;
     }
}


//      // the inputs validation
//      function nameValidation(){
//         let nameinput = document.getElementById('Name');
//         let namepara = document.getElementById('namePara');
//         if(nameinput.value == ""){
//            namepara.innerHTML ='Please enter your name'
//             nameinput.style.border = '2px solid red';
//         }
//         else{
//            nameinput.style.border = '3px solid green';
//            namepara.innerHTML =''
//         }

//  };

//  function emailValidation(){
//    let emailinput = document.getElementById('Email');
//    let emailpara = document.getElementById('emailPara');
//    if(emailinput.value == ""){
//       emailpara.innerHTML ='Please enter an email'
//        emailinput.style.border = '2px solid red';
//    }
//    else if(!emailinput.value.includes('@')){
//       emailinput.style.border = '2px solid red';
//       emailpara.innerHTML =' Invalid email'
//    }
//    else{
//        emailinput.style.border = '2px solid green';
//        emailpara.innerHTML =''
//    }

// };

// function numberValidation(){
//     let numberinput = document.getElementById('Number');
//     console.log(numberinput)
//     let numberpara = document.getElementById('numberPara');
//     let maxlength = '11'
//     if(numberinput.value == '') {
//         numberpara.innerHTML ='Please enter your telephone number';
//         numberinput.style.border = '3px solid red'
//     }
//     else if(numberinput.value.length < maxlength){
//        numberpara.innerHTML ='Phone number cannot be less than 11 characters';
//        numberinput.style.border = '3px solid red'
//     }
//    //  else if(isNaN(numberinput.value)){
//    //     numberpara.innerHTML ='Phone number is not a number';
//    //     numberinput.style.border = '2px solid red'
//    //  }

//     else{
//        numberinput.style.border = '3px solid green';
//        numberpara.innerHTML =''
       
//     }

    
// }

//     document.getElementById('Name').onblur = nameValidation;
//     document.getElementById('Email').onblur = emailValidation;
//     document.getElementById('Number').onblur = numberValidation;
