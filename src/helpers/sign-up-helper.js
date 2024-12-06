// src/controllers/signupController.js
export const signUpUser = async (formData) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return { success: true, data: result };
      } else {
        return { success: false, message: result.message || "Signup failed." };
      }
    } catch (error) {
      console.error("Error during signup:", error);
      return { success: false, message: "An error occurred. Please try again later." };
    }
  };
  