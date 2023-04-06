// ----------------------------------------------------------------------
import { shadowRootElement } from '../../pages/Content';

export default function Popover(theme) {
  return {
    MuiPopover: {
      defaultProps: {
        container: shadowRootElement,
      },
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dropdown,
          borderRadius: Number(theme.shape.borderRadius) * 1.5,
        },
      },
    },
  };
}
