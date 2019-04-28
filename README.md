![VideoRepo Logo](videorepo.png)

# VideoRepo Uploader v.1.0.0

## What is VideoRepo?

I am technical bootcamp instructor and have been in the classroom for about 2.5 years. I have amassed quite a collection of lectures and supplementary videos and wanted a way to share them all with current and former students. So in turn, I build this online video repository where videos are stored in a Mongo database and displayed easily and with filter capabilities. All protected by a password, so only valid students and faculty can get access.

### VideoRepo Uploader

Written using Electron, Uploader is the main user interface for adding new videos to the database without having to use something my MongoDB Compass or Robo3T.

- Uses an API key to get information to and from the server
- Gets a list of all classes, subcategories, lessons, and curricula from the server
- Posts new videos to the server


#### .env File Template

Here is the template for the .env file, which Uploader relies on.

```
APIKEY=keyindatabase
DOMAINROOT=https://myrepo.mywebsite.co/
```