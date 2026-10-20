import React from "react";
function FindClinic() { return ( <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#4b4b4b]">
  {/* TOP */}
  <section
    className="overflow-hidden rounded-b-[20px] text-white"
    style={{
      background:
        "radial-gradient(circle at 20% 20%, rgba(255,0,160,.65), transparent 35%), radial-gradient(circle at 80% 35%, rgba(110,30,255,.75), transparent 40%), radial-gradient(circle at 45% 85%, rgba(255,0,190,.55), transparent 38%), linear-gradient(120deg, #6d087d 0%, #c9009d 42%, #3910a4 100%)",
    }}
  >

    {/* NAVBAR */}
    <div className="flex items-center justify-between px-8 pt-6">

      <div className="flex items-start gap-5">

        <div>
          <div className="mb-2 text-sm font-semibold">
            🏠 / Findhospital
          </div>

          <div className="text-[18px] font-bold">
            Findhospital
          </div>
        </div>

        <div className="mt-2 text-[27px]">
          ☰
        </div>

      </div>


      <div className="flex items-center gap-4">

        <div className="hidden h-[46px] w-[240px] items-center rounded-xl bg-white px-4 text-gray-400 md:flex">

          <span className="mr-3 text-[24px]">
            🔍
          </span>

          <input
            type="text"
            placeholder="Type here..."
            className="w-full bg-transparent text-gray-600 outline-none"
          />

        </div>

        <div className="text-sm font-semibold">
          ● Log out
        </div>

        <div>⚙</div>

        <div>🔔</div>

      </div>
    </div>


    {/* HERO */}
    <div className="px-5 pb-[75px] pt-[48px] text-center">

      <h1 className="mb-4 text-[40px] font-bold">
        Find a Clinic
      </h1>

      <p className="mb-8 text-[18px] font-semibold">
        Search Clinics and schedule an appointment with doctors through Clinic
      </p>


      {/* SEARCH */}
      <div className="mx-auto flex max-w-[850px] flex-col justify-center gap-3 md:flex-row">

        <input
          type="text"
          placeholder="Search"
          className="h-[46px] w-full rounded-[10px] bg-white px-4 text-gray-700 outline-none md:w-[250px]"
        />

        <input
          type="text"
          placeholder="Zip Code or Neighborhood"
          className="h-[46px] w-full rounded-[10px] bg-white px-4 text-gray-700 outline-none md:w-[250px]"
        />

        <button className="h-[46px] rounded-[10px] bg-[#10b5d8] px-6 font-bold text-[#12647a]">
          CURRENT
        </button>

        <button className="h-[46px] rounded-[10px] bg-[#10b5d8] px-7 font-bold text-[#12647a]">
          SEARCH
        </button>

      </div>

    </div>
  </section>


  {/* MAP / LIST */}
  <div className="mt-3 flex gap-3 px-5">

    <button className="flex h-[48px] w-[235px] items-center justify-center gap-2 rounded-[10px] bg-white text-[17px] shadow-sm">

      <span className="text-[22px] text-[#a20a8f]">
        ◉
      </span>

      Map

    </button>


    <button className="flex h-[48px] w-[130px] items-center justify-center gap-2 text-[17px]">

      <span className="text-[23px] text-[#a20a8f]">
        ☷
      </span>

      List

    </button>

  </div>


  {/* MAIN */}
  <div className="grid grid-cols-1 gap-5 px-5 pb-8 pt-4 lg:grid-cols-[285px_1fr]">


    {/* LEFT FILTER */}
    <aside className="rounded-[14px] bg-white px-5 pb-7 pt-5 shadow-sm">

      <input
        type="text"
        placeholder="Primary Care"
        className="mb-4 h-[48px] w-full rounded-[10px] border border-[#dedede] px-4 outline-none"
      />

      <input
        type="text"
        placeholder="Zip code or Neighborhood"
        className="mb-8 h-[48px] w-full rounded-[10px] border border-[#dedede] px-4 outline-none"
      />


      <h2 className="mb-4 text-[19px]">
        Filter By
      </h2>


      {/* SPECIALTY */}
      <select className="mb-3 h-[48px] w-full rounded-[10px] border border-[#dedede] bg-white px-4 outline-none">
        <option>Specialty</option>
        <option>Primary Care</option>
        <option>Cardiology</option>
        <option>Dentist</option>
      </select>


      {/* GENDER */}
      <select className="mb-3 h-[48px] w-full rounded-[10px] border border-[#dedede] bg-white px-4 outline-none">
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>


      {/* CONDITION */}
      <select className="mb-3 h-[48px] w-full rounded-[10px] border border-[#dedede] bg-white px-4 outline-none">
        <option>Condition</option>
        <option>General Health</option>
        <option>Diabetes</option>
      </select>


      {/* LANGUAGES */}
      <select className="mb-7 h-[48px] w-full rounded-[10px] border border-[#dedede] bg-white px-4 outline-none">
        <option>Languages</option>
        <option>English</option>
        <option>Dari</option>
        <option>Pashto</option>
      </select>


      {/* PROVIDERS */}
      <h2 className="mb-4 text-[18px]">
        Providers Who Treat
      </h2>

      <div className="mb-7 space-y-3">

        <label className="flex items-center gap-3 font-semibold">
          <input type="checkbox" className="h-5 w-5" />
          All Ages
        </label>

        <label className="flex items-center gap-3 font-semibold">
          <input type="checkbox" className="h-5 w-5" />
          Children
        </label>

        <label className="flex items-center gap-3 font-semibold">
          <input type="checkbox" className="h-5 w-5" />
          Adults
        </label>

      </div>


      {/* VIEW ONLY */}
      <h2 className="mb-4 text-[18px]">
        View Only
      </h2>

      <div className="space-y-3">

        <label className="flex items-center gap-3 font-semibold">
          <input type="checkbox" className="h-5 w-5" />
          Online Scheduling
        </label>

        <label className="flex items-center gap-3 font-semibold">
          <input type="checkbox" className="h-5 w-5" />
          Primary Care
        </label>

      </div>

    </aside>


    {/* MAP */}
    <main className="relative h-[760px] overflow-hidden rounded-[5px] bg-white">

      {/* MAP / SATELLITE */}
      <div className="absolute left-4 top-4 z-10 flex overflow-hidden rounded bg-white shadow-md">

        <button className="bg-white px-7 py-3 font-semibold">
          Map
        </button>

        <button className="border-l px-7 py-3">
          Satellite
        </button>

      </div>


      {/* REAL MAP */}
      <iframe
        title="Clinic Map"
        src="https://www.google.com/maps?q=Kuala+Lumpur+Malaysia&z=11&output=embed"
        className="h-full w-full border-0"
      />

    </main>

  </div>

</div>
); }
export default FindClinic;