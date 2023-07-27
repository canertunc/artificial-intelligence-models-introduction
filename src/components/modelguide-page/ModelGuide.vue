<template>
    <div class="model-guide">
      <div class="model-guide-choices">
        <div class="s2">
          <div class="model-1">
            <router-link class="guide-link" to="/modelguide/bankfrauddetectingguide"><h5>Bank Fraud Detecting Guide</h5></router-link>
          </div>
          <div class="model-1">
            <router-link class="guide-link" to="/modelguide/druggerdetectingguide"><h5>Drugger Detecting Guide</h5></router-link>
          </div>
          <div class="model-1">
            <router-link class="guide-link" to="/modelguide/spaceshippassengerguide"><h5>Spaceship Passenger Guide</h5></router-link>
          </div>
          <div class="model-1">
            <router-link class="guide-link" to="/modelguide/hondacarvalidationguide"><h5>Honda Car Validation Guide</h5></router-link>
          </div>
          <div class="model-1">
            <h5>Machine Learning Guide</h5>
          </div>
          <div class="model-1">
            <h5>Machine Learning Guide</h5>
          </div>
          <div class="model-1">
            <h5>Machine Learning Guide</h5>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  </script>
  
  <style>
  .model-guide {
    background-color: black;
    background-image: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .model-guide-choices {
    width: 500px;
    height: 550px;
    border: 1px aliceblue solid;
    margin-top: 100px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    animation: fadeIn 1s ease-in-out forwards;

  
  }
  .model-guide-choices h5 {
      cursor: pointer;
  }
  .model-guide-choices h5:hover {
      font-size: 15px;
      transition: 0.5s;
  }
  .guide-link {
    text-decoration: none;
    border: 0;
    color: aliceblue;
  }

  .s2 {
    overflow: auto;
    height: 200px;
    margin-left: 20px
  }
   .model-1 {
    margin-right: 20px;
   }

.s2::-webkit-scrollbar {
  width: 5px; 
}

.s2::-webkit-scrollbar-thumb {
  background-color: #ffff; 
  border-radius: 5px;
}

.s2::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}


.s2::-webkit-scrollbar-track {
  background-color: black; 
}

.s2::-webkit-scrollbar-track-piece {
  background-color: black; 
}

.s2::-webkit-scrollbar-button {
  background-color: black; 
}
  
  
  
  @keyframes fadeIn {
    0% {
      opacity: 0; 
      transform: translateY(20px); 
    }
    100% {
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  </style>
  