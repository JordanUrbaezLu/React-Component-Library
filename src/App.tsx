import styles from "./App.module.scss";
import * as React from "react";
import { AiFillEye } from "react-icons/ai";
import AstroTextField from "./components/AstroTextField/AstroTextField";
import AstroPopover from "./components/AstroPopover/AstroPopover";
import AstroButton from "./components/AstroButton/AstroButton";

const App = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className={styles.AppContainer}>
      <AstroPopover
        text="pejoqiwdnjndoincoiqwcjoinqwd"
        position="bottom"
        isOpen={isOpen}
        trigger={
          <AstroButton onClick={() => setIsOpen(!isOpen)} size="large">
            Button
          </AstroButton>
        }
      />
    </div>
  );
};

export default App;
