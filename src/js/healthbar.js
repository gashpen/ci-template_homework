export default function healthBar(obj) {
  const arr = [];
  obj.sort((a, b) => a.health - b.health);
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].health >= 50) {
      arr.push(`${obj[i].name} healty`);
    }
    if (obj[i].health < 50 && obj.health > 15) {
      arr.push(`${obj[i].name} wounded`);
    }
    if (obj[i].health < 15) {
      arr.push(`${obj[i].name} critical`);
    }
  }
  return arr;
}
