import React from "react";

const GridComponent: React.FC = () => {
  return (
   <section id="ceo" className="bg-white min-h-screen w-screen flex flex-col items-center justify-center">
    <h1 className="heading mt-10 md:mt-20 text-black">
        CEO & <span className="text-black">Founder</span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-8 gap-6 max-w-7xl p-5 md:p-10 rounded-lg my-12 bg-white">
        <div className="border rounded-lg h-[35rem] md:h-[30rem] col-span-1 md:col-span-4 row-span-3">
            <img src="/ceo_of_eensell.png" alt="Covering Image" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="rounded-md md:min-h-0 col-span-1 md:col-span-4 row-span-2 md:row-span-1">
            <div className="text-black p-10 md:p-6">
                <h1 className="mb-2 md:mb-4 text-xl md:text-xl">CEO &amp; Founder of <b>Eensell</b></h1>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">SAAD KAABOUCHE</h2>
                <h3 className="text-lg md:text-md mb-2 md:mb-4 italic">
                    “We believe in the power of partnership. <b>You win, We win</b>”
                </h3>
                <p className="text-lg md:text-xl">
                    With a deep understanding of the ever-evolving digital landscape, I'm passionate about guiding businesses toward achieving their online potential. At Eensell, we foster a culture of loyalty and collaboration, becoming true partners in your success journey. Our team combines youthful energy with seasoned expertise, ensuring we deliver innovative strategies with unwavering confidence. Let Eensell be your trusted digital partner, propelling your brand to the forefront of the competitive online market.
                </p>
            </div>
        </div>
    </div>
</section>

  );
};

export default GridComponent;
