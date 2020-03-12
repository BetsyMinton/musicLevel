controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 0
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
function checkChoice () {
    if (choice == arrowList.shift()) {
        points += 1
        console.log(arrowList)
        if (arrowList.length == 0) {
            Level_Over()
            console.log(arrowList)
        }
    } else {
        points += -1
        console.log(arrowList)
        if (arrowList.length == 0) {
            Level_Over()
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 3
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 1
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
function Level_Over () {
    answerOn = 0
    music.stopAllSounds()
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Timer = (game.runtime() - Start_time) / 1000
    list.push(points)
    game.splash("" + Math.round(points / Timer * 100) + " " + "points")
    whichLevel += 1
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 2
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
function MusicLevel () {
    notesList = [262, 294, 330, 392, 440, 523, 220]
    game.showLongText("Carefully watch the arrows,remember the order in which they appear", DialogLayout.Center)
    for (let index = 0; index < 7; index++) {
        ChooseArrow = Math.randomRange(0, 3)
        mySprite.setImage(arrows[ChooseArrow])
        arrowList.push(ChooseArrow)
        pause(1000)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        pause(100)
    }
    music.stopAllSounds()
    console.log(arrowList)
    points = 0
    game.showLongText("Use the keypad to recreate the pattern", DialogLayout.Center)
    answerOn = 2
    Start_time = game.runtime()
}
let ChooseArrow = 0
let notesList: number[] = []
let Start_time = 0
let choice = 0
let answerOn = 0
let Timer = 0
let points = 0
let arrowList: number[] = []
let list: number[] = []
let arrows: Image[] = []
let mySprite: Sprite = null
let Score = 0
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
arrows = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . f f f f f f f f f f f . . . 
. . f f f . f f f . f f f . . . 
. . f f f . f f f . f f f . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . f f f . f f f . f f f . . . 
. . f f f . f f f . f f f . . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f f f . . 
. . . . . . . . . . . f f f . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . . . . . . . . . . f f f . . 
. . . . . . . . . f f f f f . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . f f f f f . . . . . . . . . 
. . f f f . . . . . . . . . . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . f f f . . . . . . . . . . . 
. . f f f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
list = []
arrowList = []
points = 0
Timer = 0
let whichLevel = 0
answerOn = 0
MusicLevel()
