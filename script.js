var screen = document.querySelector('.cal .screen')
var btn = document.querySelectorAll('.cal .btn-cnt button')
var up =document.querySelector('.cal .top')
btn.forEach((value) => {
    value.addEventListener(('click'), () => {
        if (value.innerHTML=== '='){
            if (up.innerHTML===''){
                up.innerHTML=screen.innerHTML+'='
            }
            else{
                up.innerHTML=screen.innerHTML
            }
            let result=eval(screen.innerHTML)
            let t=Number(result)
            if (Number.isInteger(t)){
                screen.innerHTML=+result
            }
            else{
                screen.innerHTML=+result.toFixed(2)
            }
            
        }
        else if(screen.innerHTML==='0'){
            if (value.innerHTML==='del'){
               screen.innerHTML=0 
            }
            else if (value.innerHTML==='C'){
                screen.innerHTML=0
            }
            else{
                screen.innerHTML=value.innerHTML
            }
        }
        
        else if (value.innerHTML==="C"){
            screen.innerHTML=0
            up.innerHTML=''
        }
        else if (value.innerHTML==='del'){
            screen.innerHTML=screen.innerHTML.slice(0,-1)
            if (screen.innerHTML===''){
                up.innerHTML=''
            }
        }
        else{
            screen.innerHTML+=value.innerHTML
        }
    })
})