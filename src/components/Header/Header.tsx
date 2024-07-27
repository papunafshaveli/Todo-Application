import { HeaderContainer } from "./styles";

type HeaderPropsTypes = {
  themes: boolean;
  setThemes: (themes: boolean) => void;
};

const Header = ({ setThemes, themes }: HeaderPropsTypes) => {
  return (
    <HeaderContainer>
      <div>
        <h1 data-testid="headline">T O D O</h1>
        <img
          src={
            themes ? "./resources/icon-moon.svg" : "./resources/icon-sun.svg"
          }
          alt=""
          onClick={() => {
            setThemes(!themes);
          }}
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;
