import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    resume: { type: String, required: true, trim: true },
    jobTitle: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Application = mongoose.model('Application', applicationSchema);
export default Application;
