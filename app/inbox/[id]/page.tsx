import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { getAccessToken, getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import { UserType } from "../page";

export type MessageType ={
    id:string;
    username:string;
    body:string;
    conversationId: string;
    sent_to: UserType;
    created_by: UserType;
}



const ConversationPage = async ({ params }: {params:{id:string}}) =>{


    const userId = await getUserId();

    const token = await getAccessToken();
    
        if (!userId || !token){
            return (
                <main className="max-w-[1500px] max-auto px-6 py-12">
    
                    <p> you need to be authenticated</p>
    
    
                </main>
            )
        }


    const conversation = await apiService.get(`/api/chat/${params.id}/`)

    return(
        //list of all messages
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail
                conversation={conversation.conversation}
                userId={userId}
                token={token}
                messages={conversation.messages}
            
            />
        </main>
    )
}
export default ConversationPage; 