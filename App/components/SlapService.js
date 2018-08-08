import Target from "../models/Target.js"

const scarcrow = new Target('scarcrow', 100, '//placehold.it/200x200', 10, 15, 20, 50)

class SlapService {
    constructor() {

    }
    attack(type) {
        scarcrow.attack(type)
    }
    get Target() {
        return {
            health: scarcrow.health,
            name: scarcrow.name,
            hits: scarcrow.hits,
            img: scarcrow.img,
            dead: scarcrow.dead
        }
    }
}

export default SlapService