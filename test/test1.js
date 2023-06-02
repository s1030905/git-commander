const add = (a, b) => {
  return a + b
}

const addSpec = () => {
  const expect = (condition, value, result) => {
    if (value === result) {
      console.log('pass', condition)
    } else {
      console.log('fail', condition)
    }
  }

  expect('add(1, 2) === 3', add(1, 2), 3)
  expect('add(2, 3) === 5', add(2, 3), 5)
  expect('string inputs should be illegal', add('2', '3'), 'illegal input')
}

addSpec()
