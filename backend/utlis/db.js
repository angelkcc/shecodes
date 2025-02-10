import mongoose from "mongoose"
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/shecodes", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process on failure
    }
};


export default connectDB