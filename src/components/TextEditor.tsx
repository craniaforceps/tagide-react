import React, { useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

export default function Editor() {
  const [value, setValue] = useState('')

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  }

  return (
    <div className="w-full max-w-[700px] mx-auto p-5 font-sans">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Vamos, escreve alguma coisa"
        modules={modules}
        className="custom-editor max-w-xl lg:w-md"
      />
    </div>
  )
}
