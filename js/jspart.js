const input = document.getElementById("input");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const p = document.getElementById("p");

function convert() {
    let temp;
    
    if (radio1.checked) {
        temp = Number(input.value);
        temp = (9 / 5) * temp + 32;
        p.textContent = `${temp}°F`;
    } else if (radio2.checked) {
        temp = Number(input.value);
        temp = (5 / 9) * (temp - 32);
        p.innerHTML = `${temp}°C`;
    }else if (radio3.checked) {
        temp = Number(input.value);
        temp = temp+273.15;
        p.innerHTML = `${temp}K`;
    }
}