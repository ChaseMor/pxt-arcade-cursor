class Cursor {

    sprite: Sprite;
    constructor(image: Image) {
        this.sprite = sprites.create(image);
        controller.controlSprite(this.sprite, 100, 100)
    }
}


namespace cursor {


    let pointer: Cursor;
    /**
     * Creates a cursor
     */
    //% block="create a cursor with the image %img=screen_image_picker"
    export function createCursor(img: Image) {
        pointer = new Cursor(img);
    }
}