import formUrlEncode from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

export default ({ $axios }, inject) => {
  const Basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  // get spotify access token with user refresh_token
  const getAccessToken = async () => {
    return fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Basic}`,
      },
      body: formUrlEncode.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    }).then((res) => res.json())
  }

  const getNowPlaying = async (endpoint) => {
    const { access_token, token_type } = await getAccessToken()

    return fetch(`https://api.spotify.com/v1${endpoint}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  }

  inject('getNowPlaying', getNowPlaying)
}
