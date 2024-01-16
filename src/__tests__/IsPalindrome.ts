import isPalindrome from '@code/IsPalindrome'

test('is palindrome', function () {
  expect(isPalindrome('A but tuba')).toBe(true)
})

test('A dog, a plan, a canal: pagoda.', function () {
  expect(isPalindrome('A dog, a plan, a canal: pagoda.')).toBe(true)
})

test('A dog, a plan, a cazal: pagoda.', function () {
  expect(isPalindrome('A dog, a plan, a cazal: pagoda.')).toBe(false)
})

test('A Toyota! Race fast, safe car! A Toyota!', function () {
  expect(isPalindrome('A Toyota! Race fast, safe car! A Toyota!')).toBe(true)
})
