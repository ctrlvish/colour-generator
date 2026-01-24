const colourSelect = document.getElementById('colour-picker')
const colourScheme = document.getElementById('colour-scheme')
const button = document.getElementById('get-colour') 

button.addEventListener('click', () => {
    console.log(colourSelect.value)
    const fetchReq = `https://www.thecolorapi.com/scheme?hex=${colourSelect.value.slice(1)}&mode=${colourScheme.value}&count=5`
    console.log(fetchReq)

    fetch(fetchReq)
    .then(res => res.json())
    .then(data => {
        console.log(data.colors)
        for(let i = 0; i < 5;i++){
            document.getElementById(`colour${i}`).style.backgroundColor = data.colors[i].hex.value
            document.getElementById(`label${i}`).textContent = data.colors[i].hex.value
    }
    })
})


