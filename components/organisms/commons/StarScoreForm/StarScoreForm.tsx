import Star from '@/components/atomic/Star/Star';
import { useState } from 'react';
import styles from './star_score_form.module.scss';

const initStar: Star[] = [
  {
    id: 1,
    score: 0,
  }, {
    id: 2,
    score: 0,
  }, {
    id: 3,
    score: 0,
  }, {
    id: 4,
    score: 0,
  }, {
    id: 5,
    score: 0,
  }
]

const StarScoreForm = () => {
  const [starScore, setStarScore] = useState<Star[]>(initStar);
  const setClikedStar = (star: Star) => {
    if(star.score === 0){
      star.score = 1;
      return star;
    }
    if(star.score === 0.5){
      star.score = 0;
      return star;
    }
    if(star.score === 1){
      star.score = 0.5;
      return star;
    }
    return star;
  }
  const handleStar = (starId: number) => {
    setStarScore(starScore.map(star => {
      if(star.id < starId) {
        star.score = 1;
      }
      if(star.id > starId) {
        star.score = 0;
      }
      if(star.id === starId) {
        star = setClikedStar(star);
      }
      return star;
    }));
    console.log(starScore);
  }
  return (
    <div className={styles.star_score_form_container}>
      {
        starScore.map(star => 
          <Star key={star.id} score={star.score} handleClick={() => handleStar(star.id)}/>)
      }
    </div>
  );
};

export default StarScoreForm;