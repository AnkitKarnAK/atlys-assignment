import { Button } from "@/components";
import { useNavigate } from "@tanstack/react-router";

interface RegisterDialogProps {
    openLoginDialog?: () => void;
}

export const RegisterDialog = ({ openLoginDialog }: RegisterDialogProps) => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate({
            to: "/login"
        })
    }


    return (
        <div className="w-full max-w-[464px] bg-gradient-ring-outer p-0.5 rounded-lg">
            <form className="flex w-full flex-col bg-gradient-inner rounded-lg px-5 py-9">
                <div>
                    <div className="text-center text-light-400 uppercase text-sm font-medium mb-2">SIGN UP</div>
                    <h2 className="text-center font-semibold text-light-white mb-11">Create an account to countinue</h2>
                </div>

                <label htmlFor="email" className="text-light-500 text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mb-4"
                />


                <label htmlFor="username" className="text-light-500 text-sm font-medium mb-1">Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Choose a preferred username"
                    className="mb-4"
                />

                <label htmlFor="password" className="text-light-500 text-sm font-medium mb-1">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Choose a strong password"
                    className="mb-4"
                />

                <Button fullWidth type="submit">
                    Continue
                </Button>

                <div className="mt-3">
                    <span className="text-sm text-light-300 font-medium">
                        Already have an account?{" "}
                        <button className="text-light-500" onClick={openLoginDialog || navigateToLogin}>
                            Login →
                        </button>
                    </span>
                </div>
            </form>
        </div>

    )
};