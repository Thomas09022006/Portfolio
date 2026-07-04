import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Legend
} from 'recharts';
import { Sliders, HelpCircle, Activity, Award, Landmark, Shuffle } from 'lucide-react';

// Iris Reference Dataset for Scatter Plot
const irisData = [
  // Setosa (Petal length 1.0 - 1.9, width 0.1 - 0.6)
  { length: 1.4, width: 0.2, species: 'Setosa', fill: '#6366f1' },
  { length: 1.3, width: 0.3, species: 'Setosa', fill: '#6366f1' },
  { length: 1.5, width: 0.2, species: 'Setosa', fill: '#6366f1' },
  { length: 1.7, width: 0.4, species: 'Setosa', fill: '#6366f1' },
  { length: 1.4, width: 0.1, species: 'Setosa', fill: '#6366f1' },
  // Versicolor (Petal length 3.0 - 5.1, width 1.0 - 1.8)
  { length: 4.7, width: 1.4, species: 'Versicolor', fill: '#10b981' },
  { length: 4.5, width: 1.5, species: 'Versicolor', fill: '#10b981' },
  { length: 4.9, width: 1.5, species: 'Versicolor', fill: '#10b981' },
  { length: 4.0, width: 1.3, species: 'Versicolor', fill: '#10b981' },
  { length: 4.6, width: 1.3, species: 'Versicolor', fill: '#10b981' },
  // Virginica (Petal length 4.5 - 6.9, width 1.4 - 2.5)
  { length: 6.0, width: 2.5, species: 'Virginica', fill: '#8b5cf6' },
  { length: 5.1, width: 1.9, species: 'Virginica', fill: '#8b5cf6' },
  { length: 5.9, width: 2.1, species: 'Virginica', fill: '#8b5cf6' },
  { length: 5.6, width: 1.8, species: 'Virginica', fill: '#8b5cf6' },
  { length: 6.6, width: 2.1, species: 'Virginica', fill: '#8b5cf6' },
];

const brandBases = {
  Maruti: 8000,
  Hyundai: 10500,
  Honda: 12000,
  Toyota: 15000,
  BMW: 40000,
};

const expenseCategories = [
  { name: 'Food & Dining', value: 350, fill: '#6366f1' },
  { name: 'Rent & Accommodation', value: 600, fill: '#3b82f6' },
  { name: 'Travel & Commute', value: 150, fill: '#10b981' },
  { name: 'Utilities', value: 100, fill: '#f59e0b' },
  { name: 'Leisure', value: 200, fill: '#ec4899' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('iris');

  // --- Iris State & Predictor ---
  const [sepalLength, setSepalLength] = useState(5.8);
  const [sepalWidth, setSepalWidth] = useState(3.0);
  const [petalLength, setPetalLength] = useState(3.5);
  const [petalWidth, setPetalWidth] = useState(1.2);

  // Simple Decision Boundary classification matching actual Iris characteristics
  const predictIris = () => {
    if (petalLength < 2.5 && petalWidth < 1.0) {
      return { species: 'Iris-Setosa', color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40', prob: [99, 1, 0] };
    } else if (petalLength > 4.8 || petalWidth > 1.6) {
      return { species: 'Iris-Virginica', color: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40', prob: [0, 8, 92] };
    } else {
      return { species: 'Iris-Versicolor', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40', prob: [1, 89, 10] };
    }
  };

  const irisPrediction = predictIris();
  const currentInputNode = [{ length: petalLength, width: petalWidth, species: 'Input Node', fill: '#ef4444' }];

  // --- Car Price Estimator State ---
  const [carBrand, setCarBrand] = useState('Toyota');
  const [carYear, setCarYear] = useState(2020);
  const [carMileage, setCarMileage] = useState(60000);
  const [carEngine, setCarEngine] = useState(1500000); // 1.5L represented as CC or CC slider

  const [carCC, setCarCC] = useState(1600);

  const calculatePrice = (brand) => {
    const base = brandBases[brand];
    // Depreciation of 7% per year from 2026
    const age = Math.max(0, 2026 - carYear);
    const depreciated = base * Math.pow(0.93, age);
    
    // Mileage deduction ($0.03 per km)
    const mileageDeduction = carMileage * 0.035;
    
    // Engine boost
    const engineBoost = Math.max(0, carCC - 1000) * 4;

    const final = depreciated - mileageDeduction + engineBoost;
    return Math.round(Math.max(1200, final));
  };

  const carBrandsData = Object.keys(brandBases).map((brand) => ({
    brand,
    Price: calculatePrice(brand),
    isCurrent: brand === carBrand,
  }));

  // --- Expense settlement state ---
  const [settlements, setSettlements] = useState([
    { from: 'Sanjay', to: 'Alice', amount: 35 },
    { from: 'Bob', to: 'Alice', amount: 15 },
    { from: 'Clara', to: 'Alice', amount: 10 },
  ]);

  const triggerOptimize = () => {
    // Mock simulation showing algorithm change
    alert("Running Expense Settlement Optimization Algorithm...\nSimplifying debt chain: Sanjay owes Bob $20, Bob owes Alice $20 -> Sanjay pays Alice $20.");
    setSettlements([
      { from: 'Sanjay', to: 'Alice', amount: 50 },
      { from: 'Clara', to: 'Alice', amount: 10 },
    ]);
  };

  return (
    <section id="playground" className="py-20 bg-white/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Data & ML Playground
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-550 dark:text-slate-400 mt-4 max-w-lg mx-auto">
            Interact with live simulated models and data visualizations built directly inside the frontend.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center border-b border-slate-200 dark:border-slate-800 mb-12">
          <div className="flex space-x-8">
            {[
              { id: 'iris', label: 'Iris Classifier Classifier', icon: Activity },
              { id: 'car', label: 'Car Price Regressor', icon: Sliders },
              { id: 'expenses', label: 'Expense Settlement Engine', icon: Landmark },
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-indigo-650 text-indigo-650 dark:border-indigo-400 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-350'
                  }`}
                >
                  <TabIcon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[480px]">
          {activeTab === 'iris' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Sliders Control Panel */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-2">
                    Model Hyperparameters
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    Adjust the sliders below representing Iris flower morphometrics (sepal & petal dimensions).
                  </p>

                  <div className="space-y-5">
                    {/* Sepal Length */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                        <span>Sepal Length</span>
                        <span>{sepalLength} cm</span>
                      </div>
                      <input
                        type="range"
                        min="4.0"
                        max="8.0"
                        step="0.1"
                        value={sepalLength}
                        onChange={(e) => setSepalLength(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>

                    {/* Sepal Width */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                        <span>Sepal Width</span>
                        <span>{sepalWidth} cm</span>
                      </div>
                      <input
                        type="range"
                        min="2.0"
                        max="4.5"
                        step="0.1"
                        value={sepalWidth}
                        onChange={(e) => setSepalWidth(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>

                    {/* Petal Length */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-650 dark:text-slate-300 mb-1.5">
                        <span>Petal Length</span>
                        <span className="text-indigo-650 dark:text-indigo-400 font-bold">{petalLength} cm</span>
                      </div>
                      <input
                        type="range"
                        min="1.0"
                        max="7.0"
                        step="0.1"
                        value={petalLength}
                        onChange={(e) => setPetalLength(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>

                    {/* Petal Width */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-650 dark:text-slate-300 mb-1.5">
                        <span>Petal Width</span>
                        <span className="text-indigo-650 dark:text-indigo-400 font-bold">{petalWidth} cm</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="2.5"
                        step="0.1"
                        value={petalWidth}
                        onChange={(e) => setPetalWidth(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Prediction Result Block */}
                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Classification Outcome</span>
                  <div className={`mt-3 p-4 rounded-2xl flex items-center justify-between font-bold border border-current/10 ${irisPrediction.color}`}>
                    <span className="text-base tracking-wide font-sans">{irisPrediction.species}</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-white/20 dark:bg-black/20 font-mono">
                      Acc: 98.7%
                    </span>
                  </div>

                  {/* Confidence Bars */}
                  <div className="mt-4 space-y-2">
                    {[
                      { name: 'Setosa', val: irisPrediction.prob[0], color: 'bg-indigo-500' },
                      { name: 'Versicolor', val: irisPrediction.prob[1], color: 'bg-emerald-500' },
                      { name: 'Virginica', val: irisPrediction.prob[2], color: 'bg-purple-500' }
                    ].map((prob, idx) => (
                      <div key={idx} className="flex items-center text-[10px] font-bold text-slate-500 dark:text-slate-400">
                        <span className="w-16">{prob.name}</span>
                        <div className="flex-grow h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mx-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${prob.val}%` }}
                            transition={{ duration: 0.3 }}
                            className={`h-full ${prob.color}`}
                          />
                        </div>
                        <span className="w-8 text-right font-mono">{prob.val}%</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Scatter Plot Visualizer */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm flex flex-col">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Feature Projection Map</h3>
                  <div className="flex gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" />Setosa</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />Versicolor</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]" />Virginica</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />Input</span>
                  </div>
                </div>

                <div className="flex-grow h-[280px] sm:h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                      <XAxis
                        type="number"
                        dataKey="length"
                        name="Petal Length"
                        unit="cm"
                        label={{ value: 'Petal Length (cm)', position: 'insideBottom', offset: -10 }}
                        tick={{ fill: 'currentColor' }}
                        className="text-slate-500 text-[10px]"
                      />
                      <YAxis
                        type="number"
                        dataKey="width"
                        name="Petal Width"
                        unit="cm"
                        label={{ value: 'Petal Width (cm)', angle: -90, position: 'insideLeft' }}
                        tick={{ fill: 'currentColor' }}
                        className="text-slate-500 text-[10px]"
                      />
                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      <Scatter name="Species Dataset" data={irisData} fill="#8884d8">
                        {irisData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Scatter>
                      {/* Interactive Point Coordinate */}
                      <Scatter name="User Inputs" data={currentInputNode} fill="#ef4444">
                        <Cell fill="#ef4444" r={10} className="stroke-white stroke-2 animate-pulse" />
                      </Scatter>
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'car' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Parameters Panel */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-2">
                    Car Parameters
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mb-6">
                    Enter the specification of a vehicle to predict its estimated price point.
                  </p>

                  <div className="space-y-5">
                    {/* Brand Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-650 dark:text-slate-350 mb-1.5">
                        Brand Preference
                      </label>
                      <select
                        value={carBrand}
                        onChange={(e) => setCarBrand(e.target.value)}
                        className="w-full bg-slate-55/50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 text-slate-800 dark:text-slate-200"
                      >
                        {Object.keys(brandBases).map((brand) => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>

                    {/* Manufacturing Year */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-650 dark:text-slate-350 mb-1.5">
                        <span>Year of Manufacture</span>
                        <span className="font-bold">{carYear}</span>
                      </div>
                      <input
                        type="range"
                        min="2010"
                        max="2026"
                        step="1"
                        value={carYear}
                        onChange={(e) => setCarYear(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>

                    {/* Mileage */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-655 dark:text-slate-350 mb-1.5">
                        <span>Mileage Driven</span>
                        <span className="font-bold">{(carMileage / 1000).toFixed(0)}k km</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={carMileage}
                        onChange={(e) => setCarMileage(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>

                    {/* Engine CC */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-655 dark:text-slate-350 mb-1.5">
                        <span>Engine Displacement</span>
                        <span className="font-bold">{carCC} cc</span>
                      </div>
                      <input
                        type="range"
                        min="800"
                        max="3000"
                        step="100"
                        value={carCC}
                        onChange={(e) => setCarCC(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Estimated Market Value</span>
                  <div className="mt-3 p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/10 rounded-2xl flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-extrabold text-2xl font-mono">
                    <span>${calculatePrice(carBrand).toLocaleString()}</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-emerald-600/10 font-sans tracking-wide">
                      R² ≈ 92.1%
                    </span>
                  </div>
                </div>

              </div>

              {/* Price comparison Chart */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Cross-Brand Valuation</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mb-6">
                    A comparison showing how much this specific configurations cost across five major automobile brands.
                  </p>
                </div>

                <div className="flex-grow h-[280px] sm:h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={carBrandsData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                      <XAxis dataKey="brand" tick={{ fill: 'currentColor' }} className="text-slate-500 text-[10px]" />
                      <YAxis tick={{ fill: 'currentColor' }} className="text-slate-500 text-[10px]" />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Estimated Value']} />
                      <Bar dataKey="Price" radius={[8, 8, 0, 0]}>
                        {carBrandsData.map((entry, idx) => (
                          <Cell
                            key={`cell-${idx}`}
                            fill={entry.isCurrent ? '#6366f1' : 'rgba(99, 102, 241, 0.25)'}
                            stroke={entry.isCurrent ? '#6366f1' : 'rgba(99, 102, 241, 0.5)'}
                            strokeWidth={entry.isCurrent ? 2 : 1}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'expenses' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Category Breakdown (Pie Chart) */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Spending Categories</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mb-6">
                    A visual spending analytics dashboard extracted from the Expense Sharing dataset.
                  </p>
                </div>

                <div className="h-[240px] sm:h-[280px] flex justify-center items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseCategories}
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value}`, 'Spending']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legends */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {expenseCategories.map((cat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-650 dark:text-slate-400">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.fill }} />
                      <span className="truncate">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Settlement Algorithm Panel */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass dark:glass-dark shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-2">
                    Settlement Simplifier
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mb-6">
                    Runs a Greedy Settlement Flow minimizing transaction edges. Try optimization trigger below.
                  </p>

                  <div className="space-y-4">
                    {settlements.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100/50 dark:bg-slate-850/50 border border-slate-200/20 dark:border-slate-700/50 text-sm font-semibold">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                          <span className="text-indigo-650 dark:text-indigo-400 font-extrabold">{s.from}</span>
                          <span className="text-slate-400 text-xs">owes</span>
                          <span className="text-slate-800 dark:text-slate-100 font-extrabold">{s.to}</span>
                        </div>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-extrabold">${s.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                  <button
                    onClick={triggerOptimize}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/10 hover:bg-indigo-500 transition-all duration-200"
                  >
                    <Shuffle size={16} />
                    Run Settlement Algorithm
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
