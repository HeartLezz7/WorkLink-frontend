

export default function OutstaindingModal({title, children, maxWidth = 27, open, onClose}) {
    
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-1 bg-backgroundWhiteBlue opacity-70 z-10"> </div>
          <div className="fixed inset-1 z-50">
            <div className="flex justify-center items-center min-h-full p-4">

              <div
                className="rounded-lg w-full bg-primary shadow-2xl border"
                style={{ maxWidth: `${maxWidth}rem` }} >
                
                <div className="flex justify-between p-4 text-xl border-b">
                  <div className="invisible">X</div>
                  <div className="font-bold">{title}</div>
                  <div className="text-gray-500 cursor-pointer"
                        onClick={onClose}>X</div>
                </div>


                <div className="p-4">{children}</div>

              </div>


            </div>
          </div>
        </>
      )}
    </>
  )
}
