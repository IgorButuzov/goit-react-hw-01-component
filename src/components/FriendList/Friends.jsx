import PropTypes from "prop-types";

import friends from "components/FriendList/friends.json";
import css from "components/FriendList/Friends.module.css"


const FriendListItem = (name, avatar, isOnline) => {
return(
<ul className={css.friend_list}>
    {friends.map(friend => 
    <li className={css.item} key={friend.id}>
        {friend.isOnline ? 
        (<span className={css.status_online}></span>)
        : (<span className={css.status_offline}></span>)
        }
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
    </li>
    )
    }
</ul>
)};


friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
      }),
      ).isRequired
  }
  
  export default FriendListItem;