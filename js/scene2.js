function scene2() {

  console.log('Executing scene 2!')
  // Setup Stage
  stage = document.querySelector('#stage');
  castle = document.querySelector('#castle');
  stageImg = stage.querySelector('#stage-img');
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast
  nedContainer = document.createElement('div')
  stage.append(nedContainer)

  // Character 1
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '50%'
  nedContainer.style.border = '2px solid red'
  nedContainer.style.background = 'yellow'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  ned.style.border = '2px solid blue'
  leather.style.border = '2px solid green'
  nedContainer.style.height = '44%'
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  nedContainer.style.height = '37%'
  ned.style.border = 'none'
  leather.style.border = 'none'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'

  // Character 2
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0
  // Setup Props
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 1

  // Prop 2

  // Action!
  // Stage direction 1
  //
  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

  var joffreytop = 5;
  var joffreyleft= 80;
  // joffreytransform = 60;

  for (var i = 0; i < 3; i++) {
    moveHead(i)
  }

  function moveHead(i) {
    frame(function() {
      joffrey.style.top = (joffreytop + (50 * i))   + "%"
      joffrey.style.left = (joffreyleft + (100 * i)) + "%"
      joff.style.transform = 'rotateZ(60deg)'

    })
  }
  
  // frame(function() {
  //   joffrey.style.top = '5%'
  //   joffrey.style.left = '80%'
  //   joff.style.transform = 'rotateZ(60deg)'
  // })
  // frame(function() {
  //   joffrey.style.top = '50%'
  //   joffrey.style.left = '180%'
  //   joff.style.transform = 'rotateZ(120deg)'
  // })
  // frame(function() {
  //   joffrey.style.top = '100%'
  //   joffrey.style.left = '250%'
  //   joff.style.transform = 'rotateZ(180deg)'
  // })
}
