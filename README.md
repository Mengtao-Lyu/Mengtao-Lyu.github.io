# Personal-Web
This is the Hugo project for Tomy's personal website

# 0: Deploy local

## 0-1: Install Hugo
Online tutorials / Ask copilot

## 0-2: Clone Tomy project to local
Go to GitHub and clone the project to local

## 0-3: Add Kayal as a submodule
```
cd project root directory
git init
git submodule add -b main https://github.com/mnjm/kayal.git themes/kayal
```

## 0-4: **Deploy public folder to GitHub Pages**

### 0-4-1: Initialize the public folder
Remove the public directory from the Git index
```
git rm -r --cached public
```
Delete the current public directory
```
rm -rf public
```
Submit the change
```
git add .
git commit -m "remove public directory"
```

### 0-4-2: Create a new public repository on GitHub
Re-add the submodule
```
git submodule add -b main https://github.com/Mengtao-Lyu/Mengtao-Lyu.github.io.git public
```
After completion, generate static files in public folder
```
hugo -D
```


# 1: Create new content

## 1-1: Execute in terminal, under root path of the project:
```
Hugo new [type]/[name].md
```
Where [type] is the menu on the top right of the page. 

## 1-2: Edit the .md file:
Then edit the `.md` file
* Set the `draft` to `false`


# 2: Publish to online

## 2-1: Execute in terminal, under root path of the project:
```
cd tomy
```
### 2-1-1: View offline (local portal)
```
hugo -D server
```
### 2-1-2: Update online Homepage
```
hugo -D
```
### 2-1-3: Update online contents
```
hugo
```

Check if the `public` folder is updated



## 2-2: Next go the `public` folder, and execute:

```
git add -A
git commit -m "update News"
git push -u origin main
```
