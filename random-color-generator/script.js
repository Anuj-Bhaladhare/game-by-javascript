const colorBox1 = document.querySelectorAll(".box1");
const colorBox2 = document.querySelectorAll(".box2");
const bodyColorSelect = document.querySelector("body");

function randomColorCode() {
    let randomNum = Math.floor(Math.random() * 16777215);
    randomColor = "#" + randomNum.toString(16);  
    return randomColor;
}

setInterval(() => {
    colorBox1.forEach(color => {
        const ranColor = randomColorCode();
        color.style.backgroundColor = ranColor;
        color.innerText = ranColor;
    }) 
}, 400)

setInterval(() => {
    colorBox2.forEach(color => {
        const ranColor = randomColorCode();
        color.style.backgroundColor = ranColor;
        color.innerText = ranColor;
    }) 
}, 600)

setInterval(() => {
    const bodyColor = randomColorCode();
    bodyColorSelect.style.backgroundColor = bodyColor;
}, 500)







// =========================================================================
// setInterval(() => {
//     const color1 = randomColorCode();
//     colorBox2.style.backgroundColor = color1;
// }, 1000);  




// ==========================================================================
// setInterval(() => {
//    const color2 = randomColorCode();
//    colorBox1.style.backgroundColor = color2;
// }, 1000)


// randomColorCode()



// ==========================================================================
// setInterval(() => {
//     let randomNum = Math.floor(Math.random() * 16777215);
//     let randomColor = "#" + randomNum.toString(16); 
//     colorBox.style.backgroundColor = randomColor;
//     // document.write(randomColor);
// }, 100)