import { Button } from 'antd';
import HTMLReactParser from 'html-react-parser/lib/index';
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';


const AboutUs = () => {
  const [content, setContent]= useState('')
  const editor = useRef(null)
  return (
    <div className='bg-[#F6F6F6]'>

      <JoditEditor ref={editor} value={content} onChange={newContent=>setContent(newContent)} />
       
       <h1>{HTMLReactParser(content)}</h1>


  <div className="flex py-5  justify-center">
        <Button type="primary" size="large" className="!bg-red-500 hover:bg-red-600 border-0 rounded-md">
          Save
        </Button>
      </div>
    </div>
  )
};

export default AboutUs
