import { useState } from "react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  LabelList,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Layout from "../../components/layouts/Layout";


/* =========================================================
   رنگ‌ها و تنظیمات ظاهری
========================================================= */

const COLORS = {
  page: "#f8f9fa",
  title: "#344767",
  label: "#67748e",

  green: "#82d616",
  blue: "#008ffb",
  cyan: "#00e396",
  yellow: "#feb019",
  pink: "#ff4560",

  ring: [
    "#3a416f",
    "#ff0080",
    "#17ad37",
    "#2152ff",
    "#a8b8d8",
    "#fbcf33",
  ],
};


/* =========================================================
   استایل کارت‌ها و دکمه‌ها
========================================================= */

const CARD =
  "min-w-0 rounded-[2rem] bg-white shadow-[0_20px_27px_0_rgba(0,0,0,0.045)]";

const BUTTON =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#a8b8d8] to-[#627594] px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:shadow-lg active:scale-[0.98]";


/* =========================================================
   تصاویر پزشکان
========================================================= */

const doctorPhotos = {
  ahmad:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=240&q=85",

  azam:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=240&q=85",

  hanif:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&q=85",

  affan:
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=240&q=85",
};


/* =========================================================
   داده‌های مورد استفاده در داشبورد
========================================================= */

const clinics = [
  {
    logo: "foodpanda",
    name: "Klinik Lee Healthcare",
    value: 19,
  },
  {
    logo: "atlassian",
    name: "Klinik Bandar Baru Nilai",
    value: 4,
  },
  {
    logo: "slack",
    name: "Klinik Mediviron Giant Nilai",
    value: 10,
  },
  {
    logo: "spotify",
    name: "KLINIK NILAI IMPIAN",
    value: 21,
  },
  {
    logo: "jira",
    name: "Klinik Mediviron",
    value: 2,
  },
];


const pharmacies = [
  {
    logo: "foodpanda",
    name: "ALPRO PHARMACY NILAI",
    value: 15,
  },
  {
    logo: "atlassian",
    name: "ALPRO PHARMACY PEKAN NILAI",
    value: 12,
  },
  {
    logo: "slack",
    name: "OK PHARMACY",
    value: 5,
  },
  {
    logo: "spotify",
    name: "PHARMART PHARMACY NILAI",
    value: 9,
  },
  {
    logo: "jira",
    name: "Health Lane Family Pharmacy",
    value: 14,
  },
];


const marketUsage = [
  {
    logo: "foodpanda",
    name: "Food Panda",
    value: 25,
  },
  {
    logo: "atlassian",
    name: "Grab Food",
    value: 3,
  },
  {
    logo: "slack",
    name: "Zomato",
    value: 12,
  },
  {
    logo: "spotify",
    name: "Lazada",
    value: 7,
  },
  {
    logo: "jira",
    name: "Uber Eats",
    value: 10,
  },
];


const wave = [
  3, 2, 1, 3, 6, 9, 10, 10, 12, 18, 24, 28, 22, 18, 20, 26,
  32, 36, 30, 28, 32, 38, 46,
].map((value, index) => ({
  index,
  value,
}));


const radarData = [
  {
    year: "2017",
    Malaria: 90,
    Cold: 20,
    Typhoid: 45,
    Cough: 90,
  },
  {
    year: "2018",
    Malaria: 50,
    Cold: 30,
    Typhoid: 70,
    Cough: 25,
  },
  {
    year: "2019",
    Malaria: 15,
    Cold: 35,
    Typhoid: 80,
    Cough: 80,
  },
  {
    year: "2020",
    Malaria: 20,
    Cold: 95,
    Typhoid: 5,
    Cough: 30,
  },
  {
    year: "2021",
    Malaria: 110,
    Cold: 15,
    Typhoid: 35,
    Cough: 50,
  },
  {
    year: "2022",
    Malaria: 20,
    Cold: 70,
    Typhoid: 12,
    Cough: 15,
  },
];


const appointmentData = [
  {
    m: "Jan",
    Emergency: 44,
    Examination: 13,
    Consultation: 11,
    Routine: 21,
  },
  {
    m: "Feb.",
    Emergency: 55,
    Examination: 23,
    Consultation: 17,
    Routine: 7,
  },
  {
    m: "Mar.",
    Emergency: 41,
    Examination: 20,
    Consultation: 15,
    Routine: 25,
  },
  {
    m: "Apr.",
    Emergency: 67,
    Examination: 8,
    Consultation: 15,
    Routine: 13,
  },
  {
    m: "May",
    Emergency: 22,
    Examination: 13,
    Consultation: 21,
    Routine: 22,
  },
  {
    m: "Jun",
    Emergency: 43,
    Examination: 27,
    Consultation: 14,
    Routine: 8,
  },
];


const appointments = [
  {
    name: "Dr. Mustafa",
    type: "Emergency",
    date: "Tuesday, April 5",
    photo: doctorPhotos.ahmad,
  },
  {
    name: "Dr. Khirullah",
    type: "Consultation",
    date: "Friday, November 2",
    photo: doctorPhotos.azam,
  },
  {
    name: "Dr. Bilal",
    type: "Examination",
    date: "Monday, March 9",
    photo: doctorPhotos.ahmad,
  },
];


const doctors = [
  {
    name: "Dr Ahmad",
    speciality: "Neurologist",
    fee: "RM 100",
    discount: "10%",
    photo: doctorPhotos.ahmad,
  },
  {
    name: "Dr Azam Shah",
    speciality: "Orthopedic MD",
    fee: "RM 130",
    discount: "20%",
    photo: doctorPhotos.azam,
  },
  {
    name: "Dr Hanif",
    speciality: "Primary Care MD",
    fee: "RM 200",
    discount: "20%",
    photo: doctorPhotos.hanif,
  },
  {
    name: "Dr Affan",
    speciality: "Cardiologist",
    fee: "RM 400",
    discount: "40%",
    photo: doctorPhotos.affan,
  },
];


/* =========================================================
   کامپوننت‌های کوچک و مشترک
========================================================= */

function InfoButton() {
  return (
    <button
      type="button"
      aria-label="Information"
      title="Information"
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        border-2
        border-[#8392ab]
        text-lg
        font-bold
        text-[#8392ab]
        transition
        hover:bg-slate-50
      "
    >
      !
    </button>
  );
}


function MenuIcon() {
  return (
    <button
      type="button"
      aria-label="Chart menu"
      title="Chart menu"
      className="shrink-0 text-[#67748e] transition hover:text-[#344767]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    </button>
  );
}


function Kebab() {
  return (
    <button
      type="button"
      aria-label="More options"
      title="More options"
      className="
        flex
        shrink-0
        flex-col
        gap-[3px]
        rounded-lg
        px-2
        py-2
        transition
        hover:bg-slate-50
      "
    >
      {[0, 1, 2].map((item) => (
        <span
          key={item}
          className="h-1.5 w-1.5 rounded-full bg-[#8794a8]"
        />
      ))}
    </button>
  );
}


/* =========================================================
   لوگوهای بخش تبلیغات
========================================================= */

function Logo({ type }) {
  if (type === "foodpanda") {
    return (
      <span
        className="
          flex
          h-7
          w-[3rem]
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#d70f64]
          px-1
          text-center
          text-[8px]
          font-bold
          text-white
        "
      >
        foodpanda
      </span>
    );
  }


  if (type === "atlassian") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
        <path
          d="M9 14l7 15H3c-1 0-1.5-1-1-2z"
          fill="#2684ff"
        />

        <path
          d="M15 3c-2 3-2 7 0 11l6 13c.4.8 1 1 1.7 1H29z"
          fill="#0052cc"
        />
      </svg>
    );
  }


  if (type === "slack") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
        <rect
          x="13"
          y="3"
          width="5"
          height="11"
          rx="2.5"
          fill="#36c5f0"
        />

        <rect
          x="18"
          y="13"
          width="11"
          height="5"
          rx="2.5"
          fill="#ecb22e"
        />

        <rect
          x="14"
          y="18"
          width="5"
          height="11"
          rx="2.5"
          fill="#e01e5a"
        />

        <rect
          x="3"
          y="14"
          width="11"
          height="5"
          rx="2.5"
          fill="#2eb67d"
        />
      </svg>
    );
  }


  if (type === "spotify") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="#1ed760"
        />

        <path
          d="M8 12c6-2 12-1.5 17 1.5M9 16.5c5-1.5 10-1 14 1.5M10 21c4-1 8-.8 11 1"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }


  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
      <path
        d="M16 2l14 14-14 14L2 16z"
        fill="#2684ff"
      />

      <path
        d="M16 11l5 5-5 5-5-5z"
        fill="#fff"
      />
    </svg>
  );
}


/* =========================================================
   نمودار حلقه‌ای
========================================================= */

function Donut({ data, size = 210 }) {
  const chartData = data.map((item, index) => ({
    ...item,
    fill: COLORS.ring[index % COLORS.ring.length],
  }));

  return (
    <div
      className="mx-auto max-w-full shrink-0"
      style={{
        width: size,
        height: size,
      }}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius="79%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
            stroke="#ffffff"
            strokeWidth={1}
            isAnimationActive={false}
          >
            {chartData.map((item) => (
              <Cell
                key={item.name}
                fill={item.fill}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => [
              `${value}%`,
              "Usage",
            ]}
            contentStyle={{
              borderRadius: 12,
              border: "none",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.1)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}


/* =========================================================
   کارت‌های تبلیغات و بازار
========================================================= */

function DonutCard({
  title,
  items,
  button,
}) {
  return (
    <section
      className={`
        ${CARD}
        flex
        h-auto
        min-h-[300px]
        w-full
        max-w-full
        min-w-0
        flex-col
        p-4
      `}
    >

      {/* TITLE */}
      <div className="flex items-center justify-between gap-4">

        <h2
          className="
            min-w-0
            text-[18px]
            font-semibold
            leading-6
            text-[#344767]
          "
        >
          {title}
        </h2>

        <InfoButton />

      </div>


      {/* BODY */}
      <div
        className="
          mt-3
          grid
          min-w-0
          flex-1
          grid-cols-[90px_minmax(0,1fr)]
          sm:grid-cols-[125px_minmax(0,1fr)]
          items-center
          gap-4
        "
      >

        {/* DONUT */}
        <div
          className="
            flex
            min-w-0
            flex-col
            items-center
            justify-center
            gap-2
          "
        >

          <Donut
            data={items}
            size={78}
          />

          <button
            type="button"
            className={`${BUTTON} w-[120px] px-3 py-1 text-[10px]`}
          >
            {button}
          </button>

        </div>


        {/* LIST */}
        <ul className="min-w-0">

          {items.map((item, index) => (
            <li
              key={item.name}
              className={`
                flex
                min-w-0
                flex-wrap
                items-center
                gap-2
                sm:flex-nowrap
                py-1
                ${
                  index !== items.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }
              `}
            >

              <Logo type={item.logo} />

              <span
                className="
                  min-w-0
                  flex-1
                  break-words
                  [overflow-wrap:anywhere]
                  text-[12px]
                  font-semibold
                  leading-4
                  text-[#344767]
                "
              >
                {item.name}
              </span>

              <span
                className="
                  shrink-0
                  text-[14px]
                  text-[#67748e]
                "
              >
                {item.value}%
              </span>

            </li>
          ))}

        </ul>

      </div>

    </section>
  );
}


/* =========================================================
   کارت‌های شاخص سلامت و علائم
========================================================= */

function SparkCard({
  title,
  value,
  delta,
}) {
  const gradientId =
    `gradient-${title.replace(/\W/g, "")}`;

  return (
    <section
      className={`
        ${CARD}
        flex
min-h-[160px] min-w-0
        flex-col
        overflow-hidden
        overflow-hidden
      `}
    >

      <div className="px-3 pt-3">

        <p
          className="
            text-[16px]
            font-medium
            text-[#67748e]
          "
        >
          {title}
        </p>


        <p
          className="
            mt-1
            text-[24px]
            font-bold
            text-[#344767]
          "
        >
          {value}{" "}

          <span
            className="
              text-[14px]
              font-bold
              text-[#82d616]
            "
          >
            {delta}
          </span>

        </p>

      </div>


<div className="mt-auto h-[90px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={wave}
            margin={{
              top: 8,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id={gradientId}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#cbd0dd"
                  stopOpacity={0.3}
                />

                <stop
                  offset="100%"
                  stopColor="#cbd0dd"
                  stopOpacity={0.04}
                />

              </linearGradient>

            </defs>


            <Area
              type="monotone"
              dataKey="value"
              stroke="#344767"
              strokeWidth={3}
              fill={`url(#${gradientId})`}
              isAnimationActive={false}
              activeDot={false}
              dot={false}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}


/* =========================================================
   کارت نمودار
========================================================= */

function ChartCard({
  title,
  children,
}) {
  return (
    <section
      className={`
        ${CARD}
min-h-[320px] min-w-0
        overflow-hidden
        p-4
      `}
    >

      <div
        className="
          mb-2
          flex
          items-center
          justify-between
          gap-3
        "
      >

        <h2
          className="
            text-[23px]
            font-bold
            text-[#263238]
          "
        >
          {title}
        </h2>

        <MenuIcon />

      </div>


      {children}

    </section>
  );
}


/* =========================================================
   فهرست نوبت‌ها
========================================================= */

function AppointmentList({
  title,
  withTabs = false,
}) {
  const [tab, setTab] = useState("Days");


  const displayAppointments =
    tab === "Months"
      ? [...appointments].reverse()
      : tab === "Years"
        ? [
            appointments[2],
            appointments[0],
            appointments[1],
          ]
        : appointments;


  return (
    <section
      className={`
        ${CARD}
        flex
        min-h-0
        min-w-0
        flex-col
        p-4
      `}
    >

      <h2
        className="
          text-[18px]
          font-semibold
          text-[#344767]
        "
      >
        {title}
      </h2>


      {withTabs && (
        <div
          className="
            mt-2
            flex
            shrink-0
            rounded-2xl
            border-2
            border-[#b3d8e3]
            bg-[#a9d6e5]
            p-1
          "
        >

          {[
            "Days",
            "Months",
            "Years",
          ].map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              aria-pressed={tab === item}
              className={`
                flex-1
                rounded-xl
                px-3
                py-2
                text-[14px]
                transition
                ${
                  tab === item
                    ? "bg-white text-[#344767] shadow-sm"
                    : "text-[#344767]/90 hover:bg-white/30"
                }
              `}
            >
              {item}
            </button>

          ))}

        </div>
      )}


      <ul
        className="
          mt-3
          flex
          flex-1
          flex-col
          justify-around
          gap-2
        "
      >

        {displayAppointments.map(
          (appointment) => (

            <li
              key={`${appointment.name}-${appointment.type}`}
              className="
                flex
                min-w-0
                items-center
                gap-2
              "
            >

              <img
                src={appointment.photo}
                alt={appointment.name}
                loading="lazy"
                className="
                  h-[52px]
                  w-[52px]
                  shrink-0
                  rounded-full
                  bg-[#eceff1]
                  object-cover
                  shadow-md
                "
              />


              <div className="min-w-0 flex-1">

                <p
                  className="
                    break-words
                    text-[13px]
                    font-bold
                    text-[#344767]
                  "
                >
                  {appointment.name}
                </p>


                <p
                  className="
                    mt-1
                    break-words
                    text-[12px]
                    text-[#67748e]
                  "
                >
                  {appointment.type}
                </p>

              </div>


              <p
                className="
                  max-w-[7rem]
                  shrink-0
                  text-right
                  text-[12px]
                  leading-4
                  text-[#344767]
                "
              >
                {appointment.date}
              </p>


              <Kebab />

            </li>

          )
        )}

      </ul>

    </section>
  );
}


/* =========================================================
   نقشه
========================================================= */

function MapCard() {
  const [type, setType] =
    useState("roadmap");

  const [full, setFull] =
    useState(false);


  const mapSrc =
    type === "satellite"
      ? "https://maps.google.com/maps?q=Kuala%20Lumpur&t=k&z=10&output=embed"
      : "https://maps.google.com/maps?q=Kuala%20Lumpur&z=10&output=embed";


  return (
    <section
      className={`
        ${CARD}
        relative
        h-[520px]
        min-w-0
        flex
        flex-col
        overflow-hidden
        p-4
      `}
    >

      <iframe
        title="Map of Kuala Lumpur and surrounding area"
        key={type}
        className="
          absolute
          inset-0
          h-full
          w-full
          border-0
        "
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />


      {/* MAP / SATELLITE */}
      <div
        className="
          absolute
          left-4
          top-4
          flex
          overflow-hidden
          rounded-md
          bg-white
          shadow-md
        "
      >

        {[
          ["roadmap", "Map"],
          ["satellite", "Satellite"],
        ].map(([value, label]) => (

          <button
            key={value}
            type="button"
            onClick={() => setType(value)}
            aria-pressed={type === value}
            className={`
              px-6
              py-2
              text-[14px]
              ${
                type === value
                  ? "font-semibold text-black"
                  : "text-[#565656] hover:bg-slate-50"
              }
            `}
          >
            {label}
          </button>

        ))}

      </div>


      {/* FULL SCREEN */}
      <button
        type="button"
        aria-label={
          full
            ? "Exit expanded map"
            : "Expand map"
        }
        title={
          full
            ? "Exit expanded map"
            : "Expand map"
        }
        onClick={() => setFull(!full)}
        className="
          absolute
          right-4
          top-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-md
          bg-white
          text-xl
          text-[#666]
          shadow-md
          transition
          hover:bg-slate-50
        "
      >
        {full ? "×" : "⛶"}
      </button>


      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          left-3
          rounded
          bg-white/90
          px-2
          py-1
          text-xs
          text-slate-600
        "
      >
        Kuala Lumpur, Malaysia
      </div>

    </section>
  );
}


/* =========================================================
   بخش پزشکان
========================================================= */

function Field({
  label,
  value,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "text-center"
      : "text-left";


  return (
    <div
      className={`min-w-0 ${alignment}`}
    >

      <p
        className="
          text-[14px]
          font-medium
          text-[#67748e]
        "
      >
        {label}
      </p>


      <p
        className="
          break-words
          text-[15px]
          font-medium
          leading-snug
          text-[#344767]
        "
      >
        {value}
      </p>

    </div>
  );
}


function DoctorsCard() {
  return (
    <section
      className={`
        ${CARD}
        min-w-0
        overflow-hidden
      `}
    >

      <h2
        className="
          px-5
          py-4
          text-left
          text-[18px]
          font-semibold
          text-[#344767]
        "
      >
        Doctors
      </h2>


      <ul>

        {doctors.map((doctor) => (

          <li
            key={doctor.name}
            className="
              grid
              w-full
              min-w-0
              grid-cols-1
              items-center
              gap-3
              sm:grid-cols-[70px_minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,0.55fr)]
              border-t
              border-slate-100
              px-5
              py-3
            "
          >

            <img
              src={doctor.photo}
              alt={doctor.name}
              loading="lazy"
              className="
                h-10
                w-10
                rounded-md
                bg-slate-100
                object-cover
              "
            />


            <Field
              label="Name:"
              value={doctor.name}
            />


            <Field
              label="Specility:"
              value={doctor.speciality}
              align="center"
            />


            <Field
              label="Consultation_fee:"
              value={doctor.fee}
              align="center"
            />


            <Field
              label="Discount:"
              value={doctor.discount}
              align="center"
            />

          </li>

        ))}

      </ul>

    </section>
  );
}


/* =========================================================
   صفحهٔ داشبورد
========================================================= */

export default function Dashboard() {

  return (

    <Layout>

      <main
        className="
          box-border
          min-h-screen
          w-full
          min-w-0
          max-w-full
          overflow-x-clip
          bg-[#f8f9fa]
          px-0
          py-0
          font-sans
        "
        style={{
          fontFamily:
            "Roboto, system-ui, sans-serif",
        }}
      >

        {/* =================================================
            بخش خوشامدگویی
        ================================================= */}

        <h1
          className="
            mb-6
            px-1
text-2xl
            font-bold
            sm:text-[30px]
            leading-tight
            text-[#344767]
          "
        >
          Welcome To MyPatientHUB!
        </h1>


        <div className="w-full min-w-0 max-w-full space-y-4">


          {/* =================================================
              تبلیغات کلینیک‌ها و داروخانه‌ها
          ================================================= */}

          <div
  className="
    grid
    w-full
    min-w-0
    max-w-full
    grid-cols-1
    gap-4
    sm:grid-cols-2
  "
>

            <DonutCard
              title="Promotion by Clinics"
              items={clinics}
              button="More details"
            />


            <DonutCard
              title="Promotion by Pharmacies"
              items={pharmacies}
              button="More details"
            />

          </div>


          {/* =================================================
              بازار هوشمند و سلامت
          ================================================= */}

         <div
  className="
    grid
    w-full
    min-w-0
    max-w-full
    grid-cols-1
    gap-4
    lg:grid-cols-[1.25fr_0.85fr]
  "
>

            <DonutCard
              title="Smart Market Usage by app"
              items={marketUsage}
              button="See all referrals"
            />


            <div
             className="
  grid
  w-full
  min-w-0
  max-w-full
  grid-cols-1
  gap-4
  sm:grid-cols-2
  lg:grid-cols-1
"
            >

              <SparkCard
                title="Health Index"
                value="70%"
                delta="+3%"
              />


              <SparkCard
                title="Symptoms"
                value="70%"
                delta="+3%"
              />

            </div>

          </div>


          {/* =================================================
              پیگیری سلامت مزمن و نوبت‌ها
          ================================================= */}
<div
  className="
    grid
    w-full
    min-w-0
    max-w-full
    grid-cols-1
    gap-4
    lg:grid-cols-2
  "
>

            <ChartCard
              title="Chronic wellness Tracker"
            >

              <div
                className="
                  h-[250px]
                  w-full
                  min-w-0
                "
              >

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <RadarChart
                    data={radarData}
                    outerRadius="60%"
                    margin={{
                      top: 10,
                      right: 15,
                      bottom: 8,
                      left: 15,
                    }}
                  >

                    <PolarGrid
                      stroke="#e0e0e0"
                    />


                    <PolarAngleAxis
                      dataKey="year"
                      tick={{
                        fill: "#9e9e9e",
                        fontSize: 14,
                      }}
                    />


                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 120]}
                      ticks={[
                        0,
                        30,
                        60,
                        90,
                        120,
                      ]}
                      tick={{
                        fill: "#333",
                        fontSize: 13,
                      }}
                      axisLine={false}
                    />


                    <Radar
                      name="Malaria"
                      dataKey="Malaria"
                      stroke="#008ffb"
                      strokeWidth={2.5}
                      fill="#008ffb"
                      fillOpacity={0.15}
                      isAnimationActive={false}
                    />


                    <Radar
                      name="Cold"
                      dataKey="Cold"
                      stroke="#00e396"
                      strokeWidth={2.5}
                      fill="#00e396"
                      fillOpacity={0.15}
                      isAnimationActive={false}
                    />


                    <Radar
                      name="Typhoid"
                      dataKey="Typhoid"
                      stroke="#feb019"
                      strokeWidth={2.5}
                      fill="#feb019"
                      fillOpacity={0.15}
                      isAnimationActive={false}
                    />


                    <Radar
                      name="Cough"
                      dataKey="Cough"
                      stroke="#ff4560"
                      strokeWidth={2.5}
                      fill="#ff4560"
                      fillOpacity={0.15}
                      isAnimationActive={false}
                    />


                    <Legend
                      iconType="circle"
                      iconSize={11}
                      wrapperStyle={{
                        fontSize: 14,
                        paddingTop: 10,
                      }}
                    />


                    <Tooltip />

                  </RadarChart>

                </ResponsiveContainer>

              </div>

            </ChartCard>


            <ChartCard title="Appointment">

              <div
                className="
                  h-[250px]
                  w-full
                  min-w-0
                "
              >

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <BarChart
                    data={appointmentData}
                    margin={{
                      top: 15,
                      right: 8,
                      left: -15,
                      bottom: 5,
                    }}
                  >

                    <CartesianGrid
                      vertical={false}
                      stroke="#e0e0e0"
                    />


                    <XAxis
                      dataKey="m"
                      tick={{
                        fill: "#555",
                        fontSize: 14,
                      }}
                      tickLine={{
                        stroke: "#d5d5d5",
                      }}
                      axisLine={{
                        stroke: "#bdbdbd",
                      }}
                    />


                    <YAxis
                      domain={[0, 120]}
                      ticks={[
                        0,
                        30,
                        60,
                        90,
                        120,
                      ]}
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fill: "#555",
                        fontSize: 14,
                      }}
                    />


                    <Tooltip
                      contentStyle={{
                        border: "none",
                        borderRadius: 12,
                        boxShadow:
                          "0 8px 24px rgba(0,0,0,0.1)",
                      }}
                    />


                    <Bar
                      dataKey="Emergency"
                      name="Emergency"
                      stackId="a"
                      fill="#008ffb"
                      isAnimationActive={false}
                    >
                      <LabelList
                        dataKey="Emergency"
                        position="center"
                        fill="#ffffff"
                        fontSize={14}
                        fontWeight={700}
                      />
                    </Bar>


                    <Bar
                      dataKey="Examination"
                      name="Examination"
                      stackId="a"
                      fill="#00e396"
                      isAnimationActive={false}
                    >
                      <LabelList
                        dataKey="Examination"
                        position="center"
                        fill="#ffffff"
                        fontSize={14}
                        fontWeight={700}
                      />
                    </Bar>


                    <Bar
                      dataKey="Consultation"
                      name="Consultation"
                      stackId="a"
                      fill="#feb019"
                      isAnimationActive={false}
                    >
                      <LabelList
                        dataKey="Consultation"
                        position="center"
                        fill="#ffffff"
                        fontSize={14}
                        fontWeight={700}
                      />
                    </Bar>


                    <Bar
                      dataKey="Routine"
                      name="Routine Checkup"
                      stackId="a"
                      fill="#ff4560"
                      radius={[
                        8,
                        8,
                        0,
                        0,
                      ]}
                      isAnimationActive={false}
                    >
                      <LabelList
                        dataKey="Routine"
                        position="center"
                        fill="#ffffff"
                        fontSize={14}
                        fontWeight={700}
                      />
                    </Bar>


                    <Legend
                      iconType="square"
                      iconSize={11}
                      wrapperStyle={{
                        fontSize: 14,
                        paddingTop: 10,
                      }}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </ChartCard>

          </div>


          {/* =================================================
              نقشه و نوبت‌ها
          ================================================= */}

          <div
            className="
              grid
              min-w-0
             grid-cols-1
lg:grid-cols-[1fr_0.92fr]
              items-stretch
              gap-4
            "
          >

            <MapCard />


            <div
              className="
                grid
                min-w-0
                grid-rows-2
                gap-4
              "
            >

              <AppointmentList
                title="Previous Appointments"
              />


              <AppointmentList
                title="Up Coming Appointments"
                withTabs
              />

            </div>

          </div>


          {/* =================================================
              بخش پزشکان
          ================================================= */}

          <DoctorsCard />

        </div>

      </main>

    </Layout>
  );
}
