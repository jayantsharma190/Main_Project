import { ThemeContext } from 'grommet';

const CheckBoxTheme = ({ children }) => {
  return (
    <ThemeContext.Extend
      value={{
        global: {
          focus: {
            border: {
              color: 'none',
            },
          },
        },
      }}
    >
      {children}
    </ThemeContext.Extend>
  );
};

export default CheckBoxTheme;
