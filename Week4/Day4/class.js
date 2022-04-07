class Tv {
  constructor(brand, channel = 1, volume = 50) {
    (this.brand = brand), (this.channel = channel), (this.volume = volume);
  }
  increaseVolume = function () {
    console.log(++this.volume);
  };
  decreaseVolume = function () {
    console.log(--this.volume);
  };
}
let newTv = new Tv("LG");
// newTv.increaseVolume();
newTv.decreaseVolume();
