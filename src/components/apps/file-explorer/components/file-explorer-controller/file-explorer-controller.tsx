import { controllerItems, actionItems } from '../../constants/file-explorer-constants';
import { AppControllerWidget } from '@/components';

function FileExplorerController() {
  return (
    <div className="file-explorer-controller-container">
      <AppControllerWidget
        controllerItems={controllerItems}
        actionItems={actionItems}
        onClickControllerItem={(event, item) => console.log('onClickControllerItem', { item, event })}
        onClickControllerDropdownItem={(event, item) => console.log('onClickControllerDropdownItem', { item, event })}
        controllerStyle="default"
      />
    </div>
  );
}

export default FileExplorerController;
