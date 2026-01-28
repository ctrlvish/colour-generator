const colourSelect = document.getElementById('colour-picker')
const colourScheme = document.getElementById('colour-scheme')
const button = document.getElementById('get-colour') 


window.addEventListener('DOMContentLoaded', () => {
    button.click()
})

// document.querySelectorAll('.hex-label') to implement later

button.addEventListener('click', () => {
    console.log(colourSelect.value)
    const fetchReq = `https://www.thecolorapi.com/scheme?hex=${colourSelect.value.slice(1)}&mode=${colourScheme.value}&count=5`
    console.log(fetchReq)

    fetch(fetchReq)
    .then(res => res.json())
    .then(data => {
        console.log(data.colors)
        document.querySelectorAll('.colour').forEach((colour, i) => {
            colour.style.backgroundColor = data.colors[i].hex.value
        })

        document.querySelectorAll('.hex-label').forEach((label, i) => {
            label.querySelector('p').textContent = data.colors[i].hex.value
        })
    })
    .catch(err => console.error('[ERROR]', err));
})


