// variables
    let player = {
        game: game.createSprite(null,null),
        bright: 2,
        x: 2,
        y: 4

    };

    let falls_apple = 0;

    let taked_apples = 0;

    let gamerule = {
        level: 1,
        lifes: 100,
        points: 1,

    };

    function gameOver(){
        basic.showAnimation(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #

        `)

        basic.showAnimation(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #

        `)

        basic.showAnimation(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #

        `)

        basic.showAnimation(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #

        `)

        basic.showAnimation(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .

        `)

        basic.showAnimation(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #

        `)

        basic.showAnimation(`
        # . . . #
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
        
        basic.showAnimation(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #

        `)

        basic.showAnimation(`
        # # # . .
        # . . # .
        # # # . .
        # # . . .
        # . # . .

        `)

    }

    let losed_apples = 0
    let maca = {
        game: game.createSprite(null, null),
        x: randint(0, 4),
        y: 0

    };

    function animation(){
        game.pause()
        basic.showNumber(gamerule.points)

        basic.showAnimation(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #

        `);

        basic.showAnimation(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #

        `);

        basic.showAnimation(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #

        `);

        basic.showAnimation(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #

        `);

            basic.showAnimation(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #

        `);

        basic.showAnimation(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # .

        `);
        
        basic.showAnimation(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # . .

        `);

        basic.showAnimation(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . . .

        `);

        basic.showAnimation(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .

        `);

            basic.showAnimation(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .

        `);

        game.resume();

    }

    function addpoint(){
        if (game.score() != gamerule.points){
            game.setScore(gamerule.points)
            console.log("level " + game.score())
            animation()

        }   

    }

    function frame(){

        let velocidade = 2/ + (game.score()/10) * 2
        maca.y += gamerule.level/(velocidade)

        if (maca.y >= 5){
            maca.game.off()
            maca.y = randint(0, -10)
            maca.x = randint(0, 4)
            falls_apple++
            console.log(falls_apple + " maçãs ja cairam"+", dessas, você pegou " + taked_apples + ", " + losed_apples+" maçãs foram perdidas")
            maca.game.on()

        }
        if (maca.y < 0){
            maca.game.off()

        }else if (maca.y < 5){
            maca.game.on()

        }

        if (player.x > 4){
            player.x = 4;

        }else if (player.x < 0){
            player.x = 0

        }

        if (player.bright > 255){
            gamerule.points++
            player.bright = 2

        }
        losed_apples = falls_apple - taked_apples
        if (losed_apples > 9){
            gameOver()
        }

    }

    function move(){
        input.onButtonPressed(Button.A,()=> {
            player.x--

        })
        input.onButtonPressed(Button.B,()=> {
            player.x++

        })

    }

    function collision(){
        if (maca.x == player.x && Math.round(maca.y) == player.y){
            maca.game.off()
            maca.y = randint(0, -10)
            maca.x = randint(0, 4)
            falls_apple++
            taked_apples++
            console.log(falls_apple + " maçãs ja cairam"+", dessas, você pegou " + taked_apples + ", " + losed_apples+" maçãs foram perdidas")
            maca.game.on()
            player.bright += 50
            
        }

}
// setups 
    game.setScore(1);

//game
    basic.forever(()=>{
        move()
        player.game.setBrightness(player.bright)
        player.game.setX(player.x)
        player.game.setY(player.y)
        maca.game.setX(maca.x)
        maca.game.setY(maca.y)
        addpoint()
        frame()
        collision()

    })