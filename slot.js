
const canvas = document.getElementById('slotCanvas');

const ctx = canvas.getContext("2d");

const symbols = ["cherry", "grape", "orange", "plum", "crown", "bar"];


async function spin() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    startButton.disabled = true;
  
   
    const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel3 = symbols[Math.floor(Math.random() * symbols.length)];
  
  
    const imagePromises = [
      getSymbolImage(reel1),
      getSymbolImage(reel2),
      getSymbolImage(reel3)
    ];
  
    const images = await Promise.all(imagePromises);
  
    
    const symbolSize = 100;
    const symbolSpacing = 20;
    const x = (canvas.width - (symbolSize * 3 + symbolSpacing * 2)) / 2;
    const y = (canvas.height - symbolSize) / 2;
  
    images.forEach((image, index) => {
      ctx.drawImage(image, x + (symbolSize + symbolSpacing) * index, y, symbolSize, symbolSize);
    });
  
   
    if (reel1 === reel2 && reel2 === reel3) {
      updateResultText('Congratulations! You won!');
    } else {
      updateResultText('Sorry, try again!');
    }
    startButton.disabled = false;
  }

  
  

const getSymbolImage = (symbol) => {
    const img = new Image();
    img.src = `${symbol}.jpg`;
    return img;
}