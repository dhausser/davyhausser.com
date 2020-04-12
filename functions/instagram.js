const fetch = require(`isomorphic-unfetch`)

const url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"21051932","first":4}`

const cache = {
  lastFetch: 0,
  posts: [],
}

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map(edge => {
    return {
      thumbnail: edge.node.thumbnail_src,
      url: `https://instagram.com/p/${edge.node.shortcode}`,
      caption: edge.node.edge_media_to_caption.edges[0].node.text,
      id: edge.node.id,
    }
  })
}

async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts
  }
  const data = await fetch(url).then(res => res.json())
  const posts = slimUpPosts(data)
  cache.lastFetch = Date.now()
  cache.posts = posts
  return posts
}

exports.handler = async function (event, context, callback) {
  const posts = await getPosts()
  console.log(posts)
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(posts),
  })
}
