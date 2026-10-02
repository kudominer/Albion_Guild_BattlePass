import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import PrizePoolBanner from './components/PrizePoolBanner';
import BattlePassTrack from './components/BattlePassTrack';
import SpecCalculator from './components/SpecCalculator';
import Leaderboard from './components/Leaderboard';
import OfficerPortal from './components/OfficerPortal';
import RegisterModal from './components/RegisterModal';
import RulesModal from './components/RulesModal';
import { WEAPON_TREES, calculateBattlePassScore } from './data/weapons';
import { Shield, Sparkles, Trophy, BookOpen, UserCheck, Heart } from 'lucide-react';

function MainContent() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('tracker'); // 'tracker' | 'leaderboard' | 'officer'
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  // Compute current user score and tree
  const userTree = WEAPON_TREES.find(t => t.id === user?.registered_tree_id) || WEAPON_TREES[0];
  const userScoreResult = calculateBattlePassScore({
    weaponSpecs: user?.weapon_specs || {},
    shoesHelmSpec: user?.shoes_helm_spec || 0,
    armorSpec: user?.armor_spec || 0
  });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenRules={() => setIsRulesOpen(true)}
        />

        {/* Main Body Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          
          {/* Hero Banner with 600M+ Prize Pool & Special Awards */}
          <PrizePoolBanner
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenRules={() => setIsRulesOpen(true)}
          />

          {/* Personal Battle Pass Progression Visual Track */}
          <BattlePassTrack
            score={userScoreResult.totalPoints}
            multiplier={userTree.multiplier || 1.0}
            userTreeName={userTree.name}
          />

          {/* Active Tab View */}
          {activeTab === 'tracker' && (
            <SpecCalculator
              userTreeId={user?.registered_tree_id}
            />
          )}

          {activeTab === 'leaderboard' && (
            <Leaderboard
              onOpenRegister={() => setIsRegisterOpen(true)}
            />
          )}

          {activeTab === 'officer' && (
            <OfficerPortal />
          )}

        </main>
      </div>

      {/* Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-16 border-t border-albion-border/60 bg-[#080c16] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-albion-gold" />
            <span className="font-game font-bold text-slate-300">GUILD TNC · ALBION ONLINE VIỆT NAM</span>
          </div>
          <p>
            Sự kiện Fame Rush +25% · Lưu hành nội bộ Guild TNC · 100% An toàn Compliance
          </p>
          <div className="text-slate-400">
            Tổng giải: <strong className="text-amber-400">600M+ Silver</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}
