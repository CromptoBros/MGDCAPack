PlayerEvents.loggedIn((event) => {
  //Syntax, max is [12-31]
  let birthdays = [
    ['aaronhowser1', [12, 2], 'Lead pack dev'],
    ['Saereth', [11, 13], 'Backend help'],
    ['MystifiedSky', [11, 29], 'Alpha tester'],
    ['Kezzar', [7, 22], 'Alpha tester'],
    ['PhantomCrestTV', [1, 15], 'Alpha tester'],
    ['pikX', [5, 13], 'Alpha tester'],
    ['Ladymaehem', [8, 8], 'Editor'],
    ['Hadn69', [9, 11], 'Alpha tester'],
    ['manmaed', [6, 30], 'Beta tester'],
    ['xXJamie_Xx', [11, 12], 'Beta tester'],
    ['Podge', [1, 15], 'Beta tester'],
    ['Ashra', [4, 23], 'Beta tester'],
    ['Snakevalor', [2, 17], 'Beta tester'],
    ['SohPandaa', [7, 21], 'Beta tester'],
    ['amicia_catta', [8, 5], 'Beta tester'],
    ['Lith', [2, 16], 'Beta tester'],
    ['Loneztar', [7, 15], 'Tester herder'],
    ['daftMOOSE', [3, 26], 'Beta tester'],
    ['tjdawgamer', [5, 5], 'Beta tester'],
    ['GamingGuyRob', [6, 30], 'Beta tester'],
  ]

  let player = event.player

  let currentDate = new Date()
  let today = [
    currentDate.getMonth() + 1, //[0,11] so +1
    currentDate.getDate(),
  ]

  for (let [person, date, role] of birthdays) {
    if (date[0] == today[0] && date[1] == today[1]) {
      player.tell([
        Component.string('Happy birthday to '),
        Component.string(person + '!')
          .underlined()
          .hover(Component.string(role)),
      ])
    }
  }
})
