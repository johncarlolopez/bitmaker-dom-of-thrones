function scene3() {

  console.log('Executing scene 3!')

  // Setup Stage
  stage = document.querySelector('#stage');
  desert = document.querySelector('#desert');
  stageImg = stage.querySelector('#stage-img');
  desertImgSrc = desert.getAttribute('src')
  stageImg.setAttribute('src', desertImgSrc)


  // Setup Cast
  dannyContainer = document.createElement('div')
  drogoContainer = document.createElement('div')
  stage.append(dannyContainer)
  stage.append(drogoContainer)
  // Character 1
  danny = document.querySelector('#danerys')
  dannyContainer.append(danny)
  blueDress = document.querySelector('#blue-dress')
  dannyContainer.append(blueDress)

  dannyContainer.style.position = 'absolute'
  dannyContainer.style.width = '10%'
  dannyContainer.style.top = '50%'
  dannyContainer.style.left = '20%'

  danny.style.position = 'absolute'
  danny.style.width = '42%'
  danny.style.top = '-25%'
  danny.style.left = '15%'

  // Character 2
  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)

  drogoContainer.style.position = 'absolute'
  drogoContainer.style.width = '10%'
  drogoContainer.style.top = '50%'
  drogoContainer.style.left = '80%'

  drogo.style.position = 'absolute'
  drogo.style.width = '65%'
  drogo.style.top = '-33%'
  drogo.style.left = '15%'
  // Setup Props

  // Prop 1
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '55%'
  egg.style.left = '25%'
  egg.style.width = '5%'
  egg.style.borderRadius = '100%'
  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {

  })
  frame(function() {

  })
  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '37%'

  })
  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '50%'
  })

  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '63%'
  })

  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '75%'
  })
  // Stage direction 2
  frame(function() {

  })
  frame(function() {

  })
  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '63%'
  })
  frame(function() {
    egg.style.top = '45%'
    egg.style.left = '50%'
  })
  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '37%'

  })
  frame(function() {
    egg.style.top = '55%'
    egg.style.left = '28%'

  })
}
