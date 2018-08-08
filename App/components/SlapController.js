import SlapService from "./SlapService.js"
//private parts
let mySlapService = new SlapService();

function draw() {
    let target = mySlapService.Target
    let template = `
    <div>
        <div><img src="${target.img}" alt="target image" /></div>
        <h2>${target.name}</h2>
        <h3>Health: ${target.health}</h3>
        <h3># Hits: ${target.hits}</h3>   
    </div>
    <div>
        <button onclick="app.controllers.mySlapController.attack('slap')">Slap</button>
        <button onclick="app.controllers.mySlapController.attack('punch')">Punch</button>
        <button onclick="app.controllers.mySlapController.attack('kick')">Kick</button>
        <button onclick="app.controllers.mySlapController.attack('special')">Haduken</button>
    </div>
 `
    document.getElementById("target").innerHTML = template;
}


class SlapController {
    constructor() {
        draw()
    }
    attack(type) {
        mySlapService.attack(this)
        draw()
    }
}

export default SlapController