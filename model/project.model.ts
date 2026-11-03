import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface projectObject {
    clientId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
    name: string,
    description?: string,
    status: "Planning" | "In Progress" | "In Review" | "Completed" | "Cancelled",
    startDate?: Date,
    dueDate?: Date,
    budget?: number
}

const projectSchema: Schema<projectObject> = new Schema(
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
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        description: {
            type: String,
            trim: true

        },
        status: {
            type: String,
            enum: [
                "Planning",
                "In Progress",
                "In Review",
                "Completed",
                "Cancelled"
            ],

            default: "Planning",
            required: [true,'Status is required']
        },
        startDate:{
            type: Date,
            required: [true,'start date is required']
        },

        dueDate:{
            type: Date,
            required:true
        },
        budget: {
            type: Number,
            min: [0, "Budget cannot be negative"]
        }

    },
    {timestamps: true}
)

const projectModel = mongoose.model("Project", projectSchema)

export default projectModel
