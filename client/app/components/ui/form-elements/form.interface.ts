import { EditorProps } from 'draft-js'
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

//тут мы берем просто типизацию по умолчанию от саомго react
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

//типизация для поля
export interface IFieldProps {
  placeholder: string
  error?: FieldError | undefined //FieldError - предоставляет сам react-hook-form
}

//типизация которая включает в себя как типизацию поля коотрую мы написали выше так и стандартную типизацию которая есть у react
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps
//  & - єтот значок означает что два типа сложені вместе

//конечная типизация для поля коотрая включаем в себя выше перечисленную типизацию
export interface IField extends TypeInputPropsField {}

//EditorProps - берется draft-js
type TypeEditorPropsField = EditorProps & IFieldProps

//типы для TextEditor
export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
  //Omit<TypeEditorPropsField, 'editorState'> - вот этой строкой исключаем из наших типов TypeEditorPropsField не нужный нам тип
  onChange: (...event: any[]) => void
  value: string
}
