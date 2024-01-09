let images = document.querySelectorAll('.img');
let comwin=0;
let userwin=0;
let youwine=document.querySelector('.youwin')
let comwine=document.querySelector('.comwin')
let message=document.querySelector('.message')

images.forEach((image) => {
  image.addEventListener('click', () => {
 
    let arr=['rock','paper','scissor'];
    let random=Math.floor(Math.random()*3)
    let computer=arr[random];
    let user=image.name

    console.log("Computer",computer);
    console.log("You",image.name);
    if((user=="paper" && computer=="scissor") || (user=="rock" && computer=="paper")||(user=="scissor" && computer=="rock")){
        // console.log("Computer win");
        comwin=comwin+1;
        // console.log("Computer win",comwin);
        comwine.innerText=comwin;
        message.classList.remove('green');
        message.classList.add('red')
        message.innerText=`You Lost ${computer} beats ${user}`
        
    }else if((user=="scissor" && computer=="paper") || (user=="paper" && computer=="rock")||(user=="rock" && computer=="scissor")){
        // console.log("You win");
        userwin=userwin+1;
        youwine.innerText=userwin;
        message.classList.remove('red');
        message.classList.add('green')
        // console.log("You win",userwin);
        message.innerText=`You Win ${user} beats ${computer}`
    }else{
        // console.log("It was a Tie");
        message.innerText=`It was a Tie`
        message.classList.remove('green');
        message.classList.remove('red');
        
    }
    
    


})})