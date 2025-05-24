import React, { useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

export default function Editor() {
  const [value, setValue] = useState('')

  return (
    <div
      style={{
        maxWidth: 700,
        margin: 'auto',
        padding: 20,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Editor de Texto</h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Digite seu texto aqui..."
        style={{
          height: '300px',
          marginBottom: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          fontSize: '16px',
          lineHeight: '1.5',
        }}
      />
    </div>
  )
}
