document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input value and create a Date object from it.
    const birthdayInput = document.getElementById('birthdayInput').value;
    if (!birthdayInput) {
      alert("Please enter a valid birthday.");
      return;
    }
    
    const birthday = new Date(birthdayInput);
    if (isNaN(birthday)) {
      alert("Invalid date format.");
      return;
    }
    
    // Define the length of a tropical year in milliseconds.
    // A tropical year is exactly 31,556,925.216 seconds.
    const TROPICAL_YEAR_MS = 31556925.216 * 1000;
    
    // Calculate the next birthday based on tropical year periods.
    let nextBirthday = new Date(birthday);
    const now = new Date();
    
    // Keep adding a tropical year until the nextBirthday is in the future.
    while (nextBirthday <= now) {
      nextBirthday = new Date(nextBirthday.getTime() + TROPICAL_YEAR_MS);
    }
    
    // Format the result date into a readable string.
    const options = { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    document.getElementById('result').textContent = "Your next birthday is: " + nextBirthday.toLocaleString('en-US', options);
  });
  