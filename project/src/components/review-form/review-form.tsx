import {useState, Fragment} from 'react';

function ReviewForm(): JSX.Element {
  const [value, setValue] = useState('');
  const [, setStar] = useState('0');

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStar(event.target.value);
  };

  const arr = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {arr.map((title, index) => (
          <Fragment key={title}>
            <input onChange={handleStarsChange} className="form__rating-input visually-hidden" name="rating" value={`${arr.length - index}-stars`} id={`${arr.length - index}-stars`} type="radio" />
            <label htmlFor={`${arr.length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea onChange={handleCommentChange} className="reviews__textarea form__textarea" value={value} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
