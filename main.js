
//#region Variables

const gold = document.getElementById('gold')
// const wave = document.getElementById('wave')

// const mechItem = document.getElementById('mechItem')

// click upgrades
const clickTotal = document.getElementById('clickTotal')
const autoTotal = document.getElementById('autoTotal')

const armorPiercing = document.getElementById('armorPiercing')
const armorPiercingLevel = document.getElementById('armorPiercingLevel')

const rapidFire = document.getElementById('rapidFire')
const rapidFireLevel = document.getElementById('rapidFireLevel')

// auto upgrades
const chopper = document.getElementById('chopper')
const chopperLevel = document.getElementById('chopperLevel')

const sniper = document.getElementById('sniper')
const sniperLevel = document.getElementById('sniperLevel')
//#endregion

//#region Objects
const army = {
  attackPower: 1,
  autoPower:0,
  gold: 0,

}

const zombie = {
  health: 10,
  wave: 1,
  level: 1,
}

const piercing = {
  cost: 5,
  level: 1,
  attack: 1
}

const rapid = {
  cost: 25,
  level: 1,
  attack: 2
}

const chopperSprite = {
  cost: 200,
  level: 1,
  attack: 3
}

const sniperSprite = {
  cost: 500,
  level: 1,
  attack: 5
}
//#endregion

function startGame() {
update()

setInterval(deanimateAttack, 1000)
setInterval(autoAttack, 3000)
}

function update() {
  let ap = piercing.cost * piercing.level
  let rap = rapid.cost * rapid.level
  let chopperPay = chopperSprite.cost * chopperSprite.level
  let sniperPay = sniperSprite.cost * sniperSprite.level

  // @ts-ignore
  gold.innerHTML = army.gold

  // @ts-ignore
  armorPiercing.innerHTML = ap
  // @ts-ignore
  armorPiercingLevel.innerHTML = piercing.level - 1

  // @ts-ignore
  rapidFire.innerHTML = rap
  // @ts-ignore
  rapidFireLevel.innerHTML = rapid.level - 1

  // @ts-ignore
  chopper.innerHTML = chopperPay
  // @ts-ignore
  chopperLevel.innerHTML = chopperSprite.level - 1

  // @ts-ignore
  sniper.innerHTML = sniperPay
  // @ts-ignore
  sniperLevel.innerHTML = sniperSprite.level - 1



  // @ts-ignore
  clickTotal.innerHTML = army.attackPower
  // @ts-ignore
  autoTotal.innerHTML = army.autoPower
  
}

//#region Click upgrades

function buyAp() {
  // console.log('piercing');
  if (army.gold >= piercing.cost * piercing.level) {
    let ap = piercing.cost *= piercing.level
    piercing.level++
    army.gold -= ap
    piercing.cost = ap
    army.attackPower += piercing.attack
  }
  update()
}

function buyRf() {
  // console.log('Rapid');
  if (army.gold >= rapid.cost * rapid.level) {
    let rap = rapid.cost *= rapid.level
    rapid.level++
    army.gold -= rap
    rapid.cost = rap
    army.attackPower += rapid.attack
  }
  update()
}
//#endregion

//#region Auto upgrades

function buyChopper() {
  // console.log('chopper on');
  if (army.gold >= chopperSprite.cost * chopperSprite.level) {
    let chopperPay = chopperSprite.cost *= chopperSprite.level
    chopperSprite.level++
    army.gold -= chopperPay
    chopperSprite.cost = chopperPay
    army.autoPower += chopperSprite.attack
    drawChopper()
  }
  update()
}

function drawChopper() {
// console.log('draw chopper');
    // @ts-ignore
  document.getElementById('chopperItem').innerHTML = `
          <img class="chopper-size" src="/assets/betterHelicopter.webp" alt="">
  ` 
}

function buySniper() {
  // console.log('sniper obtained');
  if (army.gold >= sniperSprite.cost * sniperSprite.level) {
    let sniperPay = sniperSprite.cost *= sniperSprite.level
    sniperSprite.level++
    army.gold -= sniperPay
    sniperSprite.cost = sniperPay
    army.autoPower += sniperSprite.attack
    drawSniper()
  }
  update()
}

function drawSniper() {
  // console.log('draw sniper');
  // @ts-ignore
  document.getElementById('sniperItem').innerHTML = `
          <img class="sniper-size" src="/assets/sniper.gif" alt="">
  `
}

//#endregion

//#region Attacks

function autoAttack() {
  army.gold += army.autoPower

  update()
}

function attack() {
  army.gold += army.attackPower
  // animateAttack()
  drawMech()
  update()
}

function deanimateAttack() {
  // @ts-ignore
  document.getElementById('mechItem').innerHTML = `
  <img class="mech" src="/assets/staticMech.png" alt="">
  `
}

function drawMech() {
  // @ts-ignore
  document.getElementById('mechItem').innerHTML = `
              <img class="mech" src="/assets/Mech.gif" alt="">
  `
}
//#endregion

startGame()

// drawChopper()
// drawSniper()





















































