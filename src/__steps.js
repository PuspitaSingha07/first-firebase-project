/*

---------------
Initial Setup
---------------
1.Visit: console.firebase.google.com
2.Create Projects skip analytics
3.Register App(create config)
4.Install firebase
5.add config file to your project
6.Danger: Do not publish or make firebase config to public by pushing those to github

---------------
Integration
---------------
7.Visit: Go to docs > build > authentication > web > Get started
8.Export app from firebase.init.js
9.in login.jsx import getAuth from Firebase\auth
10.Create const auth = getAuth(app);

---------------
Provider Setup
---------------

11.import google auth provider and create a new provider
12.use signInWithPopup and pass auth and provider
13.activate sign-in method (google,facebook,github etc)
14.change 127.0.0.1 to localhost

-------------------
More Auth provider
-------------------
15.activate auth provider(create app, provide redirect url ,client id, client secret)



*/ 