import React, {
  createContext, Dispatch, SetStateAction, useState
} from 'react';
import './InteractiveEditor.css';
import { FolderStructure } from '../FolderStructure';
import { Terminal } from '../Terminal';
import { Editor } from '../Editor';
import { Hint } from '../Hint';

export interface IEditorContext {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    currentFileId: string;
    setCurrentFileId: Dispatch<SetStateAction<string>>;
}

export const EditorContext = createContext<IEditorContext>({
  step: 1,
  setStep: () => {},
  currentFileId: 'f_creator.config.js',
  setCurrentFileId: () => {}
});

export const InteractiveEditor = () => {

  const [currentFileId, setCurrentFileId] = useState<string>('f_creator.config.js');
  const [step, setStep] = useState<number>(0);

  const context = {
    step,
    setStep,
    currentFileId,
    setCurrentFileId
  };

  return (
    <EditorContext.Provider value={context}>
      <div className='interactive-editor__editor'>
        <div className='editor__top'>
          <div className='editor__aside'>
            <FolderStructure/>
          </div>
          <div className='editor__main'>
            <Editor/>
          </div>
        </div>
        <div className='editor__terminal'>
          <Terminal/>
          <Hint/>
        </div>
      </div>
    </EditorContext.Provider>
  );
};
