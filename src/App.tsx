import styles from "./App.module.scss";
import AstroSelect from "./components/AstroSelect/AstroSelect";
import AstroSelectItem from "./components/AstroSelect/AstroSelectItem/AstroSelectItem";

const App = () => {
  return (
    <div className={styles.AppContainer}>
      <AstroSelect variant="primary" label="AstroSelect">
        <AstroSelectItem>Button</AstroSelectItem>
        <AstroSelectItem>Popover</AstroSelectItem>
        <AstroSelectItem>TextField</AstroSelectItem>
        <AstroSelectItem>Checkbox</AstroSelectItem>
      </AstroSelect>
    </div>
  );
};

export default App;
