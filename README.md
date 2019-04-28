![VideoRepo Logo](videorepo.png)

# VideoRepo Uploader v.1.0.0

## What is VideoRepo?

I am technical bootcamp instructor and have been in the classroom for about 2.5 years. I have amassed quite a collection of lectures and supplementary videos and wanted a way to share them all with current and former students. So in turn, I built this online video repository where videos are stored in a Mongo database and displayed easily and with filter capabilities. All protected by a password, so only valid students and faculty can get access.

### VideoRepo Uploader

Written using Electron, Uploader is the main user interface for adding new videos to the database without having to use something like MongoDB Compass or Robo3T.

- Uses an API key to authenticate getting information to and from the server
- Gets a list of all classes, subcategories, and curricula from the server
- Posts new videos to the server

#### config.json File Template

This is the template for the config.json file, on which Uploader relies.

Uploader expects this config.json file to be located in `~/config/config.json`.

```
{
    "APIKEY": "key",
    "DOMAINROOT": "https://address.com/",
    "TOKEN": 0
}
```

### Build Instructions

To build the application, run `yarn build` in the application directory. Currently the build script is for macOS only, but uses electron-packager which will allow you to build for any platform if you change the script arguments.

## VideoRepo Server and Frontend

Uploader is the backend application for adding new videos to the database. You can find the VideoRepo server and the frontend web app [here (hannahpatellis/videorepo)](https://github.com/hannahpatellis/videorepo).