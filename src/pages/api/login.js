import User from '../../../models/user'; // Import User model from Sequelize
import bcrypt from 'bcryptjs'; // For password hashing

export default async function login(req, res) {
  if (req.method === 'POST') { // Use POST for login
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      // Compare the provided password with the stored hash
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
   
      
      // Login successful
      return res.status(200).json({
        success: true,
        message: 'Logged in successfully',
        user: { id: user.id, email: user.email, username : user.firstName }, // Avoid sending sensitive info like hashed password
      });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
