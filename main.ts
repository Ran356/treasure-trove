scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.splash("The pirate finally found", "his treasure!!!")
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.splatter)
})
info.onCountdownEnd(function () {
    game.over(false, effects.splatter)
})
function clearLevel () {
	
}
let myShader: Sprite = null
game.splash("Dark Labyrinth", "Level 2")
game.splash("Follow the arrows and", "find your way to the chest")
game.splash("Be carful,", "don't touch the fires")
tiles.setCurrentTilemap(tilemap`level0`)
info.startCountdown(30)
let list = [img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ........................................33333...
    .................................3333333333333..
    .........................3333333333333333333333.
    ..................33333333333333333333333333333.
    ...........333333333333333333333333333333333333.
    .....333333333333333333333333333333333333333333.
    33333333333333333333333333333333333333333333333.
    33333333333333333333333333333333333333333333333.
    33333333333333333333333333333333333333333333333.
    33333333333333333333333333333333333333333333333.
    33333333333333333333333333333333333333333333333.
    .....333333333333333333333333333333333333333333.
    ..............333333333333333333333333333333333.
    .......................33333333333333333333333..
    ...............................33333333333333...
    ........................................33333...
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    `, img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    .............................................555
    .......................................555555555
    .................................555555555555555
    ...........................55555555555555.....55
    .....................5555555555555.............5
    ...............55555555555......................
    .........5555555555.............................
    ...555555555....................................
    555555..........................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    555555..........................................
    ....55555555555.................................
    ...........5555555555555.......................5
    .................555555555555555..............55
    ........................55555555555555555.....55
    ...............................55555555555555555
    .....................................55555555555
    ............................................5555
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    `, img`
    ................................................
    ..............................................77
    ..........................................777777
    ......................................7777777777
    ...................................7777777777777
    ...............................77777777777777777
    ............................77777777777777777777
    ........................777777777777777777777777
    ....................7777777777777777777777777...
    .................7777777777777777777777.........
    .............77777777777777777777...............
    ..........77777777777777777.....................
    ......777777777777777...........................
    ..7777777777777.................................
    777777777.......................................
    777.............................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    7777............................................
    77777777777.....................................
    ...77777777777777...............................
    .......77777777777777777........................
    ...........77777777777777777777.................
    ...............7777777777777777777777...........
    ....................777777777777777777777777....
    ........................777777777777777777777777
    ............................77777777777777777777
    .................................777777777777777
    .....................................77777777777
    .........................................7777777
    .............................................777
    ................................................
    ................................................
    `]
let shadeLevels = [shader.ShadeLevel.One, shader.ShadeLevel.Two, shader.ShadeLevel.Three]
let shaders: Sprite[][] = [
[],
[],
[],
[]
]
for (let index = 0; index <= 3; index++) {
    for (let ShaderIndex = 0; ShaderIndex <= 2; ShaderIndex++) {
        myShader = shader.createImageShaderSprite(scaling.rot(list[ShaderIndex], index * 90), shadeLevels[ShaderIndex])
        shaders[index].push(myShader)
        myShader.setFlag(SpriteFlag.Invisible, false)
    }
}
let mySprite = sprites.create(img`
    . . f f f f f f f f f f f f . . 
    . f f f 1 1 1 1 1 1 1 1 f f f . 
    . f f f 1 f f d d d d 1 f f f . 
    . . . f d f f d d f d d f . . . 
    . . . f d d d d d d d d f . . . 
    . . . f d d d f f d d 1 f . . . 
    . . . f 1 d d d d d d 1 f . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . f b b 1 1 1 1 b b f . . . 
    . . f b b b b 1 1 b b b b f . . 
    . . f b f b b b b b b f b f . . 
    . . f d f b b b b b b f d f . . 
    . . . f f e e f f e e f f . . . 
    . . . . f b b b b b b f . . . . 
    . . . . f b b b b b b f . . . . 
    . . . . f b b f f b b f . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
characterAnimations.loopFrames(
mySprite,
[img`
    . f f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d d d d d f . . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . b b b b 1 1 1 . . . . . 
    . . . . b b b b b 1 1 1 . . . . 
    . . . . b b b b b b 1 1 . . . . 
    . . . . b b b b b b b 1 . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . b b b b b b b . . . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . f f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . f d d d d d d . . . . . 
    . . . d d d d d d d d . . . . . 
    . . . . 1 1 1 b b b b . . . . . 
    . . . 1 1 1 b b b b b . . . . . 
    . . . 1 1 b b b b b b . . . . . 
    . . . 1 b b b b b b b . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . b b b b b b b . . . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . f f f f f f f f f f f f . . 
    . f f f 1 1 1 1 1 1 1 1 f f f . 
    . f f f 1 f f d d d d 1 f f f . 
    . . . f d f f d d f d d f . . . 
    . . . f d d d d d d d d f . . . 
    . . . f d d d f f d d 1 f . . . 
    . . . f 1 d d d d d d 1 f . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . f b b 1 1 1 1 b b f . . . 
    . . f b b b b 1 1 b b b b f . . 
    . . f b f b b b b b b f b f . . 
    . . f d f b b b b b b f d f . . 
    . . . f f e e f f e e f f . . . 
    . . . . f b b b b b b f . . . . 
    . . . . f b b b b b b f . . . . 
    . . . . f b b f f b b f . . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingDown)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . f f f f f f f f f f f f . . 
    . f f f 1 1 1 1 1 1 1 1 f f f . 
    . f f f 1 f f d d d d 1 f f f . 
    . . . f d f f d d f d d f . . . 
    . . . f d d d d d d d d f . . . 
    . . . f d d d f f d d 1 f . . . 
    . . . f 1 d d d d d d 1 f . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . f b b 1 1 1 1 b b f . . . 
    . . f b b b b 1 1 b b b b f . . 
    . . f b f b b b b b b f b f . . 
    . . f d f b b b b b b f d f . . 
    . . . f f e e f f e e f f . . . 
    . . . . f b b b b b b f . . . . 
    . . . . f b b b b b b f . . . . 
    . . . . f b b f f b b f . . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingUp)
)
game.onUpdate(function () {
    for (let index = 0; index <= 3; index++) {
        for (let ShaderIndex = 0; ShaderIndex <= 2; ShaderIndex++) {
            if (index == 0) {
                shaders[index][ShaderIndex].left = mySprite.right
                shaders[index][ShaderIndex].y = mySprite.y
                shaders[index][ShaderIndex].setFlag(SpriteFlag.Invisible, !(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight)) && !(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown)))))
            } else if (index == 1) {
                shaders[index][ShaderIndex].top = mySprite.bottom
                shaders[index][ShaderIndex].x = mySprite.x
                shaders[index][ShaderIndex].setFlag(SpriteFlag.Invisible, !(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown))))
            } else if (index == 2) {
                shaders[index][ShaderIndex].right = mySprite.left
                shaders[index][ShaderIndex].y = mySprite.y
                shaders[index][ShaderIndex].setFlag(SpriteFlag.Invisible, !(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft)) && !(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown)))))
            } else {
                shaders[index][ShaderIndex].bottom = mySprite.top
                shaders[index][ShaderIndex].x = mySprite.x
                shaders[index][ShaderIndex].setFlag(SpriteFlag.Invisible, !(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp))))
            }
        }
    }
})
forever(function () {
    music.setVolume(23)
    music.playMelody("C D E F F E D C ", 150)
    music.playMelody("C5 B A G G A B C5 ", 150)
})
