import SlapController from './app/components/SlapController.js'

class App {
    constructor() {
        this.controller = {
            mySlapController: new SlapController()
        }
    }
}

window.app = new App();