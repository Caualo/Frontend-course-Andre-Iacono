// Aqui estamos pegando o elemento com id="push" (provavelmente um botão “Adicionar”) e dizendo que, quando clicarem nele, vai rodar essa função.
// onclick é um evento.
document.querySelector('#push').onclick = function(){
// Pega o valor do campo de input que está dentro de #newtask.
//.value = o que o usuário digitou.
// .length == 0 = se o campo estiver vazio.
// Se não digitou nada → mostra um alert.
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!")
    }
// Pegamos o elemento com id="tasks" (a lista de tarefas).
// Usamos innerHTML += ... para adicionar um bloco de HTML dentro dele.
// Esse bloco contém:
// <span id="taskname">...</span> → mostra o texto da tarefa.
// <button class="delete">...</button> → botão de apagar com ícone de lixeira (Font Awesome).
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.removeChild();
            }
        }
    
    }

}



