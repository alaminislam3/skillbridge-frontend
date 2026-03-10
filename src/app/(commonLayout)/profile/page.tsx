import { getUser } from "@/service/auth";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default async function Page() {
  const user = await getUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-xl font-semibold">User not logged in</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <Card>
        <CardHeader className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">User ID</span>
            <span className="text-muted-foreground">{user.id}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Role</span>
            <span className="text-muted-foreground">{user.role}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Status</span>
            <span
              className={`px-2 py-1 rounded text-sm ${
                user.status === "UNBAN"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {user.status}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}