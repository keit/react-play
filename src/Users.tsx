import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Users: React.FC<any> = () => {
  const users = [
    { id: 1, name: 'User 1 details', active: true },
    { id: 2, name: 'User 2 details', active: false },
    { id: 3, name: 'User 3 details', active: true }
  ]

  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'

  const usersToDisplay = showActiveUsers
    ? users.filter((user) => user.active)
    : users

  return (
    <>
      <div>
        <div>
          <button onClick={() => setSearchParams({ filter: 'active' })}>
            Active users
          </button>
          <button onClick={() => setSearchParams({})}>Reset filters</button>
        </div>
        {showActiveUsers ? (
          <h2>Show active users</h2>
        ) : (
          <h2>Showing all users</h2>
        )}
      </div>
      <div>
        {usersToDisplay.map((item) => (
          <Link to={`/users/${item.id}`} key={item.id}>
            <h5>{item.name}</h5>
          </Link>
        ))}
        <Outlet />
      </div>
    </>
  )
}
export default Users
