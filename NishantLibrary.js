function isTouching (object1, object2) { 
    collisionDistanceX = object1.width/2 + object2.width /2;
    actualDistanceX = Math.abs ( object2.x - object1.x );
    collisionDistanceY = object1.height/2 + object2.height/2;
    actualDistanceY= Math.abs ( object2.y - object1.y );
  
    if( actualDistanceX <= collisionDistanceX  && actualDistanceY <= collisionDistanceY) { 
      return true;
    }
    else{
      return false;
    }
  }
  
  function bounceOff (object1,object2){
    collisionDistanceX = object1.width/2 + object2.width /2;
    actualDistanceX = Math.abs ( object2.x - object1.x );
    collisionDistanceY = object1.height/2 + object2.height/2;
    actualDistanceY= Math.abs ( object2.y - object1.y );
  
    if( actualDistanceX <= collisionDistanceX  && actualDistanceY <= collisionDistanceY) { 
      if(actualDistanceX<= collisionDistanceX){
        object1.velocityX = -object1.velocityX;
        object2.velocityX =-object2.velocityX;
      }
  
      if(actualDistanceY<= collisionDistanceY){
        object1.velocityY = -object1.velocityY;
        object2.velocityY =-object2.velocityY;
      }
    }
    
  }