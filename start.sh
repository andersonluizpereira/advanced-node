localstack stop
localstack start

awslocal s3api create-bucket --bucket sample-bucket

awslocal s3api put-object --bucket sample-bucket --key 5horas.png --body 5horas.png
