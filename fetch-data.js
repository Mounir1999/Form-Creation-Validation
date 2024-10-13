// Async function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Container for displaying the data

    try {
        // Fetching the user data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through the users and create a list item for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // If an error occurs, clear the dataContainer and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run the fetchUserData function once the DOM has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
