import { Outlet } from 'react-router-dom'

export const Posts: React.FC<any> = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* render any matching child */}
      <Outlet />
    </div>
  )
}
