import Profile from "../components/Profile";
import user from "../user.json";


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

// const App = () => {
//   const {avatar, username, tag, location, stats } = user;
//   return (
//     <div class="profile">
//   <div class="description">
//     <img
//       src={avatar}
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">{username}</p>
//     <p class="tag">{tag}</p>
//     <p class="location">{location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{stats.likes}</span>
//     </li>
//   </ul>
// </div>
//   );
// };

// export default App;