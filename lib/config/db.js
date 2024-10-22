import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://cesarricardo180593:<db_password>@cluster0.vnhkw.mongodb.net/')
}