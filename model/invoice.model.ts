import mongoose from "mongoose";
import { Schema } from "mongoose";


export interface invoiceObject{
    clientId: mongoose.Types.ObjectId,
    userId : mongoose.Types.ObjectId,
    projectId: mongoose.Types.ObjectId,
    invoiceNumber: string,
    issueDate:Date,
    dueDate:Date,
    amount: number,
    status: "Draft" | "Sent" | "Paid" | "Overdue" | "Cancelled",
    notes: string,

}

const invoiceSchema : Schema<invoiceObject> = new Schema(
    {
        clientId: {
            type: Schema.Types.ObjectId,
            ref: "Client",
            required: [true, 'Client is required']
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, 'User is required']
        },
        projectId: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            required: [true, "Project is required"]
        },
        invoiceNumber:{
            type: String,
            required: [true, "Invoice number is required"]
        },
        issueDate: {
            type: Date,
            required: [true, "Issue date is required"]
        },
        dueDate: {
            type: Date,
            required: [true, "Due date is required"]
        },
        amount: {
            type: Number,
            required: [true, "Amount is required"]
        },
        status: {
            type: String,
            enum: [
                "Draft",
                "Sent",
                "Paid",
                "Overdue",
                "Cancelled"
            ],
            default: "Draft",
            required: [true, "status is required"]
        },
        notes: {
            type: String,
            trim: true,
        }

    }
)

const invoiceModel = mongoose.model("Invoice", invoiceSchema)

export default invoiceModel
