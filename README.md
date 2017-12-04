# NightFox-

### Setting Up NodeJS

* Download and install the latest version of node.js: https://nodejs.org/en/
* Create a new directory, which will be your root directory).
* Go to your root directory in the terminal (e.g., Windows PowerShell).
* Run the following command in the terminal and follow the instructions: npm init
* Enter the following if it does not match the parentheses, and hit enter for everything else:
      name: <put anything here>
      description: <put anything here>
      entry point: app.js
      keywords: <put anything here>
      name: <your name>
      Open the newly-created package.json file, put a comma after the license line, and paste the following text on the next line:
	      "dependencies": {
          "express": "*"
	       }
* Go back to the terminal and type: npm install
* Pull this repository
* cd from terminal to the root folder of this repository
* Type:  node app.js (you can also type: node app)
* Open a web browser (e.g., Google Chrome) and enter the following website address: http://localhost:8000


### Audio used in food section
* The audio is generated using IBM watson text to speech API
* https://text-to-speech-demo.ng.bluemix.net/