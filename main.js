import SlapController from './app/components/SlapController.js'

class App {
    constructor() {
        this.controllers = {
            mySlapController: new SlapController()
        }
    }
}
console.log("hi from main")
window.app = new App();