import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionSection({MockInterviewQuestion , activeQuestionIndex}) {

    const textToSpeech =(text)=>{
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }
        else{
            alert("sorry, Your Browser doesnot support text to sppech ")
        }
    }

  return MockInterviewQuestion&&(
    <div className='p-5 border rounded-lg my-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {MockInterviewQuestion&&MockInterviewQuestion.map((question , index)=>(
                <h2  key={index}  className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer 
                    ${activeQuestionIndex == index ?'bg-[#4845D2] text-white ': ''}`}>Question #{index+1}</h2>
            ))}

            
        </div>
        <h2 className='my-5 text-lg md:text-lg'>{MockInterviewQuestion[activeQuestionIndex]?.question}</h2>

           <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(MockInterviewQuestion[activeQuestionIndex]?.question)}></Volume2>

          <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
            <h2  className='flex gap-2 items-center text-[#4845D2]'>
                <Lightbulb></Lightbulb>
            <strong>Note:</strong></h2>
            <h2 className='text-sm text-primary my-3'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
          </div>

    </div>
  )
}

export default QuestionSection