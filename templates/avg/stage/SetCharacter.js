import Element from './Element.js';

var SetCharacter = function (name, gameObject, duration) {
    if (typeof (gameObject) === 'string') {
        var textureKey = gameObject;
        gameObject = this.scene.add.image(0, 0, textureKey);
    }
    if (duration === undefined) {
        duration = 0;
    }

    if (gameObject) {
        gameObject.depth = this.characterDepth;
    }

    var characters = this.childrenMap.characters;
    if (!characters.hasOwnProperty(name)) {
        var character = new Element(this, 0.5, 0.5);
        this.add(character);
        characters[name] = character;
    }
    characters[name].replace(gameObject, duration);
    return this;
}
export default SetCharacter;