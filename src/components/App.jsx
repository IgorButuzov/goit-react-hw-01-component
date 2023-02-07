import Profile from "components/Profile/Profile";
import user from "components/Profile/user.json";


export default function App () {
  return (
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      username={user.username}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}
