// ----------------------------------------------------------------------
import { shadowRootElement } from '../../pages/Content';

export default function MuiModal(theme) {
  return {
    MuiModal: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
  };
}
