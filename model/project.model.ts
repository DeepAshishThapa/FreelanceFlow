import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface projectObject{
    clientId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
    name: string,
    description? : string,
    status: "Planning" | "In Progress" | "In Review" | "Completed" | "Cancelled",
    




}