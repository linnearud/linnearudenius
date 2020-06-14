import React from 'react'
import { useRouteMatch, useLocation } from 'react-router-dom'
import { parse } from 'query-string'
import SetupQuiz from './SetupQuiz'
import RunQuiz from './RunQuiz'
import QuizResult from './QuizResult'


const QuizPage = () => {
    const matchSetupQuiz = useRouteMatch('/birds/quiz')
    const matchStartQuiz = useRouteMatch('/birds/quiz/start')
    const matchQuizResult = useRouteMatch('/birds/quiz/result')
    const location = useLocation()

    const params = parse(location.search)

    if (matchSetupQuiz && matchSetupQuiz.isExact) {
        return <SetupQuiz />
    } else if (matchStartQuiz && matchStartQuiz.isExact) { 
        return <RunQuiz {...params} />
    } else if (matchQuizResult && matchQuizResult.isExact) {
        return <QuizResult />
    } else {
        return null
    }
}

export default QuizPage