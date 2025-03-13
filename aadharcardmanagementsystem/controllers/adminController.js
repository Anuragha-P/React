const User = require('../models/User');

const approveRequest = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.status = 'approved';
  await user.save();
  res.status(200).json({ message: 'User approved' });
};

const deleteRequest = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  await user.remove();
  res.status(200).json({ message: 'User deleted' });
};

const updateRequest = async (req, res) => {
  const { userId } = req.params;
  const { name, email, aadhar } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.name = name || user.name;
  user.email = email || user.email;
  user.aadhar = aadhar || user.aadhar;
  await user.save();
  res.status(200).json({ message: 'User updated' });
};

module.exports = { approveRequest, deleteRequest, updateRequest };

