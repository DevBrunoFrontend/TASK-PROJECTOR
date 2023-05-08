const button = document.querySelector('.button-header')
button.addEventListener('click', function(){
    const form = document.querySelector('.form')
    if(form.style.display === "none"){
        form.style.display = "block"
     
     } else {
       form.style.display = "none"
      
     }
    
})


const buttonAdd = document.querySelector('.form-button-add')
 buttonAdd.addEventListener('click', function(){

  const divTarefa = document.createElement('div')
  divTarefa.className = 'container-tarefas'

  const divPaiContainer = document.querySelector('.container-tarefas-section')
  const main = document.querySelector('.main')



  const containerPaiDivTarefasSegunda = document.querySelector('.segunda') 
  const elementSegunda = containerPaiDivTarefasSegunda.className
  const containerPaiDivTarefasTerca = document.querySelector('.terca')
  const elementTerca = containerPaiDivTarefasTerca.className
  const containerPaiDivTarefasQuarta = document.querySelector('.quarta')
  const elementQuarta = containerPaiDivTarefasQuarta.className
  const containerPaiDivTarefasQuinta = document.querySelector('.quinta')
  const elementQuinta = containerPaiDivTarefasQuinta.className 
  const containerPaiDivTarefasSexta = document.querySelector('.sexta')
  const elemenSexta = containerPaiDivTarefasSexta.className


const inputText = document.querySelector('.form-input').value
const descricaoInput = document.querySelector('.form-textearea').value
const dayInput = document.querySelector('.form-input-day').value

const titleText = document.createElement('h4')
titleText.className = 'title'
titleText.innerText = inputText
const descricaoText = document.createElement('p')
descricaoText.className = 'decricao'
descricaoText.innerText = descricaoInput


if(elementSegunda === dayInput){
  divTarefa.append(titleText , descricaoText)
  containerPaiDivTarefasSegunda.appendChild(divTarefa)
 


}
else if(elementTerca === dayInput){

  divTarefa.append(titleText , descricaoText)
  containerPaiDivTarefasTerca.appendChild(divTarefa)



} else if(elementQuarta === dayInput){
  divTarefa.append(titleText , descricaoText)
  containerPaiDivTarefasQuarta.appendChild(divTarefa)
  
}
else if(elementQuinta === dayInput){
  divTarefa.append(titleText , descricaoText)
  containerPaiDivTarefasQuinta.appendChild(divTarefa)

}
else if(elemenSexta === dayInput){
  divTarefa.append(titleText , descricaoText)
  containerPaiDivTarefasSexta.appendChild(divTarefa)

}
else{
  alert('informe um dia de segunda a sexta')
}




const form = document.querySelector('.form')
form.style.display ='none'

document.querySelector('.form-input').value = ''
document.querySelector('.form-textearea').value = ''
document.querySelector('.form-input-day').value = ''



 })


 const buttonX = document.querySelector('.form-button-x')
 buttonX.addEventListener('click' , function(){
   const form = document.querySelector('.form')
    if(form.style.display === 'block'){
        form.style.display = 'none'
    }
    else{
     form.style.display = 'block'
    }
 })


 const weekly = document.querySelector('.weekly')
 weekly.addEventListener('click', function(){

   const containerSection = document.querySelector('.container-tarefas-section')
   const weekly = document.querySelector('.weekly')
   const textWekley = document.querySelector('.text-asid')

   if(containerSection.style.display === 'none'){
      containerSection.style.display = 'flex'
      weekly.style.backgroundColor = 'rgb(83, 77, 150)'
    
      
     
   }
   else{
    containerSection.style.display = 'none'
    weekly.style.backgroundColor = ''

    textWekley.style.color = ''
   
    
 
   }
 })








