# SBAC-Global-UI-Kit
### Demo
Demo the UI components and styles by cloning the repository and opening index.html
```bash
git clone https://github.com/SmarterApp/SBAC-Global-UI-Kit.git
open SBAC-Global-UI-Kit/index.html
```
### Development Installation
To install development versions, clone the github repository and link it to your local npm repository.
```bash
git clone https://github.com/SmarterApp/SBAC-Global-UI-Kit.git
cd SBAC-Global-UI-kit
npm link
```
Next, run the following npm command in the project using the sbac-ui-kit
```bash
npm link sbac-ui-kit
```
Finally, make sure your project has the dependency declaration in it's package.json
```javascript
"devDependencies": {
    "sbac-ui-kit": "0.0.1"
}
```
#### Angular 2+
To use the style kit's styles and images in an Angular project, add these entries into .angular-cli.json
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
Next you will need to rebuild your Angular project using the following commands:
```bash
ng build
```

Example HTML using styles and images:
```html
<i class="fa fa-user-circle"></i>
<i class="glyphicon glyphicon-menu-right"></i>
<img src="/assets/image/SmarterBalanced-Logo.png">
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