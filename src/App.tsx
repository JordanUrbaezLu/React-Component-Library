import styles from "./App.module.scss";
import {AiFillEye} from "react-icons/ai"
import AstroTextField from "./components/AstroTextField/AstroTextField";

const App = () => {

  return (
    <div className={styles.AppContainer}>
      <AstroTextField size="large" variant="primary"/>
      <AstroTextField size="medium" variant="secondary"/>
      <AstroTextField size="small" variant="tertiary"/>
      <AstroTextField placeholder="PLACEHOLDER" />
      <AstroTextField size="small" placeholder="TRAILING SMALL" trailingIcon={<AiFillEye />}/>
      <AstroTextField size="medium" placeholder="TRAILING MEDIUM" trailingIcon={<AiFillEye />}/>
      <AstroTextField size="large" placeholder="TRAILING LARGE" trailingIcon={<AiFillEye />}/>
      <AstroTextField placeholder="DISABLED" disabled size="small" variant="tertiary"/>
    </div>
  );
};

export default App;
