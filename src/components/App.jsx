import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import Statistics from './Stats/Statistics ';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <Statistics data={data} title="My Upload" />
    </>
  );
};
