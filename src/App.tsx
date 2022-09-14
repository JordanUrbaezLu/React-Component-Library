import styles from "./App.module.scss";
import AstroSelect from "./components/AstroSelect/AstroSelect";
import AstroSelectItem from "./components/AstroSelect/AstroSelectItem";

const App = () => {
  return (
    <div className={styles.AppContainer}>
      <AstroSelect variant="secondary" label="Helo">
        <AstroSelectItem>Option 1</AstroSelectItem>
        <AstroSelectItem>Option 2</AstroSelectItem>
        <AstroSelectItem>Option 3</AstroSelectItem>
      </AstroSelect>
    </div>
  );
};

export default App;
