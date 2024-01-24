
// function to generate random numbers
function randomnumbers(length)
{
    const characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    var captcharesult=''
    for(var i=0;i<length;i++)
    {
        const randomString=Math.floor(Math.random()*characters.length)
        captcharesult+=characters.charAt(randomString)
        
    }
    return captcharesult
} 

// display the captcha
 function displayCaptcha()
 {
    var captcha=document.getElementById("captcha-div")
    // adding function randomnumber
    var captchaCode=randomnumbers(6)
    captcha.textContent=captchaCode
    // var captchatext=captcha.textContent
    return captcha
 }

//  function to verify the input box
var button=document.getElementById("button-1")
button.addEventListener("click",function(){
    var captchaInput=document.getElementById('captcha-Input').value
    var captcha=document.getElementById("captcha-div").textContent
   

    if(captchaInput==captcha){
        alert('correct')
    }
    else
    {
        alert('incorrect...try it next tym')
    }

})

window.onload=function()
{
    displayCaptcha()
}