document.addEventListener("DOMContentLoaded", e => {




            function submitHandler() {
                const taskForm = document.querySelector("#create-task-form")
                taskForm.addEventListener('submit', function(e)) {
                    e.preventDefault()

                    const form = e.target
                    const task = form["new-task-description"].value

                    const taskLi = document.createElement('li')

                    if (task) {


                        taskLi.textContent = task
                        const button = document.createElement('button')

                        button.textContent = 'x'
                        taskLi.append(button)
                        button.addEventListener('click', function(e)) {
                            e.target.parentNode.remove()
                                //  taskLi.remove()
                        }
                        const taskUl = document.querySelector('#tasks')
                        taskUl.append(taskLi)

                        form.reset()

                    } else {
                        alert("You need to provide a task")
                    }

                }





            })


        /*add submit listener to form 
        get data out of input field 
        create an li element with that text 
        append that li to the dom 

        maybe make function handle submit