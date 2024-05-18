// import React, { useState } from 'react';

// function AdminLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Here you can implement the logic for handling login
//     setMessage(`Logged in successfully as ${email}`);
//   };

//   const handleForgotPassword = () => {
//     setShowForgotPassword(true);
//     setShowSignUp(false);
//   };

//   const handleSignUp = () => {
//     setShowSignUp(true);
//     setShowForgotPassword(false);
//   };

//   const handleSocialLogin = (provider) => {
//     // Here you can implement social login functionality
//     console.log(`Logged in with ${provider}`);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-100">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-2">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
//         </form>
//         <div className="mt-4 flex justify-between items-center">
//           <button onClick={handleForgotPassword} className="text-sm text-blue-500 hover:underline">Forgot Password?</button>
//           <button onClick={handleSignUp} className="text-sm text-blue-500 hover:underline">Sign Up</button>
//         </div>
//         <div className="mt-6">
//           <p className="text-sm text-gray-600 mb-2">Or login with:</p>
//           <div className="flex space-x-4">
//             <button onClick={() => handleSocialLogin('Google')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Google</button>
//             <button onClick={() => handleSocialLogin('Facebook')} className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Facebook</button>
//           </div>
//         </div>
//         {message && <p className="mt-4 text-green-500">{message}</p>}
//       </div>
//       {showForgotPassword && (
//         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
//             {/* Implement forgot password form here */}
//             <button onClick={() => setShowForgotPassword(false)} className="text-sm text-blue-500 hover:underline">Close</button>
//           </div>
//         </div>
//       )}
//       {showSignUp && (
//         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//             {/* Implement sign up form here */}
//             <button onClick={() => setShowSignUp(false)} className="text-sm text-blue-500 hover:underline">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminLogin;
