/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
    "./node_modules/flowbite-react/**/*.js", // Include Flowbite-React components
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Correct way to add the Flowbite plugin
  ],
};
