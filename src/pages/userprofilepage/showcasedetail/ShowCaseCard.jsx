

export default function ShowCaseCard({showcase}) {
  console.log(showcase)
  return (
    <div className="w-[270px] h-[350px] bg-primary rounded-lg overflow-hidden ">
    <img src={showcase.imagePicture} className="w-full max-h-[280px] object-cover" />
    <div className="p-3 flex justify-center items-center h-[70px]">
      <p className="line-clamp-2 text-textNavy font-semibold text-center">
        {showcase.description}
      </p>
    </div>
  </div>
  )
}
