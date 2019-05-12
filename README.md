What you need before starting:

	1. Install node 
		https://nodejs.org/en/

	2. Install Truffle and Ganache 

		https://truffleframework.com/truffle
		https://truffleframework.com/ganache

	3. Install IPFS to run a development node. Follow the installation instructions and then use the second link for basic usage to initialize your workspace.

		https://docs.ipfs.io/introduction/install/

		https://docs.ipfs.io/introduction/usage/

	4. Install MetaMask as a Chrome extension. You will need to start ganache so you can add one of the test accounts into MetaMask. Click on MetaMask, Click the circle in top right corner, click "import account", copy and paste one of the private keys from Ganache to import that account.
			
		https://metamask.io/

To run the project for test purposes:

	1. Start Ganache.
	2. Open a terminal to the directory of the source files.
	3. Run "npm install"
	4. Navigate to /src/blockchain/
	5. Run "truffle migrate" in your terminal to navigate smart contracts to Ganache.
	6. Open a second terminal and run "ipfs daemon" to start your IPFS node.
	7. Open a third terminal to the directory of the source files and run "npm start"
	8. Open Chrome to localhost:3000 to see the app.
	9. Look to the middle of the screen to see that your address is there.
	10. Click the green "plus" button in the top right to add an article.
	11. Enter Title, name (optional), and text.
	12. Click the arrow to submit.
	13. MetaMask will prompt you to make a payment to post your article.
	14. Next, click on the profile icon in the top right to go to your profile.
	15. You can see that your article has been posted.
	16. Click on the article card to be taken to the read article page.
	17. You have the option to share your article on social medias on the left.
	
If you have any problems configuring your environment. Feel free to contact.
	joshua.gendein@sjsu.edu
