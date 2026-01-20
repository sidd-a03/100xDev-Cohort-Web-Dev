import { prisma } from "./lib/prisma";

const createUser = async () => {
    const user = await prisma.user.create({
        data: {
            email: "achintasiddhanta03@gmail.com",
            name: "achinta",
            password: "12345"
        }
    });
    console.table(user)
}

const deleteUser = async () => {
    await prisma.user.delete({
        where: {
            id: 7
        }
    })
}

const findUser = async () => {
    const user = await prisma.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(user)
}

const createTodo = async () => {
    const todo = await prisma.todo.create({
        data: {
            title: "adsfasdj",
            description: "afasd",
            done: false,
            userId: 1
        }
    })
}

// createUser()

findUser()

// createTodo()

// deleteUser();

// main()