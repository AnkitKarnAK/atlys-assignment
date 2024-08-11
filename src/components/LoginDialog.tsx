import { Button } from "@/components"
import { useNavigate } from "@tanstack/react-router"

export const LoginDialog = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[464px] bg-gradient-ring-outer p-0.5 rounded-lg">
            <form className="flex w-full flex-col bg-gradient-inner rounded-lg px-5 py-9">
                <div>
                    <div className="text-center text-light-400 uppercase text-sm font-medium mb-2">WELCOME BACK</div>
                    <h2 className="text-center font-semibold text-light-white mb-11">Sign in to your account</h2>
                </div>


                <label htmlFor="emailOrUsername" className="text-light-500 text-sm font-medium mb-1">Email or Username</label>
                <input
                    type="text"
                    name="emailOrUsername"
                    placeholder="Enter your email or username"
                    className="mb-4"
                />

                <label htmlFor="password" className="text-light-500 text-sm font-medium mb-1 flex justify-between items-center">
                    Password

                    <span className="cursor-pointer text-xs">Forgot password?</span>
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="mb-4"
                />

                <Button fullWidth type="submit">
                    Login now
                </Button>

                <div className="mt-3">
                    <span className="text-sm text-light-300 font-medium">
                        Not registered yet?{" "}
                        <button className="text-light-500" onClick={() => {
                            navigate({
                                to: "/register"
                            })
                        }}>Register →</button>
                    </span>
                </div>

            </form>


        </div>
    )
}
