import React, {useRef} from 'react';
import {EditorHeader} from "../EditorHeader";
import {EditorLineNumber} from "../EditorLineNumber";
import './Editor.css';

export const Editor = () => {

    const editorRef = useRef<HTMLDivElement>(null);

    return (
        <div className='editor'>
            <EditorHeader/>

            <div className='editor__code-wrapper' ref={editorRef}>
                <div className='editor__code'>
                    <div className='editor__code-numbers'>
                        <EditorLineNumber n={1}/>
                    </div>
                    <div className='editor__code-lines'>
                        Empty
                    </div>
                </div>
            </div>
        </div>
    );
};
