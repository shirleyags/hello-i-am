import Banner from 'components/Banner'
import 'pages/Home/Home.css'
import posts from 'json/posts.json'
import Post from 'components/Post'

const Home = () => {
  return (
    <main>
      <Banner/>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
              <Post post={post}/>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
