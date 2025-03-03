import style from './index.module.scss'
export interface AboutAppWrapperProps {
  className?: string
}

export function AboutAppWrapper({ className }: AboutAppWrapperProps) {
  return (
    <div className={`${className || ''} ${style.container}`}>
      <h1>
        <span>File Explorer & Editor</span>
      </h1>
      <p style={{ maxWidth: 'min(600px, 95%)' }}>
        This project showcases a File Explorer & Editor developed using React, adhering to
        the principles of clean architecture. By employing a layered code structure, the
        application becomes more manageable and facilitates effective testing. Leveraging
        Redux Toolkit for state management enhances performance and simplifies implementation.
        This example serves as a valuable reference for structuring React applications in
        accordance with Clean Architecture principles, empowering developers to build robust
        and scalable software solutions.
      </p>
      <h3>Features:</h3>
      <ul style={{ listStyle: 'none' }}>
        <li><span style={{ userSelect: 'none' }}>☑️ </span>Create New Folder and File</li>
        <li><span style={{ userSelect: 'none' }}>☑️ </span>Monaco Editor Supported</li>
        <li><span style={{ userSelect: 'none' }}>☑️ </span>Download File</li>
        <li><span style={{ userSelect: 'none' }}>☑️ </span>Edit Folder & File Name</li>
        <li><span style={{ userSelect: 'none' }}>⬛ </span>Lexical Editor Supported</li>
        <li><span style={{ userSelect: 'none' }}>⬛ </span>Excalidraw Whiteboard Supported</li>
        <li><span style={{ userSelect: 'none' }}>⬛ </span>Download Folder</li>
        <li><span style={{ userSelect: 'none' }}>⬛ </span>Export File to PDF</li>
        <li><span style={{ userSelect: 'none' }}>⬛ </span>Export Folder to PDF</li>
        <li><span style={{ userSelect: 'none' }}>⬛ </span>Open Local File</li>
        <li><span style={{ userSelect: 'none' }}>⬛ </span>Open Local Folder</li>
      </ul>
    </div>
  )
}
