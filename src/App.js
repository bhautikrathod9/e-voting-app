import React, { useState } from "react";
import ElectionSelectionPage from "./components/ElectionSelectionPage";
import VotingPage from "./components/VotingPage";
import VoteConfirmationPage from "./components/VoteConfirmationPage";
import VoterHistoryPage from "./components/VoterHistoryPage";

// Constants for page names
const PAGE_SELECTION = "selection";
const PAGE_VOTING = "voting";
const PAGE_CONFIRMATION = "confirmation";
const PAGE_HISTORY = "history";

function App() {
  const [currentPage, setCurrentPage] = useState(PAGE_SELECTION);
  const [currentElection, setCurrentElection] = useState(null);
  const [transactionHash, setTransactionHash] = useState(null);

  const handleVoteNow = (electionId) => {
    setCurrentElection(electionId);
    setCurrentPage(PAGE_VOTING);
  };

  const handleSubmitVote = (candidateId) => {
    // Simulate a transaction hash for the vote submission
    const mockTransactionHash = `0x${Math.random().toString(16).slice(2, 10)}`;
    setTransactionHash(mockTransactionHash);
    setCurrentPage(PAGE_CONFIRMATION);
  };

  const handleReturnToDashboard = () => {
    setCurrentPage(PAGE_SELECTION); // Navigate back to the selection page
    setCurrentElection(null); // Reset the current election
    setTransactionHash(null); // Reset the transaction hash
  };

  const handleViewHistory = () => {
    setCurrentPage(PAGE_HISTORY);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212", // Updated to dark background
        minHeight: "100vh",
        margin: "0", // Ensure no margins
        padding: "0", // Remove padding to avoid visual border
        boxSizing: "border-box", // Ensure consistent sizing
        color: "#fff", // Ensure consistent text color for dark theme
      }}
    >
      {currentPage === PAGE_SELECTION && <ElectionSelectionPage onVoteNow={handleVoteNow} />}
      {currentPage === PAGE_VOTING && <VotingPage electionId={currentElection} onSubmitVote={handleSubmitVote} />}
      {currentPage === PAGE_CONFIRMATION && (
        <VoteConfirmationPage
          transactionHash={transactionHash || "N/A"} // Handle case where transactionHash is null
          onReturnToDashboard={handleReturnToDashboard}
          onViewHistory={handleViewHistory}
        />
      )}
      {currentPage === PAGE_HISTORY && <VoterHistoryPage onReturnToDashboard={handleReturnToDashboard} />}
    </div>
  );
}

export default App;
