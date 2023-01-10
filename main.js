
const buttondv = document.querySelector("#buttons");
pattern = [1,1,2,2,3,3,4,4,5,5,6,6]
let falseattempts ;
falseattempts = 3;
const lasttwo = new Array()

document.addEventListener("DOMContentLoaded",DOM());


function shuffle(mylist){
    mylist.sort(()=>Math.random()-0.5);
    return mylist;
}




function DOM(){
    buttondv.innerHTML = "";
    pattern = shuffle(pattern);
    for ( i = 0;i<12;i++){
    const element = document.createElement("button");
    const classes = ['h-[200px]','w-[200px]','bg-white','border-[1px]','text-[20px]'] 
    element.textContent = "Press to reveal picture";
    element.classList.add(...classes);
    element.setAttribute("abc",pattern[i])
    element.setAttribute("id",`button`);
    buttondv.appendChild(element);
    }
}

const allbuttons = document.querySelectorAll("#button");
const attempts = document.querySelector("#attempts");
const restart = document.querySelector("#restart");


restart.addEventListener("click",()=>{
    DOM();
    const allbuttons = document.querySelectorAll("#button");
    mybuttons(allbuttons)
})


function mybuttons(allbuttons){

allbuttons.forEach(box => {
    box.addEventListener("click",()=>{
        const classes = ['h-[200px]','w-[200px]','bg-white','border-[1px]','text-[20px]'] 
        box.setAttribute(`style`,`background-image: url('pictures/image${box.getAttribute('abc')}.jpeg')`)
        box.classList.remove('bg-white');
        box.classList.add("bg-cover");
        box.textContent = "";
        if (lasttwo.length===0){
            lasttwo.push(box)
        }else{
            if (falseattempts>1){
            if (box.getAttribute('abc')!==lasttwo[0].getAttribute("abc")){
                falseattempts--;
                attempts.textContent= `You Have ${falseattempts} Wrong Attempts!!`
                console.log(falseattempts);
                setTimeout(()=>{
                    box.classList.add('bg-white');
                    box.textContent = "Press to reveal picture";
                    box.removeAttribute('style')
                    lasttwo[0].classList.add('bg-white')
                    lasttwo[0].textContent = "Press to reveal picture"
                    lasttwo[0].removeAttribute('style')
                    console.log(lasttwo);
                    lasttwo.pop()

                },1000)
            }else{
                lasttwo.pop();
            }
        }else{
            attempts.textContent = 'You Lost.. Try Again!!'
            allbuttons.forEach((anotherbox,index)=>{
                anotherbox.textContent="";
                anotherbox.classList.remove('bg-white');
                anotherbox.setAttribute("style",`background-image: url('pictures/image${anotherbox.getAttribute('abc')}.jpeg')`)
                anotherbox.classList.add('bg-cover')

            })
            falseattempts = 3;
            lasttwo.pop();

        }
        }
        console.log(box);
    },true)
})
}



mybuttons(allbuttons)
    
















