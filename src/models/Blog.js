import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    content: { type: String, default: '' },
    cssContent: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    slug: { type: String, trim: true, default: '' },
    status: { type: String, default: 'Published' },
    tags: [{ type: String, trim: true }],
    readTime: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
