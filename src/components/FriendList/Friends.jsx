import PropTypes from "prop-types";

// import friends from "components/FriendList/friends.json";
import css from "components/FriendList/Friends.module.css"

const Friends = friends => {
    
return(
<ul className={css.friend_list}>
  <li>friend1</li>
  <li>friend2</li>
  <li>friend3</li>
</ul>
)};


Friends.propTypes = {
    friends: PropTypes.string, 
  }
  
  export default Friends;