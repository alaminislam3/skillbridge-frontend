import LoginForm from "@/components/login-form"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <LoginForm />
      </div>
    </div>
  )
}