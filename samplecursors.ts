//%
namespace cursor {

    export enum Sample {
        //% jres=cursor.cursor1
        Arrow,
        //% jres=cursor.cursor2
        Cross,
        //% jres=cursor.cursor3
        X,
        //% jres=cursor.cursor4
        Box,
        //% jres=cursor.cursor5
        SpaceShip
    }

    /**
    * 
    */
    //% block="sample %NAME"
    export function sampleCursor(choice: Sample): Image {
        switch (choice) {
            case Sample.Arrow:
                return img`
                        f f f f f f f f f . . . . . . . 
                        f 1 1 1 1 1 1 1 f . . . . . . . 
                        f 1 1 1 1 1 1 f . . . . . . . . 
                        f 1 1 1 1 1 f . . . . . . . . . 
                        f 1 1 1 1 f 1 f . . . . . . . . 
                        f 1 1 1 f 1 1 1 f . . . . . . . 
                        f 1 1 f 1 1 1 1 1 f . . . . . . 
                        f 1 f . f 1 1 1 1 1 f . . . . . 
                        f f . . . f 1 1 1 1 1 f . . . . 
                        . . . . . . f 1 1 1 1 1 f . . . 
                        . . . . . . . f 1 1 1 1 1 f . . 
                        . . . . . . . . f 1 1 1 f . . . 
                        . . . . . . . . . f 1 f . . . . 
                        . . . . . . . . . . f . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `;
            case Sample.Cross:
                return img`
                        . . . . . . f f f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        f f f f f f f 1 f f f f f f f . 
                        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
                        f f f f f f f 1 f f f f f f f . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f f f . . . . . . . 
                        . . . . . . . . . . . . . . . .
                        `;
            case Sample.X:
                return img`
                        . f . . . . . . . . . . . f . . 
                        f 1 f . . . . . . . . . f 1 f . 
                        . f 1 f . . . . . . . f 1 f . . 
                        . . f 1 f . . . . . f 1 f . . . 
                        . . . f 1 f . . . f 1 f . . . . 
                        . . . . f 1 f . f 1 f . . . . . 
                        . . . . . f 1 f 1 f . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . f 1 f 1 f . . . . . . 
                        . . . . f 1 f . f 1 f . . . . . 
                        . . . f 1 f . . . f 1 f . . . . 
                        . . f 1 f . . . . . f 1 f . . . 
                        . f 1 f . . . . . . . f 1 f . . 
                        f 1 f . . . . . . . . . f 1 f . 
                        . f . . . . . . . . . . . f . . 
                        . . . . . . . . . . . . . . . . 
                        `;
            case Sample.Box:
                return img` 
                        f f f f f f . . . . f f f f f f 
                        f f f f . . . . . . . . f f f f 
                        f f . . . . . . . . . . . . f f 
                        f f . . . . . . . . . . . . f f 
                        f . . . . . . . . . . . . . . f 
                        f . . . . . . . . . . . . . . f 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        f . . . . . . . . . . . . . . f 
                        f . . . . . . . . . . . . . f f 
                        f f . . . . . . . . . . . . f f 
                        f f . . . . . . . . . . . . f f 
                        f f f f . . . . . . . . f f f f 
                        f f f f f f . . . . f f f f f f 
                        `;
            case Sample.SpaceShip:
                return img`
                        . . . . . . . f. . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . . f 1 f . . . . . . . 
                        . . . . . f 1 1 1 f . . . . . . 
                        . . . . . f 1 1 1 f . . . . . . 
                        . . . . f 1 1 1 1 1 f . . . . . 
                        . . . . f 1 1 1 1 1 f . . . . . 
                        . . . f 1 1 1 1 1 1 1 f . . . . 
                        . . . f 1 1 1 1 1 1 1 f . . . . 
                        . . f 1 1 1 1 f 1 1 1 1 f . . . 
                        . . f 1 1 1 f .f 1 1 1 f . . . 
                        . . . f 1 1 f .f 1 1 f . . . . 
                        . . . . f f . . . f f . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `;
        }
    }
}