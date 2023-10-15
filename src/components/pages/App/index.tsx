export const App = () => (
  <main className='flex items-center justify-center bg-black h-screen flex flex-col'>
    <p className='text-gray-50 text-xsToH1_320x768 text-center space-y-2 flex flex-col'>
      <span className='text-primary-500 font-bold'>
        Welcome to InSTinToS Template
      </span>

      <span>This text is responsive from:</span>

      <span>
        <b>xs</b> in <b>320px</b> to <b>h1</b> in <b>768px</b>
      </span>
    </p>

    <p className='text-h6 py-4'>
      <span>This div height is responsive from:</span>
      <br />
      <span>
        <b>1rem</b> in <b>320px</b> to <b>4.2rem</b> in <b>768px</b>
      </span>
    </p>

    <div className='flex flex-col h-1.6To4.2_320x768 bg-primary-500 text-gray-50 p-2'></div>
  </main>
)
