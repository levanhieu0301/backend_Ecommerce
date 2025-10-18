import mongoose from "mongoose";

export const connectBD = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE}`);
    console.log("Kết nối Database thành công!")
  } catch (error) {
    console.log("Kết nối Database thất bại!", error)
  }
}