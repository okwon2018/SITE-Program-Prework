Submitted by: Ohsung Kwon

Time spent: 4 hours spent in total

Link to project: https://psychedelic-just-hedgehog.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The number of mistakes available is displayed

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - I have used w3schools to read different built-in functions, such as setInterval and clearInterval. For the color of additional boxes, I used rapidtables.com to find the rgb combination that I wanted.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    - When I was working on this prework, there were a few challenges that I encountered. Below are the two most notable challenges.
    - Figuring out the definition of mistakes and implementing challenged me. Some may think that any mistakes made in a sequence as one, while the others may think that if there is n number of mistakes, there are n mistakes. I had to think which one is more logical. For this purpose I actually had to ask my friends what mistakes should be defined as. Majority of them told me that any number of mistakes in a sequence should be considered as one. To implement this functionality, I had to make sure that I had a flag to switch depending on whether if there is a mistake in a sequence. If a user could afford to make a mistake, and it is not the end of the sequence, I would treat it as if there was no mistake made. however, if it is the end of the sequence and the user made a mistake, I would decrement the number of mistake by one. To call the loseGame function correctly, my function calls it only when the number of mistakes is less than or equal to zero.
    - Figuring out where to call setInterval() and clearInterval() gave me some challenge, because if setInterval is not correctly cleared, it would mess up the program's timer countdown. Before I started writing out the code, I had to figure out when setInterval() should be called. I decided to call it at the end of playClueSequence(), because guess(btn) and startGame() both call playClueSequence(). I also had to create my own function decreaseTime(), which decrements the time displayed by one when called with setInterval(). The function calls clearInterval(), decrement mistake counter by one and call playSequence() to make sure it moves on to the next sequence when the mistake is made, if the time left is zero. Else, it would just decrement the time by one. I also called clearInteval() in the beginning of playClueSequence() to make sure that every setInterval() I made would be cleared.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    - I have my interests in building educatinal tools. I am currently working as a teaching assistant for one of the computer science courses at my school, CMSC330: Organzation of Programming Languages. There are some international students in my discussion sections, who have hard time understanding different programming concepts when explained in English. I would like to develop some web applications that could visualize some programing concepts, such as fucntional programming(currying, folding, mapping), memory leaks, lambda calculus, and finite state automata. I would like to know a few things
    - How we can implement some visualization tools
    - Good ways to document web applications so it is user-friendly.
    - How to keep the project open-source and yet still secure from malicious codes

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    - I would have worked on some html and css in order to make the project more compatible on any devices, which includes both the tablets and phone as well. I tried testing the project on my phone with more than four buttons, and the buttons were too big, so I would actually have to scroll down on my phone to see other buttons, and even so I would not be able to see all buttons, as well as the timer and number of mistakes left.
    - I would also try to get rid of some code duplication made. In guess(btn), there is a duplicated code for two versions. First is when the mistake is made while a sequence is not finished and the second is when the mistake is not made and the sequence is not over yet.
    - I would also make my code more understandable by adding some more descriptive comments, so others can modify my project in their own designs.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Ohsung Kwon]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
