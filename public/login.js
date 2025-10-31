// login.js
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const credentials = { email, password };

  // Check if online
  if (navigator.onLine) {
    // If online, authenticate using Clerk (example, replace with Clerk SDK logic)
    clerk.authenticate({ email, password })
      .then(user => {
        console.log('Logged in successfully!', user);
        // Redirect to the app's home page or dashboard
      })
      .catch(err => {
        console.error('Login failed', err);
        alert('Failed to log in. Please try again.');
      });
  } else {
    // If offline, store credentials locally
    localStorage.setItem('credentials', JSON.stringify(credentials));
    alert('You are offline. Your login will be attempted when you are online.');
  }
});

// Listen for when the user comes back online
window.addEventListener('online', () => {
  const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
  if (storedCredentials) {
    // Retry login with stored credentials (replace with Clerk logic)
    clerk.authenticate(storedCredentials)
      .then(user => {
        console.log('Logged in successfully when online!', user);
        // Redirect to the app's home page or dashboard
      })
      .catch(err => {
        console.error('Login failed', err);
        alert('Failed to log in after reconnecting. Please try again.');
      });
  }
});
