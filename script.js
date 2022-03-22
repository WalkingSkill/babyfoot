// Inspired by a dribbble by Andy Liu
//
// Find it Here:
// https://dribbble.com/shots/2623124-NBA-2016-first-round-bracket

var michael = document.getElementById('michael').innerHTML
var pl = document.getElementById('pl').innerHTML;

const classMichael = document.getElementById('michael')
const classPl = document.getElementById('pl')


const getSub = document.getElementById('subtitle')



function compare(){
  scoreMichael = parseInt(michael)
  scorePl = parseInt(pl)
  if (scorePl > scoreMichael ){
    classPl.style.backgroundColor = '#EABF4F'
    classPl.style.color = '#4B4452'
    classMichael.style.backgroundColor = 'hsl(274deg 47% 24%)'
    classMichael.style.color = ' #FFFF'

    getSub.innerHTML = "PL est en tête de ce championnat"



  } else if (scoreMichael > scorePl) {
    classPl.style.color =' #FFFF'
    classPl.style.backgroundColor = 'hsl(274deg 47% 24%)'

    classMichael.style.backgroundColor = '#EABF4F'
    classMichael.style.color = ' #4B4452'

    getSub.innerHTML = "Michaël est en tête de ce championnat"



  } else {
    classMichael.style.backgroundColor = '##EABF4F'
    classPl.style.backgroundColor = '##EABF4F'
    classMichael.style.color = ' ##4B4452'
    classPl.style.color = '##4B4452'
    const date = new Date().slice(30)

    getSub.innerHTML = `Une parfaite égalité dans ce championnat ${date}`


  }
}