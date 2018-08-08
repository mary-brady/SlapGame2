class Target {
    constructor(name, health, img, slapdmg, punchdmg, kickdmg, specialdmg) {
        this.name = name || ''
        this.health = health || 100
        this.img = img || ''
        this.damages = {
            slap: slapdmg,
            punch: punchdmg,
            kick: kickdmg,
            special: specialdmg
        }
        this.dead = false
        this.hits = 0
    }

    attack(type) {
        if (this.dead) {
            return
        }
        if (this.damages[type]) {
            this.health -= this.damages[type]
            this.hits++
            if (this.health <= 0) {
                this.health = 0
                this.dead = true
            }
        }
    }
}
console.log("hi from slap target")
export default Target