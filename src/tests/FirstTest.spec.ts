import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Geovani';

  expect(user.name).toEqual('Geovani');
});
