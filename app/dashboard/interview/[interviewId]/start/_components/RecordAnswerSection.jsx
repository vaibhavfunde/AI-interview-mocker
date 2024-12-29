"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModal';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import moment from 'moment';

function RecordAnswerSection({MockInterviewQuestion , activeQuestionIndex ,interviewData}) {
  const [userAnswer, setUserAnswer] = useState('');

  const {user}  = useUser();

  const[loading , setLoading]= useState(false)
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    // Append the latest results to the userAnswer
    results.forEach((result) => {
      setUserAnswer((prevAns) => "" + result.transcript);
    });
  }, [results]);

   useEffect(()=>{
    if(!isRecording&&userAnswer.length>10){
      updateUserAnswerInDb();
    }
  //   if(userAnswer?.length<10){
  //     setLoading(false)
  //  toast('Error while saving your answer, Please record again and minimum length your answer will 10')
  //   return ;
  // }
   },[userAnswer])

  const handleRecordingToggle = async() => {
    if (isRecording) {
     
      stopSpeechToText();
      

     } else {
      startSpeechToText();
    }

  };


  const updateUserAnswerInDb =async()=>{
    console.log(userAnswer)
    setLoading(true)
    const feedbackPrompt ="Question:"+MockInterviewQuestion[activeQuestionIndex]?.question+"User Answer:"+userAnswer+", Depends on question and user answer for give interview question"+" please give us rating for answer and feedback as area of improvement if any"+
    "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field" ;

    const result = await chatSession.sendMessage(feedbackPrompt)

    const mockJsonResp = (result.response.text()).replace('```json' , '').replace('```','')
    console.log(mockJsonResp)

    const JsonFeedbackResp = JSON.parse(mockJsonResp);

    const resp  = await db.insert(UserAnswer)
    .values({
      mockIdRef:interviewData?.mockId,
      question:MockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns:MockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns:userAnswer,
      feedback:JsonFeedbackResp?.feedback,
      rating:JsonFeedbackResp?.rating,
      userEmail:user?.primaryEmailAddress?.emailAddress,      
      createdAt:moment().format('DD-MM-YYYY'),

    })
     if(resp){
      toast('User Answer recorded successfully')
      setUserAnswer('')
     }
    

     setLoading(false)


  
  }
 
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col justify-center mt-20 items-center bg-black rounded-lg p-5'>
        <Image
          src={'/webcam.png'}
          width={200}
          height={200}
          className='absolute'
          alt='webcam'
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
          }}
        ></Webcam>
      </div>

      <Button disabled ={loading} variant="outline" className="my-10" onClick={handleRecordingToggle}>
        {isRecording ? (
          <h2 className='text-red-600 flex items-center gap-2'>
            <Mic /> Stop Recording...
          </h2>
        ) : (
          'Record Answer'
        )}
      </Button>

      
    </div>
  );
}

export default RecordAnswerSection;