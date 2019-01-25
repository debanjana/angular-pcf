**Angular-PCF-Demo**
--------------------------------------------------------------------------------

Angular-PCF-Demo is a project to demonstrate Angular features and utilize *Gitlab's pipeline* along with *Pivotal Cloud Founday*  to Build , Test and Deploy an
Angular project.


The Angular Feature that has been demonstrated and tested here is Dependency Injection. 


To Build and Run the project follow the simple steps mentioned below 

`
git clone https://gitlab.com/debanjana.maitra/angular-pcf-demo.git
`

Once the project is on your local system , do the following to run the application 

` npm install `
 
` npm start`



Run the following command to run tests

` ng test`

**Pipeline**
---------------------------------------------------------------------------------

Gitlab's pipeline has been uitlized to run Build , Test and Deploy Jobs in 3 stages. 

The pipeline utilizes Individual Runner that is hosted on Pivotal Cloud Foundry. 

As you can see in the below image , I have two APPS running under one space (angular-pcf-demo) .

angular-pcf-demo is where the whole application is deployed. 

gitlabrunner-pcf is where the Gitlab runner is deployed and this is where the Pipeline runs.

![Alt text](dist/img/pcf-ss.png?raw=true "Pivotal Cloud Foundary")



If the above statement is confusing  I have created this documentation to  help you understand and work on it step by step

[Configure CI for a Node/Java project in Cloud Foundry using Gitlab Runner](https://medium.com/@debanjanamaitra/configure-ci-for-a-node-java-project-in-pivotal-cloud-foundry-using-gitlab-runner-56c37f3a9aa6)



**Deploying the application to PCF  without Pipeline**
----------------------------------------------------------------------------------
If you dont want to setup the pipeline right now and would like to go live with the application quicly by hosting it on PCF , follow the simple CF commands below:


* Login to CF.
 `cf login `
* Proviode your credentials as prompted.
* Provide your Endpoint name.
* Enter your SPACE as prompted my the CLI 
* Enter the cf push command


` cf push app-name
`

Remember, you must have the manifest.yml file whose content should be like below:

```
applications:
- name: angular-pcf-demo
  memory: 512M
  instances: 1
```






Things to note:

---------------------------------------------
I am facing a techinical issue with the my PCF's Disk Quota. 
Since this is a node application , when I build the app , node_modules file is created which is quite large in size.
This tends to consume a lot of Disk Space and causes the rest of the pipeline steps to fail. 
 The error is as below: 

>  Fetching changes...
> error: could not lock config file .git/config: Disk quota exceeded
> ERROR: Job failed: exit status 1




I am working on fixing this. 
Will keep this file update and will mention how I resolved this issue. 
Stay tuned !!











