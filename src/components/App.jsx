import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'
import Section from './Section/Section'
import React from 'react'
import {Container} from './AppStyled'

class App extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onLeaveFeedback = (event) => {
    const value = event.currentTarget.textContent.toLowerCase();
  this.setState(prevState => ({
    [value]:prevState[value] + 1,
        })
      )
  }

  countTotalFeedback(){
    const {good,bad,neutral} = this.state
    const total = good+bad+neutral
    return total
  }

  countPositiveFeedbackPercentage(){
    const {good,bad,neutral} = this.state
    const percentage = Math.round(good/(good+neutral+bad)*100)
    return percentage
  }

  render(){
    const{good,neutral,bad} = this.state
    return (
  <Container>
    <Section title={"Please leave feedback"}>
        <FeedbackOptions 
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
        />        
    </Section>

    {this.countTotalFeedback() > 0 ? (
      <Section title={'Statistics'}>
      <Statistics  
      good={good} 
      neutral={neutral}
      bad={bad}
      total={good+bad+neutral}
      positivePercentage={this.countPositiveFeedbackPercentage()}
      />
</Section>
    ) : (
      <Notification
      message = {"There is no feedback"}
      />
    )}
    
  </Container>
  );
}
};

export default App



