# Mr. Roboger's Neighborhood

#### An application that takes a number from the user and returns a range of numbers from 0 to the user inputed number, with a few exceptions.

#### By Levi Kohler

## Technologies Used

* HTML
* JavaScript
* CSS
* Jquery
* Markdown

## Description

This application takes a number from the user and returns a range of numbers from 0 to the inputed number, with 3 exceptions:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Specs

Describe: beepBoop()

Test: "It should return 0 if the number 0 is inputted"

Expect: (beepBoop(0).toEqual(0);

Test: "It should return a string of numbers from 0 to the number inputted by the user"

Expect:(Beepboop(5).toEqual([0,1,2,3,4,5]))

Test: "If 3 is input, all numbers containing 3 will be replaced with "Won't you be my neighbor?""

Expect: beepBoop(3).toEqual("Won't you be my neighbor?")

## Setup/Installation Requirements

* Clone the repo to your Desktop
* Navigate to the top level of the directory
* Open index.html in your browser


## Known Bugs

* Project is incomplete, there are many bugs

## License

Copyright 2021 Levi Kohler

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact Information

kohler.la01@gmail.com