# password-generator
## About this project 
I was tasked with fixing up some code for a randomized password generator. Mainly, I worked on the javascript. 
## Javacript
1. I set global arrays, which contain the character set that the user's password will be generated from. 
2. I added an event listener to the generate password button. 
3. I set a variable of passwordLength, which carries a prompt asking the user to enter their desired length of the password. 
4. I added an if function that prevents the user from entering a length that is below 8 characters, or above 128. This carries an alert to the user informing them of the error. 
5. I added another if function that prevents the user from entering non-numeric characters when selecting their length. 
6. I then added confirm messages, to ask the user if they want to add lower case letters, upper case, numbers, or special characters to their password. 
7. Next, I used Array concat() Method to combine the userChar array with the corresponding global arrays (lower, upper, number, special).
8. In the final section of my code, I added a new string to be populated by the final password. I also added a for loop which contains the math random method to randomize their selection, and multiply that by the chosen length of the password (set by the user).

## Link to my live site
https://graysonbloskas.github.io/password-generator/

### Screenshot of my site
![screencapture-graysonbloskas-github-io-password-generator-2021-03-26-23_07_09](https://user-images.githubusercontent.com/79467387/112708386-1ab99b00-8e88-11eb-8d35-aa6ad499e1e5.png)
