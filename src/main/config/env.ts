export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '371637644708952',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '9225a254d156931c85a32ebc6e7c128e',
    accessToken: process.env.FB_ACCESS_TOKEN ?? 'EAAFSAKHMTFgBADvZBywnJSnvHiOjsYmvs1qwrOA8c6ULZAPJOK4X0krIiAXRrP0H4Te0iQatNsrpZAAHdfUj55bSyi7VfpcMp43pUQ8hmj0mbGtFs5M19JJn5DB97hRrztyLYPAvRG8c4EFnR4XtUiya6qUf8lNMqZAlB0vySzTH3Gbp2js2j2ckiHZCqTA8sedb5dQBPP5vESB2SpyZAs'
  },
  s3: {
    accessKey: process.env.AWS_S3_ACCESS_KEY ?? 'AKIA5OSO2M7MHDI85R7R',
    secret: process.env.AWS_S3_SECRET ?? 'FycVxDANCEfNXCmWWZbvCzRDS3omEUcFcZUAw1BP',
    bucket: process.env.AWS_S3_BUCKET ?? 'mybucket'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? '3jk24h32jk4h'
}
