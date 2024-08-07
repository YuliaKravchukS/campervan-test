//import clsx from "clsx";
import css from "./Profile.module.css";


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
  <div className={css.user}>
        <img
          className={css.profileImg}
      src={image}
      alt="User avatar"
    />
    <p className={css.nameText}>{name}</p>
    <p className={css.userText}>@{tag}</p>
    <p className={css.userText}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span>Followers</span>
      <span className={css.span}>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={css.span}>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={css.span}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile