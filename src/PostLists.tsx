import { BlogPosts } from './BlogPosts'

export const PostLists: React.FC<any> = () => {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  )
}
