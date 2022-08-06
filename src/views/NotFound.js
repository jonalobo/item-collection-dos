import { Link } from 'react-router-dom'
import '../css/views/notFound.css'
const NotFound = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Oops!</h1>
          <p class="py-6">Esta página no existe en nuestra app</p>
          <button class="btn btn-primary"><Link to='/'>Volver al inicio</Link></button>
        </div>
      </div>
    </div>
  )
}
export default NotFound