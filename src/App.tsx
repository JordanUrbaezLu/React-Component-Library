import styles from "./App.module.scss";
import AstroButton from "./components/AstroButton/AstroButton";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { AstroPopover } from "./components/AstroPopover/AstroPopover";
import { useRef, useState } from "react";

const App = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.AppContainer}>
      <AstroButton
        leadingIcon={<AiOutlineArrowLeft />}
        trailingIcon={<AiOutlineArrowRight />}
        size="large"
        variant="primary"
        onClick={() => console.log("clicked")}
      >
        Left Right
      </AstroButton>
      <AstroButton
        leadingIcon={<AiOutlineArrowUp />}
        trailingIcon={<AiOutlineArrowDown />}
        size="large"
        variant="primary"
      >
        Up Down
      </AstroButton>
      <AstroPopover
        isOpen={isOpen}
        hasNubbin
        position="top"
        text="I am Popover Text"
        trigger={
          <AstroButton onClick={() => setIsOpen(!isOpen)} ref={ref} size="medium" variant="secondary">
            onClick
          </AstroButton>
        }
      ></AstroPopover>
    </div>
  );
};

export default App;
