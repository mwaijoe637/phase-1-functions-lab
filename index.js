// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    return Math.abs(someValue - headquarters); 
}
console.log(distanceFromHqInBlocks(50));








function distanceFromHqInFeet(someValue) {
    const blockInFeet = 264; 
    const blocks = Math.abs(someValue - 42); 
    return blocks * blockInFeet;

  }




  function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; 
    const distance = Math.abs(destination - start); 
    return distance * blockInFeet  

  }
  console.log(distanceTravelledInFeet(50, 60)); 


  

  function calculatesFarePrice(start, destination) {
    
        const distanceInFeet = distanceTravelledInFeet(start, destination); 
        let farePrice = 0; 
        
        
        if (distanceInFeet <= 400) {
            farePrice = 0; 
        } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
            farePrice = 0.02 * (distanceInFeet - 400); 
        } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
            farePrice = 25; 
        } else {
            return 'cannot travel that far'; 
        }
        
        return farePrice;
    }
    
    
    console.log(calculatesFarePrice(43, 44)); 
    console.log(calculatesFarePrice(34, 32)); 
    console.log(calculatesFarePrice(50, 58)); 
    console.log(calculatesFarePrice(34, 24));

    


  