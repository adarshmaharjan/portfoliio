import { FC } from 'react';
import { CardInterface } from './CardType';

const Card: FC<CardInterface> = ({ image, title, content }) => {
  return (
    <div className="card w-96 glass h-[475px] mb-4 md:mx-4  xl:mb-0">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="prose">{content}</p>
      </div>
    </div>
  );
};

export default Card;
