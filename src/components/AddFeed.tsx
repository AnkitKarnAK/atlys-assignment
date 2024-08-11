import { Button, Card } from "@/components"

export const AddFeed = () => {
    return (
        <>
            <Card className="mb-4">
                <form className="flex flex-col gap-4">
                    <h2 className="text-lg font-medium text-light-500">Create post</h2>

                    <div className="flex cursor-text items-center gap-4 rounded-lg bg-primary-300 p-4">
                        <div className="h-12 w-12 min-w-12 self-start flex items-center justify-center rounded-full bg-dark-500">
                            🙂
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="relative w-full">
                                <input
                                    name="text"
                                    className="py-3 px-0 text-light-500 w-full rounded-md border-2 bg-transparent outline-none placeholder:text-light-300 border-none border-dark-300 focus:border-light-300"
                                    placeholder="How are you feeling today?"
                                    aria-label="How are you feeling today?"
                                />
                            </div>
                            <p className="mt-1 text-xs text-red-400" />
                        </div>
                    </div>

                    <Button type="submit" className="items-end self-end">
                        Post
                    </Button>


                </form>
            </Card>
        </>
    )
}
