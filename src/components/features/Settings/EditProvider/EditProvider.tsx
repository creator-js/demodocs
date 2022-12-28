import React, {
  createContext, Dispatch, ReactNode, SetStateAction, useCallback, useState
} from 'react';
import './EditProvider.css';
import { ILine, ILineElement } from '../../../../@types/steps';
import { v4 as uuidv4 } from 'uuid';

export interface IEditLineContext {
  lines: ILine[];
  setLines: Dispatch<SetStateAction<ILine[]>>;
  addLine: (lineId: string) => void;
  removeLine: (lineId: string) => void;
  addElement: (lineId: string) => void;
  removeElement: (lineId: string, elementId: string) => void;
  updateElement: (lineId: string, elementId: string, value: Partial<ILineElement>) => void;
}

export const EditLineContext = createContext<IEditLineContext>({
  lines: [],
  setLines: () => {},
  addLine: () => {},
  removeLine: () => {},
  addElement: () => {},
  removeElement: () => {},
  updateElement: () => {},
});

interface IProps {
  children: ReactNode | ReactNode[];
}

export const EditProvider: React.FC<IProps> = ({ children }: IProps) => {

  const getId = useCallback(() => {
    return uuidv4();
  }, []);

  const [lines, setLines] = useState<ILine[]>([
    {
      id: getId(),
      depth: 0,
      elements: [
        {
          id: getId(),
          content: '',
          token: ''
        }
      ]
    }
  ]);

  const addLine = useCallback((lineId: string) => {
    const newElementId = getId();

    setLines((lines: ILine[]) => {
      const copy = [...lines];
      const index = copy.findIndex((line: ILine) => line.id === lineId);

      if (index >= 0) {
        copy.splice(index + 1, 0, {
          id: getId(),
          depth: 0,
          elements: [
            {
              id: newElementId,
              content: '',
              token: ''
            }
          ]
        });
      }

      return copy;
    });

    setFocus(newElementId);
  }, []);

  const removeLine = useCallback((lineId: string) => {
    setLines((lines: ILine[]) => lines.filter((line: ILine) => line.id !== lineId));
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const addElement = useCallback((lineId: string) => {
    const newId = getId();

    setLines((lines: ILine[]) => {
      const result: ILine[] = [];

      lines.forEach((line: ILine) => {
        if (line.id === lineId) {
          result.push({
            ...line,
            elements: [
              ...line.elements,
              {
                id: newId,
                content: '',
                token: ''
              }
            ]
          });
        } else {
          result.push(line);
        }
      });

      return result;
    });

    setFocus(newId);
  }, []);

  const removeElement = useCallback((lineId: string, elementId: string) => {
    setLines((lines: ILine[]) => {
      const result: ILine[] = [];
      let nextElementToFocus: ILineElement | undefined = undefined;

      lines.forEach((line: ILine) => {
        if (line.id === lineId) {

          const elements: ILineElement[] = [];

          for (let i = 0; i < line.elements.length; i++) {
            const element: ILineElement = line.elements[i];

            if (element.id === elementId) {
              nextElementToFocus = line.elements[i - 1];
            } else {
              elements.push(element);
            }
          }

          result.push({
            ...line,
            elements
          });

        } else {
          result.push(line);
        }
      });

      if (nextElementToFocus) {
        setFocus((nextElementToFocus as ILineElement).id);
      }

      return result;
    });
  }, []);

  const updateElement = useCallback((lineId: string, elementId: string, value: Partial<ILineElement>) => {
    setLines((lines: ILine[]) => {
      const result: ILine[] = [];

      lines.forEach((line: ILine) => {
        if (line.id === lineId) {

          const elements: ILineElement[] = [];

          line.elements.forEach((element: ILineElement) => {
            if (element.id === elementId) {
              elements.push({
                ...element,
                ...value
              });
            } else {
              elements.push(element);
            }
          });

          result.push({
            ...line,
            elements
          });
        } else {
          result.push(line);
        }
      });

      return result;
    });
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const setFocus = useCallback((id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.focus();
      }
    }, 100);
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const value: IEditLineContext = {
    lines,
    setLines,
    addLine,
    removeLine,
    addElement,
    removeElement,
    updateElement
  };

  return (
    <EditLineContext.Provider value={value}>
      {children}
    </EditLineContext.Provider>
  );
};
