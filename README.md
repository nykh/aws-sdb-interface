# AmazonSimpleDB Interface for Sumo Logic

This is a simplistic interface for querying Amazon SimpleDB, which lacks a web portal. The project is developed with AngularJS and will run in Firefox.
*(Chrome is not supported due to security restriction of accessing local files, but it can be run from a server with some minor tweaks)*

File structures

```
app/
├──aws-js
├──login
│  ├──login.html
├──view
│  ├──home.html│
│  └──...
├──app.js
└──controller.js
css/
image/
```

Currently not all SDB operations are supported. Feel free to fork and complete it.
