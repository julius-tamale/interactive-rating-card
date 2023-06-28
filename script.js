//submit button and ul variables


//disable button and store currently selected item
// let selectedItem = null;
// submitBtn.disabled = true;
// // get list items
// const items = document.getElementsByTagName('li');

// //Loop through list items and event listeners
// for(let i = 0; i < items.length; i++) {
//     const item = items[i];

//     item.addEventListener('click', function(){
//         if(selectedItem) {
//             selectedItem.classList.remove('selected')
//         } else {
//             item.classList.add('selected')
//             selectedItem = item
//             submitBtn.disabled = false
//         }
//     })
// }

// submitBtn.addEventListener('click', renderHtml)

// function renderHtml(){
//     return wrapperDiv.innerHTML = `
//         <div class='after-click-div'>
//             <img src='images/illustration-thank-you.svg'>
//             <span>You selected ${items.innerText} out of 5</span>
//             <h2>Thank You!</h2>
//             <p>We appreciate you taking the time to give a rating.
//             If you ever need more support, don't hesitate to
//             get in touch!
//         </div>`
// }
// const listItems = document.getElementsByTagName('li');
// const submitBtn = document.querySelector('#submit-btn');
// const wrapperDiv = document.querySelector('#wrapper');

// // for(let item of listItems) {
// //     console.log(item.innerText)
// // }

// let selectedItem = false;

// for(let item of listItems){
//     item.addEventListener('click', function(){
        
//         if(selectedItem){
//             item.classList.remove('selected')
//             submitBtn.disabled = true
//         }

//         item.classList.add('selected')
//         selectedItem = item
//         submitBtn.disabled = false
//         submitBtn.addEventListener('click', () => {
//                 wrapperDiv.innerHTML = `
//                     <div class='after-click-div'>
//                         <img src='images/illustration-thank-you.svg'>
//                         <span>You have selected ${item.innerText} out of 5</span>
//                         <h2>Thank you!</h2>
//                         <p>
//                             We appreciate you taking the time to give a rating.
//                             If you ever need more support, don't hesitate to
//                             get in touch!
//                         </p>
//                     </div>`
//             })
//     })
// }

const listItems = document.getElementsByTagName('li');
const submitBtn = document.querySelector('#submit-btn');
const wrapperDiv = document.querySelector('#wrapper');

for (let item of listItems) {
    item.addEventListener('click', function(){
        let choosenRating = document.querySelector('.selected')
        if(choosenRating){
            choosenRating.classList.remove('selected')
        }

        this.classList.add('selected')

        submitBtn.addEventListener('click', renderHtml)

        function renderHtml(){
            wrapperDiv.innerHTML = `
                     <div class='after-click-div'>
                         <img src='images/illustration-thank-you.svg'>
                         <span>You have selected ${item.innerText} out of 5</span>
                         <h2>Thank you!</h2>
                         <p>
                             We appreciate you taking the time to give a rating.
                             If you ever need more support, don't hesitate to
                             get in touch!
                         </p>
                     </div>`
        }
    })
}