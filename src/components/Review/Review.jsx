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

//       {
//         "reviewer_name": "Alice",
//         "reviewer_rating": 5,
//         "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//       },
//       {
//         "reviewer_name": "Bob",
//         "reviewer_rating": 4,
//         "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//       }
//     ]
