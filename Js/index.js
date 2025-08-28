function getEliment(id){
    const eliment = document.getElementById(id);
    return eliment;
}
// love button ////////
const loveBtn = document.getElementsByClassName("heart-btn");
for(const lovebtn of loveBtn){
    lovebtn.addEventListener("click",function(){
        const loveCount1 = document.getElementById("love-count");
        let count = parseInt(loveCount1.innerText)
        count = parseInt(count+1);
         document.getElementById("love-count").innerText=count;
    })
}

// call button ///////////////////

const callBtn = document.getElementsByClassName("call-btn");

for(const callbtn of callBtn){
   callbtn.addEventListener("click",function(){
     const cartTitle = callbtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText
    
     const cartNumber = callbtn.parentNode.parentNode.childNodes[3].childNodes[7].innerText

     const coin =document.getElementById("coin-count").innerText;
     let coinCount = Number(coin)
        coinCount= Number(coinCount-20)
      
        if(coinCount < 0){
              alert("❌You don't have enough coins,you need at least 20 coins to make a call")
              return
            
             
        }
         document.getElementById("coin-count").innerText =coinCount
        
         alert(`📞calling ${cartTitle}:${cartNumber}`)

        const cartContenar=getEliment("cart-contenar")
        const newCart = document.createElement("div")
        newCart.innerHTML = `
         <div class="flex justify-between items-center bg-[#fafafa] shadow  rounded-2xl p-4 mt-5">
                    <div>
                        <h2 class="font-bold text-1xl">${cartTitle}</h2>
                        <p class="text-gray-500 text-[16px]">${cartNumber}</p>
                    </div>
                    <div>
                        <p class="text-gray-500">${new Date().toLocaleTimeString()}</p>
                    </div>
                     </div>

        `;
        cartContenar.append(newCart);


   })
}

 //  clear button/////////////////////////////////

    getEliment("clear-btn").addEventListener("click",function(){
        const cartContenar = getEliment("cart-contenar")

        cartContenar.innerHTML ="";
    })

// copy section //////////////////////////

const copyBtn = document.getElementsByClassName("copy-btn")
for(const copybtn of copyBtn){
    copybtn.addEventListener("click",function(){
       
        const cartNumber = copybtn.parentNode.parentNode.childNodes[3].childNodes[7].innerText;
        navigator.clipboard.writeText(cartNumber);

        const CopyCount = getEliment("copy-count").innerText
        let copy = Number(CopyCount)
         copy=Number(copy+1);

        getEliment("copy-count").innerText=copy;

        alert(`Number copyed : ${cartNumber}`)
       
    })
}