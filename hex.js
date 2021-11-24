const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let bgCol = "";
btn.addEventListener('click', function() {
    for ( let i = 0; i <6; i++){
    const randomNumber = Math.trunc(Math.random()*hex.length);
    bgCol += `${String(hex[randomNumber])}`;
}
document.querySelector('.color').textContent = `#${bgCol}`;
document.body.style.backgroundColor = `#${bgCol}`;
bgCol = "";
});