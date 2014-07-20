# Unit Test JS demo

a simple demo with Mocha+Chai, Browserify, and Gulp on NodeJS

### Why?

I want to unit test my JS libraries AND use it in my browser.

### Walkthrough Guide

Read the [blog post](http://www.rexfeng.com/blog/2014/07/how-to-unit-test-your-js-and-use-it-in-the-browser/) that walks through this repo to add GulpJS, gulp-mocha, and browserify.

### Dev

    // Run default task to run specs and generate minified JS
    gulp

### Questions

Why did you include the `node_modules` dir?

* Per the [npm-faq](https://www.npmjs.org/doc/faq.html#Should-I-check-my-node_modules-folder-into-git), "Check `node_modules` into git for things you deploy, such as **websites** and apps."

Why did you not include the [*insert task here*] Gulp task? Why did you organize your folders that way? Why didn't you include more test cases?

* This demo is intended as an easy to understand example of using Gulp + Mocha + Browserify together. This demo is not a production ready project.

### License

MIT
