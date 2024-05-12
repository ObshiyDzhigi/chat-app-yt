import {create} from 'zustand'

import React from 'react'

const useConversation = create((set)=> ({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=> set({selectedConversation}),
    messages:[],
    setMessages:(messages)=> set({messages})
}))

export default useConversation;