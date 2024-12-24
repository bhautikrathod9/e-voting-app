import React, { useState } from "react";

const VotingPage = ({ electionId, onSubmitVote }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    { 
      id: 1, 
      name: "Alice", 
      party: "Party A", 
      bio: "Experienced leader.", 
      photo: "https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" 
    },
    { 
      id: 2, 
      name: "Bob", 
      party: "Party B", 
      bio: "Visionary thinker.", 
      photo: "https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" 
    },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#121212', // Dark background for the body
  };

  const cardStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#1e1e1e', // Dark card background
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    maxWidth: '600px',
    width: '100%',
    color: '#fff', // White text for dark theme
  };

  const candidateStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #333', // Darker border for candidate items
    borderRadius: '8px',
    backgroundColor: '#2a2a2a', // Darker background for candidate items
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const imgStyle = {
    width: "80px", // Increased image size
    height: "80px",
    borderRadius: '50%',
    marginRight: '15px',
    border: '2px solid #007bff',
  };

  const nameStyle = {
    margin: '10px 0',
    color: '#fff', // White text for candidate name
    fontWeight: 'bold',
  };

  const selectButtonStyle = (isSelected) => ({
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: isSelected ? '#007bff' : '#007bff',
    color: isSelected ? '#ffffff' : '#007bff',
    border: '2px solid #007bff',
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.2s',
    marginLeft: 'auto', // Align to the right
  });

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: selectedCandidate ? 'pointer' : 'not-allowed',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    opacity: selectedCandidate ? 1 : 0.6,
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: 'center', color: '#fff' }}>Voting Page</h2>
        <h3 style={{ textAlign: 'center', color: '#fff' }}>Election ID: {electionId}</h3>

        {candidates.map((candidate) => (
          <div 
            key={candidate.id} 
            style={candidateStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.8 )'; // Blue glow on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; // Reset shadow
            }}
          >
            <img src={candidate.photo} alt={candidate.name} style={imgStyle} />
            <div style={{ flex: 1 }}>
              <h4 style={nameStyle}>{candidate.name}</h4>
              <p style={{ margin: '5px 0', color: '#7f8c8d' }}>{candidate.party}</p>
              <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#7f8c8d' }}>{candidate.bio}</p>
            </div>
            <button
              style={selectButtonStyle(selectedCandidate === candidate.id)}
              onClick={() => setSelectedCandidate(candidate.id)}
            >
              {selectedCandidate === candidate.id ? '✔️' : 'Select'}
            </button>
          </div>
        ))}

        <div style={{ textAlign: 'center' }}>
          <button 
            disabled={!selectedCandidate} 
            onClick={() => onSubmitVote(selectedCandidate)} 
            style={buttonStyle}
            onMouseOver={(e) => { if (selectedCandidate) e.currentTarget.style.backgroundColor = '#0056b3'; }}
            onMouseOut={(e) => { if (selectedCandidate) e.currentTarget.style.backgroundColor = '#007bff'; }}
          >
            Submit Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;