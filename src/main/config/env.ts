export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '371637644708952',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '9225a254d156931c85a32ebc6e7c128e'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? '3jk24h32jk4h'
}
