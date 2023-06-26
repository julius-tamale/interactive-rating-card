const listItems = document.getElementsByTagName('li');
const wrapperDiv = document.getElementById('wrapper')
const button = document.getElementById('submit-btn')


console.log(listItems);

for(let listItem of listItems){
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('selected')
    })
}

button.addEventListener('click', renderHtml);


function renderHtml(){
    return wrapperDiv.innerHTML = `
        <div class='after-click-div'>
            <img src='images/illustration-thank-you.svg'>
            <span>You selected 4 out of 5</span>
            <h2>Thank You!</h2>
            <p>We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to
            get in touch!
        </div>`
}