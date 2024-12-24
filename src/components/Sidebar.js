import React, { useState, useEffect, useRef } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar state
  const sidebarRef = useRef(null); // Reference to the sidebar element

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Close sidebar if clicked outside
      }
    };

    if (isSidebarOpen) {
      // Add event listener only when the sidebar is open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Cleanup event listener when sidebar is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup on component unmount or sidebar close
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: isSidebarOpen ? "0" : "-250px", // Sidebar slides in and out
    width: "250px",
    height: "100vh",
    backgroundColor: "#1e1e1e", // Dark background for the sidebar
    paddingTop: "20px",
    color: "#fff", // White text for dark theme
    display: "flex",
    flexDirection: "column",
    boxShadow: "4px 0 15px rgba(0, 0, 0, 0.5)",
    transition: "left 0.3s ease", // Smooth slide effect
    borderRadius: "0 8px 8px 0", // Rounded corners on the right side
  };

  const linkStyle = {
    color: "#007bff", // Link color
    textDecoration: "none",
    padding: "15px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s", // Added box-shadow transition
    borderBottom: "1px solid #333", // Darker border for separation
  };

  const linkHoverStyle = {
    backgroundColor: "#0056b3", // Darker blue background on hover
    color: "#fff", // White text on hover
    boxShadow: "0 0 10px rgba(0, 123, 255, 0.8)", // Glowing effect
  };

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef} // Assigning the ref to the sidebar div
        style={sidebarStyle}
      >
        {["Home", "Elections", "My Votes", "Help", "Profile", "Logout"].map((link, index) => (
          <a 
            key={index}
            href={`/${link.toLowerCase().replace(" ", "")}`} // Generate href dynamically
            style={linkStyle} 
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor;
              e.currentTarget.style.color = linkHoverStyle.color;
              e.currentTarget.style.boxShadow = linkHoverStyle.boxShadow; // Add glowing effect
            }} 
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '';
              e.currentTarget.style.color = '#007bff';
              e.currentTarget.style.boxShadow = 'none'; // Remove glow
            }}
          >
            {link}
          </a>
 ))}
      </div>
    </div>
  );
};

export default Sidebar;