import styles from "./App.module.scss";
import * as React from "react";
import { AiFillEye } from "react-icons/ai";
import AstroTextField, { AstroTextFieldType } from "./components/AstroTextField/AstroTextField";

const App = () => {
  const [type, setType] = React.useState<AstroTextFieldType>("password")

  return (
    <div className={styles.AppContainer}>
      <AstroTextField
        variant="primary"
        size="large"
        type={type}
        placeholder="Password Type AstroTextField"
        trailingIcon={<AiFillEye onClick={() => setType("text")} />}
      />
    </div>
  );
};

export default App;
