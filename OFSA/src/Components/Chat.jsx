import React from 'react';

const Chat = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-3'>Chat with expert</h1>
            <div className='lg:w-1/2 mx-auto border-2 shadow-inner shadow-slate-600 p-5 min-h-96 border-black rounded-lg my-5 border-solid'>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Stylist
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">How can I help you</div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
                <div className="chat chat-end mt-48">
                    <div className="chat-image avatar">
                        <div className="w-10 bg-slate-700 rounded-full">
                           
                        </div>
                    </div>
                    <div className="chat-header">
                        User
                       
                    </div>
                    <div className="">
                        <button className='btn btn-md'>send</button>
                        <input className='w-64 p-3 border-2 border-solid h-12 rounded-lg' type="text" /></div>
                   
                </div>
            </div>
        </div>
    );
};

export default Chat;