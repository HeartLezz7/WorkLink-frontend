export default function Footer() {
  return <div>
    <div className="w-screen h-full bg-primary text-textWhite p-20 px-60">
      <div className="grid grid-cols-3 gap-20">

        <div className="flex flex-col">
          <div className="flex gap-5">
            <img src="/headerLogo.png" className="h-[60px]" />
            <h3>WorkLink</h3>
          </div>
          <div className="flex justify-start mt-3">
            <span className="text-[16px]">Get help today. Tackle your to-do list wherever you are with our
              Web Application.</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[22px] text-bold">Services</span>
          <div className="text-[16px] grid grid-cols-2">
            <div className="flex flex-col mt-10">
              <div>Computer & Technology</div>
              <div className="mt-2.5">Graphic & Design</div>
              <div className="mt-2.5">Document</div>
              <div className="mt-2.5">Tutoring & Education</div>
              <div className="mt-2.5">Event service</div>
            </div>

            <div className="flex flex-col px-10 mt-10">
              <div>Home service</div>
              <div className="mt-2.5">Transport</div>
              <div className="mt-2.5">Health service</div>
              <div className="mt-2.5">Food & Cooking</div>
              <div className="mt-2.5">Pet</div>
            </div>

          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[22px] text-bold">Contact us</span>
          <div className=" text-[16px] flex flex-col mt-10 gap-5">

            <div className="flex gap-5">
              <div> Email :</div>
              <div> worklink.official@gmail.com</div>
            </div>

            <div className="flex gap-5">
              <div> Phone :</div>
              <div> 02 - 888 - 8888</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>;
}
