let stats = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};
for (const c in stats) {
  if (c.startsWith('R') || c.startsWith('r') || (stats[c] % 2) === 1) {
    console.log(stats[c]);
  }
}