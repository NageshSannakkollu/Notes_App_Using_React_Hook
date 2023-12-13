// Write your code here
import {
  NotesListContainer,
  NotesItemTitle,
  NotesItemDescription,
} from './styledComponents'

const NotesItem = props => {
  const {notesDetails} = props
  const {notesInitialTitle, notesInitialDescription} = notesDetails
  return (
    <NotesListContainer>
      <NotesItemTitle>{notesInitialTitle}</NotesItemTitle>
      <NotesItemDescription>{notesInitialDescription}</NotesItemDescription>
    </NotesListContainer>
  )
}

export default NotesItem
