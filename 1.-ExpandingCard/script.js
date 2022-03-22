const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click' , function(e){
        removeActiveClases()
        panel.classList.add('active')
    })
}
)

function removeActiveClases() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}