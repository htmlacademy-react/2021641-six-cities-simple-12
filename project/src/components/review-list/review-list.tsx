import ReviewForm from '../review-form/review-form';
import Comments from '../comments/comments';
import {Review} from '../../types/review';
import {useAppSelector} from '../../hooks/index';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selector';

type ReviewListProps = {
  reviews: Review[];
  currentOfferId: number;
}

function ReviewList({reviews, currentOfferId}: ReviewListProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Comments review={review} key={review.id} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <ReviewForm currentOfferId={currentOfferId} /> : ''}
    </section>
  );
}

export default ReviewList;
