var b = 1

function outer() {
  var b = 2

  function inner() {
    // console.log(b++)
    b++
    var b = 3
    console.log(b)
  }

  inner()
}
outer()
