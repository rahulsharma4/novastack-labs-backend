import Item from '../models/Item.js';

export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const { name, description, status } = req.body;
  try {
    const newItem = new Item({ name, description, status });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
