import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
})

const Todo = new Schema({
    description: String,
    done: Boolean,
    userId: ObjectId,
})

export const UserModel = mongoose.model('users', User);
export const TodoModel = mongoose.model('todos', Todo)
























