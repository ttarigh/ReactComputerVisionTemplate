export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    let color = "blue";
    if (text === "book") {
        color = "red";
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height); 
        ctx.fillStyle = "white"; 
        ctx.font = "50px Arial";
        ctx.fillText("DONT", x + 20, y + 80); 
        ctx.fillText("JUDGE", x + 10, y + 150); 
        ctx.fillText("ME", x + 15, y + 220); 
    }
    if (text === "person"){
        ctx.strokeStyle = color;
        ctx.font = "20px Arial";
        ctx.fillStyle = color;
        ctx.fillText("judger", x, y);
    }

    ctx.strokeStyle = color;
    ctx.font = "18px Arial";
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
