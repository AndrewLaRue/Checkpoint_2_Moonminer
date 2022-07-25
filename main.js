
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
const flamethrower = document.getElementById('flamethrower')
const flamethrowerLevel = document.getElementById('flamethrowerLevel')

const turret = document.getElementById('turret')
const turretLevel = document.getElementById('turretLevel')
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

const flame = {
  cost: 200,
  level: 1,
  attack: 3
}

const turr = {
  cost: 500,
  level: 1,
  attack: 5
}
//#endregion

function startGame() {
update()

setInterval(deanimateAttack, 1000)
setInterval(autoAttack, 3000)
// deanimateAttack()

}

function update() {
  let ap = piercing.cost * piercing.level
  let rap = rapid.cost * rapid.level
  let fla = flame.cost * flame.level
  let tur = turr.cost * turr.level


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
  flamethrower.innerHTML = fla
  // @ts-ignore
  flamethrowerLevel.innerHTML = flame.level - 1


  // @ts-ignore
  turret.innerHTML = tur
  // @ts-ignore
  turretLevel.innerHTML = turr.level - 1



  // @ts-ignore
  clickTotal.innerHTML = army.attackPower
  // @ts-ignore
  autoTotal.innerHTML = army.autoPower
  
}

//#region Click upgrades

function buyAp() {
  console.log('piercing');
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

function buyFlame() {
  // console.log('flame on');
  if (army.gold >= flame.cost * turr.level) {
    let fla = flame.cost *= flame.level
    flame.level++
    army.gold -= fla
    flame.cost = fla
    army.autoPower += flame.attack
    drawFlame()
  }
  update()
}

function drawFlame() {
// console.log('draw flame');
    // @ts-ignore
  document.getElementById('flameItem').innerHTML = `
          <img class="gun-size" src="/assets/betterHelicopter.webp" alt="">
  ` 
}

function buyTurret() {
  // console.log('turret obtained');
  if (army.gold >= turr.cost * turr.level) {
    let tur = turr.cost *= turr.level
    turr.level++
    army.gold -= tur
    turr.cost = tur
    army.autoPower += turr.attack
    drawTurret()
  }
  update()
}

function drawTurret() {
  // console.log('draw turret');
  // @ts-ignore
  document.getElementById('turretItem').innerHTML = `
          <img class="gun-size" src="/assets/sniper.gif" alt="">
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
// drawFlame()
// drawTurret()
startGame()






















































