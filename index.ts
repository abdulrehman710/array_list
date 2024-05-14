import inquirer from 'inquirer';

let condition = true;
let todo: string[] = [];

    do {
        var action = await inquirer.prompt(
            [
                {
                    name: "user",
                    type: "list",
                    message: "Select one of the operation : ",
                    choices: ["Add task", "Remove task", "Display task", "Exit"]
                }
            ]
        );

        if (action.user === "Add task")
            {
                const response1 = await inquirer.prompt(
                    [
                        {
                            name: "user",
                            type: "input",
                            message: "Add in your task : ",
                        }
                    ]
                );
                if (response1.user.length > 0)
                    {
                        todo.push(response1.user);
                        console.log("Task added : ",response1.user);
                    }else
                         {
                            console.log("Task not be empty")
                         }
                

                
            }
        else if (action.user === "Remove task" && todo.length != 0)
            {
                const response2 = await inquirer.prompt(
                    [
                        {
                            name: "user",
                            type: "rawlist",
                            message: "Remove from your task : ",
                            choices: todo,
                        }
                    ]
                );

                let remove = todo.indexOf(response2.user);
                todo.splice(remove , 1);
                console.log("Task removed : ", response2.user)
            }
        else if (action.user === "Display task" && todo.length != 0)
            {
                console.log("Your tasks : ");
                for (let i = 0 ; i < todo.length ; i++)
                    {
                        console.log("\t",i+1, "." , todo[i]);
                    }
            }
        else if (action.user === "Remove task" && todo.length == 0)
            {
                console.log("No task to remove")
            }
        else if (action.user === "Display task" && todo.length == 0)
            {
                console.log("No task to display");
            }
    } while (action.user !== "Exit")
