## Table of contents

- #overview
- #the-challenge
- #screenshot
- #links
- #my-process
- #built-with

## Overview

- This an Ip and Domain Tracker demo.
- you can search any ip-address and Domain Name and get the key information like location, Timezone & Isp.
- You can see your location in map also.
- For use Ip-Tracker user need to login first.

### The challenge

Users should be able to:

- Login using SAWO sdk (the passwordless way)

  - user login with SAWO sdk ( for login user need to enter their email and receive OTP).
  - if user want to use their own sawo Account follow this link https://www.npmjs.com/package/sawo

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

- login screen shot
  ![](./images/login.png)

- receive otp screen shot (you get this otp in your email)
  ![](./images/otp.png)
  ![](./images/trust.png)

- Main Page
  ![](./images/main.png)

### Links

- Live Site URL: http://ip-domain-tracker.herokuapp.com/

## My process

- For Getting Ip-address , domain name and latitude-longitude use this API (http://ip-api.com/json).
- for show map use pigeon-maps npm use this link (https://pigeon-maps.js.org/docs)

### Built with

- Semantic HTML4 markup
- CSS custom properties
- CSS Grid
- Bootstrap5
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Usage

Install the project's dependencies and run the tests before starting the application server:

- npm install
- npm start

Then navigate to http://localhost:3000.
