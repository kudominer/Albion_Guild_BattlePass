import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { WEAPON_TREES, calculateBattlePassScore, calculateRewardSilver, formatSilver } from '../data/weapons';
import { UserCheck, Shield, CheckCircle2, XCircle, ExternalLink, Image as ImageIcon, Award, Search, AlertTriangle } from 'lucide-react';

export default function OfficerPortal() {
  const { allMembers, setMemberStatus, user } = useAuth();
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'all'
  const [selectedProofMember, setSelectedProofMember] = useState(null);

  const pendingMembers = allMembers.filter(m => m.status === 'pending');
  const approvedMembers = allMembers.filter(m => m.status === 'approved');

  // Stats
  const totalPayout = allMembers.reduce((sum, m) => {
    const tree = WEAPON_TREES.find(t => t.id === m.registered_tree_id) || WEAPON_TREES[0];
    const scoreRes = calculateBattlePassScore({
      weaponSpecs: m.weapon_specs || {},
      shoesHelmSpec: m.shoes_helm_spec || 0,
      armorSpec: m.armor_spec || 0
    });
    return sum + calculateRewardSilver(scoreRes.totalPoints, tree.multiplier || 1.0);
  }, 0);

  return (
    <div className="space-y-6">
      
      {/* Officer Summary Stats Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="albion-card p-5 rounded-2xl border border-purple-500/50">
          <div className="text-xs font-bold text-purple-300 uppercase">Thành viên tham gia</div>
          <div className="text-3xl font-black font-mono text-white mt-1">{allMembers.length}</div>
          <div className="text-[11px] text-slate-400 mt-1">
            Đã duyệt: <span className="text-emerald-400 font-bold">{approvedMembers.length}</span> · Chờ duyệt: <span className="text-amber-400 font-bold">{pendingMembers.length}</span>
          </div>
        </div>

        <div className="albion-card p-5 rounded-2xl border border-amber-500/50">
          <div className="text-xs font-bold text-amber-300 uppercase">Tổng Ngân Sách Dự Kiến Trả</div>
          <div className="text-2xl font-black font-mono text-amber-400 mt-1">
            {formatSilver(totalPayout)}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Hạn mức tối đa quỹ: 600M+ Silver</div>
        </div>

        <div className="albion-card p-5 rounded-2xl border border-emerald-500/50">
          <div className="text-xs font-bold text-emerald-300 uppercase">Hạn Mức Đăng Ký</div>
          <div className="text-lg font-bold text-emerald-300 mt-1">Đang Mở (3 Ngày Đầu)</div>
          <div className="text-[11px] text-slate-400 mt-1">Newbie Total Fame &lt; 100M</div>
        </div>

        <div className="albion-card p-5 rounded-2xl border border-rose-500/50">
          <div className="text-xs font-bold text-rose-300 uppercase">Quyền Hạn Quản Trị</div>
          <div className="text-base font-bold text-white mt-1 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-rose-400" />
            {user?.guild_role || 'Officer TNC'}
          </div>
          <div className="text-[11px] text-rose-300/80 mt-1">Toàn quyền duyệt và xác thực minh chứng</div>
        </div>

      </div>

      {/* Main Approval Dashboard */}
      <div className="albion-card rounded-2xl p-6 border border-albion-border">
        
        {/* Tabs: Chờ duyệt vs Tất cả */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'pending'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Yêu Cầu Chờ Duyệt ({pendingMembers.length})
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Toàn Bộ Danh Sách ({allMembers.length})
            </button>
          </div>
        </div>

        {/* Member List Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-semibold text-[10px] tracking-wider">
                <th className="py-3 px-3">Thành Viên</th>
                <th className="py-3 px-3">Nhánh Vũ Khí</th>
                <th className="py-3 px-3">Total Fame Ban Đầu</th>
                <th className="py-3 px-3 text-center">Minh Chứng</th>
                <th className="py-3 px-4 text-center">Điểm Hiện Tại</th>
                <th className="py-3 px-3 text-center">Trạng Thái</th>
                <th className="py-3 px-3 text-right">Thao Tác Duyệt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {(activeTab === 'pending' ? pendingMembers : allMembers).map((member) => {
                const tree = WEAPON_TREES.find(t => t.id === member.registered_tree_id) || WEAPON_TREES[0];
                const scoreRes = calculateBattlePassScore({
                  weaponSpecs: member.weapon_specs || {},
                  shoesHelmSpec: member.shoes_helm_spec || 0,
                  armorSpec: member.armor_spec || 0
                });

                return (
                  <tr key={member.id} className="hover:bg-slate-800/40 transition-all">
                    
                    {/* Member */}
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2.5">
                        <img src={member.avatar_url} alt="" className="w-8 h-8 rounded-lg object-cover border border-slate-700" />
                        <div>
                          <div className="font-bold text-white">{member.ingame_name}</div>
                          <div className="text-[10px] text-slate-400">{member.discord_name}</div>
                        </div>
                      </div>
                    </td>

                    {/* Weapon Tree */}
                    <td className="py-3.5 px-3">
                      <span className="text-slate-200 font-medium flex items-center gap-1">
                        <span>{tree.icon}</span>
                        <span>{tree.name.split('(')[0]}</span>
                      </span>
                    </td>

                    {/* Total Fame */}
                    <td className="py-3.5 px-3 font-mono">
                      <span className={member.total_fame < 100000000 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {(member.total_fame / 1000000).toFixed(1)}M Fame
                      </span>
                      {member.total_fame >= 100000000 && (
                        <span className="block text-[9px] text-rose-300 font-semibold">⚠ &gt;100M (Không hợp lệ)</span>
                      )}
                    </td>

                    {/* Proof Images Modal trigger */}
                    <td className="py-3.5 px-3 text-center">
                      <button
                        onClick={() => setSelectedProofMember(member)}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[11px] font-semibold inline-flex items-center gap-1"
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                        Xem 3 Ảnh
                      </button>
                    </td>

                    {/* Current Score */}
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-amber-400">
                      {scoreRes.totalPoints} / 100đ
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-3 text-center">
                      {member.status === 'approved' ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                          Đã Duyệt
                        </span>
                      ) : member.status === 'rejected' ? (
                        <span className="px-2 py-0.5 rounded-full bg-red-950 text-rose-300 border border-rose-500/40 text-[10px] font-bold">
                          Từ Chối
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                          Chờ Duyệt
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {member.status !== 'approved' && (
                          <button
                            onClick={() => setMemberStatus(member.id, 'approved')}
                            className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1"
                            title="Duyệt hồ sơ hợp lệ"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Duyệt
                          </button>
                        )}
                        {member.status !== 'rejected' && (
                          <button
                            onClick={() => setMemberStatus(member.id, 'rejected')}
                            className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[11px] flex items-center gap-1"
                            title="Từ chối nếu Fame > 100M hoặc thiếu minh chứng"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                            Từ chối
                          </button>
                        )}
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>

      {/* Proof Images Modal */}
      {selectedProofMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-2xl albion-card rounded-2xl p-6 border border-albion-gold">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div>
                <h4 className="text-lg font-bold text-white">Minh Chứng Của {selectedProofMember.ingame_name}</h4>
                <p className="text-xs text-slate-400">Total Fame: {(selectedProofMember.total_fame / 1000000).toFixed(1)}M</p>
              </div>
              <button
                onClick={() => setSelectedProofMember(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2 text-xs">
              <div>
                <span className="font-bold text-amber-300 block mb-1">1. Ảnh Bảng Stat Ingame (Total Fame):</span>
                {selectedProofMember.proof_stat_url ? (
                  <a href={selectedProofMember.proof_stat_url} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5" /> {selectedProofMember.proof_stat_url}
                  </a>
                ) : (
                  <span className="text-slate-500 italic">Chưa cung cấp link</span>
                )}
              </div>

              <div>
                <span className="font-bold text-amber-300 block mb-1">2. Ảnh Destiny Board Nhánh Vũ Khí:</span>
                {selectedProofMember.proof_destiny_url ? (
                  <a href={selectedProofMember.proof_destiny_url} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5" /> {selectedProofMember.proof_destiny_url}
                  </a>
                ) : (
                  <span className="text-slate-500 italic">Chưa cung cấp link</span>
                )}
              </div>

              <div>
                <span className="font-bold text-amber-300 block mb-1">3. Ảnh Spec Quần Áo Các Nhánh:</span>
                {selectedProofMember.proof_armor_url ? (
                  <a href={selectedProofMember.proof_armor_url} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5" /> {selectedProofMember.proof_armor_url}
                  </a>
                ) : (
                  <span className="text-slate-500 italic">Chưa cung cấp link</span>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t border-slate-800 mt-4">
              <button
                onClick={() => {
                  setMemberStatus(selectedProofMember.id, 'approved');
                  setSelectedProofMember(null);
                }}
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs hover:bg-emerald-500"
              >
                Duyệt Hợp Lệ ✓
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
