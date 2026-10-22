import React, { useState } from 'react';
import Layout from "../../components/layouts/Layout2"; // امپورت پوسته اصلی و بومی خودتان

// امپورت ۶ صفحه اصلی چرخه نوبت‌دهی (همگی در یک پوشه کنار هم هستند)
import SpecialServices from './FindDoctor'; // مرحله اول
import DoctorResult from './DoctorResult'; // مرحله دوم
import DoctorProfileView from './DoctorProfileView'; // مرحله سوم
import AppointmentDetails from './AppointmentDetails'; // مرحله چهارم
import PatientInformation from './PatientInformation'; // مرحله پنجم
import AppointmentSuccess from './AppointmentSuccess'; // مرحله ششم

const Patients = () => {
  // activeStep مشخص می‌کند الآن کاربر در کدام صفحه است (شروع از صفحه ۱)
  const [activeStep, setActiveStep] = useState(1);
  
  // selectedDoctor اطلاعات پزشکی که کاربر رویش کلیک کرده را ذخیره می‌کند
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // این تابع وظیفه جابه‌جایی تعاملی بین صفحات و انتقال اطلاعات پزشک را دارد
  const handleNavigation = (step, doctorData = null) => {
    setActiveStep(step);
    if (doctorData) {
      setSelectedDoctor(doctorData);
    }
    // اسکرول نرم صفحه به بالا در هنگام تغییر بخش‌ها
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 📍 تابع هوشمند برای ارسال متون دقیق بردکرامب و عناوین هدر به لایوت شما
  const getHeaderTitle = () => {
    switch (activeStep) {
      case 1: return "Find Doctor";
      case 2: return "Search Results";
      case 3: return selectedDoctor ? selectedDoctor.name : "Doctor Profile";
      case 4: return "Appointment Details";
      case 5: return "Patient Information";
      case 6: return "Appointment Scheduled";
      default: return "Find Doctor";
    }
  };

  return (
    <Layout crumb={getHeaderTitle()}>
      
      {/* 🟢 مرحله ۱: صفحه اصلی خدمات ویژه و تخصص‌ها */}
      {activeStep === 1 && (
        <SpecialServices onNavigate={() => handleNavigation(2)} />
      )}

      {/* 🔵 مرحله ۲: لیست نتایج پزشکان و نقشه گوگل */}
      {activeStep === 2 && (
        <DoctorResult
          onBack={() => handleNavigation(1)} 
          onSelectDoctor={(doctor) => handleNavigation(3, doctor)} 
        />
      )}

      {/* 🔴 مرحله ۳: پروفایل و رزومه کامل پزشک انتخاب شده */}
      {activeStep === 3 && selectedDoctor && (
        <DoctorProfileView 
          doctor={selectedDoctor} 
          onBack={() => handleNavigation(2)} 
          onStartBooking={() => handleNavigation(4)} 
        />
      )}

      {/* 🟣 مرحله ۴: انتخاب تاریخ از تقویم تعاملی و نوع ویزیت */}
      {activeStep === 4 && (
        <AppointmentDetails 
          doctor={selectedDoctor} 
          onBack={() => handleNavigation(3)} 
          onNext={() => handleNavigation(5)} 
        />
      )}

      {/* 🟡 مرحله ۵: فرم مشخصات بیمار و درگاه پرداخت آنلاین */}
      {activeStep === 5 && (
        <PatientInformation 
          doctor={selectedDoctor}
          booking={{ date: new Date(), visit: "video" }}
          onBack={() => handleNavigation(4)} 
          onNext={() => handleNavigation(6)} 
        />
      )}

      {/* 🟢 مرحله ۶: صفحه نهایی موفقیت‌آمیز بودن ثبت نوبت */}
      {activeStep === 6 && (
        <AppointmentSuccess onReset={() => handleNavigation(1)} />
      )}

    </Layout>
  );
};

export default Patients;
