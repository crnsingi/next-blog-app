import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://cesarricardo1805:Nicaise93@cluster0.vnhkw.mongodb.net/blog-app');
    console.log("DB Connected ");
}