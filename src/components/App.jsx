import Profile from "components/Profile/Profile";
import user from "components/Profile/user.json";


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
    <div>Statistics</div>
    <div>FriendList</div>
    <div>TransactionHistory</div>
    </div>
  );
}
