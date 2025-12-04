import fs from 'fs';
import { Command } from 'commander';
const program = new Command();

const file = "todos.json"

program
    .name('todos')
    .description('CLI to make a todos application')
    .version('0.8.0');

program.command('todo')
    .description('Todo is a Todo Application')
    .argument('<string>', 'todo task')
    .option('--add', 'add task into todo')
    .action((str) => {
        fs.writeFile(file,str , (err, data) => {
            if(err) return console.error(err);
            fs.readFile(file, 'utf8', (err, data) => {
                if(err) return console.error(err);
                console.log(data)
            })
        })
    });

program.parse();