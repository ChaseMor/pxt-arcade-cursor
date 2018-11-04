enum SpriteKind {
    Player,
    Enemy
}
let cursor: Sprite = null
cursor = sprites.create(img`
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
`, SpriteKind.Player)
cursor.setImage(img`
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
`)
cursor.setImage(img`
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
`)
cursor.setImage(img`
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
`)
cursor.setImage(img`
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
`)
cursor.setImage(img`
. . . . . . . f . . . . . . . . 
. . . . . . f 1 f . . . . . . . 
. . . . . . f 1 f . . . . . . . 
. . . . . f 1 1 1 f . . . . . . 
. . . . . f 1 1 1 f . . . . . . 
. . . . f 1 1 1 1 1 f . . . . . 
. . . . f 1 1 1 1 1 f . . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . . f 1 1 1 1 1 1 1 f . . . . 
. . f 1 1 1 1 f 1 1 1 1 f . . . 
. . f 1 1 1 f . f 1 1 1 f . . . 
. . . f 1 1 f . f 1 1 f . . . . 
. . . . f f . . . f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
controller.controlSprite(cursor, 100, 100)
scene.setTileMap(img`
b b b b b b b b b b 
b b b b b b b b b b 
b b b b b b b b b b 
b b b b b b b b b b 
b b b b b b b b b b 
b b b b b b b b b b 
b b b b b b b b b b 
b b b b b b b b b b 
`)
cursor.setFlag(SpriteFlag.Ghost, true)
