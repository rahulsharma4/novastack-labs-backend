import express from 'express';
import Contact from '../models/Contact.js';
import Application from '../models/Application.js';
import Blog from '../models/Blog.js';

const router = express.Router();

// Middleware to verify Admin secrets token header
const authAdmin = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  const secret = process.env.ADMIN_SECRET || 'novastack_admin_secret_key_2026';
  if (token === secret) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized. Admin passcode token mismatch.' });
  }
};

// 1. Contacts APIs
router.post('/contacts', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/contacts', authAdmin, async (req, res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. Applications APIs
router.post('/applications', async (req, res) => {
  const { name, email, resume, jobTitle } = req.body;
  try {
    const app = new Application({ name, email, resume, jobTitle });
    await app.save();
    res.status(201).json(app);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/applications', authAdmin, async (req, res) => {
  try {
    const list = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3. Blogs APIs
router.get('/blogs', async (req, res) => {
  try {
    const list = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/blogs/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Blog post not found' });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/blogs', authAdmin, async (req, res) => {
  const { title, category, author, role, date, summary, tags, readTime, content, cssContent, imageUrl, slug, status } = req.body;
  try {
    const post = new Blog({ title, category, author, role, date, summary, tags, readTime, content, cssContent, imageUrl, slug, status });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/blogs/:id', authAdmin, async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/contacts/:id', authAdmin, async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json({ message: 'Contact inquiry deleted successfully', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/applications/:id', authAdmin, async (req, res) => {
  try {
    const deleted = await Application.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json({ message: 'Application deleted successfully', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 4. Admin Auth Verification
router.post('/admin/verify', (req, res) => {
  const { passcode } = req.body;
  const secret = process.env.ADMIN_SECRET || 'novastack_admin_secret_key_2026';
  if (passcode === secret) {
    res.status(200).json({ success: true, token: secret });
  } else {
    res.status(401).json({ success: false, message: 'Invalid Admin passcode.' });
  }
});

export default router;
