export const login = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Destructure user details
        const { user } = result;
  
        // Store user details in local storage
        localStorage.setItem(
          'authUser',
          JSON.stringify({
            username: user.username,
            email: user.email,
          })
        );
  
        return {
          success: true,
          message: 'Login successful!',
          data: result, // Include tokens or additional user info
        };
      } else {
        return {
          success: false,
          message: result.message || 'Login failed. Please check your credentials.',
        };
      }
    } catch (error) {
      console.error('Error during login:', error);
      return {
        success: false,
        message: 'An error occurred. Please try again later.',
      };
    }
  };
  