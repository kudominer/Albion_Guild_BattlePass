export const WEAPON_CATEGORIES = {
  HEAL: {
    id: 'heal',
    name: 'Dòng Hồi Máu (Heal)',
    multiplier: 1.2,
    badgeText: 'Ưu đãi x1.2 (+20% Silver)',
    color: 'emerald',
    icon: 'HeartHandshake'
  },
  TANK_SUPPORT: {
    id: 'tank_support',
    name: 'Dòng Tank & Support (Hammer / Mace / Arcane)',
    multiplier: 1.1,
    badgeText: 'Ưu đãi x1.1 (+10% Silver)',
    color: 'sky',
    icon: 'Shield'
  },
  DPS_OTHER: {
    id: 'dps',
    name: 'Dòng DPS & Vũ Khí Khác',
    multiplier: 1.0,
    badgeText: 'Hệ số x1.0 (Tiêu chuẩn 25M)',
    color: 'amber',
    icon: 'Sword'
  }
};

export const WEAPON_TREES = [
  // --- HEAL (x1.2) ---
  {
    id: 'holy',
    name: 'Gậy Thánh (Holy Staff)',
    categoryId: 'heal',
    multiplier: 1.2,
    icon: '✨',
    weapons: [
      { id: 'holy_1h', name: 'One-Handed Holy Staff' },
      { id: 'holy_great', name: 'Great Holy Staff' },
      { id: 'holy_divine', name: 'Divine Staff' },
      { id: 'holy_lifetouch', name: 'Lifetouch Staff' },
      { id: 'holy_fallen', name: 'Fallen Staff' },
      { id: 'holy_redemption', name: 'Redemption Staff' },
      { id: 'holy_hallowfall', name: 'Hallowfall' },
      { id: 'holy_exalted', name: 'Exalted Staff' }
    ]
  },
  {
    id: 'nature',
    name: 'Gậy Tự Nhiên (Nature Staff)',
    categoryId: 'heal',
    multiplier: 1.2,
    icon: '🌿',
    weapons: [
      { id: 'nature_1h', name: 'Nature Staff' },
      { id: 'nature_great', name: 'Great Nature Staff' },
      { id: 'nature_wild', name: 'Wild Staff' },
      { id: 'nature_druidic', name: 'Druidic Staff' },
      { id: 'nature_blight', name: 'Blight Staff' },
      { id: 'nature_rampant', name: 'Rampant Staff' },
      { id: 'nature_ironroot', name: 'Ironroot Staff' },
      { id: 'nature_thornshaper', name: 'Thornshaper' }
    ]
  },

  // --- TANK & SUPPORT (x1.1) ---
  {
    id: 'hammer',
    name: 'Búa Lớn (Hammer)',
    categoryId: 'tank_support',
    multiplier: 1.1,
    icon: '🔨',
    weapons: [
      { id: 'hammer_1h', name: 'Hammer' },
      { id: 'hammer_great', name: 'Great Hammer' },
      { id: 'hammer_pole', name: 'Polehammer' },
      { id: 'hammer_tomb', name: 'Tombhammer' },
      { id: 'hammer_forge', name: 'Forge Hammers' },
      { id: 'hammer_grovekeeper', name: 'Grovekeeper' },
      { id: 'hammer_hand_justice', name: 'Hand of Justice' },
      { id: 'hammer_bedrock', name: 'Bedrock Hammer' }
    ]
  },
  {
    id: 'mace',
    name: 'Chùy (Mace)',
    categoryId: 'tank_support',
    multiplier: 1.1,
    icon: '🛡️',
    weapons: [
      { id: 'mace_1h', name: 'Mace' },
      { id: 'mace_heavy', name: 'Heavy Mace' },
      { id: 'mace_morning_star', name: 'Morning Star' },
      { id: 'mace_bedrock', name: 'Bedrock Mace' },
      { id: 'mace_incubus', name: 'Incubus Mace' },
      { id: 'mace_camlann', name: 'Camlann Mace' },
      { id: 'mace_oathkeepers', name: 'Oathkeepers' },
      { id: 'mace_battle_axe', name: 'Dreadstorm Mace' }
    ]
  },
  {
    id: 'arcane',
    name: 'Gậy Huyền Bí (Arcane Staff)',
    categoryId: 'tank_support',
    multiplier: 1.1,
    icon: '🔮',
    weapons: [
      { id: 'arcane_1h', name: 'Arcane Staff' },
      { id: 'arcane_great', name: 'Great Arcane Staff' },
      { id: 'arcane_enigmatic', name: 'Enigmatic Staff' },
      { id: 'arcane_witchwork', name: 'Witchwork Staff' },
      { id: 'arcane_occult', name: 'Occult Staff' },
      { id: 'arcane_malevolent', name: 'Malevolent Locus' },
      { id: 'arcane_evensong', name: 'Evensong' },
      { id: 'arcane_astral', name: 'Astral Staff' }
    ]
  },

  // --- DPS & OTHER (x1.0) ---
  {
    id: 'axe',
    name: 'Rìu Chiến (Axe)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🪓',
    weapons: [
      { id: 'axe_battle', name: 'Battleaxe' },
      { id: 'axe_greataxe', name: 'Greataxe' },
      { id: 'axe_halberd', name: 'Halberd' },
      { id: 'axe_carrioncaller', name: 'Carrioncaller' },
      { id: 'axe_infernal_scythe', name: 'Infernal Scythe' },
      { id: 'axe_bear_paws', name: 'Bear Paws' },
      { id: 'axe_realmbreaker', name: 'Realmbreaker' },
      { id: 'axe_crystal', name: 'Crystal Axe' }
    ]
  },
  {
    id: 'sword',
    name: 'Kiếm (Sword)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '⚔️',
    weapons: [
      { id: 'sword_broad', name: 'Broadsword' },
      { id: 'sword_claymore', name: 'Claymore' },
      { id: 'sword_dual', name: 'Dual Swords' },
      { id: 'sword_clarent', name: 'Clarent Blade' },
      { id: 'sword_carving', name: 'Carving Sword' },
      { id: 'sword_galatine', name: 'Galatine Pair' },
      { id: 'sword_kingmaker', name: 'Kingmaker' },
      { id: 'sword_infinity', name: 'Infinity Blade' }
    ]
  },
  {
    id: 'bow',
    name: 'Cung Tên (Bow)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🏹',
    weapons: [
      { id: 'bow_standard', name: 'Bow' },
      { id: 'bow_warbow', name: 'Warbow' },
      { id: 'bow_longbow', name: 'Longbow' },
      { id: 'bow_whispering', name: 'Whispering Bow' },
      { id: 'bow_wailing', name: 'Wailing Bow' },
      { id: 'bow_badon', name: 'Bow of Badon' },
      { id: 'bow_mistpiercer', name: 'Mistpiercer' },
      { id: 'bow_crystal', name: 'Crystal Bow' }
    ]
  },
  {
    id: 'crossbow',
    name: 'Nỏ (Crossbow)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🎯',
    weapons: [
      { id: 'xbow_standard', name: 'Crossbow' },
      { id: 'xbow_heavy', name: 'Heavy Crossbow' },
      { id: 'xbow_light', name: 'Light Crossbow' },
      { id: 'xbow_weeping', name: 'Weeping Repeater' },
      { id: 'xbow_boltcasters', name: 'Boltcasters' },
      { id: 'xbow_siegebow', name: 'Siegebow' },
      { id: 'xbow_energy_shaper', name: 'Energy Shaper' },
      { id: 'xbow_crystal', name: 'Crystal Crossbow' }
    ]
  },
  {
    id: 'dagger',
    name: 'Dao Găm (Dagger)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🗡️',
    weapons: [
      { id: 'dagger_1h', name: 'Dagger' },
      { id: 'dagger_pair', name: 'Dagger Pair' },
      { id: 'dagger_claws', name: 'Claws' },
      { id: 'dagger_bloodletter', name: 'Bloodletter' },
      { id: 'dagger_demonfang', name: 'Demonfang' },
      { id: 'dagger_black_hands', name: 'Black Hands' },
      { id: 'dagger_deathgivers', name: 'Deathgivers' },
      { id: 'dagger_bridled_passion', name: 'Bridled Passion' }
    ]
  },
  {
    id: 'curse',
    name: 'Nguyền Rủa (Cursed Staff)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '💀',
    weapons: [
      { id: 'curse_1h', name: 'Cursed Staff' },
      { id: 'curse_great', name: 'Great Cursed Staff' },
      { id: 'curse_demonic', name: 'Demonic Staff' },
      { id: 'curse_lifecurse', name: 'Lifecurse Staff' },
      { id: 'curse_skull', name: 'Cursed Skull' },
      { id: 'curse_damnation', name: 'Damnation Staff' },
      { id: 'curse_shadowcaller', name: 'Shadowcaller' },
      { id: 'curse_phantom', name: 'Phantom Skull' }
    ]
  },
  {
    id: 'fire',
    name: 'Gậy Lửa (Fire Staff)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🔥',
    weapons: [
      { id: 'fire_1h', name: 'Fire Staff' },
      { id: 'fire_great', name: 'Great Fire Staff' },
      { id: 'fire_infernal', name: 'Infernal Staff' },
      { id: 'fire_wildfire', name: 'Wildfire Staff' },
      { id: 'fire_brimstone', name: 'Brimstone Staff' },
      { id: 'fire_blazing', name: 'Blazing Staff' },
      { id: 'fire_dawnsong', name: 'Dawnsong' },
      { id: 'fire_crystal', name: 'Crystal Fire Staff' }
    ]
  },
  {
    id: 'frost',
    name: 'Gậy Băng (Frost Staff)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '❄️',
    weapons: [
      { id: 'frost_1h', name: 'Frost Staff' },
      { id: 'frost_great', name: 'Great Frost Staff' },
      { id: 'frost_glacial', name: 'Glacial Staff' },
      { id: 'frost_hoarfrost', name: 'Hoarfrost Staff' },
      { id: 'frost_icicle', name: 'Icicle Staff' },
      { id: 'frost_permafrost', name: 'Permafrost Prism' },
      { id: 'frost_chillhowl', name: 'Chillhowl' },
      { id: 'frost_arctic', name: 'Arctic Staff' }
    ]
  },
  {
    id: 'spear',
    name: 'Giáo (Spear)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🔱',
    weapons: [
      { id: 'spear_1h', name: 'Spear' },
      { id: 'spear_pike', name: 'Pike' },
      { id: 'spear_glaive', name: 'Glaive' },
      { id: 'spear_heron', name: 'Heron Spear' },
      { id: 'spear_spirithunter', name: 'Spirithunter' },
      { id: 'spear_trinity', name: 'Trinity Spear' },
      { id: 'spear_daybreaker', name: 'Daybreaker' },
      { id: 'spear_rift', name: 'Rift Glaive' }
    ]
  },
  {
    id: 'quarterstaff',
    name: 'Gậy Côn (Quarterstaff)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🥢',
    weapons: [
      { id: 'qs_1h', name: 'Quarterstaff' },
      { id: 'qs_ironclad', name: 'Iron-clad Staff' },
      { id: 'qs_double_bladed', name: 'Double Bladed Staff' },
      { id: 'qs_black_monk', name: 'Black Monk Stave' },
      { id: 'qs_soulscythe', name: 'Soulscythe' },
      { id: 'qs_balance', name: 'Staff of Balance' },
      { id: 'qs_grailseeker', name: 'Grailseeker' },
      { id: 'qs_phantom', name: 'Phantom Staff' }
    ]
  },
  {
    id: 'shapeshifter',
    name: 'Hóa Hình (Shapeshifter)',
    categoryId: 'dps',
    multiplier: 1.0,
    icon: '🐺',
    weapons: [
      { id: 'shape_prowling', name: 'Prowling Staff' },
      { id: 'shape_rootbound', name: 'Rootbound Staff' },
      { id: 'shape_primal', name: 'Primal Staff' },
      { id: 'shape_bloodmoon', name: 'Bloodmoon Staff' },
      { id: 'shape_hellspawn', name: 'Hellspawn Staff' },
      { id: 'shape_earthrune', name: 'Earthrune Staff' },
      { id: 'shape_lightcaller', name: 'Lightcaller' },
      { id: 'shape_awakened', name: 'Awakened Staff' }
    ]
  }
];

// Helper tính toán điểm chuẩn
export function calculateBattlePassScore({
  weaponSpecs = {}, // { weapon_id: specNumber }
  armorSpec = 0,
  shoesHelmSpec = 0
}) {
  let weapon100Count = 0;
  let totalWeaponSpec = 0;

  Object.values(weaponSpecs).forEach(spec => {
    const s = Number(spec) || 0;
    totalWeaponSpec += s;
    if (s >= 100) {
      weapon100Count += 1;
    }
  });

  // 1. Cày Vũ Khí Lẻ (tối đa 48 điểm: 6 điểm / cây 100 spec)
  const weaponPoints = Math.min(8, weapon100Count) * 6;

  // 2. Mốc Tổng Nhánh Vũ Khí (tối đa 32 điểm)
  let branchPoints = 0;
  if (totalWeaponSpec >= 500) branchPoints += 16;
  if (totalWeaponSpec >= 800) branchPoints += 16;

  // 3. Mốc Trang Bị Đi Kèm (tối đa 20 điểm)
  let gearPoints = 0;
  if (Number(shoesHelmSpec) >= 500) gearPoints += 10;
  if (Number(armorSpec) >= 500) gearPoints += 10;

  const totalPoints = Math.min(100, weaponPoints + branchPoints + gearPoints);

  return {
    totalPoints,
    breakdown: {
      weapon100Count,
      weaponPoints,
      totalWeaponSpec,
      branchPoints,
      has500Branch: totalWeaponSpec >= 500,
      has800Branch: totalWeaponSpec >= 800,
      shoesHelmSpec: Number(shoesHelmSpec) || 0,
      has500ShoesHelm: Number(shoesHelmSpec) >= 500,
      armorSpec: Number(armorSpec) || 0,
      has500Armor: Number(armorSpec) >= 500,
      gearPoints
    }
  };
}

// Tính số bạc thực nhận theo hệ số
export function calculateRewardSilver(score, multiplier = 1.0) {
  const BASE_PRIZE = 25000000; // 25M Silver
  const percentage = Math.min(100, Math.max(0, score)) / 100;
  const rawSilver = percentage * BASE_PRIZE * multiplier;
  return Math.round(rawSilver);
}

// Định dạng tiền Silver chuẩn game
export function formatSilver(amount) {
  if (!amount && amount !== 0) return '0 Silver';
  if (amount >= 1000000) {
    return `${(amount / 1000000).toLocaleString('vi-VN', { maximumFractionDigits: 1 })}M Silver`;
  }
  if (amount >= 1000) {
    return `${(amount / 1000).toLocaleString('vi-VN', { maximumFractionDigits: 0 })}k Silver`;
  }
  return `${amount.toLocaleString('vi-VN')} Silver`;
}
