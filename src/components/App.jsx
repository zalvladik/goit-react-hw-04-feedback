import componentsApp from './components'
import React from 'react'
import {Container} from './AppStyled'
import { useState } from "react";
const {Statistics,FeedbackOptions,Notification,Section,} = componentsApp;

const NewApp = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = e => {   
    
    switch(e.target.getAttribute('data-option')){
      case 'good':
        return setGood(good => good + 1);
      case 'neutral':
        return setNeutral(neutral => neutral + 1);
      case 'bad':
        return setBad(bad => bad + 1);
      default:
        return
    }
  }

  return(
    <Container>
    <Section title={"Please leave feedback"}>
        <FeedbackOptions 
                        options={Object.keys({good,neutral,bad})}
                        onLeaveFeedback={()=> onLeaveFeedback}
        />        
    </Section>

    {good+bad+neutral > 0 ? (
      <Section title={'Statistics'}>
      <Statistics  
      good={good} 
      neutral={neutral}
      bad={bad}
      total={good+bad+neutral}
      positivePercentage={Math.round(good/(good+neutral+bad)*100)}
      />
</Section>
    ) : (
      <Notification
      message = {"There is no feedback"}
      />
    )}
    
  </Container>
  )
}

export default NewApp



