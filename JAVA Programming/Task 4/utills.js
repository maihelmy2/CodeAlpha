function searchRooms() {
    // Get user inputs
    var checkInDate = document.getElementById('check-in').value;
    var checkOutDate = document.getElementById('check-out').value;
    var roomType = document.getElementById('room-type').value;
    
    // Simulate searching process (replace with actual API call in real implementation)
    var searchResults = [
        { roomNumber: '101', type: 'Single', price: '$100/night' },
        { roomNumber: '201', type: 'Double', price: '$150/night' },
        { roomNumber: '301', type: 'Suite', price: '$250/night' }
    ];
    
    // Display search results
    var roomResultsDiv = document.getElementById('room-results');
    roomResultsDiv.innerHTML = ''; // Clear previous results
    
    if (searchResults.length > 0) {
        searchResults.forEach(function(room) {
            var roomDiv = document.createElement('div');
            roomDiv.classList.add('room-item');
            
            var roomInfo = `
                <p>Room Number: ${room.roomNumber}</p>
                <p>Type: ${room.type}</p>
                <p>Price: ${room.price}</p>
                <button onclick="reserveRoom('${room.roomNumber}')">Reserve</button>
            `;
            
            roomDiv.innerHTML = roomInfo;
            roomResultsDiv.appendChild(roomDiv);
        });
    } else {
        roomResultsDiv.innerHTML = '<p>No rooms available for selected dates and type.</p>';
    }
}

function reserveRoom(roomNumber) {
    // Placeholder function for room reservation handling
    alert('Room ' + roomNumber + ' reserved!');
}