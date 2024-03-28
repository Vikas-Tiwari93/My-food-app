import {  toast } from 'react-toast'

export const customToastError = (message:string) =>
  toast.error(message, {

    backgroundColor: 'red',
    color: 'white',
  })
  export const customToastSuccess = (message:string) =>
  toast.success(message, {
    backgroundColor: '#E16120',
    color: 'white',
  })