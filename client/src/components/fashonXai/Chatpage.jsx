import React, { useState } from 'react'
import Message from './Message'
import axios from 'axios'
const FASHION_AI_API = import.meta.env.VITE_FASHION_X_AI;


function formatAiResponse(text) {
  if (!text) return "";
  return text.split(/- |\n/).map((line, index) => (
    <React.Fragment key={index}>
      {line.trim() && (index !== 0 ? "- " : "")}{line.trim()}
      <br />
    </React.Fragment>
  ));
}




const Chatpage = ({ setIsChatPage }) => {

  const [userQuestion, setUserQuetion] = useState()
  const [allChat, setAllChat] = useState([])
  const [isLoading, setisLoading] = useState(false)

const handelAiAnswers = async () => {
  try {
    if (userQuestion.length === 0) return;

    // Call the API first
    setisLoading(true)
    const response = await axios.get(
      `${FASHION_AI_API}/api/suggestion?apikey=${import.meta.env.VITE_FASHION_X_AI_BOT_API}&userprompt=${userQuestion}`
    );


    const aiAnswer = formatAiResponse(`${response.data.data.content}`);
    // Update chat after getting AI response
    setAllChat((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        user: userQuestion,
        ai: aiAnswer,
      },
    ]);

    // Clear input
    setUserQuetion("");
    setisLoading(false)
  } catch (error) {
    console.error("Error:", error);
  }
};



  const handelClose = () => {
    setIsChatPage(false)
  }


  return (
    <div className='w-screen h-screen fixed z-[9999] backdrop-blur-md top-0 left-0 flex items-center justify-center'>
      <div className='w-[90vw] h-[90vh] bg-gray-200 rounded-2xl relative overflow-x-hidden'>
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%]'>
          <span className='text-2xl block text-center'>Fashion ✘ AI</span>
          <span className='text-gray-400 text-sm'>code & love by sarthak</span>
        </div>
        <span className='absolute top-0 right-0 bg-red-400 py-1 px-2 cursor-pointer' onClick={() => handelClose()}><i className="ri-close-line"></i></span>

        {/* chat ui screen */}
        <div className='w-[80vw] h-[73vh] px-2 py-2 fixed overflow-x-hidden left-[50%] translate-x-[-50%] hide-scrolbar'>
          {
            allChat?.map((chat) => {
              return (
                <Message chat={chat} />
              )
            })
          }
        </div>

        {/* user input area */}

        <div className='w-[80vw] h-[15vh] bg-gray-100 rounded-2xl mb-2 absolute bottom-0 overflow-x-hidden left-[50%] translate-x-[-50%] '>
          <input autoFocus className='block h-[50%] w-[80%] px-4 outline-none text-xl' placeholder='eg : i want go to college..' value={userQuestion} onChange={(e) => setUserQuetion(e.target.value)} />
          <div>
            <span className='bg-black px-7 ml-3 text-white rounded-3xl  mt-3 inline-block cursor-pointer'>Male</span>
            <span className='bg-gray-700 px-7 ml-3 text-white rounded-3xl  mt-3 inline-block '>beta v1 <i className="ri-verified-badge-fill text-sky-500"></i></span>
            <div className='float-end'>
              {
                isLoading ? 
                  <button className='h-[35px] w-[35px] bg-black mr-4 rounded-full text-white animate-spin'><i class="ri-loader-2-line"></i></button>
                : <button className='h-[35px] w-[35px] bg-black mr-4 rounded-full text-white' onClick={() => handelAiAnswers()}><i className="ri-arrow-up-line text-xl"></i></button>
              }

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Chatpage