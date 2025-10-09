'use client';
import useWebSocket, {ReadyState} from "react-use-websocket";
import CustomButton from "../forms/CustomButton";
import { ConversationType, UserType } from "@/app/inbox/page";
import { useEffect, useState,useRef } from "react";
import { MessageType } from "@/app/inbox/[id]/page";

interface ConversationDetailProps {
    conversation:ConversationType;
    userId:string;
    token:string;
    messages: MessageType[];
}


const ConversationDetail: React.FC<ConversationDetailProps> = ({
    conversation,
    userId,
    token,
    messages,
})=>{

    const messagesDiv= useRef(null);

    const [newMessage,setNewMessage] = useState('');

    const myUser = conversation.users?.find((user)=>user.id== userId);
    const otherUser= conversation.users?.find((user)=>user.id!= userId);

    //for receiving
    const [realtimeMessages, setRealtimeMessages]= useState<MessageType[]>([]);
    //
    // for loading messages



    const {sendJsonMessage, lastJsonMessage, readyState}=useWebSocket(`${process.env.NEXT_PUBLIC_WS_URL}/ws/${conversation.id}/?token=${token}`, {
        share:false,
        shouldReconnect: ()=>true,
    })


    // for loading messages
    
    useEffect(()=>{
        console.log("connection state changed", readyState);
    }, [readyState]);

    //for appending messages 
    useEffect(()=>{
        if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'username' in lastJsonMessage && 'body' in lastJsonMessage){
            const message: MessageType={
                id:'',
                username:lastJsonMessage.username as string,
                body:lastJsonMessage.body as string,
                conversationId:conversation.id,
                sent_to: otherUser as UserType,
                created_by: myUser as UserType,
            }

            setRealtimeMessages((realtimeMessages)=>[...realtimeMessages, message])
        }

        scrollToBottom();
    },[lastJsonMessage]);


    //
    const sendMessage = async ()=> {
         sendJsonMessage({
            event:'chat_message',
            data:{
                body:newMessage,
                username:myUser?.username,
                sent_to_id: otherUser?.id,
                conversation_id:conversation.id
            }
         });

        setNewMessage('');

        setTimeout(()=>{
            scrollToBottom()
        }, 50);
    }


    const scrollToBottom = () =>{
        if (messagesDiv.current){
            messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
        }
    }

    return(
        <>
        <div 
            ref={messagesDiv}
            className="max-h-[400px] overflow-auto flex flex-col space-y-4"
            >
            
            {messages.map((message, index)=> (
                <div 
                    key={index}
                    className={`w-[80%] py-4 px-6 rounded-xl ${message.created_by.username == myUser?.username ?'ml-[20%] bg-blue-200' : 'bg-gray-200' }`}
                    >
                    <p className="font-bold text-gray-500">{message.created_by.username}</p>
                    <p>{message.body}</p>

                </div>
            ))}

            {realtimeMessages.map((message, index)=> (
                <div 
                    key={index}
                    className={`w-[80%] py-4 px-6 rounded-xl ${message.username == myUser?.username ?'ml-[20%] bg-blue-200' : 'bg-gray-200' }`}
                    >
                    <p className="font-bold text-gray-500">{message.username}</p>
                    <p>{message.body}</p>

                </div>
            ))}
        </div>
        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
            <input 
                type="text" 
                placeholder="Type your message.." 
                className="w-full p-2 bg-gray-200 rounded-xl" 
                value={newMessage}
                onChange={(e)=> setNewMessage(e.target.value)}
            
            
            />

            <CustomButton
                label='Send'
                className="w-[100px]"
                onClick={sendMessage}
                
            />

        </div>
        </>
    )

}
export default ConversationDetail;