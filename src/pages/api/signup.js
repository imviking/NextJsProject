import User from '../../../models/user'; // Import User model from Sequelize
import bcrypt from 'bcryptjs'; // For password hashing

export default async function signUp(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Ensure required fields are provided
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      // Optionally, you can return the user or just a success message
      return res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
      console.error('Error adding user:', error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    // Handle unsupported methods (GET, PUT, DELETE, etc.)
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
