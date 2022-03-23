function stars(number) {
  let star = "*";
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if (i == j) {
        console.log(star);
        star += "*";
      }
    }
    console.log(star);
    star += "*";
  }
}
stars(3);
