import React, { useState, useMemo } from 'react';
import { Phone, Users, Shield, TrendingUp, MapPin, Clock, Calendar, BarChart3, LineChart as LineChartIcon, Search, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { generateAdminData } from '../mockDashboardData';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { format } from 'date-fns';
import { useBrand } from '../context/BrandContext';

// Import reusable dashboard components
import {
  StatCard,
  TimeRangeFilter,
  getTimeRangeLabel,
  ChartContainer,
  DashboardHeader,
  CHART_COLORS
} from './dashboard';

// Toggle between Line and Bar chart - Black style
const ChartTypeToggle = ({ chartType, onChange }) => (
  <div className="flex gap-1 bg-gray-200 rounded-lg p-1">
    <button
      onClick={() => onChange('line')}
      className={`p-2 rounded ${chartType === 'line' ? 'bg-white shadow-md text-black' : 'text-gray-600'}`}
      title="Line Chart"
    >
      <LineChartIcon className="h-4 w-4" />
    </button>
    <button
      onClick={() => onChange('bar')}
      className={`p-2 rounded ${chartType === 'bar' ? 'bg-white shadow-md text-black' : 'text-gray-600'}`}
      title="Bar Chart"
    >
      <BarChart3 className="h-4 w-4" />
    </button>
  </div>
);

// KPI selector for cross-referencing - keeps colors for chart correspondence
const KPISelector = ({ selected, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {[
      { key: 'total', label: 'Total', color: CHART_COLORS.total },
      { key: 'good', label: 'Good', color: CHART_COLORS.good },
      { key: 'bad', label: 'Bad', color: CHART_COLORS.bad }
    ].map(kpi => (
      <button
        key={kpi.key}
        onClick={() => {
          if (selected.includes(kpi.key)) {
            onChange(selected.filter(k => k !== kpi.key));
          } else {
            onChange([...selected, kpi.key]);
          }
        }}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors border ${
          selected.includes(kpi.key)
            ? 'text-white border-transparent'
            : 'bg-white text-black border-black hover:bg-gray-100'
        }`}
        style={selected.includes(kpi.key) ? { backgroundColor: kpi.color } : {}}
      >
        {kpi.label}
      </button>
    ))}
  </div>
);

// Universal chart component that can render line or bar
const UniversalChart = ({ data, chartType, selectedKPIs, xKey, height = 300 }) => {
  const Chart = chartType === 'line' ? LineChart : BarChart;
  
  return (
    <ResponsiveContainer width="100%" height={height}>
      <Chart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} tick={{ fontSize: 11 }} />
        <YAxis tick={{ fontSize: 11 }} />
        <Tooltip />
        <Legend />
        {selectedKPIs.includes('total') && (
          chartType === 'line' 
            ? <Line type="monotone" dataKey="total" stroke={CHART_COLORS.total} strokeWidth={2} name="Total" dot={{ r: 3 }} />
            : <Bar dataKey="total" fill={CHART_COLORS.total} name="Total" />
        )}
        {selectedKPIs.includes('good') && (
          chartType === 'line'
            ? <Line type="monotone" dataKey="good" stroke={CHART_COLORS.good} strokeWidth={2} name="Good" dot={{ r: 3 }} />
            : <Bar dataKey="good" fill={CHART_COLORS.good} name="Good" />
        )}
        {selectedKPIs.includes('bad') && (
          chartType === 'line'
            ? <Line type="monotone" dataKey="bad" stroke={CHART_COLORS.bad} strokeWidth={2} name="Bad" dot={{ r: 3 }} />
            : <Bar dataKey="bad" fill={CHART_COLORS.bad} name="Bad" />
        )}
      </Chart>
    </ResponsiveContainer>
  );
};

// Subscriber detail modal - Professional Corporate Style
const SubscriberDetail = ({ subscriber, onClose }) => {
  if (!subscriber) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-slate-800">{subscriber.name}</h3>
              <p className="text-slate-500">{subscriber.email}</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Account Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-100 p-3 rounded border border-slate-200">
              <p className="text-xs text-slate-500 font-medium">Plan</p>
              <p className="font-semibold text-slate-800">{subscriber.plan}</p>
            </div>
            <div className="bg-slate-100 p-3 rounded border border-slate-200">
              <p className="text-xs text-slate-500 font-medium">Status</p>
              <p className={`font-semibold ${subscriber.status === 'Active' ? 'text-emerald-700' : subscriber.status === 'Trial' ? 'text-blue-700' : 'text-red-700'}`}>
                {subscriber.status}
              </p>
            </div>
            <div className="bg-slate-100 p-3 rounded border border-slate-200">
              <p className="text-xs text-slate-500 font-medium">State</p>
              <p className="font-semibold text-slate-800">{subscriber.state}</p>
            </div>
            <div className="bg-slate-100 p-3 rounded border border-slate-200">
              <p className="text-xs text-slate-500 font-medium">Joined</p>
              <p className="font-semibold text-slate-800">{format(subscriber.joinDate, 'MMM d, yyyy')}</p>
            </div>
          </div>
          
          {/* Call Stats */}
          <div>
            <h4 className="font-semibold mb-3 text-slate-800">Call Statistics</h4>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-700 p-3 rounded text-center">
                <p className="text-2xl font-bold text-white">{subscriber.totalCalls}</p>
                <p className="text-xs text-slate-300">Total Calls</p>
              </div>
              <div className="bg-emerald-700 p-3 rounded text-center">
                <p className="text-2xl font-bold text-white">{subscriber.goodCalls}</p>
                <p className="text-xs text-emerald-200">Good Calls</p>
              </div>
              <div className="bg-red-700 p-3 rounded text-center">
                <p className="text-2xl font-bold text-white">{subscriber.badCalls}</p>
                <p className="text-xs text-red-200">Blocked</p>
              </div>
              <div className="bg-blue-800 p-3 rounded text-center">
                <p className="text-2xl font-bold text-white">{subscriber.badCalls * 45}</p>
                <p className="text-xs text-blue-200">Min Saved</p>
              </div>
            </div>
          </div>
          
          {/* Whitelist */}
          <div>
            <h4 className="font-semibold mb-3 text-slate-800">Whitelist ({subscriber.whitelist.length})</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {subscriber.whitelist.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-slate-100 border border-slate-200 p-2 rounded text-sm">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="text-slate-500">{item.phone}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Blacklist */}
          <div>
            <h4 className="font-semibold mb-3 text-slate-800">Blacklist ({subscriber.blacklist.length})</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {subscriber.blacklist.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-slate-100 border border-slate-200 p-2 rounded text-sm">
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="text-slate-500">{item.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboard = () => {
  const brand = useBrand();
  const [timeRange, setTimeRange] = useState('30d');
  const [activeView, setActiveView] = useState('overview');
  const [chartType, setChartType] = useState('line');
  const [selectedKPIs, setSelectedKPIs] = useState(['total', 'good', 'bad']);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'totalCalls', direction: 'desc' });

  const data = useMemo(() => generateAdminData(timeRange), [timeRange]);

  // Filter and sort subscribers
  const filteredSubscribers = useMemo(() => {
    let result = data.subscribers.filter(sub =>
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    result.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (sortConfig.direction === 'asc') return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
    
    return result;
  }, [data.subscribers, searchTerm, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return null;
    return sortConfig.direction === 'desc' ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />;
  };

  const views = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'geographic', label: 'Geographic', icon: MapPin },
    { id: 'time', label: 'Time Analysis', icon: Clock },
    { id: 'subscribers', label: 'Subscribers', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-slate-100" data-testid="admin-dashboard">
      <DashboardHeader
        title={`${brand.appName} Admin`}
        subtitle="Marketing Analytics Dashboard"
        darkMode={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <TimeRangeFilter value={timeRange} onChange={setTimeRange} />
          <div className="flex items-center gap-4">
            <KPISelector selected={selectedKPIs} onChange={setSelectedKPIs} />
            <ChartTypeToggle chartType={chartType} onChange={setChartType} />
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {views.map(view => (
            <Button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              variant={activeView === view.id ? 'default' : 'outline'}
              className={activeView === view.id ? 'bg-black hover:bg-gray-800 text-white' : 'border-black text-black hover:bg-gray-100'}
            >
              <view.icon className="h-4 w-4 mr-2" />
              {view.label}
            </Button>
          ))}
        </div>

        {/* Overview */}
        {activeView === 'overview' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <StatCard title="Total Calls" value={data.totalCalls} icon={<Phone className="h-6 w-6 text-black" />} />
              <StatCard title="Good Calls" value={data.goodCalls} icon={<TrendingUp className="h-6 w-6 text-black" />} />
              <StatCard title="Blocked" value={data.badCalls} icon={<Shield className="h-6 w-6 text-black" />} />
              <StatCard title="Time Saved" value={data.badCalls * 45} suffix=" min" icon={<Clock className="h-6 w-6 text-black" />} subtitle={`${Math.floor((data.badCalls * 45) / 60)} hrs total`} />
              <StatCard title="Subscribers" value={data.totalSubscribers} icon={<Users className="h-6 w-6 text-black" />} />
            </div>

            {/* Trend Chart */}
            <ChartContainer title={`Call Trends - ${getTimeRangeLabel(timeRange)}`} height={350} className="mb-6">
              <UniversalChart data={data.trendData} chartType={chartType} selectedKPIs={selectedKPIs} xKey="label" height={300} />
            </ChartContainer>

            {/* Distribution */}
            <div className="grid md:grid-cols-2 gap-6">
              <ChartContainer title="By Hour of Day" height={300}>
                <UniversalChart data={data.byHour} chartType={chartType} selectedKPIs={selectedKPIs} xKey="hour" height={250} />
              </ChartContainer>
              <ChartContainer title="By Day of Week" height={300}>
                <UniversalChart data={data.byDayOfWeek} chartType={chartType} selectedKPIs={selectedKPIs} xKey="day" height={250} />
              </ChartContainer>
            </div>
          </>
        )}

        {/* Geographic */}
        {activeView === 'geographic' && (
          <>
            <ChartContainer title="Calls by State" height={400} className="mb-6">
              <UniversalChart data={data.stateChartData} chartType={chartType} selectedKPIs={selectedKPIs} xKey="state" height={350} />
            </ChartContainer>

            <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
              <h3 className="font-bold mb-4 text-slate-800">State Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-slate-700 font-semibold">State</th>
                      <th className="px-4 py-3 text-right text-slate-700 font-semibold">Total</th>
                      <th className="px-4 py-3 text-right text-slate-700 font-semibold">Good</th>
                      <th className="px-4 py-3 text-right text-slate-700 font-semibold">Bad</th>
                      <th className="px-4 py-3 text-right text-slate-700 font-semibold">Block Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.stateChartData.map(state => (
                      <tr key={state.state} className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-800">{state.state}</td>
                        <td className="px-4 py-3 text-right text-slate-600">{state.total.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-emerald-700 font-medium">{state.good.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-red-700 font-medium">{state.bad.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-slate-600">{state.blockRate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Time Analysis */}
        {activeView === 'time' && (
          <div className="space-y-6">
            <ChartContainer title="Hour of Day" height={350}>
              <UniversalChart data={data.byHour} chartType={chartType} selectedKPIs={selectedKPIs} xKey="hour" height={300} />
            </ChartContainer>

            <div className="grid md:grid-cols-2 gap-6">
              <ChartContainer title="Day of Week" height={300}>
                <UniversalChart data={data.byDayOfWeek} chartType={chartType} selectedKPIs={selectedKPIs} xKey="day" height={250} />
              </ChartContainer>
              <ChartContainer title="By Month" height={300}>
                <UniversalChart data={data.byMonth} chartType={chartType} selectedKPIs={selectedKPIs} xKey="month" height={250} />
              </ChartContainer>
            </div>

            <ChartContainer title="Week of Year" height={350}>
              <UniversalChart data={data.byWeek.slice(-20)} chartType={chartType} selectedKPIs={selectedKPIs} xKey="week" height={300} />
            </ChartContainer>
          </div>
        )}

        {/* Subscribers */}
        {activeView === 'subscribers' && (
          <div className="bg-white rounded-lg shadow-md border border-slate-200">
            <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-bold text-slate-800">Subscriber Accounts ({filteredSubscribers.length})</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search by name, email, state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 border-slate-300 focus:border-slate-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-slate-700 font-semibold">Subscriber</th>
                    <th className="px-4 py-3 text-left text-slate-700 font-semibold">Plan</th>
                    <th className="px-4 py-3 text-left text-slate-700 font-semibold">Status</th>
                    <th className="px-4 py-3 text-left text-slate-700 font-semibold">State</th>
                    <th className="px-4 py-3 text-right cursor-pointer hover:bg-slate-200 text-slate-700 font-semibold" onClick={() => handleSort('totalCalls')}>
                      <span className="flex items-center justify-end gap-1">Total <SortIcon columnKey="totalCalls" /></span>
                    </th>
                    <th className="px-4 py-3 text-right cursor-pointer hover:bg-slate-200 text-slate-700 font-semibold" onClick={() => handleSort('goodCalls')}>
                      <span className="flex items-center justify-end gap-1">Good <SortIcon columnKey="goodCalls" /></span>
                    </th>
                    <th className="px-4 py-3 text-right cursor-pointer hover:bg-slate-200 text-slate-700 font-semibold" onClick={() => handleSort('badCalls')}>
                      <span className="flex items-center justify-end gap-1">Bad <SortIcon columnKey="badCalls" /></span>
                    </th>
                    <th className="px-4 py-3 text-right text-slate-700 font-semibold">W/B Lists</th>
                    <th className="px-4 py-3 text-right text-slate-700 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubscribers.slice(0, 25).map(sub => (
                    <tr key={sub.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-slate-800">{sub.name}</p>
                          <p className="text-xs text-slate-500">{sub.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{sub.plan}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          sub.status === 'Active' ? 'bg-emerald-700 text-white' :
                          sub.status === 'Trial' ? 'bg-blue-700 text-white' :
                          'bg-red-700 text-white'
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{sub.state}</td>
                      <td className="px-4 py-3 text-right text-slate-600">{sub.totalCalls}</td>
                      <td className="px-4 py-3 text-right text-emerald-700 font-medium">{sub.goodCalls}</td>
                      <td className="px-4 py-3 text-right text-red-700 font-medium">{sub.badCalls}</td>
                      <td className="px-4 py-3 text-right text-xs">
                        <span className="text-emerald-700 font-medium">{sub.whitelistCount}W</span> / <span className="text-red-700 font-medium">{sub.blacklistCount}B</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button size="sm" variant="outline" className="border-slate-400 text-slate-700 hover:bg-slate-100" onClick={() => setSelectedSubscriber(sub)}>
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Subscriber Detail Modal */}
      {selectedSubscriber && (
        <SubscriberDetail subscriber={selectedSubscriber} onClose={() => setSelectedSubscriber(null)} />
      )}
    </div>
  );
};
