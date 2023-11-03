import Footer from "../../layout/Footer";

export default function HomePage() {
  return (
    < >
      <div className="relative w-screen h-[4000px] bg-primary overflow-hidden">

        <div className="bg-primary w-full h-[1100px] relative  max-w-[1440px] mx-auto">


          <div className="w-[1000px] h-[1000px] rounded-full overflow-hidden z-20 absolute left-[-300px] top-[100px]">
            <img src="/public/HomepagePhoto/team2.jpeg" alt="" className="h-full w-full object-cover" />
          </div>

          <div>
            <div className="w-[500px] h-[500px] bg-secondaryLight/80 rounded-full overflow-hidden z-20 absolute left-[-500px] top-[-150px] shadow-md shadow-black/40">
            </div>
          </div>

          <div>
            <div className="w-[700px] h-[700px] bg-secondaryLight rounded-full overflow-hidden z-10 absolute left-[514px] top-[305px] shadow-md shadow-black/40"></div>
          </div>

          <div>
            <div className="w-[300px] h-[300px] bg-secondaryLight/80 rounded-full overflow-hidden z-20 absolute left-[1450px] top-[-50px] shadow-md shadow-black/40"></div>
          </div>

          <div className="absolute left-[850px] top-[400px] z-30 ">
            <div className="text-textWhite flex flex-col items-center ">
              <h2>Welcome to <br />
                WorkLink</h2>
              <h6><br />Confident & Responsible</h6>
            </div>
          </div>

        </div>

        <div className="bg-primary w-full h-[1500px]  relative  max-w-[1440px] mx-auto">


          <div className="w-[1000px] h-[1000px] rounded-full overflow-hidden z-10 absolute left-[700px] top-[100px]">
            <img src="/public/HomepagePhoto/tutor.jpeg" alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="w-[400px] h-[400px] bg-secondaryLight/80 rounded-full overflow-hidden z-20 absolute left-[-400px] top-[0px] shadow-md shadow-black/40">
            </div>
          </div>

          <div>
            <div className="w-[700px] h-[700px] bg-secondaryLight rounded-full overflow-hidden absolute left-[-400px] top-[700px] shadow-md shadow-black/40"></div>
          </div>

          <div>
            <div className="w-[300px] h-[300px] bg-secondaryLight/80 rounded-full overflow-hidden z-10 absolute left-[1300px] top-[-50px] shadow-md shadow-black/40"></div>
          </div>

          <div className="absolute left-[100px] top-[200px]">
            <div className="text-textWhite flex flex-col items-center">
              <h2>Everyday life <br />
                made easier </h2>
              <h6><br />When life gets busy, you don’t <br />
                have to tackle it alone.<br />
                Get time back for what you love <br />
                without breaking the bank.</h6>
            </div>
          </div>

          <div className="absolute left-[350px] top-[1150px]">
            <div className="text-textWhite flex flex-col items-center">
              <h6 className="flex">Choose your
                <h6 className="text-secondaryDark  hover:text-secondaryLight">&nbsp;WorkLink&nbsp; </h6>
                by reviews, skills, and price</h6>
              <h6 ><br />Schedule when it works for you — as early as today</h6>
              <h6><br />Chat, pay, and review all through one platform</h6>
            </div>
          </div>

        </div>

        <div className="bg-primary w-full h-[1300px] relative  max-w-[1440px] mx-auto">

          <div className="w-[1000px] h-[1000px] rounded-full overflow-hidden z-10 absolute left-[-150px] top-[50px]">
            <img src="/public/HomepagePhoto/maid.jpeg" alt="" className="h-full w-full object-cover" />
          </div>

          <div>
            <div className="w-[800px] h-[800px] bg-secondaryLight rounded-full overflow-hidden z-20 absolute left-[1200px] top-[600px] shadow-md shadow-black/40">
            </div>
          </div>

          <div>
            <div className="w-[700px] h-[700px] bg-secondaryLight/80 rounded-full overflow-hidden z-20 absolute left-[-500px] top-[550px] shadow-md shadow-black/40"></div>
          </div>

          <div>
            <div className="w-[300px] h-[300px] bg-secondaryLight/80 rounded-full overflow-hidden absolute left-[1450px] top-[-50px] shadow-md shadow-black/40"></div>
          </div>

          <div className="absolute left-[880px] top-[300px]">
            <div className="text-textWhite flex flex-col items-center">
              <h2>A go-to team at <br />
                your fingertips</h2>
              <h6><br />Build your team of local,
                background-checked
                <span className="text-secondaryDark hover:text-secondaryLight text-[30px]">&nbsp;WorkLink&nbsp;</span><br />
                to help with — and for — life.
                Whatever you need, they’ve got
                it covered.</h6>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
