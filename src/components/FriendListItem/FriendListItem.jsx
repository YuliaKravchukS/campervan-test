import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div
      className={clsx(css.friendListItem, {
        [css.online]: isOnline,
        [css.offline]: !isOnline,
      })}
    >
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
