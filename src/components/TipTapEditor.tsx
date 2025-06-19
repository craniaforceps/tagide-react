import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Começa a escrever aqui...</p>',
  })

  useEffect(() => {
    return () => {
      if (editor) {
        editor.destroy()
      }
    }
  }, [editor])

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default TipTapEditor
