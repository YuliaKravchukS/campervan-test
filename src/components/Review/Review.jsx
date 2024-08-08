import StarRatings from "react-star-ratings";

const Review = ({ review }) => {
  const { reviewer_name: name, reviewer_rating: rating, comment } = review;

  return (
    <div>
      <div>
        <div> {name.slice(0, 1).toUpperCase()}</div>
        <p>{name}</p>
        <StarRatings
          rating={rating}
          numberOfStars={5}
          starEmptyColor='rgb(242, 244, 247)'
          starRatedColor='rgb(255, 197, 49)'
          starDimension='16px'
          starSpacing='4px'
        />
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default Review;
