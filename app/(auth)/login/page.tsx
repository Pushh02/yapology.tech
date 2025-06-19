'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, LogIn, Sparkles } from 'lucide-react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useUser } from '@/contexts/UserContext';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/auth/signin', { email, password });
      console.log(response);
      if (response.status === 200) {
        login(response.data);
        router.push('/home');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-pink-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl border-4 border-brainrot-neon p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 text-6xl opacity-10 rotate-12">🚽</div>
            <div className="absolute bottom-0 left-0 text-4xl opacity-10 -rotate-12">💀</div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-pixel text-brainrot-pink mb-2">
                Welcome Back, Rizzler! 🫡
              </h1>
              <p className="text-gray-600 font-comic">
                Time to log into the Ohio dimension 🔥
              </p>
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 font-comic">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2 block">
                  Email (no cap, we need this) 📧
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.rizz@ohio.com"
                  className="border-2 border-brainrot-blue focus:border-brainrot-pink transition-colors"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-bold text-gray-700 mb-2 block">
                  Password (keep it skibidi) 🔐
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="super_secret_rizz123"
                    className="border-2 border-brainrot-blue focus:border-brainrot-pink transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brainrot-pink"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center font-comic">
                  <input type="checkbox" className="mr-2" />
                  Remember my rizz
                </label>
                <Link href="#" className="text-brainrot-blue hover:text-brainrot-pink font-comic">
                  Forgot password? 💭
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full skibidi-button text-lg py-3"
              >
                {isLoading ? (
                  <>
                    <Sparkles size={18} className="mr-2 animate-spin" />
                    Entering Ohio...
                  </>
                ) : (
                  <>
                    <LogIn size={18} className="mr-2" />
                    Yeet Me In! 🚀
                  </>
                )}
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-600 font-comic">
                New to the Ohio dimension?{' '}
                <Link href="/signup" className="text-brainrot-pink hover:text-brainrot-blue font-bold">
                  Get your rizz card here! 💳
                </Link>
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400 font-comic">
                By logging in, you agree to enter the backrooms of Ohio 🏚️
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 font-comic">
              🔒 Your data is more secure than Ohio's existence
            </p>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default LoginPage;