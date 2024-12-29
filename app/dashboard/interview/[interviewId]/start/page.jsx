"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";


function StartInterview({ params }) {
  const unwrappedParams = React.use(params);
  const router = useRouter();

  const [interviewData, setinterviewData] = useState(null); // Initially null
  const [MockInterviewQuestion, setMockInterviewQuestion] = useState(null); // Initially null
  const [activeQuestionIndex, setactiveQuestionIndex] = useState(0);

  useEffect(() => {
    // Call the function to fetch interview data when the params change
    GetInterviewDetails();
  }, [unwrappedParams]);

  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, unwrappedParams.interviewId));

      if (result.length === 0) {
        console.error("No interview data found for the given interviewId");
        return;
      }

      // Log to check the result
      console.log(result);

      // Set the interview data
      const interview = result[0];
      setinterviewData(interview);

      // Accessing the `interview_questions` array
      const jsonMockResp = JSON.parse(interview.jsonMockResp);
      console.log("Parsed Mock Interview Questions: ", jsonMockResp);

      // Ensure that jsonMockResp contains the `interview_questions` key
      if (jsonMockResp && jsonMockResp.interview_questions) {
        setMockInterviewQuestion(jsonMockResp.interview_questions);
      } else {
        console.error("No interview questions found in the response");
      }

    } catch (error) {
      console.error("Error fetching interview data:", error);
    }
  };

  return (
    <div>
      {/* Ensure data is loaded before rendering the components */}
      {interviewData && MockInterviewQuestion ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Questions */}
            <QuestionSection
              activeQuestionIndex={activeQuestionIndex}
              MockInterviewQuestion={MockInterviewQuestion}
            />

            {/* Video/Audio Recording */}
            <RecordAnswerSection
              activeQuestionIndex={activeQuestionIndex}
              MockInterviewQuestion={MockInterviewQuestion}
              interviewData={interviewData}

            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center lg:justify-end gap-4">
            {activeQuestionIndex > 0 && (
              <Button
                onClick={() => setactiveQuestionIndex(activeQuestionIndex - 1)}
                className="text-sm sm:text-base lg:text-lg py-2 px-4 lg:py-3 lg:px-6"
              >
                Previous Question
              </Button>
            )}
            {activeQuestionIndex !== MockInterviewQuestion?.length - 1 && (
              <Button
                onClick={() => setactiveQuestionIndex(activeQuestionIndex + 1)}
                className="text-sm sm:text-base lg:text-lg py-2 px-4 lg:py-3 lg:px-6"
              >
                Next Question
              </Button>
            )}
            {activeQuestionIndex === MockInterviewQuestion?.length - 1 && (
              
              <Button onClick={()=>router.push(`/dashboard/interview/${interviewData.mockId}/feedback`)} className="text-sm sm:text-base lg:text-lg py-2 px-4 lg:py-3 lg:px-6">
                End Interview
              </Button>
            )}
          </div>
        </>
      ) : (
        <p>Loading interview data...</p> // Display loading message while fetching data
      )}
    </div>
  );
}

export default StartInterview;
