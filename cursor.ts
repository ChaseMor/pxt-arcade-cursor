class Point {

    //% group="Properties" blockSetVariable="point"
    //% blockCombine block="x (horizontal position)"
    //% blockNamespace="cursor"
    x: number
    //% group="Properties" blockSetVariable="point"
    //% blockCombine block="y (vertical position)"
    //% blockNamespace="cursor"
    y: number

    constructor(x:number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Cursor {

    sprite: Sprite;
    initialX: number;
    initialY: number;
    dragged: boolean;

    

    constructor(image: Image) {
        this.sprite = sprites.create(image);
        controller.controlSprite(this.sprite, 100, 100)

        game.currentScene().eventContext.registerFrameHandler(19, () => {
            this.sprite.vx = 0;

            if (controller.right.isPressed()) {
                this.sprite.vx = 100;
            }
            if (controller.left.isPressed()) {
                this.sprite.vx = -100;
            }
            this.sprite.vy = 0;

            if (controller.down.isPressed()) {
                this.sprite.vy = 100;
            }
            if (controller.up.isPressed()) {
                this.sprite.vy = -100;
            }
        });
    }

    get x(): number {
        return this.sprite.x;
    }

    get y(): number {
        return this.sprite.y;
    }

    // TODO on hover of spritekind
}


namespace cursor {

    
    let pointer: Cursor;


    // Handlers

    let _onClickHandler: (x: number, y: number) => void;
    let _onReleaseHandler: (x: number, y: number) => void;
    let _onMoveHandler: (x: number, y: number) => void;
    let _onDragHandler: (p1: Point, p2: Point) => void;
    let _onDragReleaseHandler: (p1: Point, p2: Point) => void;

    /**
     * Creates a cursor
     */
    //% block="create a cursor with the image %img=screen_image_picker"
    export function createCursor(img: Image) {
        pointer = new Cursor(img);
    }

    //% blockId=createPoint block="point at (%x,%y)"
    //% blockSetVariable=point
    export function createPoint(x:number, y:number): Point {
        return new Point(x,y);
    }

    game.currentScene().eventContext.registerFrameHandler(19, () => {
        if (pointer) {

            if (controller.right.isPressed()
                || controller.left.isPressed()
                || controller.up.isPressed()
                || controller.down.isPressed()) {

                console.log("on move");
                if (_onMoveHandler) {
                    _onMoveHandler(pointer.x, pointer.y);
                }

                if (pointer.initialX) {
                    pointer.dragged = true;
                    console.log("on drag");
                    let initialPoint: Point = new Point(pointer.initialX, pointer.initialY);
                    let currPoint: Point = new Point(pointer.x, pointer.y);

                    if (_onDragHandler) {
                        _onDragHandler(initialPoint, currPoint);
                    }

                    if (!controller.A.isPressed()) {
                        
                    }
                }


                pointer.sprite.vx = 0;

                if (controller.right.isPressed()) {
                    pointer.sprite.vx = 100;
                }
                if (controller.left.isPressed()) {
                    pointer.sprite.vx = -100;
                }
                pointer.sprite.vy = 0;

                if (controller.down.isPressed()) {
                    pointer.sprite.vy = 100;
                }
                if (controller.up.isPressed()) {
                    pointer.sprite.vy = -100;
                }

            }

            if (pointer.initialX && !controller.A.isPressed()) {
                if (pointer.dragged) {
                    console.log("on drag release");
                    if (_onDragReleaseHandler) {
                        let initialPoint: Point = new Point(pointer.initialX, pointer.initialY);
                        let currPoint: Point = new Point(pointer.x, pointer.y);
                        _onDragReleaseHandler(initialPoint, currPoint);
                    }
                }
                pointer.dragged = false;
                console.log("on release");
                pointer.initialX = undefined;
                pointer.initialY = undefined;
            }

            if (controller.A.isPressed() && !pointer.initialX) {
                pointer.initialX = pointer.x;
                pointer.initialY = pointer.y;
                console.log("on click");
            }
        }

    })
    ;
    //% draggableParameters 
    //% blockId=cursor_onClick block="on click $x $y"   
    export function onClick(handler: (x: number, y: number) => void) {
        _onClickHandler = handler;
    }

    //% draggableParameters 
    //% blockId=cursor_onRelease block="on release $x $y"   
    export function onRelease(handler: (x: number, y: number) => void) {
        _onReleaseHandler = handler;
    }

    //% draggableParameters 
    //% blockId=cursor_onMove block="on move $x $y"   
    export function onMove(handler: (x: number, y: number) => void) {
        _onMoveHandler = handler;
    }

    //% draggableParameters 
    //% blockId=cursor_onDrag block="on drag from $p1 to $p2"
    export function onDrag(handler: (p1: Point, p2: Point) => void) {
        _onDragHandler = handler;
    }

    //% draggableParameters 
    //% blockId=cursor_onDragRelease block="on drag release from $p1 to $p2"
    export function onDragRelease(handler: (p1: Point, p2: Point) => void) {
        
        _onDragReleaseHandler = handler;
    }

    // on click


    // on release


    // on drag


    // on drag release


    // on move

}
