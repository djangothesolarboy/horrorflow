/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './ListQuestionsPage.css';
import * as questionActions from '../../store/question';
import * as sessionActions from '../../store/session';

function ListQuestionsPage({ data }) {
    const dispatch = useDispatch();

    const questions = useSelector((state) => state.questions);
    function questionDate() { 
        let date;
        questions.map((question) => {
            const created = question.createdAt;
            date = created.split('T');
            return date[0];
        });
        return date[0];
    };
    
    useEffect(() => {
        dispatch(questionActions.questionList())
    }, [dispatch]);

    // const handleOnChange = () => {

    // }

    // 2020-12-17T21:23:32.891Z
    // const convertDate = () => {
    //     const created = question.createdAt;
    //     const date = created.split('T');
    //     return date[0];
    // }
    
    return (
        <div className='questions-container'>
            <ul>
                {questions.map((question) => 
                    <li className='question'>
                            <a className='question-link' href={`/questions/${question.id}`}>{question.question}</a>
                    <p>Posted by: {question.User.username}</p>
                    <p className='question-created'>Created On: {questionDate()}</p>
                    {/* <p className='question-created'>Created On: {question.createdAt}</p> */}
                    </li>
                )}
                <li>{data}</li>
            </ul>
        </div>
    )
};

export default ListQuestionsPage;