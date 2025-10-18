import mongoose from 'mongoose';

const Schema  = new mongoose.Schema(
  {
  name: String, 
  parent: String,
  description: String,
  },
  {
    timestamps: true, // Tự động sinh ra trường CreatedAt, updatedAt
  }
);

const CategoryBlog = mongoose.model('CategoryBlog', Schema, "categories_blog")
export default CategoryBlog;