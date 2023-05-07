import healthBar from '../healthbar';

test('healthBar', () => {
  const result = healthBar({ name: 'маг', health: 90 });
  expect(result).toBe('healty');
});
