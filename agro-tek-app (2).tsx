import React, { useState } from 'react';
import { Sun, Cloud, Wind, Droplets, TrendingUp, Tractor, Warehouse, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AgroTekApp = () => {
  const [language, setLanguage] = useState('es');
  
  const translations = {
    es: {
      title: 'Agro-teK',
      subtitle: 'Su plataforma integral de agronegocios',
      weather: 'Clima',
      markets: 'Mercados',
      equipment: 'Equipamiento',
      inventory: 'Inventario',
      forecast: 'Pronóstico',
      prices: 'Precios',
      crops: 'Cultivos',
      finance: 'Finanzas',
      viewMore: 'Ver más',
      currentWeather: 'Clima actual',
      marketTrends: 'Tendencias del mercado',
      equipmentStatus: 'Estado del equipo',
      stockStatus: 'Estado del stock'
    },
    en: {
      title: 'Agro-teK',
      subtitle: 'Your comprehensive agribusiness platform',
      weather: 'Weather',
      markets: 'Markets',
      equipment: 'Equipment',
      inventory: 'Inventory',
      forecast: 'Forecast',
      prices: 'Prices',
      crops: 'Crops',
      finance: 'Finance',
      viewMore: 'View more',
      currentWeather: 'Current Weather',
      marketTrends: 'Market Trends',
      equipmentStatus: 'Equipment Status',
      stockStatus: 'Stock Status'
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-700 text-white p-4 sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">{t.title}</h1>
          <div className="space-x-2">
            <button 
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded ${language === 'es' ? 'bg-green-600' : 'bg-green-800'}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded ${language === 'en' ? 'bg-green-600' : 'bg-green-800'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <h2 className="text-xl text-center mb-6 text-gray-600">{t.subtitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="text-yellow-500" />
                {t.weather}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl">23°C</p>
                <p className="text-gray-600">Buenos Aires</p>
                <p className="text-sm text-gray-500">{t.currentWeather}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-blue-500" />
                {t.markets}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Soja</span>
                  <span className="text-green-600">+2.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Trigo</span>
                  <span className="text-red-600">-0.8%</span>
                </div>
                <p className="text-sm text-gray-500">{t.marketTrends}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tractor className="text-green-500" />
                {t.equipment}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tractores</span>
                  <span className="text-green-600">5/6</span>
                </div>
                <div className="flex justify-between">
                  <span>Cosechadoras</span>
                  <span className="text-yellow-600">2/3</span>
                </div>
                <p className="text-sm text-gray-500">{t.equipmentStatus}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Warehouse className="text-brown-500" />
                {t.inventory}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Soja</span>
                  <span>1200 t</span>
                </div>
                <div className="flex justify-between">
                  <span>Maíz</span>
                  <span>850 t</span>
                </div>
                <p className="text-sm text-gray-500">{t.stockStatus}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-center gap-2">
            <Cloud className="text-blue-500" />
            {t.forecast}
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-center gap-2">
            <DollarSign className="text-green-500" />
            {t.prices}
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-center gap-2">
            <Droplets className="text-blue-500" />
            {t.crops}
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center justify-center gap-2">
            <TrendingUp className="text-purple-500" />
            {t.finance}
          </button>
        </div>
      </main>
    </div>
  );
};

export default AgroTekApp;
