
/**
 * Given a sequence of integers, sequence, return the length of the
 * longest subsequence of sequence that is a zig-zag sequence.
 * https://community.topcoder.com/stat?c=problem_statement&pm=1259&rd=4493
 * @param vector Array<Number>
 * @returns int
 */
const longestZigZag = vector => {

  const vLength = vector.length
  if (vLength < 3)
    return vLength

  //TODO
  /*const maxUp = () => {
    let i = 0, max = 0
    for (i; i < vLength; i++) {
      let j = i + 1
      if (max > (vLength - j)) break
      let subMax = 0
      for (j; j < vLength; j++) {
        if (vector[j] > vector[i])
          subMax++
      }
      max = Math.max(max, subMax)
    }
    return max
  }

  maxUp(vector)*/

  return -1
}

// ---

require('colors')
const { strictEqual } = require('assert')

const asserts = [
  [ [], 0 ],
  [ [0], 1 ],
  [ [0, 1], 2 ],
  [ [1, 0], 2 ],
  [ [0, 2, 1, 3], 4 ],
  /*[ [0, 2, 2, 1, 3], 4 ],
  [ [0, 2, 2, 1, 3, 4], 4 ],
  [ [ 1, 7, 4, 9, 2, 5 ], 6 ],
  [ [ 1, 17, 5, 10, 13, 15, 10, 5, 16, 8 ], 7],
  [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 2 ],
  [ [ 70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32 ], 8 ],
  [ [
      374, 40, 854, 203, 203, 156, 362, 279, 812, 955,
      600, 947, 978, 46, 100, 953, 670, 862, 568, 188,
      67, 669, 810, 704, 52, 861, 49, 640, 370, 908,
      477, 245, 413, 109, 659, 401, 483, 308, 609, 120,
      249, 22, 176, 279, 23, 22, 617, 462, 459, 244
    ], 36 ]*/
]

asserts.forEach(data => {
  const [ input, expected ] = data
  console.log(input.join(',').yellow, '=>', String(expected).green)
  try {
    strictEqual(longestZigZag(input), expected)
  } catch (e) {
    console.log(e.message.bold.red)
  }
})
