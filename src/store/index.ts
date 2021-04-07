import { configure } from 'mobx';
import uiStore from './uiStore';

// 将当前项目mobx数据状态保持隔离
configure({ isolateGlobalState: true });

export interface GlobalStores {
  uiStore: uiStore;
}

const EditorStore = {
  uiStore: new uiStore(),
};

export default EditorStore;
