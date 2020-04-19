# password-security-system-using-bc

[root@localhost ~] sudo yum check-update

[root@localhost ~] sudo yum install -y yum-utils device-mapper-persistent-data lvm2

[root@localhost ~] sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

[root@localhost ~] sudo yum install docker

[root@localhost ~] sudo systemctl start docker

[root@localhost ~] sudo systemctl enable docker

[root@localhost ~] sudo systemctl status docker

[root@localhost ~]# docker images ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE

[root@localhost password-security-system-using-bc]# dir
Dockerfile  keygenerator.js  main.js  node_modules  package.json  package-lock.json

[root@localhost password-security-system-using-bc]# docker build -t password-vault-nodejs-app:latest .
Sending build context to Docker daemon   1.11MB
Step 1/7 : FROM alpine:latest
 ---> a187dde48cd2
Step 2/7 : RUN apk add --no-cache nodejs npm
 ---> Using cache
 ---> 8f8d7f4cb388
Step 3/7 : WORKDIR /app
 ---> Using cache
 ---> 1b8206da0090
Step 4/7 : COPY . /app
 ---> 88c5914906f2
Step 5/7 : RUN npm install
 ---> Running in 88a34c66a696
npm WARN bc@1.0.0 No description

up to date in 10.61s
Removing intermediate container 88a34c66a696
 ---> d88469f9f71f
Step 6/7 : ENTRYPOINT ["node"]
 ---> Running in f1b9dad32bde
Removing intermediate container f1b9dad32bde
 ---> a78bae278117
Step 7/7 : CMD ["main.js"]
 ---> Running in 4acadddb0b68
Removing intermediate container 4acadddb0b68
 ---> 7af1aa34e8ac
Successfully built 7af1aa34e8ac
Successfully tagged password-vault-nodejs-app:latest

[root@localhost password-security-system-using-bc]# docker images
REPOSITORY                  TAG                 IMAGE ID            CREATED             SIZE
password-vault-nodejs-app   latest              7af1aa34e8ac        25 seconds ago      54.9MB
<none>                      <none>              1a43e3ed5e98        About an hour ago   54.9MB
alpine                      latest              a187dde48cd2        3 weeks ago         5.6MB
hello-world                 latest              fce289e99eb9        15 months ago       1.84kB

[root@localhost password-security-system-using-bc]# docker run -it password-vault-nodejs-app:latest
