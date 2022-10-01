import { useNavigate } from 'react-router-dom'

export const Home: React.FC<any> = () => {
  const navigate = useNavigate()
  return (
    <div style={{ padding: 20 }}>
      <h2>Home Page</h2>

      <p>Order</p>
      <button onClick={() => navigate('order-summary')}>Place order</button>
    </div>
  )
}
