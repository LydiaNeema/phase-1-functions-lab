// Code your solution in this file!

function distanceFromHqInBlocks(distance1){
let hq=42;
let diff;

if (distance1>hq){
    diff=distance1-hq;
return diff;
}
else if(distance1<hq){
    diff=hq-distance1;
return diff;
}}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(distance1){

let feet=distanceFromHqInBlocks(distance1)*264;

return feet;

}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start,destination){
  let distance;

  if(destination>start){
    return distance=(destination-start)*264;
  }
  else if(start>destination){
    return distance=(start-destination)*264;
  }
}
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);

function calculatesFarePrice(start,destination){

const distance=distanceTravelledInFeet(start,destination);

    if(distance<=400){
        return 0;

    }
    else if(distance > 400 && distance <= 2000){
        return (distance-400)*0.02;


    }
else if(distance>2000 && distance < 2500){
    return 25;

}
else{
return 'cannot travel that far';
}
}
calculatesFarePrice(43,44);
calculatesFarePrice(32,34);
calculatesFarePrice(50,58);
calculatesFarePrice(24,34);

