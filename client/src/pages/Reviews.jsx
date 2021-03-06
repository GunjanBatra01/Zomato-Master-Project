import React,{useState} from 'react';

// Components
import AddReviewCard from "../Components/Restaurant/Reviews/AddReviewCard";
import ReviewCard from '../Components/Restaurant/ReviewCard';

function Reviews() {

    const [reviews, setReviews] = useState([
        {
          userName: "Gunjan",
          isRestaurantReview: true,
          createdAt: "2020-06-01T12:00:00.000Z",
          reviewText: "This place is a must visit.",
        },
        {
          userName: "Tanya",
          isRestaurantReview: true,
          createdAt: "2020-06-01T12:00:00.000Z",
          reviewText: "This place is a must visit.",
        },
        {
          userName: "Vaibhav",
          isRestaurantReview: false,
          createdAt: "2020-06-01T12:00:00.000Z",
          reviewText: "This place is a must visit.",
        },
        {
          userName: "Anjali",
          isRestaurantReview: false,
          createdAt: "2020-06-01T12:00:00.000Z",
          reviewText: "This place is a must visit.",
        },
      ]);

    return (
        <>
           <div className="w-full flex flex-col md:flex-row relative gap-6">
                <div className="w-full md:w-8/12 flex flex-col gap-3">
                    <div className="md:hidden">
                        <AddReviewCard />
                    </div>
                    {reviews.map((review) => (
                        <ReviewCard {...review} />
                    ))}
                </div>
                <aside style={{height: "fit-content"}} className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white shadow-md p-3 flex-col">
                    <AddReviewCard />
                </aside>
            </div> 
        </>
    );
}

export default Reviews;
