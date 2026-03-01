"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { registerUser } from "@/service/auth"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export  function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const data =  {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
    }
   const toastId = toast.loading("loading..");
     try {
        const response = await registerUser(data);
        console.log(response)
        if (response?.success) {
          toast.success("User register successfully | please login now", { id: toastId });
          router.push("/login");
        } else {
          toast.error("Invalid email or password", { id: toastId });
        }
      } catch (err: unknown) {
        let message = "An unexpected error occurred";
        if (err instanceof Error) message = err.message;
        toast.error(message, { id: toastId });
      }
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>

            {/* Full Name */}
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

            {/* Role Dropdown */}
            <Field>
              <FieldLabel htmlFor="role">Role</FieldLabel>
              <select
                id="role"
                name="role"
                className="w-full border rounded-md p-2"
                required
              >
                <option value="">Select a role</option>
                <option value="STUDENT">Student</option>
                <option value="ADMIN">Admin</option>
                <option value="TUTOR">Tutor</option>
              </select>
             
            </Field>

            {/* Submit */}
            <Field>
              <Button type="submit" className="w-full">
                Register
              </Button>

              <FieldDescription className="px-6 text-center">
                Already have an account? <a href="login">Login</a>
              </FieldDescription>
            </Field>

          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}