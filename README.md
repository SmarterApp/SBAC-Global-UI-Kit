# SBAC-Global-UI-Kit
### Demo
Demo the UI components and styles by cloning the repository and opening index.html
```bash
git clone https://github.com/SmarterApp/SBAC-Global-UI-Kit.git
open SBAC-Global-UI-Kit/index.html
```
### Installation
To install the style kit, run the following command where TAG_NAME points to a specific development release. See <a href="https://github.com/SmarterApp/SBAC-Global-UI-Kit/releases">releases</a>
```bash
npm install --save git+https://github.com/SmarterApp/SBAC-Global-UI-Kit.git#TAG_NAME
```
#### Angular CLI
##### CSS Installation
To use the style kit's compiled styles and images in an Angular CLI project, add these entries into .angular-cli.json
```javascript
"apps": [
  {
    "assets": [
      {"glob": "**/*", "input": "../node_modules/sbac-ui-kit/dist/images", "output": "assets/image"}
    ],
    "styles": [
      "../node_modules/sbac-ui-kit/dist/css/sbac-ui-kit.min.css"
    ]
  }
]
```
To test it out, try adding these components in your project's index.html file:
```html
<i class="fa fa-user-circle"></i>
<i class="glyphicon glyphicon-menu-right"></i>
<img src="/assets/image/SmarterBalanced-Logo.png">
```
##### LESS Installation
To take advantage of the style kit's variable definitions and extend them in an Angular CLI project, you will want to include the kit's less files directly.
To do this, first add the following assets declaration to .angular-cli.json
```javascript
"apps": [
  {
    "assets": [
      {"glob": "**/*", "input": "../node_modules/sbac-ui-kit/dist/images", "output": "assets/image"}
    ],
    "styles": [
      "styles.less"
    ]
  }
]
```
Next, in your project's root styles.less file add the following:
```less
@library-path: "../node_modules";
@import "@{library-path}/bootstrap/less/bootstrap.less";
@import "@{library-path}/font-awesome/less/font-awesome.less";
@import "@{library-path}/sbac-ui-kit/src/less/sbac-ui-kit.less";
```
To test this installation out, override the following variable and see how it changes your app's background color:
```less
@body-bg: green;
```
### Build
#### Prerequisites
<ol>
    <li>Install <a href="https://nodejs.org/">node.js</a></li>
</ol>

#### Instructions
```bash
npm install
npm run build
```
### Release
#### Development Releases
To publish a development release, update the embedded version in `package.json` and create a lightweight tag on your latest commit. Example:
```bash
git tag v0.0.1
git push origin v0.0.1
```