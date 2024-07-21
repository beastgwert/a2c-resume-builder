import '../../styles/Tiptap.css'
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ListItem from '@tiptap/extension-list-item'
import Indent from './Indent'
import BulletList from '@tiptap/extension-bullet-list'

const extensions = [StarterKit, ListItem, BulletList.configure({
    HTMLAttributes: {
        class: 'my-custom-class',
    },
    itemTypeName: 'listItem',
    keepMarks: true,
    keepAttributes: true,
})]

export default function Tiptap({changeExtracurricularDescription, forms}){
  const content = forms.content[forms.isEditing].description;
  const editor = useEditor({
    extensions,
    content,
    onUpdate({editor}){
        changeExtracurricularDescription(editor.getHTML());
    },
  });

  if(!editor){
    return null;
  }

  return (
    <div className='edit-extracurricular-description'>
        <div className="menu-buttons">
            <button 
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
            >
            <i className='fas fa-bold'></i>
            </button>
            <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
            >
            <i className='fas fa-italic'></i>
            </button>
            <button
            type='button'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
            <i className='fas fa-list-ul'></i>
            </button>
            <button
            type="button"
            onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
            disabled={!editor.can().sinkListItem('listItem')}
            >
            <i className='fas fa-indent text-gray-400'></i>
            </button>
        </div>
        <EditorContent editor={editor} />
    </div>
  )
}
