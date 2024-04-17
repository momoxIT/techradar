# momox tech radar 

At [momox](https://www.momox.biz), we maintain a [public Tech
Radar](https://www.momox.biz) to help our engineering teams
align on technology choices. It is based on the [pioneering work
by ThoughtWorks](https://www.thoughtworks.com/radar).

This repository contains the code to generate the visualization.
Feel free to use and adapt it for your own purposes.

All the radar's points are coming from a public [gSheet](https://www.momox.biz) and to trigger a refresh you only need to run the  "Rebuild points and publish" action. 


The action is also triggered from any merge to the main branch. 

So, please **don't commit changes to points.js** since it will be automatically overwritten (and pushed) from the action. 


## Local Development
If you want to test on your local env the "refresh points" script: 


1. install dependencies with npm (or yarn):

```
cd bin && npm install
```

2. start local dev server:

```
npm start
```
## 
This solution is based on the original [Zalando tech radar](https://github.com/zalando/tech-radar)  

