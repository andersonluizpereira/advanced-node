#https://medium.com/trainingcenter/localstack-testando-servi%C3%A7os-aws-7f9f24de293c

#aws
//create bucket
awslocal s3api create-bucket --bucket sample-bucket

//upload image teste local
awslocal s3api put-object --bucket sample-bucket --key 5horas.png --body 5horas.png

//Liberando bucket aplicacao
awslocal --endpoint-url=http://localhost:4566 s3api put-bucket-acl --bucket sample-bucket --acl public-read

//Lista os buckets
awslocal s3api list-buckets
awslocal s3api list-objects --bucket sample-bucket
awslocal s3api list-objects-v2 --bucket sample-bucket
awslocal s3api list-objects-v2 --bucket sample-bucket --query "Contents[?contains(Key, `mySearchPattern`)]"
awslocal s3api list-objects --bucket sample-bucket --query "Contents[?contains(Key, `mySearchPattern`)]"
awslocal s3api list-objects --bucket sample-bucket --query "Contents[?contains(Key)]"
awslocal s3api list-objects --bucket sample-bucket --query 'Contents[].Key' --output text | tr "\t" "\n" | wc -l
awslocal s3api list-objects --bucket sample-bucket --recursive --human-readable --summarize
awslocal s3api list-objects --bucket sample-bucket --recursive
awslocal s3api list-objects --bucket sample-bucket

10225  aws --endpoint-url=http://127.0.0.1:4572 s3api create-bucket --bucket mybucket
10226  aws configure
10227  aws --endpoint-url=http://127.0.0.1:4572 s3api create-bucket --bucket sample-bucket
10228  docker ps
10229  aws --endpoint-url=http://127.0.0.1:4566 s3api create-bucket --bucket sample-bucket
10230  aws --endpoint-url=http://127.0.0.1:4572 s3api create-bucket --bucket sample-bucket
10231  aws --endpoint-url=http://127.0.0.1:4572 s3api put-bucket-acl --bucket sample-bucket --acl public-read
10232  touch sample.jpg
10233  aws --endpoint-url=http://127.0.0.1:4572 s3 cp sample.jpg s3://sample-bucket/
10234* aws --endpoint-url=http://127.0.0.1:4572 s3api create-bucket --bucket mybucket
10235* awslocal --endpoint-url=http://127.0.0.1:4572 s3api create-bucket --bucket mybucket
10236* localstack start
10237* docker ps
10238* aws --endpoint-url=http://127.0.0.1:4572 s3api create-bucket --bucket mybucket
10239* aws --endpoint-url=http://127.0.0.1:4566 s3api create-bucket --bucket mybucket
10240* aws --endpoint-url=http://127.0.0.1:4572 s3api put-bucket-acl --bucket mybucket --acl public-read
10241* aws --endpoint-url=http://127.0.0.1:4566 s3api put-bucket-acl --bucket mybucket --acl public-read
10242* ls
10243* aws --endpoint-url=http://127.0.0.1:4572 s3 cp 5horas.png s3://mybucket/
10244* aws --endpoint-url=http://127.0.0.1:4566 s3 cp 5horas.png s3://mybucket/

awslocal iam create-user --user-name mybucket
{
    "User": {
        "Path": "/",
        "UserName": "mybucket",
        "UserId": "og5c8dp5jrnio4kj1aqz",
        "Arn": "arn:aws:iam::000000000000:user/mybucket",
        "CreateDate": "2022-01-16T23:06:06.873000+00:00"
    }
}

awslocal iam create-access-key --user-name mybucket
{
    "AccessKey": {
        "UserName": "mybucket",
        "AccessKeyId": "AKIA7D6SQUUARTWW5OCG",
        "Status": "Active",
        "SecretAccessKey": "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",
        "CreateDate": "2022-01-16T22:02:17+00:00"
    }
}


awslocal iam create-policy --policy-name p1 --policy-document '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":"s3:CreateBucket","Resource":"*"}]}'
{
    "Policy": {
        "PolicyName": "p1",
        "PolicyId": "AMVTTN8C2NHZNPCCIURFI",
        "Arn": "arn:aws:iam::000000000000:policy/p1",
        "Path": "/",
        "DefaultVersionId": "v1",
        "AttachmentCount": 0,
        "CreateDate": "2022-01-16T22:03:56.816000+00:00",
        "UpdateDate": "2022-01-16T22:03:56.816000+00:00",
        "Tags": []
    }
}

awslocal iam attach-user-policy --user-name mybucket --policy-arn arn:aws:iam::000000000000:policy/p1
