import StarRatings from "react-star-ratings";
import css from "./Review.module.css";

const Review = ({ review }) => {
  const { reviewer_name: name, reviewer_rating: rating, comment } = review;

  return (
    <div className={css.wrap}>
      <div className={css.wrapUserBar}>
        <div className={css.boxAvatar}>
          <div className={css.avatar}> {name.slice(0, 1).toUpperCase()}</div>
        </div>
        <div className={css.wrapName}>
          <p className={css.name}>{name}</p>
          <StarRatings
            rating={rating}
            numberOfStars={5}
            starEmptyColor='rgb(242, 244, 247)'
            starRatedColor='rgb(255, 197, 49)'
            starDimension='16px'
            starSpacing='2px'
          />
        </div>
      </div>
      <p className={css.text}>{comment}</p>
    </div>
  );
};

export default Review;
