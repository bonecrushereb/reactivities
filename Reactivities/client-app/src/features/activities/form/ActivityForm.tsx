import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm}: Props) {

  const initialState = selectedActivity && {
    id: '',
    title: '',
    category: '',
    describtion: '',
    date: '',
    city: '',
    venue: ''
  }

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    console.log(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input placeholder = 'Title' value={activity.title} name='title' onChange={handleInputChange}/>
        <Form.TextArea placeholder = 'description'/>
        <Form.Input placeholder = 'category'/>
        <Form.Input placeholder = 'date'/>
        <Form.Input placeholder = 'city'/>
        <Form.Input placeholder = 'venue'/>
        <Button floated='right' positive type='submit' content='Submit'/>
        <Button onClick={() => closeForm()} floated='right' type='button' content='Cancel'/>
      </Form>
    </Segment>
  );
}