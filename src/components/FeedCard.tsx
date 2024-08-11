import { Card, SvgIcons } from "@/components"

export const FeedCard = () => {
    return (
        <>
            <Card >
                <div>
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-4">
                            <img src="/images/user-2.png" alt="profile picture of Jane Smith" className="h-11 w-11 rounded-full" />
                            <div className="">
                                <h3 className="font-medium text-light-500">Jane Smith</h3>
                                <div className="text-sm font-medium text-light-300">
                                    <span>a month ago</span>
                                    <span> • Edited</span>
                                </div>
                            </div>
                        </div>

                        <button>
                            <SvgIcons icon={"DotsHorizontal"} width={20} color="#C5C7CA" />
                        </button>
                    </div>

                    <div className="mb-3 p-4 flex items-center gap-4 rounded-lg bg-primary-300">
                        <div className="h-12 w-12 min-w-12 self-start flex items-center justify-center rounded-full bg-dark-500">
                            🙂
                        </div>
                        <p className="text-light-300">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <SvgIcons icon="ChatBubble" color="#C5C7CA" width={20} />
                        <span className="text-sm font-medium text-light-300">4 comments</span>
                    </div>


                </div>
            </Card>
        </>
    )
}