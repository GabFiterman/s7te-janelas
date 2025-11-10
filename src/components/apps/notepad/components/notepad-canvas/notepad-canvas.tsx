interface NotepadCanvasProps {
  defaultValue?: string | undefined;
}

function NotepadCanvas({ defaultValue }: NotepadCanvasProps) {
  return (
    <div className="notepad-canvas-container">
      <textarea defaultValue={defaultValue} />
    </div>
  );
}

export default NotepadCanvas;
