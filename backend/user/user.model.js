import mongoose from "mongoose";

const consultantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  qualification: { type: String, required: true, trim: true },
  speciality: { type: String, required: true, trim: true },
  image:{type:String}
});

const Consultant = mongoose.model("Consultant", consultantSchema);
export default Consultant;
