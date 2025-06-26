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
* Download an ISO file for the linux distro
* Flash the USB with the ISO file (you can use Rufur or etcher)


**How to set up dual-boot?**

Restart you system and while in boot click on F12 for Boot menu. than select your flashed usb as boot device. Than you will be able to choose install "insert linux distro" on the desktop. When you click it you will go through the installation options (adjust accordingly). After the first couple screens a installation type heading will show up. You should choose to install your linux alongside your windows boot manager. After that you will be able to choose how much space you would like to dedicate to the project (we will be going with 250 GB). Write your changes and go on with the installation. Now when you restart you will be able to choose to either boot windows o linux.

Tips:
* If F12 does not work just google the model of your computer.
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

What is docker container
* Containers are like virtual machines, so 'micro computers' running on your computer
  * Each their own operating system
  * Each their own isolated CPU
  * Containers can be easily added, removed, stopped, and started without affecting host or other dockers

* A container has a VERY specific job. They DONT simulate the entire computer like virtual machines
    * Jobs like running a MYSQL database or a NodeJS application

* Containers can be connected together
* IMPORTANT: What docker DOES is it's a way to build and run these containers and save them into templates



What is docker image
* Container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.
* There are different container images, like:
  * A PostgreSQL image. That image will package the database binaries, config files, and other dependencies.
  * A Python web app image. That image will  include the Python runtime, your app code, and all of its dependencies.

* TWO IMPORTANT principles 
  * Images CANT be modified after it's created. Can only create new images or add changes ON TOP OF IT
  * Containers images are composed of layers. For example when the image is being built, one layer installs ubuntu, the second layer python.. and so forth

Benefits
* software on docker container can be deployed to any machine without compatibility issues
  * Simpler to use
  * Less work to develop
  * Less work to maintain

Source:[TechSquidTV](https://www.youtube.com/watch?v=_dfLOzuIg2o&t=18s)
Source:[Reddit](https://www.reddit.com/r/docker/comments/keq9el/please_someone_explain_docker_to_me_like_i_am_an/)
Source:[dockerdocs]https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/


  **Docker File and compose**
  
* Dockerfile - A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.
    * A Dockerfile is a simple text file that contains the commands a user could call to assemble an image.
* Docker compose - Docker Compose is a tool for defining and running multi-container Docker applications. It is the key to unlocking a streamlined and efficient development and deployment experience.
    * s


  ![alt text](image-1.png)
  [Medium: Getting Started with Docker: Facts You Should Know](https://itnext.io/getting-started-with-docker-facts-you-should-know-d000e5815598)  
[DockerDocs: Dockerfile referance](https://docs.docker.com/reference/dockerfile/#:~:text=A%20Dockerfile%20is%20a%20text,line%20to%20assemble%20an%20image.)