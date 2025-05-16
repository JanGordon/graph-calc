import {ComputeEngine} from "@cortex-js/compute-engine"

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const equationIn = document.getElementById("eq-1") as HTMLInputElement;


window.addEventListener("resize", () => {

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    render()
})

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const engine = new ComputeEngine();

const sliders: HTMLInputElement[] = [];
let expr = engine.parse(equationIn.value);
let equation = expr.compile()!;

equationIn.addEventListener("input", () => {
    let expr = engine.parse(equationIn.value);
    console.log(expr.unknowns)
    out: 
    for (let i of expr.unknowns) {
        if (i != "x" && i != "y") {
            for (let i of sliders) {
                if (i.id == "unknown-"+i) {
                    continue out;
                }
            }
            let s = document.createElement("input");
            s.type = "range";
            s.id = "unknown-"+i;
            s.min = "-100";
            s.max = "100";
            s.addEventListener("input", () => {
                let vars = {};
                for (let i of sliders) {
                    vars[i.id.replace("unknown-", "")] = parseInt(i.value) / 100;
                }
                equation = expr.compile({vars: vars})!
                render();
            })

            sliders.push(s);
            document.body.appendChild(s);
        }
    }
            console.log(sliders)
out:
    for (let i of sliders) {
        for (let j of expr.unknowns) {
            if (i.id == "unknown-"+j) {
                continue out;
            }
        }
        console.log(i)
        i.remove();
        sliders.splice(sliders.indexOf(i), 1);
    }
})


function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    let interval = 0.01
    let xMin = -10;
    let xMax = 10;
    let prevYval = equation({x: xMin})! as number;
    ctx.moveTo(xMin, prevYval);
    for (let x = xMin+interval; x <= xMax; x += interval) {
        const y = equation({x: x})! as number;
        const canvasX = ((x - xMin) / (xMax - xMin)) * canvas.width;
        const canvasY = ((y + 1) / 2) * canvas.height;
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.lineTo(canvasX, canvasY);
    }
        ctx.stroke();
    
}

render()

