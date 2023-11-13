export default function ProofPaymentModal({ setIsOpen, image }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
        <div className="w-[450px]   ">
          <form className=" overflow-hidden px-2 pt-2 pb-5 rounded-3xl bg-background relative">
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-3 right-3"
            >
              <img
                src="/icons/closeIcon.svg"
                className="w-[30px] aspect-square object-cover place-content-center hover:bg-textGrayLight bg-textGrayLight/50 rounded-full cursor-pointer"
              />
            </div>
            <div className="text-textNavy text-3xl font-semibold w-full text-center py-2">
              Proof of Payment
            </div>

            <img
              src={image}
              alt=""
              className="w-[350px] h-[430px] mx-auto object-cover rounded-md"
            />
          </form>
        </div>
      </div>
    </>
  );
}
