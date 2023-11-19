import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Authentication() {

    return (
      <>
      <div className="flex flex-col items-center p-22">

        <div className="p-6 rounded-lg shadow-md w-96 m">

          <div className="flex flex-col items-center">
            <Label className="text-3xl mb-9 font-bold">Login to Sarifle</Label>
          </div>

          <div className="flex flex-col">
            <Input
              title="Email"
              placeholder="example@example.com"
              className="mb-4 text-base sm:text-sm"
            />

            <Input
              title="Password"
              type="password"
              placeholder="Password"
              className="mb-4 text-base sm:text-sm"
            />
          </div>
          <Button className="w-full mt-1 mb-1">Login</Button>
        </div>


      </div>
      <div className="flex items-center justify-center flex-shrink-0">
        <Separator />
      </div>
      </>
    );
  }