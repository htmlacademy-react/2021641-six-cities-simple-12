import {Review} from '../../types/review';
import {changeRating} from '../../utils/utils';

type CommentsProps = {
  review: Review;
}

function Comments ({review}: CommentsProps): JSX.Element {
  const {user, rating, comment, date} = review;
  const itemDate = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: changeRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${itemDate.getFullYear()}-${itemDate.getMonth()}-${itemDate.getDate()}`}>{itemDate.toLocaleDateString('en-EN', { month: 'long' })} {itemDate.getFullYear()}</time>
      </div>
    </li>
  );
}

export default Comments;
