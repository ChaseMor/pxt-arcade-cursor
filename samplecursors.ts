//%
namespace cursor {

    export enum Sample {
        Arrow,
        Cross,
        X,
        Box,
        SpaceShip
    }

    /**
    * 
    */
    //% block
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