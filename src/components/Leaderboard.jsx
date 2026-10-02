import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { WEAPON_TREES, calculateBattlePassScore, calculateRewardSilver, formatSilver } from '../data/weapons';
import { Trophy, Crown, Zap, Coins, Search, Filter, CheckCircle, Clock, ExternalLink } from 'lucide-react';

export default function Leaderboard({ onOpenRegister }) {
  const { allMembers, user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState('ALL');

  // Compute calculated scores for all members
  const computedMembers = allMembers.map(member => {
    const tree = WEAPON_TREES.find(t => t.id === member.registered_tree_id) || WEAPON_TREES[0];
    const scoreResult = calculateBattlePassScore({
      weaponSpecs: member.weapon_specs || {},
      shoesHelmSpec: member.shoes_helm_spec || 0,
      armorSpec: member.armor_spec || 0
    });
    const multiplier = tree.multiplier || 1.0;
    const silver = calculateRewardSilver(scoreResult.totalPoints, multiplier);

    return {
      ...member,
      tree,
      score: scoreResult.totalPoints,
      silver,
      multiplier,
      breakdown: scoreResult.breakdown
    };
  });

  // Sắp xếp theo điểm cao nhất -> thời gian nộp sớm nhất
  const sortedMembers = [...computedMembers].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(a.submitted_at || 0) - new Date(b.submitted_at || 0);
  });

  // Filter members
  const filteredMembers = sortedMembers.filter(m => {
    const matchesSearch = (m.ingame_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (m.discord_name || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranchFilter === 'ALL' || m.registered_tree_id === selectedBranchFilter;
    return matchesSearch && matchesBranch;
  });

  // Find Special Prize Winners
  const winner80Points = sortedMembers.find(m => m.score >= 80);
  const winner100Points = sortedMembers.find(m => m.score >= 100);

  // Group branch 50 points first
  const branchFirst50Winners = {};
  WEAPON_TREES.forEach(tree => {
    const first50InTree = sortedMembers.find(m => m.registered_tree_id === tree.id && m.score >= 50);
    if (first50InTree) {
      branchFirst50Winners[tree.id] = first50InTree;
    }
  });

  return (
    <div className="space-y-8">
      
      {/* Top Special Prizes Showcase Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Special 1: 80 Points Winner */}
        <div className="albion-card rounded-2xl p-5 border border-purple-500/60 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-400" />
              80 ĐIỂM SỚM NHẤT
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 text-[10px] font-bold border border-purple-500/40">
              Shadowcaller 5.4
            </span>
          </div>

          {winner80Points ? (
            <div className="flex items-center gap-3 mt-2">
              <img src={winner80Points.avatar_url} alt="" className="w-12 h-12 rounded-xl object-cover border-2 border-purple-400 shadow-lg" />
              <div>
                <div className="text-base font-bold text-white">{winner80Points.ingame_name}</div>
                <div className="text-xs text-purple-300 font-mono font-semibold">
                  Đạt {winner80Points.score}/100đ · {winner80Points.tree.name.split('(')[0]}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-4 text-center text-xs text-slate-400 font-medium">
              Chưa có ai mở khóa mốc 80đ. Hãy là người đầu tiên!
            </div>
          )}
        </div>

        {/* Special 2: 100 Points Winner */}
        <div className="albion-card rounded-2xl p-5 border border-amber-500/60 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Crown className="w-4 h-4 text-amber-400" />
              100 ĐIỂM SỚM NHẤT
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 text-[10px] font-bold border border-amber-500/40">
              Vũ Khí 8.3
            </span>
          </div>

          {winner100Points ? (
            <div className="flex items-center gap-3 mt-2">
              <img src={winner100Points.avatar_url} alt="" className="w-12 h-12 rounded-xl object-cover border-2 border-amber-400 shadow-lg" />
              <div>
                <div className="text-base font-bold text-white">{winner100Points.ingame_name}</div>
                <div className="text-xs text-amber-300 font-mono font-semibold">
                  Đạt {winner100Points.score}/100đ · {winner100Points.tree.name.split('(')[0]}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-4 text-center text-xs text-slate-400 font-medium">
              Chưa có ai mở khóa mốc 100đ. Đua top ngay!
            </div>
          )}
        </div>

        {/* Special 3: 50 Points Branch First */}
        <div className="albion-card rounded-2xl p-5 border border-emerald-500/60 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-emerald-400" />
              50 ĐIỂM ĐẦU TIÊN TỪNG NHÁNH
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
              +5M Silver
            </span>
          </div>

          <div className="text-xs space-y-1 mt-2">
            <div className="text-slate-300 font-semibold">
              Đã trao: <span className="text-emerald-400 font-mono font-bold">{Object.keys(branchFirst50Winners).length} / {WEAPON_TREES.length}</span> nhánh
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {Object.entries(branchFirst50Winners).map(([treeId, member]) => {
                const t = WEAPON_TREES.find(x => x.id === treeId);
                return (
                  <span key={treeId} className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-300">
                    {t?.icon} {member.ingame_name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Main Leaderboard Table Section */}
      <div className="albion-card rounded-2xl p-6 border border-albion-border">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-2xl font-game font-bold text-white flex items-center gap-2">
              <Trophy className="w-6 h-6 text-albion-gold" />
              BẢNG VINH DANH CHIẾN THẦN CÀY FAME TNC
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Xếp hạng theo điểm Battle Pass & Thời gian hoàn thành</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên Ingame / Discord..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#0d1322] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Branch Filter */}
            <select
              value={selectedBranchFilter}
              onChange={(e) => setSelectedBranchFilter(e.target.value)}
              className="px-3 py-2 bg-[#0d1322] border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="ALL">Tất cả nhánh vũ khí</option>
              {WEAPON_TREES.map(t => (
                <option key={t.id} value={t.id}>{t.icon} {t.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-semibold text-[10px] tracking-wider">
                <th className="py-3 px-3">Hạng</th>
                <th className="py-3 px-4">Thành Viên</th>
                <th className="py-3 px-3">Nhánh Vũ Khí</th>
                <th className="py-3 px-3">Hệ Số</th>
                <th className="py-3 px-4 text-center">Điểm Battle Pass</th>
                <th className="py-3 px-4 text-right">Silver Dự Kiến</th>
                <th className="py-3 px-3 text-center">Trạng Thái BQT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredMembers.map((member, index) => {
                const isTop1 = index === 0;
                const isTop2 = index === 1;
                const isTop3 = index === 2;
                const isSelf = user?.id === member.id;

                return (
                  <tr
                    key={member.id}
                    className={`transition-all ${
                      isSelf ? 'bg-amber-500/10 font-medium' : 'hover:bg-slate-800/40'
                    }`}
                  >
                    {/* Rank Badge */}
                    <td className="py-4 px-3">
                      {isTop1 ? (
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 text-slate-950 font-black flex items-center justify-center shadow-gold-glow">
                          1
                        </div>
                      ) : isTop2 ? (
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 text-slate-950 font-black flex items-center justify-center">
                          2
                        </div>
                      ) : isTop3 ? (
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900 text-amber-200 font-black flex items-center justify-center">
                          3
                        </div>
                      ) : (
                        <span className="font-mono text-slate-400 px-2">#{index + 1}</span>
                      )}
                    </td>

                    {/* Member Info */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={member.avatar_url}
                          alt=""
                          className="w-9 h-9 rounded-xl object-cover border border-slate-700"
                        />
                        <div>
                          <div className="font-bold text-white text-sm flex items-center gap-1.5">
                            {member.ingame_name}
                            {isSelf && (
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-bold">
                                BẠN
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400">{member.discord_name}</div>
                        </div>
                      </div>
                    </td>

                    {/* Weapon Branch */}
                    <td className="py-4 px-3">
                      <span className="px-2.5 py-1 rounded-lg bg-[#0d1322] border border-slate-700/80 text-slate-200 font-semibold flex items-center gap-1.5 w-fit">
                        <span>{member.tree.icon}</span>
                        <span>{member.tree.name.split('(')[0]}</span>
                      </span>
                    </td>

                    {/* Multiplier */}
                    <td className="py-4 px-3">
                      <span className={`font-mono font-bold ${
                        member.multiplier > 1.0 ? 'text-emerald-400' : 'text-slate-400'
                      }`}>
                        x{member.multiplier}
                      </span>
                    </td>

                    {/* Score Bar */}
                    <td className="py-4 px-4 text-center">
                      <div className="inline-block w-full max-w-[140px]">
                        <div className="flex justify-between text-[11px] font-mono font-bold mb-1">
                          <span className="text-amber-400">{member.score}đ</span>
                          <span className="text-slate-500">/ 100đ</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full"
                            style={{ width: `${member.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>

                    {/* Silver reward */}
                    <td className="py-4 px-4 text-right">
                      <div className="font-bold font-mono text-sm text-amber-400">
                        {formatSilver(member.silver)}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {member.score}% hạn mức
                      </div>
                    </td>

                    {/* Verification Status */}
                    <td className="py-4 px-3 text-center">
                      {member.status === 'approved' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] font-semibold">
                          <CheckCircle className="w-3 h-3" />
                          Đã Duyệt
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-[10px] font-semibold">
                          <Clock className="w-3 h-3" />
                          Chờ Duyệt
                        </span>
                      )}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
