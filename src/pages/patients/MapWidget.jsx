import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// امپورت استایل‌های هسته نقشه لایفلت
import 'leaflet/dist/leaflet.css';

// اصلاح مسیر آیکون مارکرها برای رندر صحیح در Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapWidget({ list = [], onOpenProfile }) {
  // مختصات دقیق مرکز نقشه بر اساس عکس شما (Nilai, Malaysia)
  const centerPosition = [2.8128, 101.7915];
  
  // استیت فعال‌سازی نوع نقشه: 'map' (گوگل مپس عادی) یا 'satellite' (گوگل ستلایت)
  const [mapType, setMapType] = useState('map');

  return (
    <div className="w-full h-full min-h-[440px] rounded-3xl overflow-hidden shadow-inner border border-gray-100 relative z-10">
      
      {/* 📍 دکمه‌های مپ و ستلایت دقیقاً مطابق چیدمان و ظاهر عکس شما */}
      <div className="absolute top-4 left-4 z-[1000] flex bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.15)] overflow-hidden font-sans border border-gray-200">
        <button
          type="button"
          onClick={() => setMapType('map')}
          className={`px-5 py-2.5 text-sm font-bold transition-all cursor-pointer ${
            mapType === 'map' 
              ? 'bg-gray-100 text-slate-900 font-black border-r border-gray-200' 
              : 'bg-white text-gray-500 hover:text-slate-800 border-r border-gray-200'
          }`}
        >
          Map
        </button>
        <button
          type="button"
          onClick={() => setMapType('satellite')}
          className={`px-5 py-2.5 text-sm font-bold transition-all cursor-pointer ${
            mapType === 'satellite' 
              ? 'bg-gray-100 text-slate-900 font-black' 
              : 'bg-white text-gray-500 hover:text-slate-800'
          }`}
        >
          Satellite
        </button>
      </div>

      <MapContainer 
        center={centerPosition} 
        zoom={14} 
        scrollWheelZoom={true} 
        zoomControl={false} // پنهان کردن ابزارهای اضافه لایفلت برای تطابق با عکس گوگل مپ شما
        className="w-full h-full min-h-[440px]"
      >
        
        {/* 📍 لود کردن مستقیم سرورهای رسمی گوگل مپس (Google Maps Tiles) */}
        {mapType === 'map' ? (
          /* لایه نقشه جاده‌ای واقعی گوگل (با همان جاده‌های زرد، اتوبان آبی و آیکون مکان‌ها دقیقاً مثل عکستان) */
          <TileLayer
            attribution='&copy; Google Maps'
            url="https://google.com{x}&y={y}&z={z}"
          />
        ) : (
          /* لایه نقشه ماهواره‌ای واقعی و ترکیبی گوگل مپس (Google Satellite Hybrid) */
          <TileLayer
            attribution='&copy; Google Maps'
            url="https://google.com{x}&y={y}&z={z}"
          />
        )}

        {/* رندر مارکر پزشکان روی نقشه گوگل */}
        {list.map((doctor, index) => {
          const lat = centerPosition[0] + (index * 0.003) - 0.001;
          const lng = centerPosition[1] + (index * 0.004) - 0.002;

          return (
            <Marker key={doctor.id || index} position={[lat, lng]}>
              <Popup>
                <div className="text-left p-1 max-w-[180px] font-sans">
                  <h4 className="font-bold text-slate-800 text-xs leading-tight mb-1">{doctor.name}</h4>
                  <p className="text-[10px] text-fuchsia-600 font-bold mb-2">{doctor.specialty}</p>
                  <button 
                    type="button"
                    onClick={() => onOpenProfile && onOpenProfile(doctor)}
                    className="w-full bg-slate-900 text-white font-bold text-[9px] py-1 px-2 rounded-lg text-center cursor-pointer block"
                  >
                    VIEW PROFILE
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
