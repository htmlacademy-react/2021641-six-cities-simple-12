import { Reviews } from '../../types/review';

type CommentsProps = {
  reviews: Reviews[];
}

function Comments ({reviews}: CommentsProps): JSX.Element {
  return (
    <>
      {reviews.map((review, index) => (
        <li className="reviews__item" key={String(review) + String(index)}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {review.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
          </div>
        </li>)
      )}
    </>
  );
}

export default Comments;
