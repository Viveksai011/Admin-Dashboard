import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Bodylogin from "@/components/login/body";
import { Car } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Car className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Sign in to access the car rental dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Bodylogin />
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Demo credentials:</p>
            <p>Email: admin@carrentals.com</p>
            <p>Password: admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
