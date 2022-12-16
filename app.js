const cont = document.querySelector('.container');
const btn = document.querySelector('.btn');
const paragraf = document.querySelector('.paragraf');
const span = document.querySelector('.span');
const input = document.querySelector('.input');

cont.addEventListener('click', (e)=>{
    // console.log(e.target)
    if(e.target.classList.contains('btn')){
                
        if(e.target.previousElementSibling.value == ''){
            alert('Lütfen geçerli bir metin yazınız.')
        }
        else{
            e.target.nextElementSibling.firstElementChild.innerText =cumleFunction();
        }    
    }
})
const cumleFunction = () => {
    let cumle = input.value;
    let counter = 0;
    let newcumle = cumle.toLowerCase().split('');
    let cum = newcumle.map((vowel) => {
        switch (vowel) {
            case "a":
            case "e":
            case "i":
            case "ı":
            case "o":
                counter++
        } 
    })
        let sonuc = counter;
    return sonuc;
}




