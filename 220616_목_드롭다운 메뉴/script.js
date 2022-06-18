const optionMenu = document.querySelector('.select-menu'),
      selectBtn = optionMenu.querySelector('.select-btn'),
      options = optionMenu.querySelectorAll('.option'),
      sBtn_txt = optionMenu.querySelector('.sBtn-text');


selectBtn.addEventListener('click', ()=> {
  // classList : active, remove 속성
  optionMenu.classList.toggle('active') //active 로만 써야함
  console.log("!")
})

options.forEach(option => {
  option.addEventListener('click', ()=> {
    console.log(option)
    
    let selectedOption = option.querySelector('.option-text').innerText;
    // option-text가 전체가 다뜸 
    // .innerText를 사용해서 텍스트만 가지고옴
    console.log(selectedOption)
    


    sBtn_txt.innerText = selectedOption
    optionMenu.classList.remove('active')
  })
})