//  URL of the destination page 
const destinationURL = "";

// Add the number of seconds you want to delay before redirecting
const delayInSeconds = 4;

// Redirect to the destination URL after a delay
function redirectToDestination() {
  window.location.href = destinationURL;
}
// Call the function after  delay
setTimeout(redirectToDestination, delayInSeconds * 1000);
