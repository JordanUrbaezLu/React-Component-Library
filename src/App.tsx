import styles from "./App.module.scss";
import AstroSelect from "./components/AstroSelect/AstroSelect";
import AstroSelectItem from "./components/AstroSelect/AstroSelectItem/AstroSelectItem";

const App = () => {
  return (
    <div className={styles.AppContainer}>
      <AstroSelect variant="primary" size="large">
        <AstroSelectItem value="Lebron" />
        <AstroSelectItem value="Three Pointer" />
        <AstroSelectItem value="Toastre" />
      </AstroSelect>
      <AstroSelect variant="primary" size="medium" label="AstroSelect">
        <AstroSelectItem value="Lebron" />
        <AstroSelectItem value="Three Pointer" />
        <AstroSelectItem value="Toastre" />
      </AstroSelect>
      <AstroSelect variant="primary" size="small" width={300}>
        <AstroSelectItem value="Lebron" />
        <AstroSelectItem value="Three Pointer" />
        <AstroSelectItem value="Toastre" />
      </AstroSelect>
    </div>
  );
};

export default App;
