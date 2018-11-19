You can use AirPPT to generate websites or web apps. This repo has sample applications that we built with AirPPT

Apps.pptx contains the slide deck with all of the UI's that are utlized in the samples.

# Running a Sample

```
git clone https://github.com/airpptx/samples
cd samples
cd <sample you want>
npm run build
npm run start
```

## Building Electron Apps

Electron let's you publish apps built with HTML/CSS/JS as either a `.dmg` or `.exe` so everyone can use your work

### Walkthrough of the Electron Sample

1.  Let's generate our HTML/CSS files using AirPPT. Here's the [script](https://github.com/airpptx/samples/blob/master/electron/main.js) that we run. We will use slide 2 from our `apps.pptx` for the UI.

```
node main.js
# or
npm run build
```

2.  Checkout this [getting started](https://electronjs.org/docs/tutorial/first-app) guide with electron, if you've never used it before.

Replace the path to `index.html` in the Electron app's `electron.js` with the with the new index file AirPPT generated

3.  Update the window settings in `electron.js` to match an absolutely positioned coordinate system, this way the UI is 1:1 with the slide:

```
 win = new BrowserWindow({width: 1200, height: 720})
```

4.  Run the app with electron

```
electron .
```

That's it! You should now how have a running Electron app. You can also reference things in your index.html and make your apps interactive.
