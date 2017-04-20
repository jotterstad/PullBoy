# PullBoy // Auto Pull a Repo
## About The Project
For use on your staging VPS or Cloud Service that receives a webhook from BitBucket (as most of my private projects are on BB) then preforms a simple git pull of the repo.

## Instructions

* Install NodeJS on your server
* Install pm2 via npm on your server
* Place this project wherever you want on your server /home/ubuntu/pullboy or /srv/pullboy
* npm install this project.
* Setup your webhook within bb on push action
* Edit the index route to the path of your project's working directory

