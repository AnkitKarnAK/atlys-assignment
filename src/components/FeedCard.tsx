import { Card, SvgIcons } from "@/components"
import { Post } from "@/data/posts"
import { useUser } from "@/store/users-store"
import { timeAgo } from "@/utils"

interface FeedCardProps {
    post: Post
}

export const FeedCard = ({ post }: FeedCardProps) => {

    const postUser = useUser(post.userId)

    return (
        <>
            <Card className="my-4" >
                <div>
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-4">
                            {postUser?.photo
                                ? <img src={postUser?.photo} alt={`profile picture of ${postUser?.name || postUser?.username}`} className="h-11 w-11 rounded-full" />
                                : <div className="h-11 w-11 min-w-11 self-start flex items-center justify-center rounded-full bg-primary-500">{postUser?.firstName?.[0] || postUser?.username?.[0]}</div>
                            }
                            <div className="">
                                <h3 className="font-medium text-light-500">{postUser?.name || postUser?.username}</h3>
                                <div className="text-sm font-medium text-light-300">
                                    <span>{timeAgo(post.createdAt)}</span>
                                    {post.createdAt !== post?.updatedAt && <span> • Edited</span>}
                                </div>
                            </div>
                        </div>

                        <button>
                            <SvgIcons icon={"DotsHorizontal"} width={20} color="#C5C7CA" />
                        </button>
                    </div>

                    <div className="mb-3 p-4 flex items-center gap-4 rounded-lg bg-primary-300">
                        <div className="h-12 w-12 min-w-12 self-start flex items-center justify-center rounded-full bg-dark-500">
                            {post?.emoji}
                        </div>
                        <p className="text-light-300">{post.text}</p>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <SvgIcons icon="ChatBubble" color="#C5C7CA" width={20} />
                        <span className="text-sm font-medium text-light-300">{post?.commentIds?.length || "No"} {post?.commentIds?.length > 1 ? "comments" : "comment"}</span>
                    </div>
                </div>
            </Card >
        </>
    )
}