import mongoose from "mongoose";


const sampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
     
    },
    age: {
      type: Number,
      min: 0
    },
    isActive: {
      type: Boolean,
      default: true
    },
   
  },{timestamps:true}
);

const SampleModel = mongoose.model('Sample', sampleSchema);
export default SampleModel;
