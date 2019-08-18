# Start your SCSS project with this template

I have created this template that you can use as a base when you want to create a webpage using **SCSS**! 💻 🖥</br> It will use a very handy toolkit called [**Gulp**](https://gulpjs.com) to automate your workflow.

This means that Gulp will:</br>
📝 Compile any of your `*.scss` into `*.css` files linked in the `index.html`</br>
🔍 Watch for any change in the `.scss`, `.html` and `.js` files and automatically compile them</br>

We will also use [**Browser-Sync**](https://www.browsersync.io) to sync changes and see them in a browser, without save and reload your page all the time! 😎🤘

👇 These are the packages I installed in order to do so: 👇

- Gulp
- Gulp-sass
- Browser-sync

... but you don't need to install them! (what's the point of this template otherwise... 🤓)

### What you need!

Although you won't need to install those packages you need to have installed [**Node.js**](https://nodejs.org/en/) and [**npm**](https://www.npmjs.com) to check that simply run:
```
node -v
npm -v
```
if they return something like this ```v12.6.0``` and ```6.10.2``` then you're good to go, otherwise click on their links above.

### What you need... to do!

1. Create your project's repository on GitHub and Clone/Download it *not necessary
2. Download the content and paste the content inside your project's folder (only the content)
3. Open your project's folder in your favorite text editor
4. `cd` in the folder's path in the terminal and run `git init` *not necessary
5. `cd` in the folder's path in the terminal and run `npm install` 
6. Run `gulp style` in the terminal and it a few seconds it will create the /css folder with style.css file in it</br>Now everytime you modify the style.scss file `gulp` will compile it automatically in the style.css
6. Run `gulp watch` in the terminal</br> 
Now see you browser opening up with project page saying 'Hello World!' 👋🏻🌍

Now you can modify your project and see your changes straigth away in your browser! ☺️
