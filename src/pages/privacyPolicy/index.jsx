import { Button, } from 'antd';
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';





const PrivacyPolicy = () => {
  const [content, setContent]= useState('')
  const editor = useRef(null)
  return (
    <div className='bg-[#F6F6F6]'>

      <JoditEditor ref={editor} value={content} onChange={newContent=>setContent(newContent)} />
       
     


  <div className="flex py-5  justify-center">
        <Button type="primary" size="large" className="!bg-red-500 hover:bg-red-600 border-0 rounded-md">
          Save
        </Button>
      </div>
    </div>
  )
}

export default PrivacyPolicy
