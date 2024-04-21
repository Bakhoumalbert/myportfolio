import { getAuthSession } from "@/lib/auth";
import { Post } from "@/ui/modules/blog/blog";
import LayoutBlog from "./layout";
import { Code } from "@/ui/modules/hero-top/component/Top-hero";

export default async function BlogPage() {

    const session = await getAuthSession();

    const user = session?.user

    return (
        <LayoutBlog>
                <div className="flex flex-col space-y-8">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-caption text-6xl">
                        All my blog
                    </h1>
                    {/* {
                        user &&
                        <Button>
                            <Link href='/blog/created'>
                            Create
                            </Link>
                        </Button>
                    } */}
                </div>
                <div className="flex flex-row items-center">
                    <Code className=" bg-gray-600 mr-2">NB : </Code>
                    <Code className="text-alert-danger">Contenu bientôt disponible</Code>
                </div>
                <div className="flex flex-col space-y-8">
                    <Post />
                    {/* <Post />
                    <Post />
                    <Post />
                    <Post /> */}
                </div>
            </div>
        </LayoutBlog>

    );
}
