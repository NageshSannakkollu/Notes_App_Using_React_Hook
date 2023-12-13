// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  ComponentContainer,
  NotesTitle,
  NotesTitleInput,
  NotesDescription,
  NotesFormContainer,
  NotesAddButton,
  AddButtonContainer,
  NotesItemContainer,
  NotesItemUnOrderContainer,
  EmptyNotesListView,
  EmptyNotesImage,
  EmptyNotesTitle,
  EmptyNotesDescription,
} from './styledComponents'

const Notes = () => {
  const [notesInitialTitle, setNotesTitle] = useState('')
  const [notesInitialDescription, setNotesDescription] = useState('')
  const [notesInitialList, setNotesList] = useState([])

  const onChangeNotesTitle = event => {
    setNotesTitle(event.target.value)
  }

  const onChangeNotesDescription = event => {
    setNotesDescription(event.target.value)
  }

  const onClickSubmitNotes = event => {
    event.preventDefault()
    console.log('Button clicked')
    const newReactComment = {
      id: uuidv4(),
      notesInitialTitle,
      notesInitialDescription,
    }
    setNotesList(previousNotesList => [...previousNotesList, newReactComment])
    setNotesTitle('')
    setNotesDescription('')
  }

  console.log(notesInitialList)

  return (
    <ComponentContainer>
      <NotesTitle>Notes</NotesTitle>
      <NotesFormContainer onSubmit={onClickSubmitNotes}>
        <NotesTitleInput
          type="text"
          placeholder="Title"
          onChange={onChangeNotesTitle}
          value={notesInitialTitle}
        />
        <NotesDescription
          placeholder="Take a Note..."
          rows="5"
          cols="50"
          onChange={onChangeNotesDescription}
          value={notesInitialDescription}
        />
        <AddButtonContainer>
          <NotesAddButton type="submit">Add</NotesAddButton>
        </AddButtonContainer>
      </NotesFormContainer>
      <NotesItemContainer>
        {notesInitialList.length > 0 ? (
          <NotesItemUnOrderContainer>
            {notesInitialList.map(eachNotes => (
              <NoteItem notesDetails={eachNotes} key={eachNotes.id} />
            ))}
          </NotesItemUnOrderContainer>
        ) : (
          <EmptyNotesListView>
            <EmptyNotesImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyNotesTitle>No Notes Yet</EmptyNotesTitle>
            <EmptyNotesDescription>
              Notes you add will appear here
            </EmptyNotesDescription>
          </EmptyNotesListView>
        )}
      </NotesItemContainer>
    </ComponentContainer>
  )
}

export default Notes
