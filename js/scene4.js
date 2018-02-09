function scene4() {

  console.log('Executing scene 4!')

  // Setup Stage
  stage = document.querySelector('#stage');
  kingsLanding = document.querySelector('#kings-landing');
  stageImg = stage.querySelector('#stage-img');
  kingsLandingImgSrc = kingsLanding.getAttribute('src')
  stageImg.setAttribute('src', kingsLandingImgSrc)

  // Setup Cast
  cerseiContainer = document.createElement('div')
  jaimeContainer = document.createElement('div')
  sansaContainer = document.createElement('div')
  stage.append(cerseiContainer)
  stage.append(jaimeContainer)
  stage.append(sansaContainer)

  // Character 1
  cersei = document.querySelector('#cersei')
  cerseiContainer.append(cersei)
  redDress = document.querySelector('#red-dress')
  cerseiContainer.append(redDress)

  cerseiContainer.style.position = 'absolute'
  cerseiContainer.style.width = '8%'
  cerseiContainer.style.top = '45%'
  cerseiContainer.style.left = '20%'

  cersei.style.position = 'absolute'
  cersei.style.width = '55%'
  cersei.style.top = '-35%'
  cersei.style.left = '20%'

  // Character 2
  jaime = document.querySelector('#jaime')
  jaimeContainer.append(jaime)
  king = document.querySelector('#king')
  jaimeContainer.append(king)

  jaimeContainer.style.position = 'absolute'
  jaimeContainer.style.width = '8%'
  jaimeContainer.style.top = '45%'
  jaimeContainer.style.left = '40%'

  jaime.style.position = 'absolute'
  jaime.style.width = '50%'
  jaime.style.top = '-32%'
  jaime.style.left = '44%'

  // Character 3
  sansa = document.querySelector('#sansa')
  sansaContainer.append(sansa)
  blueDress = document.querySelector('#blue-dress')
  sansaContainer.append(blueDress)

  sansaContainer.style.position = 'absolute'
  sansaContainer.style.width = '8%'
  sansaContainer.style.top = '45%'
  sansaContainer.style.left = '60%'

  sansa.style.position = 'absolute'
  sansa.style.width = '45%'
  sansa.style.top = '-28%'
  sansa.style.left = '12%'
  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

  frame(function() {
    cerseiContainer.style.top = '47%'
    cerseiContainer.style.left = '28%'

    jaimeContainer.style.top = '47%'
    jaimeContainer.style.left = '48%'

    sansaContainer.style.top = '47%'
    sansaContainer.style.left = '68%'
  })
  frame(function() {
    cerseiContainer.style.top = '45%'
    cerseiContainer.style.left = '36%'

    jaimeContainer.style.top = '45%'
    jaimeContainer.style.left = '56%'

    sansaContainer.style.top = '45%'
    sansaContainer.style.left = '76%'
  })
  frame(function() {
  })
  frame(function() {
  })
  frame(function() {
    cerseiContainer.style.top = '47%'
    cerseiContainer.style.left = '28%'

    jaimeContainer.style.top = '47%'
    jaimeContainer.style.left = '48%'

    sansaContainer.style.top = '47%'
    sansaContainer.style.left = '68%'
  })
  frame(function() {
    cerseiContainer.style.top = '45%'
    cerseiContainer.style.left = '20%'

    jaimeContainer.style.top = '45%'
    jaimeContainer.style.left = '40%'

    sansaContainer.style.top = '45%'
    sansaContainer.style.left = '60%'
  })

  frame(function() {
  })
  frame(function() {
  })

  frame(function() {
    cerseiContainer.style.top = '50%'
    jaimeContainer.style.top = '50%'
  })
  frame(function() {
    cerseiContainer.style.top = '55%'
    jaimeContainer.style.top = '55%'
  })
  frame(function() {
    cerseiContainer.style.top = '60%'
    jaimeContainer.style.top = '60%'
  })
  frame(function() {
    cerseiContainer.style.top = '65%'
    jaimeContainer.style.top = '65%'
  })
  frame(function() {
    cerseiContainer.style.top = '70%'
    jaimeContainer.style.top = '70%'
  })
  frame(function() {
    cerseiContainer.style.top = '75%'
    jaimeContainer.style.top = '75%'
  })
}
