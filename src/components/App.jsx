import Profile from "components/Profile/Profile";
import user from "components/Profile/user.json";

import Statistics from "components/Statistics/Statistics";
import data from "components/Statistics/data.json";

import Friends from "components/FriendList/Friends.jsx";
import friends from "components/FriendList/friends.json";

import Transactions from "components/TransactionHistory/Transactions.jsx";
import transactions from "components/TransactionHistory/transactions.json";



export default function App () {
  return (
    <div>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      username={user.username}
      stats={user.stats}
    />
    <Statistics
      title={data.title}
      stats={data.stats}
    />
    <Friends
    avatar={friends.avatar}
    name={friends.name}
    isOnline={friends.isOnline}
  />
    <Transactions
    
  />
    </div>
  );
}
