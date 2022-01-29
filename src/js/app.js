export default class App {
  constructor() {
    this.calculateRandom = () => Math.floor(Math.random() * 16);
  }

  getRandomGoblin() {
    if (!this.goblin) this.goblin = document.getElementById('goblin');
    if (!this.box) this.box = document.getElementsByClassName('box');
    this.random = this.getRandom();
    for (const element of this.box) {
      if (element.getAttribute('data-id') === this.random.toString()) {
        if (this.prevElement) this.prevElement.removeChild(this.goblin);
        else this.goblin.classList.remove('hide');
        element.appendChild(this.goblin);
        this.prevElement = element;
        return;
      }
    }
  }

  getRandom() {
    let randomize = this.calculateRandom();
    while (randomize === this.random) {
      randomize = this.calculateRandom();
    }
    return randomize;
  }

  start() {
    setInterval(() => this.getRandomGoblin(), 500);
  }
}

const app = new App();
app.start();
