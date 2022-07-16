window.onload = () => {

    let canvas;
    let mangeurDeBalle;
    let delais = 100;
    let xCoord = 0;
    let yCoord = 0;


    init();

    const init = () => {
        let canvas = document.createElement("canvas");
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid black";
        document.body.appendChild(canvas);
        mangeurDeBalle = canvas.getContext("2d");
        refreshCanvas();
    }

   
   const refreshCanvas = () => {
    xCoord += 5;
    yCoord += 5;
    mangeurDeBalle.clearRect(0, 0, canvas.width, canvas.height);
    mangeurDeBalle.fillStyle = "#ff0000";
    mangeurDeBalle.fillRect = (xCoord, yCoord, 100, 50);
    setTimeout(refreshCanvas, delais);
   }
}