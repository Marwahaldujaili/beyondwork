import { Schema, model } from "mongoose";

const addressSchema = new Schema(
  {
    zipCode: String,
    country: String,
    city: String,
    address: String,
  },
  { _id: false }
);

const contactSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    userFullName: { type: String, required: true },
    userJobTitle: { type: String, required: true },
    userDepartment: { type: String, required: true },
    userCompany: { type: Schema.Types.ObjectId, ref: "Company" },
    userAddress: addressSchema,
    userContact: contactSchema,
    userPassword: { type: String, required: true },
    adminRole: { type: Boolean, default: false },
    userImage: { type: String, default: "default-avatar-new.png" },
    coverImage: { type: String, default: "default-background-new.jpg" },
    savedPosts: [{ type: Schema.Types.ObjectId, ref: "Post", unique: true }],
    description: String,
    dateOfBirth: { type: Date, default: "1997-10-04T00:00:00.000+00:00" },
  },
  { versionKey: false }
);

const User = model("User", userSchema);

export default User;
