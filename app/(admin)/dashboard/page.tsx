'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Edit2, Trash2, Eye, ArrowRight, BarChart2, PieChart as PieChartIcon, FileText, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for charts
const VIEWS_DATA = [
  { name: 'Mon', views: 1200 },
  { name: 'Tue', views: 1800 },
  { name: 'Wed', views: 1500 },
  { name: 'Thu', views: 2500 },
  { name: 'Fri', views: 3500 },
  { name: 'Sat', views: 2800 },
  { name: 'Sun', views: 3000 },
];

const ENGAGEMENT_DATA = [
  { name: 'Article 1', likes: 140, comments: 32 },
  { name: 'Article 2', likes: 245, comments: 45 },
  { name: 'Article 3', likes: 190, comments: 28 },
  { name: 'Article 4', likes: 310, comments: 51 },
  { name: 'Article 5', likes: 89, comments: 12 },
];

const CONTENT_TYPES = [
  { name: 'Ohio Vibes', value: 35 },
  { name: 'Skibidi Energy', value: 25 },
  { name: 'GYATT Content', value: 20 },
  { name: 'Rizz Articles', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#FF00FF', '#00FFFF', '#39FF14', '#FFFF00', '#9D00FF'];

const ARTICLES = [
  {
    id: '1',
    title: 'WHY SKIBIDI TOILET IS PEAK OHIO VIBES 🫡💀',
    thumbnail: 'https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg',
    date: '2025-05-10',
    views: 3245,
    likes: 789,
    comments: 125,
    status: 'Published',
  },
  {
    id: '2',
    title: 'TOP 10 GYATT MOMENTS IN ROBLOX THAT MADE ME CRY 😭',
    thumbnail: 'https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png',
    date: '2025-05-08',
    views: 2178,
    likes: 421,
    comments: 87,
    status: 'Published',
  },
  {
    id: '3',
    title: 'HOW TO GET MAX RIZZ IN OHIO 🫡💥 (DRAFT)',
    thumbnail: 'https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg',
    date: '2025-05-05',
    views: 0,
    likes: 0,
    comments: 0,
    status: 'Draft',
  },
  {
    id: '4',
    title: 'IS OHIO EVEN REAL? THE CONSPIRACY THEORY EXPLAINED 👁️👄👁️',
    thumbnail: 'https://i.kym-cdn.com/entries/icons/original/000/031/744/cover1.jpg',
    date: '2025-04-30',
    views: 4521,
    likes: 1024,
    comments: 243,
    status: 'Published',
  },
  {
    id: '5',
    title: 'I SPENT 24 HOURS IN A SKIBIDI TOILET (GONE RIZZ) 🚽',
    thumbnail: 'https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg',
    date: '2025-04-22',
    views: 3691,
    likes: 876,
    comments: 159,
    status: 'Published',
  }
];

const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <FloatingElements />
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h1 className="text-3xl md:text-4xl font-pixel">
              <span className="text-brainrot-purple">Rizz</span> <span className="text-brainrot-neon">Dashboard</span>
            </h1>
            
            <Link href="/create" className="skibidi-button">
              Create New Yap 🚀
            </Link>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <div className="bg-white rounded-lg mb-6 p-2">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="overview" className="font-comic">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger value="articles" className="font-comic">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Your Yaps</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="font-comic">
                  <BarChart2 className="mr-2 h-4 w-4" />
                  <span>Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="community" className="font-comic">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Community</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Overview Tab */}
            <TabsContent value="overview">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-brainrot-pink">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500">Total Views</p>
                      <h3 className="text-3xl font-bold mt-1">13,635</h3>
                    </div>
                    <div className="p-2 bg-brainrot-pink/10 rounded-lg">
                      <Eye className="h-6 w-6 text-brainrot-pink" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 font-medium">+24%</span>
                    <span className="text-gray-500 ml-2">from last week</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-brainrot-blue">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500">Total Rizz (Likes)</p>
                      <h3 className="text-3xl font-bold mt-1">3,110</h3>
                    </div>
                    <div className="p-2 bg-brainrot-blue/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-brainrot-blue" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 font-medium">+12%</span>
                    <span className="text-gray-500 ml-2">from last week</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-brainrot-neon">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500">Total Comments</p>
                      <h3 className="text-3xl font-bold mt-1">614</h3>
                    </div>
                    <div className="p-2 bg-brainrot-neon/10 rounded-lg">
                      <Users className="h-6 w-6 text-brainrot-neon" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 font-medium">+18%</span>
                    <span className="text-gray-500 ml-2">from last week</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-brainrot-purple">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500">Published Yaps</p>
                      <h3 className="text-3xl font-bold mt-1">5</h3>
                    </div>
                    <div className="p-2 bg-brainrot-purple/10 rounded-lg">
                      <FileText className="h-6 w-6 text-brainrot-purple" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-500 font-medium">+1</span>
                    <span className="text-gray-500 ml-2">new this week</span>
                  </div>
                </div>
              </div>
              
              {/* Charts and Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-comic">Weekly Views</h3>
                    <div className="bg-brainrot-neon/20 text-black font-bold text-xs py-1 px-3 rounded-full">
                      +15.7%
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={VIEWS_DATA}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#000', 
                            border: '2px solid #FF00FF',
                            borderRadius: '8px',
                            color: '#fff'
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="views"
                          stroke="#FF00FF"
                          strokeWidth={3}
                          dot={{ r: 6, fill: '#FF00FF', stroke: '#000', strokeWidth: 2 }}
                          activeDot={{ r: 8, stroke: '#39FF14', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-comic">Content Breakdown</h3>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={CONTENT_TYPES}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {CONTENT_TYPES.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ 
                            backgroundColor: '#000', 
                            border: '2px solid #39FF14',
                            borderRadius: '8px',
                            color: '#fff'
                          }}
                          formatter={(value) => [`${value}%`, 'Content Type']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              {/* Motivational Meme */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-brainrot-neon relative overflow-hidden">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brainrot-pink">
                    <img 
                      src="https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png" 
                      alt="Motivational Meme" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-comic text-brainrot-purple mb-2">
                      Keep yappin', king, you got that Ohio drip 💪
                    </h3>
                    <p className="text-gray-600">
                      Your brainrot levels are through the roof! Keep creating skibidi content and your rizz will continue to rise fr fr 💀🔥
                    </p>
                  </div>
                </div>
                
                <div className="absolute -bottom-16 -right-16 w-32 h-32 opacity-20">
                  <div className="w-full h-full bg-brainrot-neon rounded-full animate-spin-slow"></div>
                </div>
              </div>
            </TabsContent>
            
            {/* Articles Tab */}
            <TabsContent value="articles">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-xl font-comic text-brainrot-purple">Your Yap Articles</h3>
                  
                  <div className="flex space-x-2">
                    <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brainrot-neon">
                      <option>All Articles</option>
                      <option>Published</option>
                      <option>Drafts</option>
                    </select>
                    
                    <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brainrot-neon">
                      <option>Sort by Date</option>
                      <option>Sort by Views</option>
                      <option>Sort by Rizz</option>
                    </select>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Article
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Views
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rizz
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Comments
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {ARTICLES.map((article) => (
                        <tr key={article.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden">
                                <img src={article.thumbnail} alt={article.title} className="h-10 w-10 object-cover" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                                  {article.title}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {article.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {article.views.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {article.likes.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {article.comments.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              article.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {article.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <button className="p-1 text-gray-600 hover:text-brainrot-blue">
                                <Eye size={18} />
                              </button>
                              <button className="p-1 text-gray-600 hover:text-brainrot-neon">
                                <Edit2 size={18} />
                              </button>
                              <button className="p-1 text-gray-600 hover:text-brainrot-pink">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">5</span> of <span className="font-medium">5</span> entries
                  </div>
                  <div>
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled className="ml-2">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="space-y-6">
                {/* Article Performance Comparison */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-comic text-brainrot-blue">Article Engagement</h3>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ENGAGEMENT_DATA}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#000', 
                            border: '2px solid #00FFFF',
                            borderRadius: '8px',
                            color: '#fff'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="likes" fill="#FF00FF" name="Likes" />
                        <Bar dataKey="comments" fill="#39FF14" name="Comments" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Rizz Leaderboard */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-comic text-brainrot-pink">Rizz Leaderboard</h3>
                    <p className="text-gray-500 text-sm">See how your rizz compares to other yappers</p>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    <div className="p-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-brainrot-neon flex items-center justify-center font-bold text-black">
                        1
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <img 
                            src="https://i.pravatar.cc/150?img=33" 
                            alt="User" 
                            className="w-10 h-10 rounded-full border-2 border-brainrot-pink"
                          />
                          <div className="ml-3">
                            <p className="font-medium">SkibidiRizzler69</p>
                            <p className="text-xs text-gray-500">Total Rizz: 4,521</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-brainrot-pink text-white px-3 py-1 rounded-full text-xs font-bold">
                        RIZZ GOD
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-brainrot-blue flex items-center justify-center font-bold text-black">
                        2
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <img 
                            src="https://i.pravatar.cc/150?img=57" 
                            alt="User" 
                            className="w-10 h-10 rounded-full border-2 border-brainrot-blue"
                          />
                          <div className="ml-3">
                            <p className="font-medium">OhioMaster420</p>
                            <p className="text-xs text-gray-500">Total Rizz: 3,782</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-brainrot-blue text-white px-3 py-1 rounded-full text-xs font-bold">
                        OHIO KING
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center bg-brainrot-yellow/10">
                      <div className="w-8 h-8 rounded-full bg-brainrot-purple flex items-center justify-center font-bold text-white">
                        3
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <img 
                            src="https://i.pravatar.cc/150?img=39" 
                            alt="User" 
                            className="w-10 h-10 rounded-full border-2 border-brainrot-purple"
                          />
                          <div className="ml-3">
                            <p className="font-medium">You</p>
                            <p className="text-xs text-gray-500">Total Rizz: 3,110</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-brainrot-purple text-white px-3 py-1 rounded-full text-xs font-bold">
                        RIZZLER
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
                        4
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <img 
                            src="https://i.pravatar.cc/150?img=44" 
                            alt="User" 
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="ml-3">
                            <p className="font-medium">YappyQueen</p>
                            <p className="text-xs text-gray-500">Total Rizz: 2,845</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                        GYATT MASTER
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
                        5
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <img 
                            src="https://i.pravatar.cc/150?img=12" 
                            alt="User" 
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="ml-3">
                            <p className="font-medium">RizzKidd</p>
                            <p className="text-xs text-gray-500">Total Rizz: 2,213</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                        SKIBIDI FAN
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 text-center">
                    <Button variant="outline" size="sm" className="font-comic">
                      <span>View Full Leaderboard</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Community Tab */}
            <TabsContent value="community">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Brainrot Quiz */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-brainrot-neon">
                    <div className="p-6 bg-gradient-to-r from-brainrot-blue to-brainrot-purple text-white">
                      <h3 className="text-xl font-comic">Are You a Rizzler or a Skibidi? 🤔</h3>
                      <p className="text-sm">Take this quick quiz to discover your true brainrot personality</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h4 className="font-bold">1. When you see a Skibidi Toilet, you:</h4>
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <input type="radio" id="q1a" name="q1" className="mr-2" />
                              <label htmlFor="q1a">Run away screaming 😱</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="q1b" name="q1" className="mr-2" />
                              <label htmlFor="q1b">Take a selfie with it for maximum rizz 📸</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="q1c" name="q1" className="mr-2" />
                              <label htmlFor="q1c">Start doing the skibidi dance immediately 🕺</label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-bold">2. Your favorite Gen Alpha phrase is:</h4>
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <input type="radio" id="q2a" name="q2" className="mr-2" />
                              <label htmlFor="q2a">"fr fr no cap" 💀</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="q2b" name="q2" className="mr-2" />
                              <label htmlFor="q2b">"That's so Ohio" 🫡</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="q2c" name="q2" className="mr-2" />
                              <label htmlFor="q2c">"GYATT!" 😳</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="mt-6 skibidi-button w-full">
                        Get Your Results 🔮
                      </button>
                    </div>
                  </div>
                  
                  {/* Brainrot Battle */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-comic text-brainrot-pink">Brainrot Battle 🥊</h3>
                      <p className="text-gray-500 text-sm">Vote on which article has more rizz</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                        <div className="flex-1 bg-gray-100 p-4 rounded-lg mb-4 md:mb-0 border-2 border-brainrot-blue hover:border-brainrot-neon transition-colors">
                          <img 
                            src="https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg" 
                            alt="Article 1" 
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                          <h4 className="font-bold text-sm">WHY SKIBIDI TOILET IS PEAK OHIO VIBES 🫡💀</h4>
                          <button className="w-full mt-2 p-2 bg-brainrot-blue text-white rounded-lg hover:bg-brainrot-neon hover:text-black transition-colors">
                            Vote This One
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-center font-bold text-2xl">
                          VS
                        </div>
                        
                        <div className="flex-1 bg-gray-100 p-4 rounded-lg mt-4 md:mt-0 border-2 border-brainrot-pink hover:border-brainrot-neon transition-colors">
                          <img 
                            src="https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png" 
                            alt="Article 2" 
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                          <h4 className="font-bold text-sm">TOP 10 GYATT MOMENTS IN ROBLOX THAT MADE ME CRY 😭</h4>
                          <button className="w-full mt-2 p-2 bg-brainrot-pink text-white rounded-lg hover:bg-brainrot-neon hover:text-black transition-colors">
                            Vote This One
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-center">
                        <button className="ohio-button">
                          Skip Battle ⏭️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Profile Card */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-24 bg-gradient-chaos"></div>
                    <div className="px-6 pb-6">
                      <div className="flex justify-center -mt-12">
                        <img 
                          src="https://i.pravatar.cc/150?img=39" 
                          alt="Your Profile" 
                          className="w-24 h-24 rounded-full border-4 border-white"
                        />
                      </div>
                      <div className="text-center mt-2">
                        <h3 className="font-bold text-xl">YourUsername</h3>
                        <p className="text-gray-500">Rizzler Level 3</p>
                      </div>
                      
                      <div className="mt-6 flex justify-center">
                        <Link href="/profile" className="ohio-button">
                          Edit Profile 🖊️
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skibidi Skin Market */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-comic text-brainrot-purple">Skibidi Skin Market 🎨</h3>
                      <p className="text-gray-500 text-sm">Buy custom UI themes with rizz points</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between border-2 border-brainrot-pink">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-brainrot-purple to-brainrot-pink rounded-full"></div>
                            <span className="ml-3 font-medium">Rizzler Neon</span>
                          </div>
                          <button className="px-3 py-1 bg-brainrot-pink text-white rounded-lg text-sm">
                            1200 RP
                          </button>
                        </div>
                        
                        <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between border-2 border-brainrot-blue">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-brainrot-blue to-brainrot-neon rounded-full"></div>
                            <span className="ml-3 font-medium">Ohio Drip</span>
                          </div>
                          <button className="px-3 py-1 bg-brainrot-blue text-white rounded-lg text-sm">
                            1500 RP
                          </button>
                        </div>
                        
                        <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between border-2 border-gray-300">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-brainrot-yellow to-brainrot-orange rounded-full"></div>
                            <span className="ml-3 font-medium">Skibidi Gold</span>
                          </div>
                          <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg text-sm">
                            2000 RP
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-2">Your Rizz Points: 850 RP</p>
                        <button className="text-sm text-brainrot-blue hover:text-brainrot-purple">
                          How to earn more RP?
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Easter Egg Counter */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-center font-comic text-brainrot-neon mb-4">Easter Eggs Found</h3>
                    <div className="flex items-center justify-center text-4xl font-bold">
                      <span>2</span>
                      <span className="text-gray-400 ml-1">/</span>
                      <span className="text-gray-400">10</span>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      Try clicking the yapology.tech logo 10 times...
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboardPage;
