

export default function ShowCaseCard({showcase,deleteShowcase}) {
  console.log(showcase)
  const handdleClickDelete = () =>{
    deleteShowcase(showcase.id)
  }
  return (
    <div className="w-[270px] h-[370px] bg-primary rounded-lg overflow-hidden border-2 border-r-secondary">
    <img src={showcase.imagePicture} className="w-full max-h-[280px] object-cover" />
    <div className="p-3 flex justify-center items-center h-[40px]">
      <p className="line-clamp-2 text-textNavy font-semibold text-center">
        {showcase.description}
      </p>
    </div>
    <div className="flex justify-end gap-2 border-2 mt-6">
    <button>Edit</button>
    <button onClick={handdleClickDelete}>Delete</button>
    </div>
  </div>
  )
}
