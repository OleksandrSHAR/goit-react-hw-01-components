import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './FriendListItem/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    orange: '#ffd1b3',
    greu: '#b3b3b3',
    blue: '#000080',
    wite: '#fff',
    green: '#66ff33',
    red: '#ff0000',
  },
};

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};
