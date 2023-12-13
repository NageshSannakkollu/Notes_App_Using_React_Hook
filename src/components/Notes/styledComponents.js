// Style your elements here

import styled from 'styled-components'

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 80px 100px;
`
export const NotesFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 5px #f1f1f1;
`

export const NotesTitle = styled.h1`
font-size:35px;
font-family:"Bree Serif"
font-weight:700;
color:#4363b6;
`
export const NotesTitleInput = styled.input`
  margin-top: 10px;
  padding: 10px 15px;
  width: 80%;
  color: #000000;
  cursor: pointer;
  outline: none;
  border: 0;
`
export const NotesDescription = styled.textarea`
  margin-top: 10px;
  padding: 10px 15px;
  border: 0;
  color: #000000;
  cursor: pointer;
  outline: none;
`

export const NotesAddButton = styled.button`
  padding: 12px 20px;
  color: #f1f1f1;
  border-radius: 6px;
  border-width: 0;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  background-color: #4c63b6;
`
export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 10px;
`
export const NotesItemContainer = styled.div`
  margin-top: 80px;
`
export const NotesItemUnOrderContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
`
export const EmptyNotesListView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1px;
`
export const EmptyNotesImage = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 15px;
`
export const EmptyNotesTitle = styled.h3``
export const EmptyNotesDescription = styled.p``
