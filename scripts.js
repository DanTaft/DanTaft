 
  const reviews = [
    { text: "Everything looks SOOOOO GOOD!", author: "— Alexa" },
    { text: "Everything looks terrific here, we're excited!", author: "— Joey" },
    { text: "I LOVE THE PAINT !!! So happy!!", author: "— Duchie" },
    
  ];

  let currentIndex = 0;

  function showReview(index) {
    const review = reviews[index];
    document.getElementById('review-text').textContent = `"${review.text}"`;
    document.getElementById('review-author').textContent = review.author;
  }

  function rotateReviews() {
    showReview(currentIndex);
    currentIndex = (currentIndex + 1) % reviews.length;
  }

  // Initial load
  rotateReviews();

  // Rotate every 5 seconds
  setInterval(rotateReviews, 5000);
