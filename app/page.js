import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-[89.8vh] flex-col p-10 flex items-center">
      <div className="font-bold flex items-center justify-center container gap-4 text-6xl pt-8">Mujhe Funds Do<img src="Logo.png" width={92} height={92} alt="" /></div>
      <p className="w-7/12 text-center pt-5 pb-2">It is a digital platform designed for the transparent collection, management, and distribution of funds. The system enables individuals and organizations to contribute donations securely, while ensuring that collected funds are allocated efficiently to verified beneficiaries.</p>
      <div className="gap-x-2 flex items-center justify-center">
        <button type="button" className="text-white cursor-pointer mt-4 bg-[#3f465f] hover:bg-[#4c5572] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 box-border border border-transparent font-medium leading-5 rounded-4xl text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
          <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clipRule="evenodd" /></svg>
          Sign in with Google
        </button>
        <button type="button" className="mt-4 cursor-pointer inline-flex items-center  text-white bg-brand justify-center hover:bg-[#3f465f] rounded-full box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
          Read More
          <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </button>
      </div>
      <div className="bg-white h-0.5 opacity-15 mt-10 container"></div>
      <div className="flex justify-around container mx-auto items-center mt-12">
        <div className="flex flex-col items-center justify-center w-3/12 text-center">
          <div className="bg-[#4c5572] w-24 h-24 rounded-full z-20 opacity-100 flex items-center justify-center">
            <img src="man.gif" width={62} alt="" />
          </div>
          <p className="pt-4">Empower fans to support creators through transparent funding.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/12 text-center">
          <div className="bg-[#4c5572] w-24 h-24 rounded-full z-20 opacity-100 flex items-center justify-center">
            <img src="coin.gif" width={62} alt="" />
          </div>
          <p className="pt-4">Empower fans to support creators through transparent funding.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/12 text-center">
          <div className="bg-[#4c5572] w-24 h-24 rounded-full z-20 opacity-100 flex items-center justify-center">
            <img src="group.gif" width={62} alt="" />
          </div>
          <p className="pt-4">Empower fans to support creators through transparent funding.</p>
        </div>
      </div>
      <div className="bg-white h-0.5 opacity-15 mt-14 container"></div>
      <div className="flex justify-center gap-8 mt-12 mb-5 container">
        <div className="rounded-xl overflow-hidden w-[560px] h-[315px]">
          <iframe
            src="https://www.youtube.com/embed/gcevHkNGrWQ?si=106AoC-blP-8e2mt"
            title="Fundraising Fundamentals By Geoff Ralston"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="w-xl gap-y-4 pt-4 flex flex-col">
          <div className="font-bold text-2xl">Fundraising Fundamentals By Geoff Ralston</div>YC Partner Geoff Ralston gives an introduction to the key concepts to keep in mind once you enter a fundraising process.YC Partner Geoff Ralston provides a high-level overview of fundraising. This lecture covers key concepts, including crafting a compelling startup narrative and identifying suitable investors. Explore various fundraising methods and potential pitfalls to navigate the process successfully.</div>
      </div>
    </div>
  );
}
