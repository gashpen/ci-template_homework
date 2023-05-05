import healthBar from '../healthbar';

test('healthBar', () => {
  const result = healthBar([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual(['мечник critical', 'лучник healty', 'маг healty']);
});
