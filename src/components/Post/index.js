import "./Post.css"

const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        className="capa"
        src={`/assets/posts/${post.id}/capa.png`}
        alt="Imagem de capa do post"
      />

      <h2 className="titulo">{post.titulo}</h2>
      <button className="botaoLer">Ler</button>
    </div>
  )
}

export default Post
