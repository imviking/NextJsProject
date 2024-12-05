import React from 'react';
import Link from 'next/link';  // Import the Link component from next/link

const Login = () => {
  return (
    <div>
      <h1>This is the Login page</h1>
      <p>Click below to go back to the home page.</p>
      <Link href="/">Go to Home</Link>  {/* Use Link to navigate to the home page */}
    </div>
  );
}

export default Login;
