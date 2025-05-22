import { Form, Link } from 'react-router'
import FormInput from '../components/FormInput'
import SubmitBtn from '../components/SubmitBtn'

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <button type="button" className="btn btn-primary btn-block">
          login
        </button>

        <p className="text-center">
          Ainda não fazes parte?
          <Link to="/register" className="ml-2 link link-hover link-primary ">
            Regista-te
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
