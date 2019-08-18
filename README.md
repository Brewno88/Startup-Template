# Start your SCSS project with this template

I have created this template that you can use as a base when you want to create a webpage using **SCSS**! 💻 🖥</br> It will use a very handy toolkit called [**Gulp**](https://gulpjs.com) to automate your workflow.

This means that Gulp will:</br>
📝 Compile any of your `*.scss` into `*.css` files linked in the `index.html`</br>
🔍 Watch for any change in the `.scss` files and automatically compile them</br>

We will also use [**Browser-Sync**](https://www.browsersync.io) to sync changes and see them in a browser, without save and reload your page all the time! 😎🤘

👇 These are the packages I installed in order to do so: 👇

- Gulp
- Gulp-sass
- Browser-sync

... but you don't need to install them! (what's the point of this template otherwise... 🤓)

### What you need to do...

1. Clone or download this repo in your local folder
2. Open the folder in your favorite text editor
3. `cd` in the folder's path in terminal and run `npm install` 
4. Run `gulp style` in the terminal and it a few seconds should create the /css folder with style.css file
5. Now everytime you modify the style.scss file `gulp` will compile it automatically in the style.css
6. Watch your changes by running `gulp watch` in the terminal 


**node:** v12.6.0.
