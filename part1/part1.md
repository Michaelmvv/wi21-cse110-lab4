# Part 1
---
##### Variables & Scoping
1. It would print ```prices.length``` since var have no block scoping. 
2. It will print this value given to ```discountedPrice``` in the last loop. 
3. It will print this value given to ```finalPrice``` in the last loop.
4. It will return ```[50, 100, 150]``` since with a discount of .5, (50%) half is removed from each.
5. It will give a reference error, saying i is not defined, because i is in the loops scope, not the functions.
6. It will give a reference error, saying discountedPrice is not defined, because discountedPrice is in the loops scope, not the functions.
7. It will print out the last value of ```finalPrice``` from the loop, since it was declared in the functions block scope.
8. It will return ```[50, 100, 150]``` discounted is in scope for both the loop and function.
9. It will give a reference error, saying i is not defined, because i is in the loops scope, not the functions.
10. It will give an error saying it is not in scope, since ```discountedPrice`` is only inside the loops scope
11. It would print 0, since finalPrice is a const
12. It would return ```[]``` (an empty array) since discounted is a const.
##### Data Types
13. Notation:
  * A. `student.name`
  * B. `student["Grad year"]`
  * C. `eval(student.greeting)` (I think this would be a big security risk if its user inputed json....)
  * D. `students["Favorite Teacher"].name`
  * E. `student.courseLoad[0]`
##### Basic Operations & Type Conversion

14. Arithmetic
  * A. `'32'` Looks like the `2` was converted to a string and concatenated. It appears concatenation takes precedence over addition.
  * B. `1` Here, the `'3'` was converted to a number and then subtracted.
  * C. `3`. `null` seems to be converted to 0, then added.
  * D. `3null` It seams that since the first arg was a string, `null` was converted to a string and concatenated.
  * E. `4` True was converted to 1, then added with 3.
  * F. `0`. Both `false` and `null` where converted to 0 and added.
  * G. `3undefined`. `undefined` was converted to a string and concatenated.
  * H. `NaN`. 3 was converted to a number, then `undefined` was subtracted, resulting in `NaN`.
15. Comparison:
  * A. `true`. `'2'` was converted to a number, then compared
  * B. `false`. 1 comes before 2.
  * C. `true`. `'2'` is treated as a number
  * D. `false`. `===` is a strict comparison. The types don't mach.
  * E. `false`. true is 1 and 1 is not 2
  * F. `true`. `Boolean(x)` is true for any non empty values.
16. `==` will check equality, ignoring types. (ex will convert `"2"` to `2`). `===` is a strict equality. It will also ensure types are the same.
##### Conditionals 
17. `How are you?` 2 is not equal to 1 (true). 2 is converted to true since it is a nonempty, run that block. skip the else since we found an if to run.
##### Loops
18. See [part1-question18.js](part1-question18.js)
##### Functions
19. I think that it returns an array of (num+2)*2 where for each inex num. [6, 8, 12]
20. See [part1-question20.js](part1-question20.js)
21. 1,4,3,2