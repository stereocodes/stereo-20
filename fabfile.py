from fabric.api import *;
from fabric.contrib.project import rsync_project;

env.user = "stereo"
env.hosts = ["stereo.codes"]
env.password = "!PHsnort2008"

ignorefiles = (
    ".DS_Store",
    "*.map",
)
def deploy():
    with settings(warn_only=True):
        local('cd stereo.codes && npm run build')
        rsync_project(
            local_dir="./dist/",
            remote_dir="/var/www/stereo.codes/",
            exclude=ignorefiles,
        )
