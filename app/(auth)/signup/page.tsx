'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Sparkles, Star, Crown } from 'lucide-react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const SignupPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required, no cap! 📝');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords don\'t match, fix your rizz! 💀');
      setIsLoading(false);
      return;
    }

    if (!agreedToTerms) {
      setError('You gotta agree to the Ohio terms, bestie! 🫡');
      setIsLoading(false);
      return;
    }

   try {
    const hashedPassword = await bcrypt.hash(formData.password, 10);
    const hashedConfirmPassword = await bcrypt.hash(formData.confirmPassword, 10);
    const response = await axios.post('/api/auth/signup', { ...formData, password: hashedPassword, confirmPassword: hashedConfirmPassword });
    console.log(response);

    if (response.status === 200) {
      router.push('/home');
    } else {
      setError(response.data.error);
    }
   } catch (error) {
    console.error(error);
   } finally {
    setIsLoading(false);
   }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-yellow-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl border-4 border-brainrot-pink p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 text-5xl opacity-10 rotate-12">👑</div>
            <div className="absolute bottom-0 left-0 text-4xl opacity-10 -rotate-12">🔥</div>
            <div className="absolute top-1/2 left-0 text-3xl opacity-5">💀</div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-pixel text-brainrot-purple mb-2">
                Join the Ohio Elite! 🫡👑
              </h1>
              <p className="text-gray-600 font-comic">
                Create your rizz account and start yappin' 🗣️
              </p>
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 font-comic">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="username" className="text-sm font-bold text-gray-700 mb-2 block">
                  Username (make it rizzy) 😎
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="SkibidiRizzler2025"
                  className="border-2 border-brainrot-purple focus:border-brainrot-pink transition-colors"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2 block">
                  Email (we won't spam, Ohio honor) 📧
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.name@rizzmail.ohio"
                  className="border-2 border-brainrot-purple focus:border-brainrot-pink transition-colors"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-bold text-gray-700 mb-2 block">
                  Password (keep it skibidi secure) 🔐
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="ultra_secret_rizz_123"
                    className="border-2 border-brainrot-purple focus:border-brainrot-pink transition-colors pr-12"
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

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-bold text-gray-700 mb-2 block">
                  Confirm Password (double check your rizz) ✅
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="ultra_secret_rizz_123"
                    className="border-2 border-brainrot-purple focus:border-brainrot-pink transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brainrot-pink"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm font-comic text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <Link href="#" className="text-brainrot-blue hover:text-brainrot-pink">
                    Terms of Ohio Service
                  </Link>{' '}
                  and understand that my rizz will be protected 🛡️
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full skibidi-button text-lg py-3"
              >
                {isLoading ? (
                  <>
                    <Sparkles size={18} className="mr-2 animate-spin" />
                    Creating your Ohio account...
                  </>
                ) : (
                  <>
                    <Crown size={18} className="mr-2" />
                    Claim Your Rizz! 👑
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 font-comic">
                Already got that Ohio pass?{' '}
                <Link href="/login" className="text-brainrot-purple hover:text-brainrot-pink font-bold">
                  Log in here! 🚪
                </Link>
              </p>
            </div>

            <div className="mt-6 text-center space-y-2">
              <p className="text-xs text-gray-400 font-comic">
                🎉 Welcome bonus: 100 free rizz points upon signup!
              </p>
              <p className="text-xs text-gray-400 font-comic">
                🔒 Your data is safer than the Ohio state secrets
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="bg-brainrot-neon/20 rounded-lg p-4 border-2 border-brainrot-neon">
              <p className="text-sm font-comic text-gray-700">
                <Star className="inline w-4 h-4 mr-1" />
                Join over 420,000 certified Ohio rizzlers!
                <Star className="inline w-4 h-4 ml-1" />
              </p>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default SignupPage;