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
Mining Block...1

Block Mined:000048ef0158fc88c6a8495f24a39be44cdb757c8fc361becfda939f144aef0a93dcd40c26ec26fc66df31bef1be4a42822ba341c251514e8dadf51dcc617a55

Mining Block...2

Block Mined:0000740dcaaf8c06b6e2adfa24bec8138c9717031f51595112560daf5c9b23f529ff1d06c29469bbe37baea960f4256b14198a49ffa0419c2be47a250ca9b641

Mining Block...3

Block Mined:000087492258183f45cd1f9f2bcd3f5835d8481fb50be3106a3c8d520379d17aa7cf6ac5a2157ead6640b63287b3214dcd500695bd0eb29556ffdb155fe7487f

Mining Block...4

Block Mined:0000d4a1bea86f1d2aea1644b9c1bae1402f22e715836885d13b4b9567def12fb57f2f8925ce5cb1f5e256bad22d5ac00d19b23cf6eae760c5e3496572bb55b3

Is Block is valid?true
{
    "chain": [
        {
            "index": 0,
            "timestamp": "18/01/2020",
            "data": "Genesis Block",
            "previousHash": "0",
            "hash": "d5de073770ebccfe3a86953d7dc682a885e24ecb6f1af8e1cf755efe124175be46de0e21754c7fabd6013473c833bd84c2afc20ecf192c4c1d4f0a8975dae76e",
            "nonce": 0
        },
        {
            "index": 1,
            "timestamp": "19/01/2020",
            "data": {
                "username": "barathadhithya29@gmail.com",
                "password": "29061999",
                "website": "www.gmail.com"
            },
            "previousHash": "d5de073770ebccfe3a86953d7dc682a885e24ecb6f1af8e1cf755efe124175be46de0e21754c7fabd6013473c833bd84c2afc20ecf192c4c1d4f0a8975dae76e",
            "hash": "000048ef0158fc88c6a8495f24a39be44cdb757c8fc361becfda939f144aef0a93dcd40c26ec26fc66df31bef1be4a42822ba341c251514e8dadf51dcc617a55",
            "nonce": 36013
        },
        {
            "index": 2,
            "timestamp": "20/01/2020",
            "data": {
                "username": "barath.svtfoundation@gmail.com",
                "password": "*+*+*+*",
                "website": "www.gmail.com"
            },
            "previousHash": "000048ef0158fc88c6a8495f24a39be44cdb757c8fc361becfda939f144aef0a93dcd40c26ec26fc66df31bef1be4a42822ba341c251514e8dadf51dcc617a55",
            "hash": "0000740dcaaf8c06b6e2adfa24bec8138c9717031f51595112560daf5c9b23f529ff1d06c29469bbe37baea960f4256b14198a49ffa0419c2be47a250ca9b641",
            "nonce": 41636
        },
        {
            "index": 3,
            "timestamp": "04/03/2020",
            "data": {
                "username": "barathadhithya29@gmail.com",
                "password": "******",
                "website": "www.facebook.com"
            },
            "previousHash": "0000740dcaaf8c06b6e2adfa24bec8138c9717031f51595112560daf5c9b23f529ff1d06c29469bbe37baea960f4256b14198a49ffa0419c2be47a250ca9b641",
            "hash": "000087492258183f45cd1f9f2bcd3f5835d8481fb50be3106a3c8d520379d17aa7cf6ac5a2157ead6640b63287b3214dcd500695bd0eb29556ffdb155fe7487f",
            "nonce": 119455
        },
        {
            "index": 4,
            "timestamp": "17/03/2020",
            "data": {
                "username": "bthirumurugan@burning-glass.com",
                "password": "******",
                "website": "www.confluence-burning-glass.com"
            },
            "previousHash": "000087492258183f45cd1f9f2bcd3f5835d8481fb50be3106a3c8d520379d17aa7cf6ac5a2157ead6640b63287b3214dcd500695bd0eb29556ffdb155fe7487f",
            "hash": "0000d4a1bea86f1d2aea1644b9c1bae1402f22e715836885d13b4b9567def12fb57f2f8925ce5cb1f5e256bad22d5ac00d19b23cf6eae760c5e3496572bb55b3",
            "nonce": 52832
        }
    ],
    "difficulty": 4
}
