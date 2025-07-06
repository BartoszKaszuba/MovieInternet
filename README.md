# MovieInternet

## jo jo

### hello

```C
Serial.println("hello world")
```

1. good
2. use of
3. my
4. time

- yes
- no
- hello

# MovieInternet

**Why did we start this project**
We are a group of ICT students that would like to get deeper into the subjects such as AI, front end development and overall development of the applications according to the industry standards. This project is overlooked by our mentor/projectlead ... 


**what is movie internet**
---

**Which technologies did we use**
---

**Working with github:**  
We would like to bring everybody in the team up to speed and set in stone in what way we'll set up our github repository and which rules every member of the team will have to follow. 




*   When to pull
    * Fetch origin - Fetching code from the remote repository
    * Merge - Combining changes from different files
  
* what are commits - uploading changes to the local repository
* what is push - uploading changes from local to remote repository
* When to push - when you have pulled
*   
  **Working with branches**

  * Copy of the source code you don't want to mess with
  * You want to know exactly what changes have been made in this way it's much easier to navigate when something in the code went wrong 
  * branch - copy of what is already working
  * git tracks changes using different algorithms
  * Git recognizes different types of content
  * add empty lines → Git sees them as insertions
  * change lines → Git sees them as modifications
  * remove lines → Git sees them as deletions
  

  Sources:
  [CodeOps Show: GIT: Working with Branches](https://www.youtube.com/watch?v=JTE2Fn_sCZs)

![alt text](image.png)  
Source:[ByteByteGo video](https://www.youtube.com/watch?v=e9lnsKot_SQ)

Directories
* Working directory
- Git clone
* Staging area
* Local Repository
* Remote repository

  prompts chat GPT 
  ---

  - what is container, what is docker image, what is dockerfile, what is docker-compose
  - lets say I am working with branches on git and I have a main, frontand1 and frontend2 lets say that programmer A has modified and pushed changes to the "buttonFunction" in frontend 1. Afterward the programmer B has made changes in the "buttonFunction" in the frontend2 and then pulled the changes from git, with which version of the "buttonFunction" would Programmer B end up with?
  - what if programmers A changes would be to push enter just ones at the beginning of the function. and programmer B changed a couple lines of code. 
  If programmer B would pull origin of frontend1 would he now have to resolve a merge conflict seeing that no all the lines have been moved by one?
  How could programmer B solve that issue and merge code implementing both changes?





**Setting up dual-boot windows/linux**
Prep
* Back up your systems
* DECRYPT YOUR WINDOWS INSTALLATION if it is encrypted. Failing to do this will result in you being unable to access your computer
* Download an ISO file for the linux distro
* Flash the USB with the ISO file (you can use Rufur or etcher.)
  * Note: You could also install ventoy on your USB. This makes it possible to choose from multible ISO's
* Disable secure boot in your bios(can be accessed when booting up computer) This will disable defaulting to windows during bootup


**How to set up dual-boot?**

Restart you system and while in boot click on F12 for Boot menu. than select your flashed usb as boot device. Than you will be able to choose install "insert linux distro" on the desktop. When you click it you will go through the installation options (adjust accordingly). After the first couple screens a installation type heading will show up. You should choose to install your linux alongside your windows boot manager. After that you will be able to choose how much space you would like to dedicate to the project (we will be going with 250 GB). Write your changes and go on with the installation. Now when you restart you will be able to choose to either boot windows o linux.

Encountered issues with fixes:
* Issues with entering boot menu
  * F12 not working to enter boot-menu: Your computer model might have a different key for entering the boot-menu. Search the right key of your model(lenovo.. dell.. hp..)
  * Not being able to enter boot-menu despite pressing the right key: The 'fast startup' configuration makes the computer boot up quickly, which might cause the boot-menu to be impossible to enter. To disable fast-startup head over to Control Panel, then Power Options, and choose "Choose what the power buttons do." Click "Change settings that are currently unavailable," and then uncheck "Turn on fast startup" under Shutdown settings. You will now have a sufficient window to open the boot-menu
* Issues with installation
  * Installation abrubtly ending: If you chose the 'Try or install (YOUR_OS)' option, there might be an issue where the installation proces will abruptly end. This can be observed when the installation window shuts off without notification. To stop this from happening, pick the 'safe graphics mode' option instead of the 'Try or install (YOUR_OS)' option. WARNING: If this happened, fix your corrupted drivers first before attempting a new installation.
  * Fixing corrupted drivers: If the installation was interrupted there is a high change that your newly created linux partition became unusable. To fix this go to 'create and format hard disk partitions' and select the corrupted partition and delete it. After this the deleted partition will become unallocated memory. Merge this allocated memory with your existing windows partition(basically restoring it to original). After this you can safely attempt an installation of linux again.
* Issues with choosing operating system
  * Menu with operating systems not showing during bootup: This issue could be caused by the boot being in the wrong order. To fix this, enter your BIOS during bootup, head over to 'startup' and place your new OS, in our case ubuntu, in first place. This makes sure that the menu will be shown during bootup

**How to secure and encrypt your new system**
1. Enabling secure boot
If you enable secure boot after installing linux you won't be able to access it. To fix this, you'll need to create a Machine Owner Key(MOK) for linux.  This can be done by entering the following commands in the linux terminal. First run these:

sudo -i
update-secureboot-policy --new-key

And then run this command to enroll the key:
mokutil --import /var/lib/shim-signed/mok/MOK.der

Now you will need to reboot the system and a blue screen will appear which is the MOK manager. Choose 'Enroll MOK', then choose continue, then enter your password which you created during the key creation process. The system will now reboot again. Make sure to enable third party authentication in your BIOS configuration. After these steps secure boot will work properly with the dual-boot system.


2. Encrypting linux and windows
After enabling secure boot, you'll be able to encrypt both your linux and windows drive without complications. For windows 10 and higher you could use the built-in bitlocker. For linux encryption refer to this source: https://www.howtogeek.com/116032/how-to-encrypt-your-home-folder-after-installing-ubuntu/






sources:  
[ExplainingComputers: Windows & Linux: Dual Drive Dual Boot](https://www.youtube.com/watch?v=KWVte9WGxGE)

***Backing up you system***

* Drive clone
* External drive reader + Extra drive + Clonezilla
* Cloud - limited use
* Carbonite - limited use (very safe)
Free options
* Fbackup - You just need an extarnal storage unit (Can schedule backup)

[Ask Your Computer Guy: How to clone a hard drive - EASY step by step walk-thru!](https://www.youtube.com/watch?v=-89EcTjzl4M&t=832s)  

**Getting started with docker**

What is docker
* Are like virtual machines, so 'micro computers' running on your computer
    * Each their own operating system
    * Each their own isolated CPU
    * Dockers can be easily added, removed, stopped, and started without affecting host or other dockers
* A docker has a VERY specific job. They DONT simulate the entire computer like virtual machines
    * Jobs like running a MYSQL database or a NodeJS application
* Dockers can be connected together

Benefits
* software on docker container can be deployed to any machine without compatibility issues
  * Simpler to use
  * Less work to develop
  * Less work to maintain

Source:[TechSquidTV](https://www.youtube.com/watch?v=_dfLOzuIg2o&t=18s)
Source:[Reddit](https://www.reddit.com/r/docker/comments/keq9el/please_someone_explain_docker_to_me_like_i_am_an/)




# Development setup Bartosz

## Setting up dual boot 

Dual boot seems pretty straight forward. Although I managed to run into problems that may seem relevent to you. 

* partitioning problems
While in the Disk management window, I tried to partition my C: drive while I had 400 GB of free storage on my drive. When I used the "shrink drive" function I expected to have this exact amount of space to shrink. but it was not the case. I had 700 MB. I asked my self "WHY!!" and proptly started debugging the issue. From the info I've gathered I can conclude that it was the issue of the imovable files like pagefiles,hiberfile, swapfile, and others. Earesing all of them proved to be a too difficult task so I decided to use third party tool for resizing my drive - MiniTool Partition Wizard Worked like magic. Now with a resized drive I just flashed a 8 GB USB stick with latest version of Ubuntu using "Balena Etcher" which also did the job. Then I went to Advanced Statup Options screen, by restarting and pressing shift simutaniously. To get acces to the use a device button. after that I stuck my USB into my machine and choose it on the current screen. After that I went through the Ubuntu setup and installation. After installation was done. My computer booted up to windows, to resolve this issue I went to my BIOs and choose for the linux to boot up as the first.

and my ubuntu was ready

resources I used throughout implementation fase
[Robtech: How to Dual Boot Windows 11 & Ubuntu Easily](https://www.youtube.com/watch?v=mXyN1aJYefc)

## Installing visual studio code

this tutorial helped me a lot
[ProgrammingKnowledge: How to Install and Use Visual Studio Code on Ubuntu 22.04 LTS Linux (VS Code)](https://www.youtube.com/watch?v=ChwsFldra-o&t=201s)

## Installing GithubKraken

Here I used the same logic that Programming Knowledge used in the VS code tutorial wiht dpkg command

## Installing Docker

[Docker: Products/DockerDesktop/Setup/Install/Linux/Ubuntu](https://docs.docker.com/desktop/setup/install/linux/ubuntu/)

this thread was very helpfull to troubleshoot after following the steps on docker web site
[](https://askubuntu.com/questions/1409192/cannot-install-docker-desktop-on-ubuntu-22-04)

# Learning Development setup

## docker


## Gitkraken
https://help.gitkraken.com/gitkraken-desktop/interface/



## coding react
 
 sudo apt-get install ca-certificates curl gnupg lsb-release

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin


NPM
basic program
npx create-reaact-app my-first-app --template typescript

[understanding the key files in a react app](
https://medium.com/nerd-for-tech/understanding-the-key-files-in-a-react-app-1729391ce88b)

### implementing vite

https://vite.dev/guide/

[css in 5 minutes](https://www.youtube.com/watch?v=Z4pCqK-V_Wo)

[MUI documentation](https://mui.com/material-ui/react-stack/)