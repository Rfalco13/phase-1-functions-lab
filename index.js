// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
    return distanceInBlocks;
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  
  function distanceTravelledInFeet(startLocation, destinationLocation) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(startLocation - destinationLocation);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(startLocation, destinationLocation) {
    const distanceInFeet = distanceTravelledInFeet(startLocation, destinationLocation);
    
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const farePrice = (distanceInFeet - 400) * 0.02;
      return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
