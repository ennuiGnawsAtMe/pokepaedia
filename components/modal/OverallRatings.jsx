import styles from'./OverallRatings.module.css'
import ReactStars from "react-rating-stars-component"

const OverallRatings = ({ name, ratings, ranking, ratingOverall, blurb }) => {

  return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.nameWrapper}>
                    <h1>{name}</h1>
                </div>
                <div className={styles.rankingWrapper}>
                    <p>Ranked</p>
                    <h2>{ranking}</h2>
                </div>
            </div>
            <div className={styles.starsWrapper}>
                <ReactStars 
                    size={20} 
                    key={ratings.length}
                    value={ratingOverall} 
                    edit={false} 
                    isHalf={true} 
                />
            </div>
              <h4>{ratingOverall} stars from {ratings.length} {ratings.length > 1 ? "ratings" : "rating"} </h4>
            <div className={styles.blurbWrapper}>
              <p>{blurb}</p>
            </div>
        </div>
  )
}
export default OverallRatings