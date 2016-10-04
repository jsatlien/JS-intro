var hardMode = function squareSum(x, y, z) {
  if ( (x > (y && z)) && (y > z)
    console.log(Math.pow((x+y), 2))
              )
  else if ( (x > (y && z)) && (z > y)
    console.log(Math.pow((z+x), 2))
  )

  else if ( (y > (x && z)) && (z > x)
    console.log(Math.pow((z+y), 2))
  )
  else if ( (y > (x && z)) && (x > z)
    console.log(Math.pow((x+y), 2))
  )

  else if ( (z > (y && x)) && (y > x)
    console.log(Math.pow((z+y), 2))
  )
  else (  (z > (y && x)) && (x > y)
    console.log(Math.pow((z+x), 2))
  )
      }
