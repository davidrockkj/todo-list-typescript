// IIFE - Immediately Invoked Function Expression - coloca todas as variáveis dentro do scope local
(() => {
    // constante que recebe objeto
    const todo = {
        description: 'todo',
        done: false,
    };

    const reminder = {
        description: 'reminder',
        date: '19.04.2023',
    };

    // view - ponto em que o código se comunica com a interface - renderizar os todos e reminders
    const taskView = {
        // lista com as anotações salvas
        render(tasks: Array<Object>) {

            // processo de limpar a lista - evitar a duplicidade dos elementos
            const taskList = document.getElementById('taskList') // seletor que pega o elemento de lista, que tem o ID taskList

            // while para manter um looping esvaziando a lista
            while (taskList?.firstChild) { // Sempre que um elemento tem 1 filho, firstChild retorna esse filho

                taskList.removeChild(taskList.firstChild); // Esvaziando de um a um, removendo sempre o firstChild
            }
            
            tasks.forEach((task) => {
                const li = document.createElement('LI');
                const textNode = document.createTextNode(JSON.stringify(task));
                li.appendChild(textNode);
                taskList?.appendChild(li);
            });
        },
    };

    const TaskController = (view: typeof taskView) => { // Garantir quando a nossa View deve renderizar e armazenar em memória dentro do navegador as tasks
        const tasks: Array<Object> = [todo, reminder]; // como o controller vai manter a lista em memória

        const handleEvent = (event: Event) => {
            event.preventDefault(); // Prevenindo o evento Default
            view.render(tasks);
        };

        document
        .getElementById('taskForm')
        ?.addEventListener('submit', handleEvent);
    };

    TaskController(taskView);

})();