document.getElementById('contact-form').addEventListener('submit', async function(event) {
    // 1. Prevent the default form submission
    event.preventDefault();

    // 2. Get the data from the form's input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 3. Define the URL of your backend endpoint
    const url = 'http://localhost:3000/send-email';

    // 4. Send the data to your backend
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        // 5. Handle the response from the server
        const data = await response.text();
        console.log(data);

        if (response.ok) {
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('There was an error sending your message: ' + data);
        }

    } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred. Check the console for details.');
    }
});