
// Getting inputs...................................................
const forexForm= document.querySelector('form')

const currencyDisplay=document.getElementById('currencyDisplay')
const currencyNameDisplay=document.getElementById('currencyNameDisplay')

const dateDisplay=document.getElementById('dateDisplay')

const amount= document.getElementById("amount")

dateDisplay.textContent=new Date().getDate() +'-'+ new Date().getMonth()+'-'+new Date().getFullYear()


// Getting the value of a selected option................................................................................
function displayCurrency(){
    var currency= document.getElementById("select");
    var selectedCurrency= currency.options[currency.selectedIndex].value;
    
    return selectedCurrency;
}



// Fetching data and printing the results.........................................................................
forexForm.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    
    currencyDisplay.innerHTML='Calculating...'
    const targetcurr1=displayCurrency();
    currencyNameDisplay.innerHTML=targetcurr1

    setTimeout(() => {

    const targetcurr=displayCurrency(); 

    fetch('http://data.fixer.io/api/2013-12-24?access_key=d2118023c7b08fd86e4ba6b3405390e6&base=EUR&symbols='+targetcurr).then(response => {
        response.json().then(data => {
            console.log(data.rates)
            
            currencyDisplay.innerHTML=(data.rates[targetcurr]*amount.value).toFixed(2) + " "
            
        })
        
        
    });
        
    }, 1000);
    
    

})
