# shapes-area-client
A console application to test the third-party library for area of the shapes calculation.

## Overview
###### Task Descriptions:
 
A console app to use third-party library to calculate an area of different shapes using an array of integers as an input.

###### Project Descriptions:

###### Background 
```
A Console app is a basic project which map the 3rd party library and make use of its functionality.
here in the ./lib folder we can observe the shape-area-calculator.jar.
Along with junit4 ,a behaviour driven approach is also applied to test the 3rd party library ,
Cucumber a ubiquitous language explains the bahaviour of the application in a simple English text
using Gherkin Language.
Test for the library are stored in .feature files in test/resources directory and Junit test in /apiTest/* .
The reports are store in ./report/cucumber-reports/cucumber-html-reports/overview-features.html
and default reports are /report/index.html.
```

###### Tech Spec
 1. Language : Java 1.8 [to install](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)  
 2. BuildFramework : Maven 3.3 [to install](https://maven.apache.org/download.cgi)  
 3. UnitTest : Junit4 
 4. [Plugins](https://plugins.jetbrains.com/plugin/7212-cucumber-for-java) to support .feature file

## Project Setup

###### Requirements
This project does requires
* JAVA 1.8
* MAVEN
* GIT CLI
* TextEditor/IDE

The project set up is pretty straight forward , please follow the below steps:

Assuming user is familiar with usage and has software such as git CLI ,java 8 and maven and it environment setup ,
 - [x] clone project using git cli on your local machine.
 - [x] observe the the existing jar present in /lib/* or you can import the fresh jar from the [captial-assignment](https://github.com/HITimran/captial-assignment)
 - [x] on root directory of your project ,you run the command *mvn clean install* in cmd.This will run unit test along with some cases in .feature files. 
 - [x] if required , you can also check out the Cucumber *reports* .The reports are store in ./report/cucumber-reports/cucumber-html-reports/overview-features.html and default reports are /report/index.htmlgenerated in the home directory \report\testCoverage-reports\index.html

## Reporting
- The reports are store in ./report/cucumber-reports/cucumber-html-reports/overview-features.html and default reports are /report/index.htmlreports
