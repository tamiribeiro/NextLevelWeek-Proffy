// procurar o botão
document.querySelector('#add-time')
//quando clicar no botão
.addEventListener("click", cloneField)
// executar a ação
function cloneField() {
    // duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // 'node' sempre se refere a elementos HTML 

    // clonar e colar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    // para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    // colocar na página: mas onde? em que lugar na página?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
