// Mock data generator for dashboard demo
import { subDays, subHours, format, getWeek } from 'date-fns';

const states = ['CA', 'TX', 'FL', 'NY', 'PA', 'IL', 'OH', 'GA', 'NC', 'MI', 'AZ', 'WA', 'MA', 'CO', 'VA'];

// Generate realistic call data
const generateCallLog = (daysBack = 365) => {
  const calls = [];
  const now = new Date();
  
  for (let i = 0; i < 8000; i++) {
    const daysAgo = Math.floor(Math.random() * daysBack);
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    
    const callDate = subDays(now, daysAgo);
    callDate.setHours(hour, minute);
    
    const isBadCall = Math.random() < 0.65;
    const callType = isBadCall ? 'bad' : 'good';
    
    calls.push({
      id: `call_${i + 1}`,
      phone: `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
      type: callType,
      timestamp: callDate,
      state: states[Math.floor(Math.random() * states.length)],
      duration: callType === 'good' ? Math.floor(Math.random() * 1200) : 0,
      blocked: callType === 'bad',
      dayOfWeek: callDate.getDay(),
      hour: callDate.getHours(),
      weekOfYear: getWeek(callDate),
      month: callDate.getMonth()
    });
  }
  
  return calls.sort((a, b) => b.timestamp - a.timestamp);
};

// Filter calls by date range
const filterByDateRange = (calls, range) => {
  const now = new Date();
  let startDate;
  
  switch(range) {
    case '24h':
      startDate = subHours(now, 24);
      break;
    case '7d':
      startDate = subDays(now, 7);
      break;
    case '30d':
      startDate = subDays(now, 30);
      break;
    case 'ytd':
      startDate = new Date(now.getFullYear(), 0, 1);
      break;
    default:
      startDate = subDays(now, 30);
  }
  
  return calls.filter(c => c.timestamp >= startDate);
};

// Generate trend data for line graphs
export const generateTrendData = (calls, range) => {
  const now = new Date();
  let data = [];
  
  if (range === '24h') {
    for (let i = 23; i >= 0; i--) {
      const hour = subHours(now, i);
      const hourCalls = calls.filter(c => 
        c.timestamp.getHours() === hour.getHours() &&
        format(c.timestamp, 'yyyy-MM-dd') === format(hour, 'yyyy-MM-dd')
      );
      data.push({
        label: format(hour, 'ha'),
        total: hourCalls.length,
        bad: hourCalls.filter(c => c.type === 'bad').length,
        good: hourCalls.filter(c => c.type === 'good').length
      });
    }
  } else if (range === '7d') {
    for (let i = 6; i >= 0; i--) {
      const date = subDays(now, i);
      const dateStr = format(date, 'yyyy-MM-dd');
      const dayCalls = calls.filter(c => format(c.timestamp, 'yyyy-MM-dd') === dateStr);
      data.push({
        label: format(date, 'EEE'),
        total: dayCalls.length,
        bad: dayCalls.filter(c => c.type === 'bad').length,
        good: dayCalls.filter(c => c.type === 'good').length
      });
    }
  } else if (range === '30d') {
    for (let i = 29; i >= 0; i--) {
      const date = subDays(now, i);
      const dateStr = format(date, 'yyyy-MM-dd');
      const dayCalls = calls.filter(c => format(c.timestamp, 'yyyy-MM-dd') === dateStr);
      data.push({
        label: format(date, 'M/d'),
        total: dayCalls.length,
        bad: dayCalls.filter(c => c.type === 'bad').length,
        good: dayCalls.filter(c => c.type === 'good').length
      });
    }
  } else if (range === 'ytd') {
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const weeks = Math.ceil((now - startOfYear) / (7 * 24 * 60 * 60 * 1000));
    
    for (let i = weeks; i >= 0; i--) {
      const weekStart = subDays(now, i * 7);
      const weekEnd = subDays(now, (i - 1) * 7);
      const weekCalls = calls.filter(c => c.timestamp >= weekStart && c.timestamp < weekEnd);
      data.push({
        label: `W${weeks - i + 1}`,
        total: weekCalls.length,
        bad: weekCalls.filter(c => c.type === 'bad').length,
        good: weekCalls.filter(c => c.type === 'good').length
      });
    }
  }
  
  return data;
};

// Generate subscriber-specific data
export const generateSubscriberData = (range = '30d') => {
  const allCalls = generateCallLog(365);
  const calls = filterByDateRange(allCalls, range);
  
  const totalCalls = calls.length;
  const badCalls = calls.filter(c => c.type === 'bad').length;
  const goodCalls = calls.filter(c => c.type === 'good').length;
  
  const moneySaved = badCalls * 1400;
  const timeSaved = badCalls * 45;
  
  const trendData = generateTrendData(calls, range);
  
  return {
    totalCalls,
    goodCalls,
    badCalls,
    moneySaved,
    timeSaved,
    recentCalls: calls.slice(0, 50),
    callHistory: calls,
    trendData
  };
};

// Generate mock subscriber list for admin
export const generateSubscriberList = () => {
  const subscribers = [];
  const plans = ['Basic', 'Mid', 'Family'];
  const statuses = ['Active', 'Trial', 'Cancelled'];
  
  for (let i = 1; i <= 100; i++) {
    const totalCalls = Math.floor(Math.random() * 500) + 50;
    const badCalls = Math.floor(totalCalls * (0.5 + Math.random() * 0.3));
    const goodCalls = totalCalls - badCalls;
    
    subscribers.push({
      id: `sub_${i}`,
      email: `user${i}@example.com`,
      name: `User ${i}`,
      phone: `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
      plan: plans[Math.floor(Math.random() * plans.length)],
      status: statuses[Math.floor(Math.random() * 3)],
      state: states[Math.floor(Math.random() * states.length)],
      joinDate: subDays(new Date(), Math.floor(Math.random() * 365)),
      totalCalls,
      goodCalls,
      badCalls,
      whitelistCount: Math.floor(Math.random() * 20),
      blacklistCount: Math.floor(Math.random() * 50),
      moneySaved: badCalls * 1400,
      whitelist: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, j) => ({
        phone: `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
        label: ['Mom', 'Dad', 'Work', 'Doctor', 'School'][j % 5],
        addedDate: subDays(new Date(), Math.floor(Math.random() * 30))
      })),
      blacklist: Array.from({ length: Math.floor(Math.random() * 10) + 1 }, (_, j) => ({
        phone: `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
        label: ['Spam', 'Scam', 'Robocall', 'Telemarketer', 'Unknown'][j % 5],
        addedDate: subDays(new Date(), Math.floor(Math.random() * 30))
      }))
    });
  }
  
  return subscribers;
};

// Generate admin analytics data
export const generateAdminData = (range = '30d') => {
  const allCalls = generateCallLog(365);
  const calls = filterByDateRange(allCalls, range);
  
  const totalCalls = calls.length;
  const badCalls = calls.filter(c => c.type === 'bad').length;
  const goodCalls = calls.filter(c => c.type === 'good').length;
  
  // By state
  const byState = {};
  states.forEach(state => {
    const stateCalls = calls.filter(c => c.state === state);
    byState[state] = {
      total: stateCalls.length,
      bad: stateCalls.filter(c => c.type === 'bad').length,
      good: stateCalls.filter(c => c.type === 'good').length
    };
  });
  
  // State data for charts
  const stateChartData = Object.entries(byState).map(([state, stats]) => ({
    state,
    ...stats,
    blockRate: ((stats.bad / stats.total) * 100).toFixed(1)
  })).sort((a, b) => b.total - a.total);
  
  // By hour of day
  const byHour = Array.from({ length: 24 }, (_, hour) => {
    const hourCalls = calls.filter(c => c.hour === hour);
    return {
      hour: `${hour}:00`,
      hourNum: hour,
      total: hourCalls.length,
      bad: hourCalls.filter(c => c.type === 'bad').length,
      good: hourCalls.filter(c => c.type === 'good').length
    };
  });
  
  // By day of week
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const byDayOfWeek = Array.from({ length: 7 }, (_, day) => {
    const dayCalls = calls.filter(c => c.dayOfWeek === day);
    return {
      day: dayNames[day],
      dayNum: day,
      total: dayCalls.length,
      bad: dayCalls.filter(c => c.type === 'bad').length,
      good: dayCalls.filter(c => c.type === 'good').length
    };
  });
  
  // By month
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const byMonth = Array.from({ length: 12 }, (_, month) => {
    const monthCalls = calls.filter(c => c.month === month);
    return {
      month: monthNames[month],
      monthNum: month,
      total: monthCalls.length,
      bad: monthCalls.filter(c => c.type === 'bad').length,
      good: monthCalls.filter(c => c.type === 'good').length
    };
  });
  
  // By week of year
  const byWeek = [];
  const weeksInData = [...new Set(calls.map(c => c.weekOfYear))].sort((a, b) => a - b);
  weeksInData.forEach(week => {
    const weekCalls = calls.filter(c => c.weekOfYear === week);
    byWeek.push({
      week: `W${week}`,
      weekNum: week,
      total: weekCalls.length,
      bad: weekCalls.filter(c => c.type === 'bad').length,
      good: weekCalls.filter(c => c.type === 'good').length
    });
  });
  
  const trendData = generateTrendData(calls, range);
  const subscribers = generateSubscriberList();
  
  return {
    totalCalls,
    badCalls,
    goodCalls,
    totalSubscribers: subscribers.length,
    activeSubscribers: subscribers.filter(s => s.status === 'Active').length,
    trialSubscribers: subscribers.filter(s => s.status === 'Trial').length,
    byState,
    stateChartData,
    byHour,
    byDayOfWeek,
    byMonth,
    byWeek,
    trendData,
    recentCalls: calls.slice(0, 50),
    subscribers
  };
};

// User whitelist/blacklist
export const mockUserLists = {
  whitelist: [
    { phone: '+12125551234', label: 'Mom', addedDate: new Date() },
    { phone: '+13105559876', label: 'Doctor Office', addedDate: subDays(new Date(), 5) },
    { phone: '+14155552468', label: 'School', addedDate: subDays(new Date(), 10) }
  ],
  blacklist: [
    { phone: '+18005551111', label: 'Warranty Scam', addedDate: subDays(new Date(), 2) },
    { phone: '+19995552222', label: 'IRS Scam', addedDate: subDays(new Date(), 7) }
  ]
};
