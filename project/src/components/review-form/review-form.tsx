import {useState, Fragment, FormEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {reviewAction} from '../../store/api-actions';
import {UserReview} from '../../types/user-review';
import {getReviewIsLoading, getTextClearStatus} from '../../store/offers-data/offers-process.selector';

type ReviewFormProps ={
  currentOfferId: number;
}

function ReviewForm({currentOfferId}: ReviewFormProps): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [star, setStar] = useState<string>('0');

  const isLoading = useAppSelector(getReviewIsLoading);
  const textClear = useAppSelector(getTextClearStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (textClear === true) {
      setValue('');
      setStar('0');
    }
  }, [textClear]);

  const onSubmit = (userReview: UserReview) => {
    dispatch(reviewAction(userReview));
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStar(event.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (value !== null && star !== null) {
      onSubmit({
        comment: value,
        rating: Number(star),
        id: currentOfferId,
      });
    }
  };

  const arr: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {arr.map((title, index) => (
          <Fragment key={title}>
            <input checked={star === `${arr.length - index}`} onChange={handleStarsChange} className="form__rating-input visually-hidden" name="rating" value={`${arr.length - index}`} id={`${arr.length - index}-stars`} type="radio" disabled={isLoading}/>
            <label htmlFor={`${arr.length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea onChange={handleCommentChange} className="reviews__textarea form__textarea" value={value} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isLoading}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(value.length > 49 && value.length < 301 && Number(star) > 0 ) || isLoading}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
