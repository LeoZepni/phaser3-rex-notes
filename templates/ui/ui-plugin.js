import ObjectFactory from './ObjectFactory.js';
import SizerFactory from './sizer/SizerFactory.js'
import LabelFactory from './label/LabelFactory.js';
import DialogFactory from './dialog/DialogFactory.js';
import RoundRectangleFactory from './roundrectangle/RoundRectangleFactory.js';

class UIPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);

        this.add = new ObjectFactory(scene);
    }
}

export default UIPlugin;