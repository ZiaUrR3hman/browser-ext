// ----------------------------------------------------------------------
import { shadowRootElement } from '../../pages/Content';

export default function MuiDialog(theme) {
  return {
    MuiDialog: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
  };
}
