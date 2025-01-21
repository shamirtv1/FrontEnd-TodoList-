import { redirect } from 'next/navigation';

export const Home = () => {
  redirect('/auth/signin');
  return (
    <div>
        <h1>Comenxando</h1>
    </div>
  )
}

export default Home