import React from "react";

const VoteConfirmationPage = ({ transactionHash, onReturnToDashboard, onViewHistory }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  };

  const headingStyle = {
    color: '#2c3e50',
    marginBottom: '20px',
  };

  const messageStyle = {
    color: '#34495e',
    marginBottom: '15px',
  };

  const transactionHashStyle = {
    color: '#7f8c8d',
    fontFamily: 'monospace',
    wordBreak: 'break-all',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '10px 0', // Add some margin for spacing
    width: '100%', // Make buttons full width
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Vote Confirmation</h2>
        <p style={messageStyle}>Your vote has been successfully submitted!</p>
        <p style={transactionHashStyle}>Transaction Hash: {transactionHash}</p>
        <button 
          style={buttonStyle} 
          onClick={onReturnToDashboard}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Return to Dashboard
        </button>
        <button 
          style={buttonStyle} 
          onClick={onViewHistory}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        >
          View Voter History
        </button>
      </div>
    </div>
  );
};

export default VoteConfirmationPage;