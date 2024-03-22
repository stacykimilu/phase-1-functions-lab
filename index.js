// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); // Calculate the distance from headquarters in blocks
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264; // Convert blocks to feet (each block is 264 feet)
}

// Calculate the distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination) * 264; // Each block is 264 feet
    return distance;
}

// Calculate the fare price based on the distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
        fare = 0; // First 400 feet are free
    } else if (distance <= 2000) {
        fare = (distance - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
    } else if (distance <= 2500) {
        fare = 25; // Flat fare of $25 for distances over 2000 feet and under 2500 feet
    } else {
        return 'cannot travel that far'; // Return error message for distances over 2500 feet
    }
    return fare;
}
