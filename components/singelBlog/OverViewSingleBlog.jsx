import Image from "next/image";
import React from "react";
import blogimage from "../../public/assets/images/singleBlog.png";
import bog1 from "../../public/assets/images/bog1.png";
import bog2 from "../../public/assets/images/blog2.png";
import ShareBlog from "./ShareBlog";
function OverViewSingleBlog() {
  return (
    <div className="md:col-span-2">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        <div className="relative w-full h-[200px] md:h-[400px] md:col-span-2 ">
          <Image
            src={blogimage}
            fill
            loading="lazy"
            alt="single blog imag"
            className="rounded-md shadow-md"
          />
        </div>
        {/* title */}
        <p className=" text-xl font-medium font-sans capitalize text-mainColor md:col-span-2">
          What makes a good brand book?
        </p>
        {/* desc */}
        <p className="text-[15px] text-[#051036]  capitalize leading-7 md:col-span-2">
          Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
          phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus
          gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis
          enim ut tellus elementum sagittis vitae et leo. Semper risus in
          hendrerit gravida rutrum quisque non. At urna condimentum mattis
          pellentesque id nibh tortor. A erat nam at lectus urna duis convallis
          convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae
          congue eu consequat ac felis.
        </p>
        <ul className="list-disc md:col-span-2">
          <li className="text-[15px] text-[#051036]  capitalize leading-7">
            Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
          </li>
          <li className="text-[15px] text-[#051036]  capitalize leading-7">
            At urna condimentum mattis pellentesque id nibh. Laoreet non
            curabitur
          </li>
          <li className="text-[15px] text-[#051036]  capitalize leading-7">
            Magna etiam tempor orci eu lobortis elementum.
          </li>
          <li className="text-[15px] text-[#051036]  capitalize leading-7">
            Bibendum est ultricies integer quis. Semper eget duis at tellus.
          </li>
        </ul>
        <p className="text-[15px] text-[#051036]  capitalize leading-7 md:col-span-2">
          Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
          tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
          lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
          rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
          pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
          lobortis elementum mus velit tincidunt elementum. Ridiculus eu
          convallis eu mattis iaculis et, in dolor. Sem libero, tortor
          suspendisse et, purus euismod posuere sit. Risus dui ut viverra
          venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi.
          Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus
          rhoncus nec adipiscing tristique sed facilisis velit.
        </p>
        <p className="text-[15px] text-[#051036]  capitalize leading-7 md:col-span-2">
          Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus
          dictum sit euismod cum id. Dictum integer ultricies arcu fermentum
          fermentum sem consectetur. Consectetur eleifend aenean eu neque
          euismod amet parturient turpis vitae. Faucibus ipsum felis et duis
          fames.
        </p>
        <div className="col-span-1 ">
          <div className="  flex flex-col space-y-2">
            <Image
              src={bog1}
              width={400}
              height={300}
              loading="lazy"
              alt=""
              className=" rounded-lg shadow-md"
            />
            <p className="text-[15px] text-[#051036]  capitalize leading-7">
              Donec purus posuere nullam lacus aliquam.
            </p>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="  flex flex-col space-y-2">
            <Image
              src={bog2}
              width={400}
              height={300}
              loading="lazy"
              alt=""
              className=" rounded-lg shadow-md"
            />
            <p className="text-[15px] text-[#051036]  capitalize leading-7">
              Donec purus posuere nullam lacus aliquam.
            </p>
          </div>
        </div>
        <p className="text-[15px] text-[#051036]  capitalize leading-7 md:col-span-2">
          Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
          tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
          lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
          rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
          pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
          lobortis elementum mus velit tincidunt elementum. Ridiculus eu
          convallis eu mattis iaculis et, in dolor. Sem libero, tortor
          suspendisse et, purus euismod posuere sit. Risus dui ut viverra
          venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi.
          Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus
          rhoncus nec adipiscing tristique sed facilisis velit.
        </p>
        <p className="text-[15px] text-[#051036]  capitalize leading-7 md:col-span-2">
          Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
          tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
          lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
          rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
          pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
          lobortis elementum mus velit tincidunt elementum. Ridiculus eu
          convallis eu mattis iaculis et, in dolor. Sem libero, tortor
          suspendisse et, purus euismod posuere sit. Risus dui ut viverra
          venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi.
          Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus
          rhoncus nec adipiscing tristique sed facilisis velit.
        </p>
        <ShareBlog />
      </div>
    </div>
  );
}

export default OverViewSingleBlog;
