# learningCurve
Repo for my learning curve on HTML5

I created this repo to help a learning curve I'm working on with a friend.  The friend is doing a Full Stack training course in Manchester and we're using a book called "Head First, Learning HTML5" to get a bit of an introduction to what the course might be about.

Here's a really short form set of notes on the work I did to load up a working environment for my learning curve...

## Notepad++
I like notepad++ as a text editor.  To load it, go here;

https://notepad-plus-plus.org/

But this only works with Windows so may not be of interest.

## Github & Git
Get the git software on my PC as follows;

1. Goto https://github.com/git-guides/install-git
1. Navigate to the correct installer instructions (Windows for me).  **Don't just accept the obvious link!**
1. Click on the “git-scm” link.
1. Click on the “Click here to download” link.  The installer is loaded really quickly but you may have to answer some security questions if you’re using a new version of Chrome.
1. Navigate to the Download area on your computer and start the program.  On my computer, it’s called “Git-2.42.0.2-64-bit.exe”.
1. Click through the install process but you have to change some settings.
   
* On the second screen, include “Additional icons” “On the desktop”
* On the forth screen, select “use notepad++….” (you may have to load this as described above if you don’t have it)
* On the fifth screen, select “Override…”.  I’m using the convention of the main branch being in “main” rather than “master”.  Let the install happen.  At the end, the installer tries to load some release notes.  This is not a problem but you might need to manually tell the installer which browser to use.

Assuming that you followed above, you should have an icon on your desktop called “Git bash”.  Double click it.  If you do not then fire up a terminal and type;
```
git-version
```
You should get back
```
git version 2.42.0.windows.2
```
# Create a GitHub account
I already have a Git account so I’ve not documented how to do this.

# Setting up a repo to use with the book

> [!IMPORTANT]
> Unless you're starting from scratch, you won't need to do this section.  This is what I did to create the repo from scratch, assuming you don't need to do that, goto the next section which explains now to clone and colaborate.

Set up a repo for the project as follows
1. Start a terminal session
1. We need to create a directory for the repo.  I like to keep mine in my documents folder.  Enter the following (you will need to change this to suite your computer);
   
```
cd /c/Users/dgwai/Documents
mkdir learningCurve
cd learningCurve
```
Use your text editor to create the following file inside the “learningCurve” directory
```
<!doctype html>
<html>
	<head>
		<title>David's test page</title>

		<meta charset="utf-8">
		<link rel="stylesheet" href="dgwStyle.css">
		<script src="test1.js"></script>
	</head>
	<body>
		<h1>Welcome to my test page</h1>
		<p>
			<img src="photo.jpg" alt="David">
		</p>
		<p>
			This is a test page created by me
		</p>
	</body>
</html>
```
1. Save the file and call it "index.html"
1. Make sure the file is in the correct place by entering the following in the terminal;
```
ls -l
```
You should see something a bit like this;
```
-rw-r--r-- 1 dgwai 197609 359 Sep 20 13:47 index.html
```
1. We can check that the file is working by pointing a browser at the file we just created.  There are many ways to do this but on my PC, I use File Explorer to go to the correct directory and then simply double click on the file.  Because Windows knows what to do with a .html file, it starts the browser and loads the file.  You should see something like this in your browser;
[Image of the browser screen](/browserScreenDump.png)
 
You might also get some error messages but don’t worry about that.
Before we can interact with GitHub, we need to set up some global variables on the PC using the instructions contained in the training video 1.6 as follows;
git config –global user.name “LittleFrog1959”
git config –global user.email "my e-mail address"
Now we need to turn the directory into a repository and we do this with the instructions contained in training video 1.7 as follows;
pwd
(to check we’re in the correct directory)
/c/Users/dgwai/Documents/learningCurve

git status
(to check it’s not already a repository)
fatal: not a git repository (or any of the parent directories): .git
git init (to create the local repository)
Initialized empty Git repository in C:/Users/dgwai/Documents/learningCurve/.git/
Then proceed by entering the following;
git status
(to check it worked)
On branch main
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
nothing added to commit but untracked files present (use "git add" to track)
git add index.html

Then we can commit the changes using;
git commit -m "Initial commit of new repo to learn about HTML5"
main (root-commit) 04fad29] Initial commit of new repo to learn about HTML5
 1 file changed, 19 insertions(+)
 create mode 100644 index.html

Now we have to create the repository using your browser.  Log into your GitHub account and create a new repo with the same name as the directory you’re using locally.  Don’t add any files to it.
Then back on the terminal session enter the following;
git push -u origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 56 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 455 bytes | 455.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/LittleFrog1959/learningCurve.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
Install and run node.js
Check to see if node is installed by starting a terminal and entering the following;
node
Welcome to Node.js v18.18.0.
Type ".help" for more information.
>


Use ^D to exit.  If you get an error in place of the above then get node.js from here;
https://nodejs.org/en/download
Obviously you need to install the correct version.  I used the Windows version.  I accepted all the defaults.  There were some errors while it was installing but it still works.
Use a text editor to create a file called serverSide.js which should contain the following;
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
Then start a terminal session and move to the directory that you saved the above file in.  Start the program using the following;
node serverSide.js
Server running at http://127.0.0.1:3000/
Now point your browser at the node server you’ve just created by entering the following into the URL;
http://127.0.0.1:3000/
Use ^C to exit the server when you’ve had enough.
You might be able to see the node server across your LAN but to do this, you need to find the IP address of the server.  Using your terminal, enter the following;
ipconfig

Windows IP Configuration


Ethernet adapter Ethernet 2:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Ethernet adapter Ethernet 3:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : cable.virginm.net
   Link-local IPv6 Address . . . . . : fe80::2a84:396d:18dc:8c93%4
   IPv4 Address. . . . . . . . . . . : 192.168.0.72
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.0.1

In this example, my IP address is 192.168.0.72.  So go to another computer (or your mobile phone) on your LAN and enter the following into the browser URL;
http://192.168.0.72:3000
As I say, it might not work if your security settings don’t allow cross LAN traffic.
There is a good node.js tutorial here;
https://www.w3schools.com/nodejs/default.asp
Load Postgres
We’ve already done this.  You can check Postgres is loaded using the following from a terminal;
createdb
If nothing happens then that’s good!  Use ^C to get out.  If you get an error, but you know that it’s already loaded then the program may be that the path is not set.
On Windows 10, enter the following in the RUN bar;
Advanced system settings
Then click on “Environment variables”
In the top window, click once on “Path” and then “Edit” and finally “New”.  Paste this into the entry area;
C:\Program Files\PostgreSQL\16\bin ;C:\Program Files\PostgreSQL\16\lib
And then “OK” your way out.
Load Postgres – node interface
Use the following;
npm install postgres
added 1 package in 1s
1 package is looking for funding
  run `npm fund` for details

