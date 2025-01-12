import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import SearchInput from "./SearchInput";
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>Explore Best Home service & Repair near you</p>
      <div className={styles.searchContainer}>
        <SearchInput />
        <Button rounded>
          <div>
            <CiSearch fontSize={24} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;


