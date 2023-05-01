import { Schema } from "mongoose";
import mongoose from "mongoose";

//export interface dog{
 //   name: string;
 //   breed: string;
 //   ownerDocument: string;
 //   ownerPassword: string;
 //   idadeDoDono: number;
 //   phone?: string;
 //}

 export const dogSchema = new Schema({
    name: {
        type: String
    },
    breed: {
        type: String
    },
    ownerDocument: {
        type: String
    },
    ownerPassword: {
        type: String
    },
    idadeDoDono: {
        type: Number
    },
        phone: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
 })

 export const Dog = mongoose.model('Dogs', dogSchema);