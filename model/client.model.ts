import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface ClientObject {
    name: string,
    company?: string,
    email: string,
    phone?: string,
    notes?: string,
    userId: mongoose.Types.ObjectId
}

const clientSchema: Schema<ClientObject> = new Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required'],
            trim: true
        },
        company: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'email is required'],

        },
        phone: {
            type: String,
            trim: true,
        },
        notes: {
            type: String,
            trim: true,

        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User is required"]
        },

    },
    { timestamps: true }
)

const clientModel = mongoose.model("Client", clientSchema)

export default clientModel
