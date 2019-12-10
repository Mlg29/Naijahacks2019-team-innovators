import mongoose from "mongoose";


interface usersSchema extends mongoose.Document{
    firstName: string,
    lastName: string,
    phone: string,
    username: string
    email: string,
    password: string

}

const usersSchema = new mongoose.Schema({
    firstName: { type: mongoose.SchemaTypes.String, index: true, },
    lastName: { type: mongoose.SchemaTypes.String, index: true, },
    phone: { type: mongoose.SchemaTypes.String, index: true, },
    username: { type: mongoose.SchemaTypes.String, index: true, },
    email: { type: mongoose.SchemaTypes.String, index: true,  unique:true},
    password: { type: mongoose.SchemaTypes.String, index: true, },
},{timestamps:true})

export default mongoose.model<usersSchema>("users", usersSchema)