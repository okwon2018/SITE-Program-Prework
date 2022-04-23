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
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The number of mistakes available is displayed
- [x] When game buttons are clicked or sequence is shown, buttons gradually change colors
- [x] Made the buttons circular
- [x] When the cursor is hovering, the buttons would rise in y-axis
- [x] Background image added 

## Video Walkthrough (GIF)
1. Losing game through combination of mistakes and timer countdown (decreased the timer to 7 for generating gif)
    ![](https://user-images.githubusercontent.com/47762109/164841897-5c92a93e-5e9e-4bcb-bb9c-b647b54fa38d.gif)
2. Winning game with some mistakes   
    ![](https://user-images.githubusercontent.com/47762109/164842866-9793c308-4e01-4485-a419-817b0e081bce.gif)
3. Winning game perfectly  
    ![ezgif com-gif-maker-12](https://user-images.githubusercontent.com/47762109/164844306-2e0dffde-6e98-48d9-8fe5-91304bc8e071.gif)
4. Randomly generating sequences   
    ![](https://user-images.githubusercontent.com/47762109/164844180-78d44707-8717-47aa-992b-7c74d969ffb0.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    - I have used w3schools to read different built-in functions, such as setInterval and clearInterval. For the color of additional boxes, I used rapidtables.com to find the rgb combination that I wanted.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    - A challenge I encountered while creating this submission was figuring out how to define user strikes. There were two definitions that I considered implementing. The first definition of a strike was counting any mistake made during the current pattern count as only one mistake. The second was counting each mistake made during a pattern individually. To determine which definition made more sense to implement from a user’s perspective, I contacted some of my friends and had them try out the game. A majority of them told me that any number of mistakes in a sequence should be considered as one, so that is the approach I implemented. To implement this functionality, I created a boolean variable that switched to true whenever a mistake was discovered, and resets back to false between sequences. If a user could afford to make a mistake, and it is not the end of the sequence, I would treat it as if there was no mistake made. However, if it is the end of the sequence and the user made a mistake, I would decrement the number of mistakes by one. Finally, my function called the loseGame function when the number of mistakes is less than or equal to zero. 

    - Another challenge I encountered while creating this submission was figuring out where to call the setInterval() and clearInterval() functions. I realized that if setInterval was not cleared correctly, it would mess up the program's timer countdown. So, before writing the code, I had to figure out when setInterval() should be called. I decided to call it at the end of playClueSequence(), because guess(btn) and startGame() both call playClueSequence(). I also had to create my own function, decreaseTime(), which decrements the time displayed by one when called by setInterval(). decreaseTime() also calls clearInterval(), decrements the mistake counter by one, and calls playSequence() to make sure it moves on to the next sequence when a mistake is made or if the time left is zero, othersise, it would just decrement the time by one.
Last but not least, I called clearInteval() in the beginning of playClueSequence() to make sure that every setInterval() I called would be cleared.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    - After completing my submission, one question I have about web development is how are large tech companies able to create websites that can handle millions of users at once? Being able to scale efficiently is a very important problem that can help boost a user’s experience and is an important factor when a user is considering using your website again since no one wants to use a slow service. Another question I have about web development is how are secure websites created and how can we authenticate and store user data while preventing outside attacks. Another question I have about web development is how is data exchanged in multi-user environments with users from all over the world in a matter of seconds.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    - If I had a few more hours to work on this project, one thing I would have worked on is some html and css in order to make the project more compatible on any devices, which includes both the tablets and phone as well. I tried testing the project on my phone with more than four buttons, and the buttons were too big, so I would actually have to scroll down on my phone to see other buttons, and even so I would not be able to see all buttons, as well as the timer and number of mistakes left. Another thing I would have worked on if I had more time is using multithreading to prevent a data race that occurs during the game. If a user presses more buttons than the current sequence is expecting, the extra buttons clicked are counted as guesses in the following sequence. To fix this issue, we can use multithreading to ensure we aren’t modifying the guessCounter variable for a future sequence. Last but not least, I would also refactor my code to make it more understandable and to avoid code duplication. 




## Interview Recording URL Link
https://www.loom.com/share/881c80e0bb89485b95ae5dcba0259147


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

